#!/usr/bin/env node
/**
 * Pemeriksa dokumen — menjaga gaya tulisan dan tautan tetap sehat.
 *
 *   node tools/check-docs.mjs                periksa README.md + plan.txt
 *   node tools/check-docs.mjs FILE.md ...    periksa file tertentu (dipakai self-test)
 *   node tools/check-docs.mjs --install-hook pasang git pre-commit hook (sync + periksa)
 *
 * Lima hal yang ditolak:
 *   1. catatan bintang (\*)      → info penting harus di dalam sel tabel
 *   2. istilah rancu             → "ulangi dari nomor 1", "nomor 1 →", "(bila ada)"
 *   3. daftar pakai bintang "* " → dokumen ini memakai "-"
 *   4. tabel fase tanpa ember    → tiap subjudul berisi "SIKLUS" wajib bertabel
 *                                  "Kocor ke- | Ember | Isi ember"
 *   5. tautan rusak              → anchor internal & tautan file lokal
 */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { installPreCommitHook } from './hooks.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_DOCS = ['README.md', 'plan.txt'];
const ARG_DOCS = process.argv.slice(2).filter((arg) => !arg.startsWith('-'));
const DOCS = ARG_DOCS.length ? ARG_DOCS : DEFAULT_DOCS;
const EMBER_ICONS = ['🟢', '🔵', '🟡', '🔴', '⚪'];
const REQUIRED_TABLE_WORDS = ['kocor', 'ember', 'isi ember'];

/** Aturan berbasis teks: satu regex per aturan. */
const TEXT_RULES = [
  {
    id: 'catatan-bintang',
    re: /\\\*/,
    hint: 'Tulis kondisinya langsung di sel tabel, mis. "Vitaflex 5 g ✅ hanya siklus pertama" — jangan di catatan bintang.',
  },
  {
    id: 'istilah-rancu',
    re: /ulangi dari nomor|nomor 1\s*→|\(bila ada\)/i,
    hint: 'Sebut eksplisit: "ulangi siklus yang sama" atau "ember 1 → ember 2" — kata "nomor" mudah tertukar antara ember dan fase.',
  },
  {
    id: 'bullet-bintang',
    re: /^[ \t]*\* /,
    hint: 'Pakai "-" untuk daftar, agar tidak tertukar dengan penanda catatan.',
  },
];

/** Ubah judul jadi anchor GitHub. */
function slug(heading) {
  return heading
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, '')
    .replace(/\s/g, '-');
}

/**
 * Buang span kode inline (`...`) sebelum aturan teks diuji.
 * Tujuannya: contoh yang sengaja ditulis sebagai kode — mis. tabel yang
 * mendokumentasikan aturan ini sendiri — tidak dihitung sebagai pelanggaran.
 */
function stripInlineCode(line) {
  return line.replace(/`[^`]*`/g, '');
}

function findTextViolations(file, lines) {
  const out = [];
  lines.forEach((line, idx) => {
    const tested = stripInlineCode(line);
    for (const rule of TEXT_RULES) {
      if (rule.re.test(tested)) {
        out.push({ file, line: idx + 1, rule: rule.id, text: line.trim(), hint: rule.hint });
      }
    }
  });
  return out;
}

/** Tiap subjudul yang memuat kata "SIKLUS" wajib punya tabel ember yang jelas. */
function findPhaseTableViolations(file, lines) {
  const out = [];
  let current = null;
  lines.forEach((line, idx) => {
    const heading = line.match(/^### (.+)$/);
    if (heading) {
      current = { name: heading[1].trim(), header: null, dataRows: [] };
      return;
    }
    if (line.startsWith('#')) {
      if (current) out.push(...judgePhaseTable(file, current));
      current = null;
      return;
    }
    if (!current || !line.startsWith('|')) return;

    if (!current.header) {
      current.header = { idx, line };
    } else if (/^\|[\s|:-]+\|$/.test(line)) {
      /* baris pemisah tabel — abaikan */
    } else {
      current.dataRows.push({ idx, line });
    }
  });
  if (current) out.push(...judgePhaseTable(file, current));

  return out;

  function judgePhaseTable(f, sec) {
    const found = [];
    const isCycle = /SIKLUS/i.test(sec.name);
    if (!sec.header) {
      if (isCycle) {
        found.push({
          file: f,
          line: 0,
          rule: 'tabel-fase',            text: `Subjudul "${sec.name}" tidak punya tabel ember`,
            hint: 'Tiap siklus wajib bertabel "Kocor ke- | Ember | Isi ember — untuk 200 polybag".',
        });
      }
      return found;
    }

    const headerText = sec.header.line.toLowerCase();
    const missing = REQUIRED_TABLE_WORDS.filter((word) => !headerText.includes(word));
    if (missing.length) {
      found.push({
        file: f,
        line: sec.header.idx + 1,
        rule: 'tabel-fase',
        text: sec.header.line.trim(),
        hint: `Tabel di "${sec.name}" harus memuat "Kocor ke- | Ember | Isi ember" (kurang: ${missing.join(', ')}).`,
      });
    }

    for (const row of sec.dataRows) {
      if (!EMBER_ICONS.some((icon) => row.line.includes(icon))) {
        found.push({
          file: f,
          line: row.idx + 1,
          rule: 'tabel-fase',
          text: row.line.trim(),
          hint: `Ada baris tabel di "${sec.name}" yang tidak menyebut embernya. Pakai ikon ember (🟢🔵🟡🔴).`,
        });
      }
    }
    return found;
  }
}

function findLinkViolations(file, text) {
  const out = [];
  const anchors = new Set();
  for (const m of text.matchAll(/^#{1,6} (.+)$/gm)) {
    const s = slug(m[1]);
    anchors.add(s);
    anchors.add(s.replace(/^-+|-+$/g, ''));
  }

  const lines = text.split('\n');
  lines.forEach((line, idx) => {
    for (const m of line.matchAll(/\]\(([^)\s]+)\)/g)) {
      const target = m[1];
      if (/^https?:/i.test(target) || target.startsWith('mailto:')) continue;

      if (target.startsWith('#')) {
        if (!anchors.has(target.slice(1))) {
          out.push({
            file,
            line: idx + 1,
            rule: 'tautan-rusak',
            text: target,
            hint: 'Anchor ini tidak cocok dengan judul mana pun. Cek ejaan judulnya.',
          });
        }
        continue;
      }

      const clean = target.split('#')[0];
      if (!clean) continue;
      // Abaikan placeholder/jalur absolut yang memang bukan file dokumen.
      if (/^(<|\/|[A-Za-z]:)/.test(clean)) continue;
      if (!existsSync(resolve(ROOT, clean))) {
        out.push({
          file,
          line: idx + 1,
          rule: 'tautan-rusak',
          text: target,
          hint: `File "${clean}" tidak ada di repo.`,
        });
      }
    }
  });

  return out;
}

function main() {
  const findings = [];
  const files = [];
  for (const doc of DOCS) {
    const path = resolve(ROOT, doc);
    files.push(doc);
    if (!existsSync(path)) {
      findings.push({
        file: doc,
        line: 0,
        rule: 'file-hilang',
        text: doc,
        hint: 'Dokumen wajib ada.',
      });
      continue;
    }
    const text = readFileSync(path, 'utf8');
    const lines = text.split('\n');
    findings.push(...findTextViolations(doc, lines));
    findings.push(...findPhaseTableViolations(doc, lines));
    findings.push(...findLinkViolations(doc, text));
  }

  if (!findings.length) {
    console.log(`✅ Dokumen bersih — ${files.join(' & ')} lolos semua pemeriksaan.`);
    for (const rule of [...TEXT_RULES.map((r) => r.id), 'tabel-fase', 'tautan-rusak']) {
      console.log(`   · ${rule}: 0 temuan`);
    }
    return;
  }

  const hints = new Map();
  for (const f of findings) {
    const key = `${f.file}:${f.rule}`;
    if (!hints.has(key)) hints.set(key, f);
  }

  console.error(`❌ ${findings.length} temuan pada dokumen:\n`);
  for (const [key, f] of hints) {
    console.error(`  ${key}`);
    for (const item of findings.filter((x) => `${x.file}:${x.rule}` === key)) {
      const where = item.line ? `baris ${item.line}` : 'struktur';
      console.error(`    • ${where}: ${item.text}`);
    }
    console.error(`    → ${f.hint}\n`);
  }
  process.exit(1);
}

if (process.argv.includes('--install-hook')) {
  try {
    console.log(`✅ pre-commit hook terpasang: ${installPreCommitHook(ROOT)}`);
  } catch (err) {
    console.error(`❌ ${err.message}`);
    process.exit(1);
  }
  process.exit(0);
}

try {
  main();
} catch (err) {
  console.error(`❌ ${err.message}`);
  process.exit(1);
}

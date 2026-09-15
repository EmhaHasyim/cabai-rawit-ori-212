#!/usr/bin/env node
/**
 * Uji mandiri pemeriksa dokumen.
 *
 * Memastikan tools/check-docs.mjs benar-benar MENANGKAP setiap jenis
 * pelanggaran (bukan cuma mengklaim), lalu memastikan dokumen asli lolos.
 *
 *   node tools/self-test-docs.mjs
 *
 * Fixture ditulis ke file sementara di root repo, lalu dihapus lagi —
 * README.md dan plan.txt tidak pernah disentuh.
 */
import { writeFileSync, unlinkSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const FIXTURE = '.docs-selftest.md';

/** Fixture sengaja berisi satu pelanggaran untuk tiap aturan. */
const FIXTURE_CONTENT = [
  '# Fixture uji gaya dokumen',
  '',
  '## Bagian Uji',
  '',
  '\\* Vitaflex hanya di siklus pertama.',
  '',
  'Kocor: ulangi dari nomor 1 dan Vitaflex (bila ada).',
  '',
  '* bullet bintang',
  '',
  '### 7.9 SIKLUS UJI',
  '',
  '| # | Ember | Bahan |',
  '|---|---|---|',
  '| 1 | Kalsium | CN-G 32 g |',
  '',
  '[file hilang](tidak-ada.txt) dan [anchor palsu](#bukan-ada)',
  '',
].join('\n');

const EXPECTED = [
  'catatan-bintang',
  'istilah-rancu',
  'bullet-bintang',
  'tabel-fase',
  'tautan-rusak',
];

/** Fixture kedua: contoh yang sengaja ditulis sebagai kode TIDAK boleh ditolak. */
const ALLOWED_FIXTURE = [
  '# Fixture contoh dalam kode',
  '',
  '## Bagian Uji',
  '',
  'Contoh redaksi yang ditolak: `ulangi dari nomor 1`, `(bila ada)`.',
  '',
  'Contoh penanda catatan lama: `\\* catatan kaki`.',
  '',
].join('\n');
const ALLOWED_FIXTURE_FILE = '.docs-selftest-ok.md';

function runChecker(args) {
  try {
    const stdout = execFileSync(process.execPath, [resolve(ROOT, 'tools/check-docs.mjs'), ...args], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return { status: 0, stdout, stderr: '' };
  } catch (err) {
    return { status: err.status ?? 1, stdout: err.stdout ?? '', stderr: err.stderr ?? '' };
  }
}

const results = [];
let failed = 0;

// ── 1. Fixture harus MEMBUAT pemeriksa gagal, dengan semua aturan terdeteksi ──
writeFileSync(resolve(ROOT, FIXTURE), FIXTURE_CONTENT);
try {
  const run = runChecker([FIXTURE]);
  const detected = new Set([...`${run.stdout}${run.stderr}`.matchAll(/docs-selftest\.md:([a-z-]+)/g)].map((m) => m[1]));

  const statusOk = run.status === 1;
  results.push({
    name: 'fixture pelanggaran ditolak (exit 1)',
    pass: statusOk,
    detail: `exit=${run.status}`,
  });
  if (!statusOk) failed++;

  for (const rule of EXPECTED) {
    const pass = detected.has(rule);
    results.push({ name: `aturan terdeteksi: ${rule}`, pass, detail: pass ? 'ya' : 'TIDAK terdeteksi' });
    if (!pass) failed++;
  }
} finally {
  if (existsSync(resolve(ROOT, FIXTURE))) unlinkSync(resolve(ROOT, FIXTURE));
}

// ── 2. Contoh di dalam kode tidak boleh dianggap pelanggaran ──
writeFileSync(resolve(ROOT, ALLOWED_FIXTURE_FILE), ALLOWED_FIXTURE);
try {
  const run = runChecker([ALLOWED_FIXTURE_FILE]);
  const pass = run.status === 0;
  results.push({
    name: 'contoh dalam backtick dimaafkan',
    pass,
    detail: pass ? 'tidak ditolak' : 'salah ditolak',
  });
  if (!pass) {
    failed++;
    console.error(run.stderr);
  }
} finally {
  if (existsSync(resolve(ROOT, ALLOWED_FIXTURE_FILE))) unlinkSync(resolve(ROOT, ALLOWED_FIXTURE_FILE));
}

// ── 3. Dokumen asli harus lolos ──
const real = runChecker([]);
const realOk = real.status === 0;
results.push({
  name: 'README.md & plan.txt lolos pemeriksaan',
  pass: realOk,
  detail: realOk ? 'bersih' : 'ada temuan',
});
if (!realOk) {
  failed++;
  console.error(real.stderr);
}

// ── Laporan ──
const pad = Math.max(...results.map((r) => r.name.length));
for (const r of results) {
  console.log(`${r.pass ? '✅' : '❌'} ${r.name.padEnd(pad)}  ${r.detail}`);
}
console.log(
  failed
    ? `\n❌ Uji mandiri GAGAL: ${failed} dari ${results.length} pemeriksaan tidak lolos.`
    : `\n✅ Uji mandiri lolos: ${results.length}/${results.length} pemeriksaan.`
);
process.exit(failed ? 1 : 0);

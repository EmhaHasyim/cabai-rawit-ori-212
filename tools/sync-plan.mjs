#!/usr/bin/env node
/**
 * Penjaga sinkronisasi dokumen.
 *
 *   SUMBER TUNGGAL = README.md
 *   plan.txt       = salinan teks polos yang DIBUAT OTOMATIS dari README.md
 *
 * Pakai:
 *   node tools/sync-plan.mjs                 tulis ulang plan.txt dari README.md
 *   node tools/sync-plan.mjs --check         hanya cek; exit 1 kalau tidak sinkron (untuk CI)
 *   node tools/sync-plan.mjs --install-hook  pasang git pre-commit hook (sekali per clone)
 */
import { readFileSync, writeFileSync, chmodSync, existsSync, statSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = resolve(ROOT, 'README.md');
const OUT = resolve(ROOT, 'plan.txt');

const SIGN = 'Salinan teks polos dari README.md';

const args = process.argv.slice(2);
const CHECK = args.includes('--check');
const INSTALL_HOOK = args.includes('--install-hook');

/** Bikin isi plan.txt: README.md apa adanya + banner penanda di bawah subjudul. */
function buildPlanText() {
  const src = readFileSync(SRC, 'utf8');

  if (src.includes(SIGN)) {
    throw new Error(
      'README.md memuat banner plan.txt. Sumber tunggal adalah README.md — hapus banner itu dari README.md.'
    );
  }

  const eol = src.includes('\r\n') ? '\r' : '';
  const lines = src.split('\n');

  // Selipkan banner tepat di bawah baris subjudul "### ..." yang pertama.
  let after = lines.findIndex((line, i) => i < 6 && line.startsWith('### '));
  if (after === -1) after = 0;

  const banner = [
    `> 📖 **${SIGN}** — dibuat otomatis, **jangan diedit langsung**.`,
    '> Ubah [`README.md`](README.md) dulu, lalu jalankan `node tools/sync-plan.mjs`.',
  ].map((line) => line + eol);

  lines.splice(after + 1, 0, eol, ...banner);
  return lines.join('\n');
}

function installHook() {
  const hookPath = resolve(ROOT, '.git/hooks/pre-commit');
  if (!existsSync(dirname(hookPath))) {
    throw new Error('Folder .git/hooks tidak ada. Jalankan `git init` dulu.');
  }
  const script = `#!/bin/sh
# Dipasang oleh: node tools/sync-plan.mjs --install-hook
# Tujuan: plan.txt selalu sinkron dengan README.md (sumber tunggal) sebelum commit.
command -v node >/dev/null 2>&1 || exit 0
node tools/sync-plan.mjs || exit 1
git add plan.txt
`;
  writeFileSync(hookPath, script);
  try {
    chmodSync(hookPath, 0o755);
  } catch {
    /* Windows: abaikan */
  }
  console.log('✅ pre-commit hook terpasang: .git/hooks/pre-commit');
}

function main() {
  if (INSTALL_HOOK) return installHook();

  const next = buildPlanText();
  const current = existsSync(OUT) ? readFileSync(OUT, 'utf8') : null;

  if (current === next) {
    console.log('✅ plan.txt sudah sinkron dengan README.md — tidak ada perubahan.');
    return;
  }

  if (CHECK) {
    console.error(
      '❌ plan.txt TIDAK sinkron dengan README.md.\n' +
        '   Jalankan: node tools/sync-plan.mjs'
    );
    process.exit(1);
  }

  writeFileSync(OUT, next);
  const lines = next.split('\n').length;
  const size = statSync(OUT).size;
  console.log(
    `✏️  plan.txt ditulis ulang dari README.md — ${lines} baris, ${(size / 1024).toFixed(1)} KB.`
  );
}

try {
  main();
} catch (err) {
  console.error(`❌ ${err.message}`);
  process.exit(1);
}

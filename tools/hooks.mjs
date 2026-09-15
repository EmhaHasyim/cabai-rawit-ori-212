import { existsSync, writeFileSync, chmodSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * Isi pre-commit hook — dipakai bersama oleh tools/sync-plan.mjs dan
 * tools/check-docs.mjs supaya keduanya memasang hook yang sama.
 *
 *  1. plan.txt disamakan dulu dengan README.md (sumber tunggal)
 *  2. gaya tulisan & tautan dokumen diperiksa
 */
export const HOOK_SCRIPT = `#!/bin/sh
# Dipasang oleh: node tools/sync-plan.mjs --install-hook
#            atau node tools/check-docs.mjs --install-hook
# 1) plan.txt selalu disamakan dengan README.md (sumber tunggal)
# 2) gaya tulisan & tautan dokumen selalu diperiksa
command -v node >/dev/null 2>&1 || exit 0
node tools/sync-plan.mjs || exit 1
git add plan.txt
node tools/check-docs.mjs || exit 1
`;

/** Pasang (atau perbarui) hook ke .git/hooks/pre-commit pada repo root. */
export function installPreCommitHook(root) {
  const hookDir = resolve(root, '.git/hooks');
  if (!existsSync(hookDir)) {
    throw new Error('Folder .git/hooks tidak ada. Jalankan `git init` dulu.');
  }
  const hookPath = resolve(hookDir, 'pre-commit');
  writeFileSync(hookPath, HOOK_SCRIPT);
  try {
    chmodSync(hookPath, 0o755);
  } catch {
    /* Windows: abaikan */
  }
  return hookPath;
}

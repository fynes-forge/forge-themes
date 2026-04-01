/**
 * Fynes Forge VS Code Theme Extension
 * ─────────────────────────────────────
 * Generator entry point.
 * Run:  npx ts-node src/generate.ts
 *
 * Outputs one *-color-theme.json per theme into ./themes/
 */

import * as fs from 'fs';
import * as path from 'path';

import { forge }       from './themes/forge';
import { dayforge }    from './themes/dayforge';
import { hearthforge } from './themes/hearthforge';
import { coldForge }   from './themes/cold-forge';
import type { ThemeDefinition } from './types';

// ── All themes registered here ──────────────────────────────────────────
const themes: Array<{ def: ThemeDefinition; filename: string }> = [
  { def: forge,       filename: 'forge-color-theme.json'       },
  { def: dayforge,    filename: 'dayforge-color-theme.json'    },
  { def: hearthforge, filename: 'hearthforge-color-theme.json' },
  { def: coldForge,   filename: 'cold-forge-color-theme.json'  },
];

// ── Output directory ────────────────────────────────────────────────────
const outDir = path.join(__dirname, '..', 'themes');
fs.mkdirSync(outDir, { recursive: true });

// ── Generate ────────────────────────────────────────────────────────────
for (const { def, filename } of themes) {
  const outPath = path.join(outDir, filename);
  fs.writeFileSync(outPath, JSON.stringify(def, null, 2), 'utf8');
  console.log(`✔  Generated: themes/${filename}  (${def.type})`);
}

console.log('\n🔨  Forged all themes successfully.\n');

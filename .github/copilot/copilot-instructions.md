# GitHub Copilot Instructions

> These instructions apply to all Copilot interactions in this repository.

---

## Organisation & Project

You are assisting with a **Fynes Forge** project. Fynes Forge is the open source engineering organisation of Tom Fynes, a Senior Data Engineer. This repository is **Forge Themes** — a VS Code colour theme extension built in TypeScript, with all themes generated from a single brand palette source of truth.

Apply the conventions in `AGENTS.md` at all times unless explicitly overridden in a specific file or comment.

---

## Code Style

- Write **TypeScript 5+** — use modern syntax (`satisfies`, `const` type parameters, etc.) where appropriate
- Always include **type annotations** on function signatures and exported values
- Use **JSDoc comments** for all public functions, types, and exported constants
- Format with **Prettier** conventions — 2 space indent, single quotes, trailing commas
- Prefer **explicit and readable** over clever and compact

### Good example

```typescript
/**
 * Converts a hex colour string to an RGBA hex string with an alpha channel.
 *
 * @param hex - A 6-character hex colour string (e.g. `#B7C3F3`)
 * @param opacity - Opacity value between 0 and 1
 * @returns Hex string with two-character alpha suffix (e.g. `#B7C3F380`)
 */
export function alpha(hex: string, opacity: number): string {
  const clamped = Math.max(0, Math.min(1, opacity));
  const alphaByte = Math.round(clamped * 255)
    .toString(16)
    .padStart(2, '0')
    .toUpperCase();
  return `${hex}${alphaByte}`;
}
```

### Avoid

```typescript
// No types, no doc, magic numbers
export const a = (h, o) => h + Math.round(o * 255).toString(16).padStart(2, '0');
```

---

## Theme Authoring

When working on theme files in `src/themes/`:

- **Never edit `themes/*.json` directly** — all changes go in the TypeScript source, then run `npm run generate`
- All colour values must reference **`brand`** from `src/palette.ts` — do not hardcode hex strings in theme files
- Use the **`alpha()`** helper for any colour that needs opacity — do not manually append hex alpha bytes
- Each theme export must conform to the **`ThemeDefinition`** interface from `src/types.ts`
- When adding a new theme, register it in both `src/generate.ts` and `src/index.ts`, and add a corresponding entry to the `contributes.themes` array in `package.json`
- Theme names must follow the established naming pattern — forge-themed, single or two-word, no generic terms like "dark" or "light" as standalone names

---

## What Copilot Should Not Do

- Do not hardcode hex colour values in theme files — always use `brand.*` or `alpha(brand.*, n)`
- Do not edit files in `themes/` directly — these are generated artefacts
- Do not add new dependencies without a clear reason — this is a zero-runtime-dependency project
- Do not use `any` types — use proper `ThemeDefinition`, `TokenColor`, and `WorkbenchColors` types
- Do not leave `// TODO` comments in generated code — complete the implementation
- Do not suggest changes to `package.json` `contributes.themes` without also updating `src/generate.ts` and `src/index.ts`

---

## Commit Messages

Always suggest commit messages in Conventional Commits format:

```
feat(scope): short description in imperative mood

Optional longer body explaining why, not what.

Closes #<issue>
```

Common scopes for this repo: `theme`, `palette`, `generator`, `ci`, `icon`, `docs`
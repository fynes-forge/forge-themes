# Changelog

All notable changes to this project are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [1.0.0] - 2026-04-01

### Added
- **Four Core Theme Variants**:
  - `Forge`: The canonical dark brand experience.
  - `Dayforge`: High-readability light theme.
  - `Hearthforge`: Warm, charred-brown dark variant.
  - `Cold Forge`: High-contrast, near-black dark theme.
- **TypeScript-Driven Build System**: Implemented a generator script (`src/generate.ts`) to compile themes from a central brand palette to VS Code JSON.
- **Centralized Palette**: Unified color tokens in `src/palette.ts` for consistent brand identity across all variants.
- **VSIX Packaging**: Added scripts to bundle the extension for local installation or Marketplace deployment.
- **Documentation**: Comprehensive README, contributing guidelines, and brand palette definitions.

---

## [Unreleased]

### Added
- Initial repository setup from `forge-template`

---
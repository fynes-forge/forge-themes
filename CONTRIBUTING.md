# Contributing to Fynes Forge Projects

Thank you for your interest in contributing to our TypeScript and VS Code projects. This guide covers everything you need to know to open a high-quality pull request.

---

## Code of Conduct

Be respectful, constructive, and direct. Fynes Forge projects follow a simple standard: treat contributors the way you'd want to be treated on a professional engineering team.

---

## How to Contribute

### Reporting a Bug

1. Search [existing issues](../../issues) to avoid duplicates.
2. Open a new issue using the **Bug Report** template.
3. Include: what you expected, what happened, steps to reproduce, and your environment (VS Code version, OS, and Extension version).

### Suggesting a Feature

1. Open an issue using the **Feature Request** template.
2. Describe the problem you're solving, not just the solution.
3. Wait for a maintainer to approve the direction before opening a PR.

### Submitting a Pull Request

1. Fork the repository and create a branch from `main`.
2. Name your branch descriptively: `fix/webview-memory-leak` or `feat/add-lsp-support`.
3. Make your changes — keep commits small and focused.
4. Ensure all checks pass locally before pushing (see **Code Standards** below).
5. Open a PR using the provided template.
6. A maintainer will review within a reasonable timeframe.

---

## Branch Naming

| Type | Pattern | Example |
|---|---|---|
| Feature | `feat/<description>` | `feat/explorer-view-provider` |
| Bug fix | `fix/<description>` | `fix/syntax-highlighting-edge-case` |
| Documentation | `docs/<description>` | `docs/update-extension-api-usage` |
| Chore | `chore/<description>` | `chore/update-vscode-engine` |
| Release | `release/<version>` | `release/1.2.0` |

---

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```text
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

- **Types**: feat, fix, docs, style, refactor, test, chore


## Examples:

```Plaintext
feat(ui): add sidebar icon for Forge dashboard
fix(parser): resolve infinite loop in TS configuration loading
docs(readme): add troubleshooting section for Linux users
chore(deps): bump @types/vscode to 1.85.0
```

## Development Workflow

### Setup

```Bash
npm install        # Install dependencies
npm run compile   # Initial TypeScript compilation
```

### Running & Debugging (VS Code) 

- Open the project folder in VS Code.

 - Press F5 to open a new Extension Development Host window.

Your changes will be active in that new window.

Use the Debug Console in the primary window to view logs and errors.


## Code Standards

All contributions must pass the following checks before a PR can be merged:

```Bash
npm run lint       # ESLint check (Linting)
npm run format     # Prettier check (Formatting)
npm run check-types # TypeScript compiler check (Type Checking)
npm test          
```

## Run unit and integration tests (Vitest/Jest)

### Key principles:

- **Strict Typing**: Avoid using any. Use interfaces and types to define data structures.

- **Async/Await**: Prefer async/await over raw Promises or callbacks.

- **Disposables**: Ensure any listeners or timers are added to context.subscriptions to prevent memory leaks.

- **UI Consistency**: Follow the VS Code UX Guidelines.

- **Tests**: Unit tests are required for logic; integration tests are required for VS Code API interactions.


### Pull Request Standards

PRs should be small and focused — one logical change per PR.

Reference the issue your PR closes: Closes #42.

Fill in the PR template completely.

Visuals: For UI changes, a GIF or screenshot of the change in the Extension Development Host is highly appreciated.

Versioning
This project follows Semantic Versioning:

`MAJOR` — breaking changes or significant engine bumps.

`MINOR` — new features or API additions.

`PATCH` — bug fixes and dependency updates.

Changes are documented in CHANGELOG.md.

Licence
By contributing, you agree that your contributions will be licensed under the same MIT Licence as the project.
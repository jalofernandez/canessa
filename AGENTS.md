# Agent Guidelines

## Project

- Project: Canessa, a website for a local pet grooming business.
- These instructions apply exclusively to the canessa repository.
- Current stack in this migration worktree: React 18, TypeScript, pnpm, Vite, React Router prerendering and Tailwind 4. Legacy Vue stays in the original checkout.
- Review `README.md`, `package.json`, `react-router.config.ts`, `firebase.json` and `MIGRATION.md` before changes.
- Work exclusively within this repository.
- Use Node from `.nvmrc` and pnpm from `packageManager`. Run pnpm lint, compile, test, check-format and build; run browser/Hosting checks for route or UI changes.
- Report missing checks explicitly; never report them as passed.

## Workflow

- Briefly explain the approach before making major changes.
- Follow existing conventions and stay within the requested scope.
- Preserve local user changes.
- Do not expose secrets or include `.env` files in commits.

## Migration to React

- Migrate only the parts explicitly agreed upon.
- Before starting, document affected routes, data, and integrations.
- Define the React framework and rendering strategy based on the project's SEO, content, and hosting requirements.
- Maintain URLs, content, metadata, and behavior unless the task explicitly includes changing them.
- Preserve responsive design and accessibility.
- Work on a dedicated branch and break the migration down into verifiable stages; keep a reference to the previous version.
- Document progress and decisions in `MIGRATION.md`.

## Validation

- Use the package manager and scripts defined in the repo.
- Run the build and any available checks.
- Add relevant tests for flows that might break.
- Review affected pages in the browser on both mobile and desktop.
- Report what was verified, along with any errors and limitations.

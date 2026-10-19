# Elsa

A small browser game about a rabbit, built step by step with React, TypeScript and PixiJS.

**Status:** first playable room. Move with the arrow keys, collect the yellow item, reach the blue exit, and press R to restart during play or after winning.

## First playable demo

The current demo uses movement in two axes, normalized diagonal speed, rectangular overlap checks, and screen boundaries. The exit grants victory only after the item is collected. Winning stops movement; restarting restores the player, item, input state, and victory message.

Next: a small start/restart menu, followed by a level editor and JSON import/export. The existing roadmap describes broader ideas; this first milestone deliberately keeps the room small.

## Stack

- React 19: menus, instructions and the HUD.
- TypeScript: game state, input and gameplay rules.
- PixiJS 8: the scene, sprites and animation.
- Vite: development server and production build.
- ESLint, strict TypeScript and GitHub Actions: initial quality checks.

Automated gameplay tests are not implemented yet. Later milestones include level storage with Python/FastAPI, SQLAlchemy and PostgreSQL. Remotion is a separate future project.

## Run locally

Use Node.js 22; the development version is recorded in `.nvmrc`.

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

`build` checks TypeScript before creating `dist`. GitHub Actions runs lint and build on pushes and pull requests to `main`; it does not deploy the game.

## Learning and development

The game is implemented by the learner in small, reviewed changes, with OpenAI Codex supporting explanations, planning, review and selected setup tasks. Learning covers the full delivery process: requirements, technical decisions, Git, CI/CD, testing, deployment and operating the application. These are learning goals, not a claim that every capability is already implemented.

The initial repository and CI setup were prepared with Codex. Subsequent lessons include explaining that setup, inspecting proposed changes and verifying behavior. Decisions, AI assistance and evidence of completed work are recorded alongside the lessons.

- [Implementation plan and first lesson](docs/PLAN.md) — Russian.
- [Git, review and commit workflow](docs/WORKFLOW.md) — Russian.
- [Engineering process, Codex workflow and first CI lesson](docs/ENGINEERING.md) — Russian.
- [Learning log](docs/LEARNING_LOG.md) — completed work and questions still to practise.

## Artwork

The current player uses the [PixiJS example bunny](https://pixijs.com/assets/bunny.png), loaded from that URL at runtime. An internet connection is needed to load it; it is a placeholder, not the custom Elsa artwork. The repository still contains unused Vite starter graphics.

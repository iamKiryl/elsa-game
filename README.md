# Elsa

A small browser platformer about a white rabbit, built step by step with React, TypeScript and PixiJS.

**Status:** project setup and learning roadmap. The app currently displays a heading; gameplay and the rabbit sprite are the next milestones.

## First playable demo

One room, one rabbit, a few platforms and three collectible star shards. Move, jump, collect the shards, reach the exit and restart. Once this works reliably, expand into short roguelite runs with one enemy type and a small selection of upgrades.

## Stack

- React 19: menus, instructions and the HUD.
- TypeScript: game state, input and gameplay rules.
- PixiJS 8: the scene, sprites and animation.
- Vite: development server and production build.
- ESLint, strict TypeScript and GitHub Actions: initial quality checks.

Vitest and Playwright will be introduced alongside testable mechanics and a playable demo. A Python/FastAPI service for run results is an optional later milestone. Remotion is a separate future project.

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

The game is implemented by the learner in small, reviewed changes. An assistant helps with explanations, review and project setup. Each milestone pairs a visible game feature with a focused engineering topic.

- [Implementation plan and first lesson](docs/PLAN.md) — Russian.
- [Git, review and commit workflow](docs/WORKFLOW.md) — Russian.

## Artwork

Elsa's visual reference is the owner's existing custom rabbit pet and GitHub avatar. The pet artwork is not included in this setup; record the source and any applicable usage terms when adding game assets. The current repository still contains unused Vite starter graphics.

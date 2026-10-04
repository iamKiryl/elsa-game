# Working agreement

- This is a learning project. Kiryl writes gameplay code; the assistant explains one concept, assigns a small step and reviews the result. Do not implement a full lesson or several mechanics unless explicitly asked.
- Read `docs/PLAN.md` and `docs/WORKFLOW.md` before changing the scope or assigning the next lesson. Inspect current work before suggesting edits.
- Discuss lessons in Russian. Prefer English identifiers, commit messages and the public README.
- Keep the first milestone to a single playable room. Remotion belongs to a separate future project.
- Keep React UI, PixiJS rendering and gameplay rules distinct as the implementation grows. Avoid speculative architecture and dependencies.
- For code or configuration changes, run `npm run lint` and `npm run build`. Add focused behavioral tests with the corresponding mechanics; do not add placeholder tests for setup or documentation.
- Preserve the learner's work. During review, explain actionable findings and allow the learner to implement fixes unless they ask for direct edits.

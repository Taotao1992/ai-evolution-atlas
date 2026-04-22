Use the UniSQ Teaching Skills Pack in this workspace.

Start by reading:

- `README.md`
- `docs/teaching-workflows.md`
- `docs/video-sources.md`

If the task is about StudyDesk group import, also read:

- `docs/workflow.md`
- `docs/troubleshooting.md`

Then do the following:

1. If native Codex skill installation is available, prefer the relevant skill in `codex-skill/`.
2. Choose the matching skill based on the task:
   - `studydesk-group-import`
   - `teaching-video-editing`
   - `teaching-studydesk-setup`
   - `teaching-finalise-grades-and-return`
   - `teaching-late-penalty-turnitin-results`
3. For group-import work, run `scripts/build_group_import.py` when a registration CSV is provided.
4. For live teaching-system work, follow the workflow summarized in `docs/teaching-workflows.md` rather than inventing steps.
5. Stop before risky live actions unless I explicitly ask for them, especially:
   - changing student-visible release state
   - widening Panopto sharing
   - approving examiner return
   - approving final distribution steps
6. If the current UI differs from the recorded guide, follow the live UI labels and tell me what changed.
7. If browser control is unavailable, give me an exact manual checklist instead of pretending the task is blocked.

Be conservative with confidential grade data and call out any non-obvious risk before taking action.

# UniSQ Teaching Skills Pack

Shareable pack for recurring UniSQ teaching operations.

This pack is designed for mixed-tool teams:

- Codex users can install the native Codex skills.
- Claude Code users can use the docs, prompts, and portable group-import script.
- Cursor users can use the same docs, prompts, and script-based workflow.

The teaching workflows in this pack are source-backed. On 2026-04-22, the four Panopto guide videos were checked through an authenticated UniSQ browser session, using Panopto captions where available and local transcription where captions were missing. The shared docs summarize the operational steps without redistributing raw student-grade data.

## What this pack includes

- `codex-skill/`
  Native Codex skill folders for:
  - `studydesk-group-import`
  - `teaching-video-editing`
  - `teaching-studydesk-setup`
  - `teaching-finalise-grades-and-return`
  - `teaching-late-penalty-turnitin-results`
- `docs/workflow.md`
  Human-readable StudyDesk group-import workflow.
- `docs/troubleshooting.md`
  StudyDesk group-import troubleshooting notes.
- `docs/teaching-workflows.md`
  Human-readable summaries of the four teaching-operation workflows.
- `docs/video-sources.md`
  Source-video notes showing which guides were checked and how.
- `scripts/build_group_import.py`
  Portable builder for `idnumber,groupname` group-import CSV files.
- `examples/`
  Anonymized team-registration sample sheet plus example overrides CSV.
- `prompts/`
  Ready-to-paste prompts for Codex, Claude Code, and Cursor.

## Best way to share it

The best option is to put this whole folder in an internal Git repository or shared project folder.

Recommended sharing methods:

1. Internal Git repo
   Best for versioning, fixes, and team reuse.
2. Shared OneDrive / SharePoint folder
   Good if your team is less Git-heavy.
3. Zip archive
   Fine for one-off sharing, but harder to update later.

If several people will use it more than once, prefer the Git-repo route.

## Quick start

### 1. For Codex users

Install the native skills by copying the folders:

- from: `codex-skill/*`
- to: `~/.codex/skills/`

Example:

```bash
mkdir -p ~/.codex/skills
cp -R codex-skill/* ~/.codex/skills/
```

Restart Codex after copying so the new skills are discovered.

Then use prompts like:

```text
Use $teaching-video-editing to prepare or carry out this Panopto tutor-video editing task safely.

Use $teaching-studydesk-setup to adapt this StudyDesk shell to the current offering pattern safely.

Use $teaching-finalise-grades-and-return to audit the grades, prepare the examiner return, and stop before approval until I confirm.

Use $teaching-late-penalty-turnitin-results to review late penalties, Turnitin flags, and release readiness safely.

Use $studydesk-group-import to prepare and verify a StudyDesk group import from this team-registration CSV.
```

### 2. For Claude Code users

Claude Code does not use the Codex skill format directly, so the simplest workflow is:

1. Open this folder in the working directory.
2. Read:
   - `README.md`
   - `docs/teaching-workflows.md`
   - `docs/video-sources.md`
3. For group-import work also read:
   - `docs/workflow.md`
   - `docs/troubleshooting.md`
4. Use the prompt at [prompts/claude-code.md](prompts/claude-code.md).

### 3. For Cursor users

Cursor users can use the same portable workflow:

1. Open this folder or repo in Cursor.
2. Read:
   - `README.md`
   - `docs/teaching-workflows.md`
   - `docs/video-sources.md`
3. For group-import work also read:
   - `docs/workflow.md`
   - `docs/troubleshooting.md`
4. Start with the prompt at [prompts/cursor.md](prompts/cursor.md).

### 4. For group imports

Run:

```bash
python3 scripts/build_group_import.py \
  --source "/path/to/team-registration.csv" \
  --output "/path/to/studydesk-group-import.csv" \
  --issues "/path/to/studydesk-group-import-issues.txt"
```

If the source sheet contains copied or typoed student identifiers, use the example override file:

```bash
python3 scripts/build_group_import.py \
  --source "/path/to/team-registration.csv" \
  --overrides "examples/overrides.example.csv" \
  --output "/path/to/studydesk-group-import.csv" \
  --issues "/path/to/studydesk-group-import-issues.txt"
```

See [docs/workflow.md](docs/workflow.md) for the full import checklist.

## Notes

- `docs/teaching-workflows.md` is written as an operational summary, not a raw transcript dump.
- `docs/video-sources.md` records which videos were verified and whether captions or local transcription were used.
- Grade-finalisation material is confidential and should stay inside the teaching team.
- The skills are written to pause before high-risk live actions such as student-visible release changes, examiner-return approval, or broad course visibility changes.

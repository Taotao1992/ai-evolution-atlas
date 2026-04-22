# UniSQ Teaching Skills Pack

Shareable Codex skill pack for recurring UniSQ teaching operations.

This pack bundles the earlier StudyDesk group-import skill together with four additional teaching-operation skills so colleagues can install them in one place.

## Included skills

- `studydesk-group-import`
  Prepare StudyDesk/Moodle group imports from a team-registration spreadsheet.
- `teaching-video-editing`
  Follow a Panopto-based tutor video editing workflow with safe checks.
- `teaching-studydesk-setup`
  Set up and verify StudyDesk course shells and activity settings.
- `teaching-finalise-grades-and-return`
  Reconcile grades and prepare examiner-return workflows carefully.
- `teaching-late-penalty-turnitin-results`
  Apply late penalties, review Turnitin status, and release results safely.

## Install

Copy the folders inside `codex-skills/` into `~/.codex/skills/`.

Example:

```bash
mkdir -p ~/.codex/skills
cp -R codex-skills/* ~/.codex/skills/
```

Restart Codex after copying so the new skills are discovered.

## Suggested prompts

```text
Use $studydesk-group-import to prepare and verify a StudyDesk group import from this registration spreadsheet.

Use $teaching-video-editing to carry out this Panopto tutor video editing task safely.

Use $teaching-studydesk-setup to verify and update this StudyDesk course shell safely.

Use $teaching-finalise-grades-and-return to prepare a final grade audit before submission.

Use $teaching-late-penalty-turnitin-results to apply policy-based late penalties, review Turnitin, and prepare result release.
```

## Notes

- The Panopto links in the teaching skills are stored as references and may require UniSQ login.
- These skills are written to pause before high-risk live actions such as releasing results, submitting final returns, or making broad student-facing changes.
- `studydesk-group-import` includes a reusable `build_group_import.py` script inside the skill folder for deterministic CSV preparation.

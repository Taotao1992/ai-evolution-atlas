Use the UniSQ Teaching Skills Pack in this workspace.

Read these files first:

- `README.md`
- `docs/teaching-workflows.md`
- `docs/video-sources.md`

If the task is about StudyDesk group import, also read:

- `docs/workflow.md`
- `docs/troubleshooting.md`

Then do the following:

1. Choose the relevant workflow:
   - Panopto tutor-video editing
   - StudyDesk shell setup
   - finalise grades and examiner return
   - late penalties, Turnitin, and result release
   - StudyDesk group import
2. Follow the recorded workflow in the docs instead of inventing your own steps.
3. For group-import work, run `scripts/build_group_import.py` on the provided CSV and produce:
   - a clean `idnumber,groupname` CSV
   - an issues report
4. If browser automation is available, help me carry out the live steps carefully.
5. If browser automation is unavailable, give me a precise manual checklist.
6. Stop before high-risk live actions unless I explicitly confirm them, especially result release, examiner-return approval, or broad student-facing visibility changes.
7. Treat grade data as confidential and avoid echoing it back unnecessarily.

Be explicit about assumptions and surface any mismatch between the live UI and the recorded guide.

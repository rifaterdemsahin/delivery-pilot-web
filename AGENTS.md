# Agent Instructions

## Branch policy

- This repository uses **one branch only: `main`**.
- Do all work directly on `main`. Do not create feature, copilot, or other working branches.
- Do not leave branches behind on `origin`. If a task appears to need a branch, commit to `main` instead.
- Before starting work, run `git pull --ff-only origin main` so local `main` matches the remote.
- Commit and push to `origin/main` when a change is ready. Do not open pull requests for routine changes.
- Delete any branch that is not `main` once its commits are confirmed to be in `main`
  (`git merge-base --is-ancestor <branch> main`).

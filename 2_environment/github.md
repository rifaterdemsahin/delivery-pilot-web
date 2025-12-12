# GitHub Environment

This project relies heavily on GitHub for source control, project management, and automation.

## Features Used

### 1. Repository
The central `delivery-pilot-web` repository hosts all source code and documentation.

### 2. Issues & Projects
We use GitHub Issues to track:
- Bugs
- Feature Requests
- Documentation Tasks

### 3. Pull Requests
All changes should go through a Pull Request (PR) workflow:
1. Fork or branch from `main`.
2. Commit changes.
3. Open a PR.
4. Request review.
5. Merge after approval.

### 4. Actions (CI/CD)
The `.github/workflows` directory contains automation scripts.
- We currently have actions to automate testing or deployment steps (check `.github/workflows/` for details).

## Branching Strategy
- **main**: The production-ready code. Protected branch.
- **feature/*** : For new features.
- **bugfix/*** : For bug fixes.

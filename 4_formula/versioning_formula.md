# Automated Versioning Formula

This document outlines the system used to display the deployed version (Git Commit SHA) in the website footer.

## Objective
To provide visibility into which version of the code is currently deployed to the environment, aiding in debugging and verification.

## Architecture

The system consists of two main components:
1.  **Backend (GitHub Actions):** Generates a version file during the build/deploy process.
2.  **Frontend (JavaScript):** Fetches and displays this version on the client side.

### 1. Version File Generation

In the GitHub Actions workflow (`.github/workflows/static.yml`), a step is added to the deployment job to create a `version.json` file.

```yaml
- name: Generate Version File
  run: echo "{\"version\":\"$(git rev-parse --short HEAD)\"}" > version.json
```

*   **Command:** `git rev-parse --short HEAD` retrieves the short SHA of the current commit.
*   **Output:** A JSON file containing the version, e.g., `{"version": "a1b2c3d"}`.
*   **Location:** This file is created in the root of the site (and subdirectories depending on build context) and uploaded as part of the artifact.

### 2. Frontend Display

The `menu.js` file handles the display logic within the `generateFooter` and `displayVersion` functions.

*   **HTML Placeholder:** The footer generation code runs and inserts a placeholder element:
    ```html
    <p class="version-info">v<span id="deploy-version">...</span></p>
    ```

*   **Fetching Logic:** The `displayVersion()` function executes asynchronously:
    1.  Determines the correct path to `version.json` based on the current page URL (handling nested directories like `5_Symbols` or `simulations`).
    2.  Fetches `version.json`.
    3.  Updates the `span#deploy-version` content with the SHA.
    4.  **Fallback:** If the fetch fails (e.g., running locally without the generated file), it defaults to displaying `vdev`.

## Usage

*   **Production:** The footer will show `v[commit_sha]` (e.g., `va1b2c3d`).
*   **Local Development:** The footer will typically show `vdev` unless you manually create a `version.json` file.

## Files Involved

*   `/.github/workflows/static.yml`: Deployment workflow configuration.
*   `/menu.js`: Frontend logic for footer and version fetching.

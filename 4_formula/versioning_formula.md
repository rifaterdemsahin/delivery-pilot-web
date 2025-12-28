📅 Updated: 2025-12-28

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
  run: echo "{\"version\":\"$(git rev-parse --short HEAD)\", \"full_sha\":\"$(git rev-parse HEAD)\"}" > version.json
```

*   **Commands:**
    *   `git rev-parse --short HEAD`: Retrieves the short SHA (e.g., `a1b2c3d`) for display.
    *   `git rev-parse HEAD`: Retrieves the full SHA (e.g., `a1b2c3d...`) for the GitHub commit link.
*   **Output:** A JSON file containing both versions:
    ```json
    {
      "version": "a1b2c3d",
      "full_sha": "a1b2c3d..."
    }
    ```
*   **Location:** This file is created in the root of the site (and subdirectories depending on build context) and uploaded as part of the artifact.

### 2. Frontend Display

The `menu.js` file handles the display logic within the `generateFooter` and `displayVersion` functions.

*   **HTML Structure:** The footer includes a link element:
    ```html
    <p class="version-info">
      v<a id="deploy-version-link" href="..." target="_blank">
          <span id="deploy-version">...</span>
      </a>
    </p>
    ```

*   **Fetching Logic:** The `displayVersion()` function executes asynchronously:
    1.  Determines the correct path to `version.json` based on the current page URL.
    2.  Fetches `version.json`.
    3.  Updates `span#deploy-version` with `data.version` (short SHA).
    4.  Updates `a#deploy-version-link` href with `https://github.com/rifaterdemsahin/delivery-pilot-web/commit/` + `data.full_sha`.
    5.  **Fallback:** If the fetch fails (e.g., running locally without the generated file), it defaults to displaying `vdev` and removes the link.

## Usage

*   **Production:** The footer shows `v[short_sha]` which is a clickable link to the specific commit on GitHub.
*   **Local Development:** The footer shows `vdev` (not clickable) unless a valid `version.json` is present.

## Usage

*   **Production:** The footer will show `v[commit_sha]` (e.g., `va1b2c3d`).
*   **Local Development:** The footer will typically show `vdev` unless you manually create a `version.json` file.

## Files Involved

*   `/.github/workflows/static.yml`: Deployment workflow configuration.
*   `/menu.js`: Frontend logic for footer and version fetching.

📅 Updated: 2025-12-23

# Repopulating Site Search Data

## Overview
The site search functionality relies on a `sitedata.json` file which contains the indexed content of all pages. When you update the content of the website (HTML files in `5_Symbols/`), you need to regenerate this file for the search results to be accurate.

## Prerequisites
- Node.js installed on your machine.
- Terminal access to the project root.

## Steps to Repopulate Data

1.  **Open Terminal**: Navigate to the project root directory.
    ```bash
    cd /Users/rifaterdemsahin/projects/delivery-pilot-web
    ```

2.  **Run Generation Script**: Execute the following command:
    ```bash
    node generate_sitedata.js
    ```

3.  **Verify Output**:
    - The script should output: `Generated sitedata.json with X pages.`
    - Check the `sitedata.json` file to ensure it has been updated with the latest content.

## Troubleshooting
- **Directory not found**: Ensure the `5_Symbols` directory exists and contains HTML files.
- **Empty results**: If search returns no results, check if `sitedata.json` is empty or malformed.

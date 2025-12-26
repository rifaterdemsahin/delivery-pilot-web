# Turkish-English Translation System

## Overview

The Delivery Pilot website uses a file-based translation system supported by `menu.js` and `script.js`. The system relies on a consistent naming convention for HTML files to serve Turkish content.

## How It Works

### File Naming Convention
- **English (Default)**: `filename.html` (e.g., `workshops.html`)
- **Turkish**: `filename-tr.html` (e.g., `workshops-tr.html`)

### Language Toggling
The `menu.js` script handles the language toggle button in the navigation bar. 
- When a user clicks "TR", the script checks if the current page is an English page.
- If it is, it attempts to redirect the user to the corresponding `-tr.html` file.
- If the user clicks "EN" on a Turkish page, it redirects to the base `.html` file.
- `script.js` contains a dictionary of translations for dynamic elements like the navigation menu itself, ensuring the UI shell is translated even if the content is loaded dynamically.

### Adding New Translations
To add a Turkish translation for a new page:
1. Create a copy of the English HTML file.
2. Rename the copy to append `-tr` before the extension (e.g., `newpage-tr.html`).
3. Manually translate the content within the `<body>` tags.
4. Ensure the `<html lang="en">` tag is updated to `<html lang="tr">`.

## Gap Fixing
We use a script `check_translation_gaps.js` to identify missing Turkish translations. This script scans the `5_Symbols` directory and reports any English HTML files that do not have a corresponding `-tr.html` version. It can also auto-generate the missing files (as copies) to be filled in with translations later.

### Usage
Run the script from the project root:
```bash
node check_translation_gaps.js
```
To auto-fix (create missing files):
```bash
node check_translation_gaps.js --fix
```

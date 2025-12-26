# Turkish-English Translation System

## Overview

The Delivery Pilot website uses a file-based translation system supported by `menu.js` and `script.js`. The system relies on a consistent naming convention for HTML files to serve Turkish content.

## How It Works

### File Naming Convention
- **English (Default)**: `filename.html` (e.g., `workshops.html`)
- **Turkish**: `filename-tr.html` (e.g., `workshops-tr.html`)

### Language Toggling
The `script.js` file handles the language logic, utilizing the URL to determine the active language.
- **Initialization**: On page load, the script checks if the filename ends in `-tr.html`. If so, it sets the site language to Turkish (`tr`). Otherwise, it defaults to English (`en`).
- **Switching**: 
  - Clicking "TR" redirects to the `*-tr.html` version of the current page.
  - Clicking "EN" redirects to the `.html` version.
- **Persistence**: The language preference is stored in `localStorage` but the URL takes precedence for initialization to ensure the correct content is shown.
- **Content Update**: The `updateContent()` function replaces text in elements with `data-i18n` attributes using the dictionary in `script.js`. This means the HTML files can contain English fallback text, which is automatically overwritten with Turkish text on load.

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

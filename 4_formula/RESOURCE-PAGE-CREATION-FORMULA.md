# Resource Page Creation Formula

This formula outlines the systematic process for creating new resource pages in the Delivery Pilot project, ensuring multi-language support (English/Turkish), consistent design, and proper menu integration.

## 1. Project Scan & Strategy

### Infrastructure Overview
- **Location**: All resource pages live in the `5_Symbols/` directory.
- **Navigation**: `menu.js` handles the navbar and footer dynamically.
- **Styling**: `styles.css` is the global stylesheet, `onboarding-styles.css` is often used for specific resource layouts.
- **Search**: The content is indexed in `sitedata.json` (must be updated).

### Multi-Language Strategy
- **Master**: English version (`custom-page-name.html`).
- **Slave**: Turkish version (`custom-page-name-tr.html`).
- **Naming Convention**: Always use `-tr` suffix for Turkish files.
- **Language Toggle**: `menu.js` automatically handles switching between `.html` and `-tr.html` if the files follow this convention.

## 2. Creation Steps (The Formula)

### Step 1: Create the Master English Page
Create `5_Symbols/your-topic-slug.html`.

**Required Structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Standard Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[Description specific to your resource]">
    <link rel="canonical" href="https://deliverypilot.net/your-topic-slug.html">
    <title>[Title] | Delivery Pilot Resources</title>
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../onboarding-styles.css"> <!-- Common for resources -->
</head>
<body>
    <!-- Navbar Placeholder -->
    <div id="navbar-placeholder"></div>

    <!-- Content Sections -->
    <section class="resources-hero">
        <!-- Hero content -->
    </section>

    <section class="content-section">
        <!-- Main content -->
    </section>

    <!-- Footer Placeholder -->
    <div id="footer-placeholder"></div>

    <!-- Scripts -->
    <script src="../menu.js"></script>
    <script src="../script.js"></script>
</body>
</html>
```

### Step 2: Create the Turkish Slave Page
Create `5_Symbols/your-topic-slug-tr.html`.

1.  **Copy**: Duplicate the English file.
2.  **Translate**:
    *   `html lang="tr"`
    *   Meta description and title.
    *   All visible text content.
    *   **Keep** the same HTML structure to ensure "similar look and feeling".
3.  **CTA Links**: Ensure internal links in the Turkish page point to other `-tr.html` pages where available (e.g., `href="contact-tr.html"` instead of `contact.html`).

### Step 3: Update Navigation (`menu.js`)
To make the page accessible:

1.  Open `menu.js`.
2.  Locate `navigationConfig.menuItems`.
3.  Find the `Resources` submenu.
4.  Add your new item:
    ```javascript
    { href: 'your-topic-slug.html', textKey: 'nav.yourTopicKey', text: 'Emoji Your Topic Name' },
    ```
5.  *Note*: You do not need to add the `-tr.html` link separately. The `fixPath` function in `menu.js` automatically redirects to the Turkish version if the user is on a Turkish page.

### Step 4: Verify Consistency
- **Check** that the Navbar and Footer load correctly.
- **Check** the Language Toggle (TR button should switch to `-tr.html`, EN to `.html`).
- **Check** Mobile Responsiveness (resize browser window).
- **Check** Internal Links (they should work and maintain language context where possible).

## 3. Future Reference
- **Folder**: `5_Symbols/`
- **Menu**: `f:\delivery-pilot-web\menu.js`
- **Example Pair**: `resources-work-vs-robots.html` / `resources-work-vs-robots-tr.html`

> [!TIP]
> **Don't reinvent the wheel.** Copy an existing resource page that has the layout you want (e.g., Hero + Grid + CTA) and replace the content. This guarantees the "similar look and feel" the user expects.

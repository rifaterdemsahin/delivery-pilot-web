📅 Updated: 2025-12-12

# Reusable Menu System Documentation

## Overview

The navigation and footer components have been refactored into a centralized, reusable JavaScript module (`menu.js`) that makes it easy to update menus across all pages.

## How It Works

### Single Source of Truth
All navigation and footer content is now defined in one place: `menu.js`. This file contains:
- Navigation menu configuration
- Footer sections configuration
- Logic to inject these components into pages

### Benefits
✅ **Easy Updates**: Change menu items in one place, reflected across all pages  
✅ **Consistency**: Ensures all pages have the same navigation structure  
✅ **Maintainability**: Reduces code duplication significantly  
✅ **Translation Support**: Works seamlessly with the existing i18n system  

## Usage Guide

### For Existing Pages

Pages already using the reusable menu system have:

1. **Placeholder divs** in the HTML:
```html
<!-- Navigation - Loaded from menu.js -->
<div id="navbar-placeholder"></div>

<!-- Page content here -->

<!-- Footer - Loaded from menu.js -->
<div id="footer-placeholder"></div>
```

2. **Script includes** at the end of the body:
```html
<script src="menu.js"></script>
<script src="script.js"></script>
```

### For New Pages

To add navigation and footer to a new page:

1. Add the placeholder divs where you want the menu:
```html
<body>
    <!-- Navigation - Loaded from menu.js -->
    <div id="navbar-placeholder"></div>
    
    <!-- Your page content -->
    
    <!-- Footer - Loaded from menu.js -->
    <div id="footer-placeholder"></div>
    
    <script src="menu.js"></script>
    <script src="script.js"></script>
</body>
```

2. That's it! The menu will be automatically injected when the page loads.

## Customizing Menus

### Updating Navigation Links

Edit the `navigationConfig` object in `menu.js`:

```javascript
const navigationConfig = {
    logoText: 'Delivery Pilot',
    logoLink: 'index.html',
    menuItems: [
        { href: 'index.html#home', textKey: 'nav.home', text: 'Home' },
        { href: 'pricing.html', textKey: 'nav.pricing', text: 'Pricing' },
        // Add more items here
    ]
};
```

**Menu Item Properties:**
- `href`: The link destination
- `textKey`: Translation key (optional, for i18n support)
- `text`: Default text (shown if no translation available)
- `class`: CSS class (optional, e.g., 'cta-button' for call-to-action styling)

### Updating Footer

Edit the `footerConfig` object in `menu.js`:

```javascript
const footerConfig = {
    sections: [
        {
            title: 'Section Title',
            titleKey: 'footer.section.title', // optional
            content: [
                { type: 'link', href: '#', text: 'Link Text', textKey: 'footer.link' },
                { type: 'text', text: 'Some text', textKey: 'footer.text' }
            ]
        }
    ],
    copyright: {
        textKey: 'footer.copyright',
        text: '© {year} Delivery Pilot. All rights reserved.'
    }
};
```

## Translation Support

The menu system works with the existing translation system in `script.js`:

1. Use `textKey` property to reference translation keys
2. Provide `text` as fallback for when translations aren't available
3. The `{year}` placeholder in copyright is automatically replaced with the current year

Example:
```javascript
{ href: 'pricing.html', textKey: 'nav.pricing', text: 'Pricing' }
```

This will:
- Show the translated text when available (from `script.js` translations)
- Fall back to 'Pricing' if translation is not available
- Automatically update when language is changed

## Pages Updated

The following pages now use the reusable menu system:

✅ index.html  
✅ pricing.html  
✅ partners.html  
✅ founder.html  
✅ onboarding.html  
✅ agile-transformation.html  
✅ previous-customers.html  

**Note:** The following pages intentionally do NOT use the standard navigation:
- `dashboard.html` - Has custom dashboard header
- `signin.html` - Minimal page with no standard navigation
- `assessment.html` - Standalone assessment page

## Troubleshooting

### Menu not appearing?

1. Check that `menu.js` is loaded before `script.js`
2. Verify placeholder divs have correct IDs: `navbar-placeholder` and `footer-placeholder`
3. Check browser console for JavaScript errors

### Translations not working?

1. Ensure `script.js` is loaded after `menu.js`
2. Verify translation keys in `menu.js` match those in `script.js`
3. Check that `data-i18n` attributes are being applied correctly

### Styling issues?

The menu system generates the same HTML structure as before, so existing CSS in `styles.css` should work without changes. If you see styling issues:

1. Check that your page includes `styles.css`
2. Verify the generated HTML structure matches expectations
3. Check for CSS conflicts with page-specific styles

## Future Improvements

Potential enhancements:
- Add active page highlighting automatically
- Support for mega menus or dropdown menus
- Mobile hamburger menu functionality
- Dynamic menu generation based on user role/permissions

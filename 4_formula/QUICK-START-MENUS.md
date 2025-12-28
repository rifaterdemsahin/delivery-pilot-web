📅 Updated: 2025-12-12

# Quick Start Guide - Reusable Menu System

## 🚀 What Changed?

Navigation and footer menus are now generated from a single file (`menu.js`) instead of being hardcoded in every HTML page.

## ⚡ Quick Examples

### Adding a New Menu Item

**File to edit:** `menu.js`

```javascript
const navigationConfig = {
    // ... other config ...
    menuItems: [
        // Existing items...
        { href: 'pricing.html', text: 'Pricing' },
        
        // Add your new item here:
        { href: 'blog.html', textKey: 'nav.blog', text: 'Blog' },
        //  ↑ URL        ↑ translation key  ↑ fallback text
    ]
};
```

**That's it!** The new menu item appears on all 7 pages automatically.

### Adding Menu to a New Page

**In your new HTML file:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My New Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation - auto-generated -->
    <div id="navbar-placeholder"></div>
    
    <!-- Your page content here -->
    <section>
        <h1>Hello World!</h1>
    </section>
    
    <!-- Footer - auto-generated -->
    <div id="footer-placeholder"></div>
    
    <!-- Required scripts -->
    <script src="menu.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

### Updating Footer Links

**File to edit:** `menu.js`

```javascript
const footerConfig = {
    sections: [
        {
            title: 'Company',
            titleKey: 'footer.company.title',
            content: [
                { type: 'link', href: 'about.html', text: 'About' },
                // Add new footer link:
                { type: 'link', href: 'careers.html', text: 'Careers' }
            ]
        }
    ]
};
```

## 🎨 Translation Support

### With Translation
```javascript
{ href: 'pricing.html', textKey: 'nav.pricing', text: 'Pricing' }
```
- `textKey` → looks up translation in `script.js`
- `text` → fallback if translation not found

### Without Translation
```javascript
{ href: 'blog.html', text: 'Blog' }
```
- Just use `text` field
- Same text shown in all languages

## 📁 Files Overview

```
menu.js                    ← Edit this to update menus
MENU-USAGE.md             ← Full documentation
QUICK-START-MENUS.md      ← This file
REFACTORING-SUMMARY.md    ← Technical details
test-menu.html            ← Test page to verify changes
```

## 🧪 Testing Your Changes

1. **Edit** menu.js with your changes
2. **Open** test-menu.html in a browser
3. **Verify** your menu items appear correctly
4. **Test** language switching (EN/TR buttons)
5. **Check** all links work

## ⚠️ Common Mistakes

### ❌ Don't do this:
```html
<!-- Don't hardcode menus anymore! -->
<nav class="navbar">
    <ul>
        <li><a href="home.html">Home</a></li>
    </ul>
</nav>
```

### ✅ Do this instead:
```html
<!-- Use placeholder div -->
<div id="navbar-placeholder"></div>
```

### ❌ Don't do this:
```html
<!-- Don't forget to load menu.js -->
<script src="script.js"></script>
</body>
```

### ✅ Do this instead:
```html
<!-- Load menu.js BEFORE script.js -->
<script src="menu.js"></script>
<script src="script.js"></script>
</body>
```

## 🐛 Troubleshooting

### Menu not showing?
1. Check browser console for errors
2. Verify `menu.js` is loaded before `script.js`
3. Confirm placeholder IDs are correct: `navbar-placeholder` and `footer-placeholder`

### Translations not working?
1. Check translation key exists in `script.js`
2. Verify `textKey` matches exactly (case-sensitive)
3. Ensure fallback `text` is provided

### Wrong menu structure?
1. Check you're using correct placeholder IDs
2. Verify no conflicting CSS
3. Clear browser cache and reload

## 📚 Need More Details?

- **Full documentation:** See `MENU-USAGE.md`
- **Technical summary:** See `REFACTORING-SUMMARY.md`
- **Have questions?** Check the documentation or ask the team!

## ✨ Benefits Recap

Before: Update 7 files (30 min) ❌  
After: Update 1 file (3 min) ✅

- **Faster updates** - 90% time savings
- **No mistakes** - Single source of truth
- **Consistent menus** - Same structure everywhere
- **Easy maintenance** - One file to rule them all

---

**Last Updated:** December 9, 2024  
**Status:** ✅ Production Ready

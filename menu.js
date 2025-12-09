/**
 * Reusable Navigation and Footer Components
 * 
 * This file provides centralized, reusable components for navigation and footer
 * that can be easily updated across all pages.
 * 
 * Usage:
 * 1. Include this script in your HTML: <script src="menu.js"></script>
 * 2. Add placeholder divs: <div id="navbar-placeholder"></div> and <div id="footer-placeholder"></div>
 * 3. Components will be automatically inserted when the page loads
 */

/**
 * Navigation menu configuration
 * Customize menu items here - changes will reflect across all pages
 */
const navigationConfig = {
    logoText: 'Delivery Pilot',
    logoLink: 'index.html',
    menuItems: [
        { href: 'index.html#home', textKey: 'nav.home', text: 'Home' },
        { href: 'onboarding.html', textKey: 'nav.onboarding', text: 'Onboarding' },
        { href: 'partners.html', textKey: 'nav.partners', text: 'Partners' },
        { href: 'agile-transformation.html', text: 'Agile Transformation' },
        { href: 'pricing.html', textKey: 'nav.pricing', text: 'Pricing' },
        { href: 'index.html#features', textKey: 'nav.features', text: 'Features' },
        { href: 'index.html#how-it-works', textKey: 'nav.howItWorks', text: 'How It Works' },
        { href: 'index.html#use-cases', textKey: 'nav.useCases', text: 'Use Cases' },
        { href: 'index.html#about', textKey: 'nav.about', text: 'About' },
        { href: 'founder.html', textKey: 'nav.founder', text: 'Founder' },
        { href: 'signin.html', textKey: 'nav.signIn', text: 'Sign In' },
        { href: 'https://deliverypilot.net/assesment.html', textKey: 'nav.getStarted', text: 'Get Started', class: 'cta-button' }
    ]
};

/**
 * Footer menu configuration
 * Customize footer sections and links here
 */
const footerConfig = {
    sections: [
        {
            title: 'Delivery Pilot',
            titleKey: null,
            content: [
                { type: 'text', textKey: 'footer.tagline', text: 'Enterprise AI Transformation Platform' }
            ]
        },
        {
            title: 'Platform',
            titleKey: 'footer.platform.title',
            content: [
                { type: 'link', href: 'onboarding.html', text: 'Onboarding' },
                { type: 'link', href: 'agile-transformation.html', text: 'Agile Transformation' },
                { type: 'link', href: 'index.html#features', textKey: 'footer.platform.features', text: 'Features' },
                { type: 'link', href: 'index.html#how-it-works', textKey: 'footer.platform.howItWorks', text: 'How It Works' },
                { type: 'link', href: 'index.html#use-cases', textKey: 'footer.platform.useCases', text: 'Use Cases' },
                { type: 'link', href: 'pricing.html', textKey: 'footer.platform.pricing', text: 'Pricing' }
            ]
        },
        {
            title: 'Company',
            titleKey: 'footer.company.title',
            content: [
                { type: 'link', href: 'index.html#about', textKey: 'footer.company.about', text: 'About' },
                { type: 'link', href: 'founder.html', textKey: 'footer.company.founder', text: 'Founder' },
                { type: 'link', href: 'partners.html', textKey: 'footer.company.partners', text: 'Partners' },
                { type: 'link', href: 'previous-customers.html', textKey: 'footer.company.previousCustomers', text: 'Previous Customers' },
                { type: 'link', href: '#', textKey: 'footer.company.careers', text: 'Careers' },
                { type: 'link', href: 'https://deliverypilot.net/assesment.html', textKey: 'footer.company.contact', text: 'Contact' }
            ]
        },
        {
            title: 'Resources',
            titleKey: 'footer.resources.title',
            content: [
                { type: 'link', href: '#', textKey: 'footer.resources.documentation', text: 'Documentation' },
                { type: 'link', href: '#', textKey: 'footer.resources.blog', text: 'Blog' },
                { type: 'link', href: '#', textKey: 'footer.resources.support', text: 'Support' }
            ]
        }
    ],
    copyright: {
        textKey: 'footer.copyright',
        text: '© {year} Delivery Pilot. All rights reserved.'
    }
};

/**
 * Generate navigation HTML
 */
function generateNavigation() {
    const menuItemsHTML = navigationConfig.menuItems.map(item => {
        const dataI18n = item.textKey ? ` data-i18n="${item.textKey}"` : '';
        const itemClass = item.class ? ` class="${item.class}"` : '';
        return `<li><a href="${item.href}"${dataI18n}${itemClass}>${item.text}</a></li>`;
    }).join('\n                    ');

    return `
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="logo">
                <h2><a href="${navigationConfig.logoLink}">${navigationConfig.logoText}</a></h2>
            </div>
            <div class="nav-right">
                <div class="language-toggle">
                    <button class="lang-btn active" data-lang="en">EN</button>
                    <button class="lang-btn" data-lang="tr">TR</button>
                </div>
                <ul class="nav-menu">
                    ${menuItemsHTML}
                </ul>
            </div>
        </div>
    </nav>`;
}

/**
 * Generate footer HTML
 */
function generateFooter() {
    const sectionsHTML = footerConfig.sections.map(section => {
        const titleDataI18n = section.titleKey ? ` data-i18n="${section.titleKey}"` : '';
        const contentHTML = section.content.map(item => {
            if (item.type === 'text') {
                const dataI18n = item.textKey ? ` data-i18n="${item.textKey}"` : '';
                return `<p${dataI18n}>${item.text}</p>`;
            } else if (item.type === 'link') {
                const dataI18n = item.textKey ? ` data-i18n="${item.textKey}"` : '';
                return `<li><a href="${item.href}"${dataI18n}>${item.text}</a></li>`;
            }
            return '';
        }).join('\n                        ');

        const isFirstSection = section === footerConfig.sections[0];
        const contentTag = isFirstSection ? contentHTML : `<ul>\n                        ${contentHTML}\n                    </ul>`;

        return `
                <div class="footer-section">
                    <h${isFirstSection ? '3' : '4'}${titleDataI18n}>${section.title}</h${isFirstSection ? '3' : '4'}>
                    ${contentTag}
                </div>`;
    }).join('');

    const currentYear = new Date().getFullYear();
    const copyrightDataI18n = footerConfig.copyright.textKey ? ` data-i18n="${footerConfig.copyright.textKey}"` : '';
    const copyrightText = footerConfig.copyright.text.replace('{year}', currentYear);

    return `
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">${sectionsHTML}
            </div>
            <div class="footer-bottom">
                <p${copyrightDataI18n}>${copyrightText}</p>
            </div>
        </div>
    </footer>`;
}

/**
 * Insert navigation into page
 */
function insertNavigation() {
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.outerHTML = generateNavigation();
    }
}

/**
 * Insert footer into page
 */
function insertFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.outerHTML = generateFooter();
    }
}

/**
 * Initialize menu components when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        insertNavigation();
        insertFooter();
    });
} else {
    // DOM is already ready
    insertNavigation();
    insertFooter();
}

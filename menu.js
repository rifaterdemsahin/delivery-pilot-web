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
 * Now supports nested dropdown menus for better organization
 */
const navigationConfig = {
    logoText: 'Delivery Pilot',
    logoLink: 'index.html',
    menuItems: [
        { href: 'index.html#home', textKey: 'nav.home', text: '🏠 Home' },
        { 
            text: '💻 Platform', 
            textKey: 'nav.platform',
            submenu: [
                { href: 'index.html#features', textKey: 'nav.features', text: '✨ Features' },
                { href: 'index.html#how-it-works', textKey: 'nav.howItWorks', text: '⚙️ How It Works' },
                { href: 'index.html#use-cases', textKey: 'nav.useCases', text: '💼 Use Cases' }
            ]
        },
        { 
            text: '🛠️ Services', 
            textKey: 'nav.services',
            submenu: [
                { href: 'onboarding.html', textKey: 'nav.onboarding', text: '🚀 Onboarding' },
                { href: 'workshops.html', textKey: 'nav.workshops', text: '🎓 Workshops' },
                { href: 'agile-transformation.html', text: '📈 Agile Transformation' },
                { href: 'enterprise-agent.html', textKey: 'nav.enterpriseAgent', text: '🤖 Enterprise Agent' }
            ]
        },
        { href: 'pricing.html', text: '💰 Pricing' },
        { 
            text: '🏢 Company', 
            textKey: 'nav.company',
            submenu: [
                { href: 'index.html#about', textKey: 'nav.about', text: 'ℹ️ About' },
                { href: 'success-stories.html', textKey: 'nav.successStories', text: '⭐ Success Stories' },
                { href: 'faq.html', textKey: 'nav.faq', text: '❓ FAQ' },
                { href: 'founder.html', textKey: 'nav.founder', text: '👤 Founder' },
                { href: 'transformations.html', textKey: 'nav.transformations', text: '🔄 Transformations' },
                { href: 'partners.html', textKey: 'nav.partners', text: '🤝 Partners' }
            ]
        },
        { 
            text: '📚 Resources', 
            textKey: 'nav.resources',
            submenu: [
                { href: 'resources-knowledge-transfer.html', textKey: 'nav.knowledgeTransfer', text: '🧠 Knowledge Transfer' },
                { href: 'resources-work-vs-robots.html', textKey: 'nav.workVsRobots', text: '🤖 Work vs Robots' },
                { href: 'resources-governance-examples.html', textKey: 'nav.governanceExamples', text: '🏛️ Governance Examples' },
                { href: 'resources-paradigm-shift.html', textKey: 'nav.paradigmShift', text: '⚡ Paradigm Shift' },
                { href: 'resources-workshops-as-simulations.html', textKey: 'nav.workshopsAsSimulations', text: '🎮 Workshops as Simulations' }
            ]
        },
        { href: 'contact.html', textKey: 'nav.contact', text: '📧 Contact' },
        { href: 'signin.html', textKey: 'nav.signIn', text: '🔑 Sign In' },
        { href: 'assessment.html', textKey: 'nav.getStarted', text: '🚀 Get Started', class: 'cta-button' }
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
                { type: 'link', href: 'workshops.html', textKey: 'footer.platform.workshops', text: 'Workshops' },
                { type: 'link', href: 'agile-transformation.html', text: 'Agile Transformation' },
                { type: 'link', href: 'enterprise-agent.html', textKey: 'footer.platform.enterpriseAgent', text: 'Enterprise Agent' },
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
                { type: 'link', href: 'success-stories.html', textKey: 'footer.company.successStories', text: 'Success Stories' },
                { type: 'link', href: 'faq.html', textKey: 'footer.company.faq', text: 'FAQ' },
                { type: 'link', href: 'founder.html', textKey: 'footer.company.founder', text: 'Founder' }
            ]
        },
        {
            title: 'Resources',
            titleKey: 'footer.resources.title',
            content: [
                { type: 'link', href: 'resources-knowledge-transfer.html', textKey: 'footer.resources.knowledgeTransfer', text: 'Knowledge Transfer' },
                { type: 'link', href: 'resources-work-vs-robots.html', textKey: 'footer.resources.workVsRobots', text: 'Work vs Robots' },
                { type: 'link', href: 'resources-governance-examples.html', textKey: 'footer.resources.governanceExamples', text: 'Governance Examples' },
                { type: 'link', href: 'transformations.html', textKey: 'footer.company.transformations', text: 'Transformations' },
                { type: 'link', href: 'partners.html', textKey: 'footer.company.partners', text: 'Partners' },
                { type: 'link', href: 'contact.html', textKey: 'footer.company.contact', text: 'Contact' }
            ]
        }
    ],
    copyright: {
        textKey: 'footer.copyright',
        text: '© {year} Delivery Pilot. All rights reserved.'
    }
};

/**
 * Generate navigation HTML with support for nested dropdown menus
 */
function generateNavigation() {
    const menuItemsHTML = navigationConfig.menuItems.map(item => {
        const dataI18n = item.textKey ? ` data-i18n="${item.textKey}"` : '';
        const itemClass = item.class ? ` class="${item.class}"` : '';
        
        // Check if item has submenu (dropdown)
        if (item.submenu && item.submenu.length > 0) {
            const submenuHTML = item.submenu.map(subItem => {
                const subDataI18n = subItem.textKey ? ` data-i18n="${subItem.textKey}"` : '';
                return `<li><a href="${subItem.href}"${subDataI18n}>${subItem.text}</a></li>`;
            }).join('\n                            ');
            
            return `<li class="dropdown">
                            <span class="dropdown-toggle"${dataI18n}>${item.text} <span class="dropdown-arrow">▼</span></span>
                            <ul class="dropdown-menu">
                                ${submenuHTML}
                            </ul>
                        </li>`;
        } else {
            // Regular menu item without submenu
            return `<li><a href="${item.href}"${dataI18n}${itemClass}>${item.text}</a></li>`;
        }
    }).join('\n                    ');

    return `
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="logo">
                <h2><a href="${navigationConfig.logoLink}">${navigationConfig.logoText}</a></h2>
            </div>
            <button class="mobile-menu-toggle" aria-label="Toggle navigation menu">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
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

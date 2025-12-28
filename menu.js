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
                { href: 'index.html#use-cases', textKey: 'nav.useCases', text: '💼 Use Cases' },
                { href: 'usecases.html', textKey: 'nav.useCasesDetailed', text: '🤖 AI Agent Use Cases' },
                { href: 'usecase-production-delivery.html', textKey: 'nav.productionDelivery', text: '🚀 Production Delivery' }
            ]
        },
        { 
            text: '🛠️ Services', 
            textKey: 'nav.services',
            submenu: [
                { href: 'onboarding.html', textKey: 'nav.onboarding', text: '🚀 Onboarding' },
                { href: 'workshops.html', textKey: 'nav.workshops', text: '🎓 Workshops' },
                { href: 'agile-transformation.html', textKey: 'nav.agileTransformation', text: '📈 Agile Transformation' },
                { href: 'enterprise-agent.html', textKey: 'nav.enterpriseAgent', text: '🤖 Enterprise Agent' },
                { href: 'junior-engineer-training.html', textKey: 'nav.juniorTraining', text: '👨‍🎓 Junior Engineer Training' },
                { href: 'delivery-pilot-methodology.html', textKey: 'nav.methodology', text: '📖 Methodology' }
            ]
        },
        { href: 'pricing.html', textKey: 'nav.pricing', text: '💰 Pricing' },
        { 
            text: '🏢 Company', 
            textKey: 'nav.company',
            submenu: [
                { href: 'index.html#about', textKey: 'nav.about', text: 'ℹ️ About' },
                { href: 'delivery-pilot-concept.html', textKey: 'nav.deliveryPilotConcept', text: '✈️ Delivery Pilot Concept' },
                { href: 'success-stories.html', textKey: 'nav.successStories', text: '⭐ Success Stories' },
                { href: 'faq.html', textKey: 'nav.faq', text: '❓ FAQ' },
                { href: 'founder.html', textKey: 'nav.founder', text: '👤 Founder' },
                { href: 'transformations.html', textKey: 'nav.transformations', text: '🔄 Transformations' },
                { href: 'partners.html', textKey: 'nav.partners', text: '🤝 Partners' },
                { href: 'security.html', textKey: 'nav.security', text: '🔒 Security' }
            ]
        },
        { 
            text: '📚 Resources', 
            textKey: 'nav.resources',
            submenu: [
                { href: 'podcast.html', textKey: 'nav.podcast', text: '🎙️ Podcast' },
                { href: 'resources-root-cause-analysis.html', textKey: 'nav.rootCauseAnalysis', text: '🔍 Root Cause Analysis' },
                { href: 'resources-agent-automation.html', textKey: 'nav.agentAutomation', text: '🔗 Agent Automation' },
                { href: 'resources-knowledge-transfer.html', textKey: 'nav.knowledgeTransfer', text: '🧠 Knowledge Transfer' },
                { href: 'resources-task-handover-challenge.html', textKey: 'nav.taskHandover', text: '🔄 Task Handover Challenge' },
                { href: 'resources-documentation-efficiency.html', textKey: 'nav.documentationEfficiency', text: '📄 Documentation Efficiency' },
                { href: 'resources-sre-rollback-support.html', textKey: 'nav.sreRollback', text: '🚨 SRE Rollback Support' },
                { href: 'resources-work-vs-robots.html', textKey: 'nav.workVsRobots', text: '🤖 Work vs Robots' },
                { href: 'resources-why-build-agents.html', textKey: 'nav.whyBuildAgents', text: '🏗️ Why Build Agents' },
                { href: 'resources-governance-examples.html', textKey: 'nav.governanceExamples', text: '🏛️ Governance Examples' },
                { href: 'resources-paradigm-shift.html', textKey: 'nav.paradigmShift', text: '⚡ Paradigm Shift' },
                { href: 'resources-workshops-as-simulations.html', textKey: 'nav.workshopsAsSimulations', text: '🎮 Workshops as Simulations' },
                { href: 'resources-agentic-vs-automation.html', textKey: 'nav.agenticVsAutomation', text: '🤖 Agentic vs Automation' },
                { href: 'resources-acronym-pressure.html', textKey: 'nav.acronymPressure', text: '🔤 Acronym Overload' },
                { href: 'resources-access-security-silos.html', textKey: 'nav.accessSecuritySilos', text: '🔐 Access & Security Silos' },
                { href: 'resources-job-satisfaction-agents.html', textKey: 'nav.jobSatisfaction', text: '😊 Job Satisfaction' },
                { href: 'employee-overload.html', textKey: 'nav.employeeOverload', text: '⚡ Employee Overload' },
                { href: 'resources-humans-vs-agents.html', textKey: 'nav.humansVsAgents', text: '👥 Humans vs Agents' },
                { href: 'agent-security-benefits.html', textKey: 'nav.agentSecurity', text: '🔒 Agent Security Benefits' }
            ]
        },
        { href: 'contact.html', textKey: 'nav.contact', text: '📧 Contact' },
        { href: 'signin.html', textKey: 'nav.signIn', text: '🔑 Sign In' },
        { href: 'assessment.html', textKey: 'nav.getStarted', text: '🚀 Start', class: 'cta-button' }
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
                { type: 'link', href: 'onboarding.html', textKey: 'footer.platform.onboarding', text: 'Onboarding' },
                { type: 'link', href: 'workshops.html', textKey: 'footer.platform.workshops', text: 'Workshops' },
                { type: 'link', href: 'agile-transformation.html', textKey: 'footer.platform.agileTransformation', text: 'Agile Transformation' },
                { type: 'link', href: 'enterprise-agent.html', textKey: 'footer.platform.enterpriseAgent', text: 'Enterprise Agent' },
                { type: 'link', href: 'delivery-pilot-methodology.html', textKey: 'footer.platform.methodology', text: 'Methodology' },
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
                { type: 'link', href: 'founder.html', textKey: 'footer.company.founder', text: 'Founder' },
                { type: 'link', href: 'security.html', textKey: 'footer.company.security', text: 'Security' }
            ]
        },
        {
            title: 'Resources',
            titleKey: 'footer.resources.title',
            content: [
                { type: 'link', href: 'resources-knowledge-transfer.html', textKey: 'footer.resources.knowledgeTransfer', text: 'Knowledge Transfer' },
                { type: 'link', href: 'resources-task-handover-challenge.html', textKey: 'footer.resources.taskHandover', text: 'Task Handover Challenge' },
                { type: 'link', href: 'resources-work-vs-robots.html', textKey: 'footer.resources.workVsRobots', text: 'Work vs Robots' },
                { type: 'link', href: 'resources-job-satisfaction-agents.html', textKey: 'footer.resources.jobSatisfaction', text: 'Job Satisfaction' },
                { type: 'link', href: 'resources-governance-examples.html', textKey: 'footer.resources.governanceExamples', text: 'Governance Examples' },
                { type: 'link', href: 'resources-acronym-pressure.html', textKey: 'footer.resources.acronymPressure', text: 'Acronym Overload' },
                { type: 'link', href: 'resources-access-security-silos.html', textKey: 'footer.resources.accessSecuritySilos', text: 'Access & Security Silos' },
                { type: 'link', href: 'employee-overload.html', textKey: 'footer.resources.employeeOverload', text: 'Employee Overload' },
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
/**
 * Generate navigation HTML with support for nested dropdown menus
 */
function generateNavigation() {
    // Determine path prefix based on current location
    let pathPrefix = '';
    if (window.location.pathname.includes('/simulations/')) {
        pathPrefix = '../';
    }

    // Check if current page is Turkish
    const isTurkish = window.location.pathname.endsWith('-tr.html');

    const menuItemsHTML = navigationConfig.menuItems.map(item => {
        const dataI18n = item.textKey ? ` data-i18n="${item.textKey}"` : '';
        const itemClass = item.class ? ` class="${item.class}"` : '';
        
        // Helper to fix paths and handle language
        const fixPath = (href) => {
            if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) {
                return href;
            }
            
            let finalHref = href;
            if (isTurkish && finalHref.endsWith('.html') && !finalHref.endsWith('-tr.html')) {
                finalHref = finalHref.replace('.html', '-tr.html');
            } else if (isTurkish && finalHref.includes('.html#')) {
                finalHref = finalHref.replace('.html', '-tr.html'); // replace first occurrence
            }
            
            return pathPrefix + finalHref;
        };

        // Check if item has submenu (dropdown)
        if (item.submenu && item.submenu.length > 0) {
            const submenuHTML = item.submenu.map(subItem => {
                const subDataI18n = subItem.textKey ? ` data-i18n="${subItem.textKey}"` : '';
                return `<li><a href="${fixPath(subItem.href)}"${subDataI18n}>${subItem.text}</a></li>`;
            }).join('\n                            ');
            
            return `<li class="dropdown">
                            <span class="dropdown-toggle"${dataI18n}>${item.text} <span class="dropdown-arrow">▼</span></span>
                            <ul class="dropdown-menu">
                                ${submenuHTML}
                            </ul>
                        </li>`;
        } else {
            // Regular menu item without submenu
            return `<li><a href="${fixPath(item.href)}"${dataI18n}${itemClass}>${item.text}</a></li>`;
        }
    }).join('\n                    ');

    // Fix logo link
    let logoLink = window.location.pathname.includes('/simulations/') ? 
        '../' + navigationConfig.logoLink : 
        navigationConfig.logoLink;
    
    if (isTurkish && logoLink.endsWith('index.html')) {
        logoLink = logoLink.replace('index.html', 'index-tr.html');
    }

    return `
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="logo">
                <h2><a href="${logoLink}">${navigationConfig.logoText}</a></h2>
            </div>
            <button class="mobile-menu-toggle" aria-label="Toggle navigation menu">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
            <div class="nav-right">
                <div class="search-container">
                    <input type="text" id="site-search" placeholder="Search..." aria-label="Search">
                    <div id="search-results" class="search-results"></div>
                </div>
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
 * Perform search on site data
 */
async function searchSite(query) {
    if (!query || query.length < 2) return [];

    try {
        if (!window.siteData) {
            // Determine path to sitedata.json based on current location
            let path = 'sitedata.json';
            if (window.location.pathname.includes('/simulations/')) {
                path = '../../sitedata.json';
            } else if (window.location.pathname.includes('5_Symbols')) {
                path = '../sitedata.json';
            }
            
            const response = await fetch(path);
            window.siteData = await response.json();
        }
        
        // Basic search implementation
        const lowerQuery = query.toLowerCase();
        return window.siteData.filter(page => {
            return (page.title && page.title.toLowerCase().includes(lowerQuery)) || 
                   (page.content && page.content.toLowerCase().includes(lowerQuery));
        }).map(page => {
             // Create a snippet
             const contentIndex = page.content ? page.content.toLowerCase().indexOf(lowerQuery) : -1;
             let snippet = '';
             if (contentIndex > -1) {
                 const start = Math.max(0, contentIndex - 40);
                 const end = Math.min(page.content.length, contentIndex + 80);
                 snippet = (start > 0 ? '...' : '') + page.content.substring(start, end) + (end < page.content.length ? '...' : '');
             } else {
                 snippet = page.content ? page.content.substring(0, 100) + '...' : '';
             }
             return { ...page, snippet };
        }).slice(0, 5); // Limit results
    } catch (e) {
        console.error('Error searching site:', e);
        return [];
    }
}

/**
 * Initialize search functionality
 */
function initSearch() {
    const searchInput = document.getElementById('site-search');
    const searchResults = document.getElementById('search-results');

    if (searchInput && searchResults) {
        let debounceTimer;
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            const query = e.target.value;
            
            if (query.length === 0) {
                searchResults.style.display = 'none';
                return;
            }

            debounceTimer = setTimeout(async () => {
                const results = await searchSite(query);
                
                if (results.length > 0) {
                    // Fix links in search results
                    let pathPrefix = '';
                    if (window.location.pathname.includes('/simulations/')) {
                        pathPrefix = '../';
                    }

                    searchResults.innerHTML = results.map(result => {
                         const rawUrl = result.url.replace('5_Symbols/', ''); 
                         const finalUrl = pathPrefix + rawUrl;
                         return `
                        <div class="search-result-item">
                            <a href="${finalUrl}">
                                <h4>${result.title}</h4>
                                <p>${result.snippet}</p>
                            </a>
                        </div>
                    `}).join('');
                    searchResults.style.display = 'block';
                } else {
                    searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
                    searchResults.style.display = 'block';
                }
            }, 300);
        });

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
}

/**
 * Generate footer HTML
 */
function generateFooter() {
    // Determine path prefix based on current location
    let pathPrefix = '';
    if (window.location.pathname.includes('/simulations/')) {
        pathPrefix = '../';
    }

    const sectionsHTML = footerConfig.sections.map(section => {
        const titleDataI18n = section.titleKey ? ` data-i18n="${section.titleKey}"` : '';
        const contentHTML = section.content.map(item => {
            // Check if current page is Turkish
            const isTurkish = window.location.pathname.endsWith('-tr.html');

            // Helper to fix paths and handle language
            const fixPath = (href) => {
                if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) {
                    return href;
                }
                
                let finalHref = href;
                if (isTurkish && finalHref.endsWith('.html') && !finalHref.endsWith('-tr.html')) {
                    finalHref = finalHref.replace('.html', '-tr.html');
                } else if (isTurkish && finalHref.includes('.html#')) {
                    finalHref = finalHref.replace('.html', '-tr.html');
                }
                
                return pathPrefix + finalHref;
            };

            if (item.type === 'text') {
                const dataI18n = item.textKey ? ` data-i18n="${item.textKey}"` : '';
                return `<p${dataI18n}>${item.text}</p>`;
            } else if (item.type === 'link') {
                const dataI18n = item.textKey ? ` data-i18n="${item.textKey}"` : '';
                return `<li><a href="${fixPath(item.href)}"${dataI18n}>${item.text}</a></li>`;
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
                <p class="version-info" style="font-size: 0.8em; opacity: 0.7; margin-top: 5px;">v<span id="deploy-version">...</span></p>
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
        initSearch();
        displayVersion();
    });
} else {
    // DOM is already ready
    insertNavigation();
    insertFooter();
    initSearch();
    displayVersion();
}

/**
 * Fetch and display deployment version
 */
async function displayVersion() {
    const versionElement = document.getElementById('deploy-version');
    if (!versionElement) return;

    try {
        // Determine path to version.json based on current location
        let path = 'version.json';
        if (window.location.pathname.includes('/simulations/')) {
            path = '../../version.json';
        } else if (window.location.pathname.includes('5_Symbols')) {
            path = '../version.json';
        }
        
        const response = await fetch(path);
        if (!response.ok) throw new Error('Version file not found');
        const data = await response.json();
        versionElement.textContent = data.version;
    } catch (e) {
        // console.warn('Could not fetch version info:', e);
        versionElement.textContent = 'dev';
    }
}

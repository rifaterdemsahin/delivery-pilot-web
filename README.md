# Delivery Pilot - Enterprise AI Transformation Platform

A modern Platform as a Service (PaaS) website designed to help enterprises accelerate their AI transformation journey.

## Overview

Delivery Pilot is a comprehensive PaaS solution that enables enterprises to deploy, manage, and scale AI applications with confidence. Our platform simplifies the complexities of AI adoption, providing the tools and infrastructure needed for successful AI transformation.

## Features

- **Rapid Deployment**: Deploy AI models and applications in minutes
- **Enterprise Security**: Bank-grade security with compliance support (GDPR, SOC 2, HIPAA)
- **AI Analytics**: Real-time monitoring and comprehensive insights
- **Auto-Scaling**: Intelligent resource optimization
- **Easy Integration**: Seamless integration with existing tools and workflows
- **Expert Support**: 24/7 support from AI transformation experts
- **Bilingual Support**: Full Turkish and English language support with easy toggle switching

## Marketing Strategy

Delivery Pilot's growth strategy is built on two key pillars:

### Personal Brand Building on YouTube
The founder, Rifat Erdem Sahin, builds trust and credibility through consistent YouTube content creation, sharing AI transformation insights, DevOps tutorials, and enterprise technology demonstrations. This content-first marketing approach:
- Establishes thought leadership in AI transformation
- Generates inbound leads through educational content
- Reduces sales cycles by building trust before sales conversations
- Creates authentic connections with potential enterprise clients

Learn more on the [Founder page](founder.html).

### Scalable Partner Network for Enterprise Sales
Rather than building a large internal sales force, Delivery Pilot leverages a scalable partner network model:
- **Geographic Scalability**: Partners enable expansion across multiple markets without regional offices
- **Capacity Scalability**: Multiple partners can serve enterprise customers simultaneously
- **Relationship Scalability**: Partners leverage existing enterprise relationships for faster sales cycles
- **Enterprise Sales Efficiency**: Partners handle complex procurement processes and stakeholder coordination

Learn more on the [Partners page](partners.html).

## Getting Started

### Quick Start

Simply open `index.html` in a web browser to view the website locally.

For detailed setup instructions, see the [Environment Documentation](2_environment/README.md):

- **[Local Development](2_environment/local.md)**: Set up on your own machine
- **[GitHub Codespaces](2_environment/codespaces.md)**: Use cloud-based development
- **[GitHub Pages](2_environment/github_pages.md)**: Production hosting and deployment

### Development Tools

**Recommended VS Code Extensions:**
- **Live Server**: Real-time preview of HTML/CSS changes
- **Prettier**: Code formatting
- **ESLint**: JavaScript linting

**Quality Assurance:**
Run the automated sanity check before deployment:
```bash
chmod +x sanity-check.sh
./sanity-check.sh
```

See [4_formula/SANITY-CHECK-README.md](4_formula/SANITY-CHECK-README.md) for detailed information about the sanity check system.

### Live Hosting

To host this website:

1. **GitHub Pages** (Current): Automatically deploys from main branch to deliverypilot.net
2. **Netlify**: Connect your repository and deploy
3. **Vercel**: Import your repository and deploy
4. **Traditional Hosting**: Upload files to any web server

## Site Structure and Page Links

All pages are hosted on the **deliverpilot.net** domain. Below is the complete site structure organized by category.

**Note**: The root directory contains the primary `index.html` for production. The `5_Symbols/` directory contains a complete set of HTML pages used in the production build. Both sets are maintained for different deployment scenarios and testing purposes.

### 🏠 Core Pages

| Page | URL | Description |
|------|-----|-------------|
| **Homepage** | https://deliverypilot.net/ | Main landing page showcasing the AI transformation platform with hero section, features, and use cases |
| **Assessment** | https://deliverypilot.net/assessment.html | Interactive AI readiness assessment tool for enterprises |
| **Dashboard** | https://deliverypilot.net/dashboard.html | User dashboard to view and manage AI transformation assessments |
| **Sign In** | https://deliverypilot.net/signin.html | User authentication page for accessing the dashboard |

### 💻 Platform & Services

| Page | URL | Description |
|------|-----|-------------|
| **Onboarding** | https://deliverypilot.net/onboarding.html | Step-by-step guide for getting started with the platform |
| **Workshops** | https://deliverypilot.net/workshops.html | 10-step AI workshop process for building secure, explainable AI products |
| **Agile Transformation** | https://deliverypilot.net/agile-transformation.html | Agile methodology and transformation services |
| **Pricing** | https://deliverypilot.net/pricing.html | Pricing plans and packages for the platform |

### 🏢 Company Information

| Page | URL | Description |
|------|-----|-------------|
| **Founder** | https://deliverypilot.net/founder.html | Information about the company founder and vision |
| **Success Stories** | https://deliverypilot.net/success-stories.html | Case studies and client success stories |
| **Transformations** | https://deliverypilot.net/transformations.html | Examples of successful AI transformations |
| **Partners** | https://deliverypilot.net/partners.html | Strategic partners and integrations |
| **Previous Customers** | https://deliverypilot.net/previous-customers.html | Showcase of previous clients and testimonials |

### 📚 Resources & Support

| Page | URL | Description |
|------|-----|-------------|
| **FAQ** | https://deliverypilot.net/faq.html | Frequently asked questions about the platform |
| **Contact** | https://deliverypilot.net/contact.html | Contact form and information for getting in touch |
| **GTM Strategy** | [resources/gtm-strategy.md](resources/gtm-strategy.md) | Comprehensive go-to-market strategy and planning documentation |

### 🧪 Development & Testing

| Page | Description |
|------|-------------|
| **test-menu.html** | Testing page for navigation menu components (not in production) |

## Project Structure

```
delivery-pilot-web/
├── index.html              # Main homepage with hero section and features
├── 404.html                # Custom 404 error page
├── styles.css              # Main stylesheet
├── onboarding-styles.css   # Onboarding page specific styles
├── script.js               # Main JavaScript for interactivity and i18n
├── menu.js                 # Reusable navigation and footer components
├── sitemap.xml             # XML sitemap for search engines
├── robots.txt              # Robots.txt for crawler directives
├── sanity-check.sh         # Automated quality and validation checks
├── copilot.md              # Development best practices and coding standards
├── gemini.md               # Additional AI agent guidelines
├── MARKET-VALIDATION-STRATEGY.md           # Market validation approach
├── SANITY-CHECK-BUSINESS-MODEL-2025-12-14.md # Business model analysis
│
├── 1_real/                 # Business objectives and planning
│   ├── objectives.md       # OKRs and strategic objectives
│   └── todo.md             # Project status Kanban board
│
├── 2_environment/          # Environment setup documentation
│   ├── README.md           # Environment overview
│   ├── local.md            # Local development setup
│   ├── codespaces.md       # GitHub Codespaces configuration
│   ├── github.md           # GitHub workflow guidelines
│   └── github_pages.md     # GitHub Pages deployment info
│
├── 3_ui/                   # UI development prompts and guidelines
│   └── readme.md           # UI documentation
│
├── 4_formula/              # Process documentation and analysis
│   ├── SANITY-CHECK-README.md      # Sanity check guide
│   ├── SANITY-CHECK-REPORT.md      # Latest sanity check results
│   ├── MENU-USAGE.md               # Navigation menu documentation
│   ├── QUICK-START-MENUS.md        # Quick start for menus
│   ├── REFACTORING-SUMMARY.md      # Code refactoring history
│   ├── SEO-IMPROVEMENTS.md         # SEO optimization guide
│   ├── FIX_REPORT.md               # Bug fixes and resolutions
│   ├── business-analysis.md        # Comprehensive business analysis
│   └── customer_creation_stage.md  # Customer development stages
│
├── 5_Symbols/              # Complete set of production HTML pages
│   ├── index.html          # Alternative homepage
│   ├── assessment.html     # AI readiness assessment tool
│   ├── onboarding.html     # Platform onboarding guide
│   ├── workshops.html      # 10-step AI workshop process
│   ├── agile-transformation.html # Agile transformation services
│   ├── dashboard.html      # User dashboard for assessments
│   ├── signin.html         # User authentication page
│   ├── pricing.html        # Pricing plans and packages
│   ├── founder.html        # Founder information and vision
│   ├── success-stories.html    # Client success stories
│   ├── transformations.html    # AI transformation examples
│   ├── partners.html           # Strategic partners showcase
│   ├── previous-customers.html # Previous clients testimonials
│   ├── faq.html                # Frequently asked questions
│   ├── contact.html            # Contact form and information
│   ├── resources-knowledge-transfer.html    # Knowledge transfer resources (EN)
│   ├── resources-knowledge-transfer-tr.html # Knowledge transfer resources (TR)
│   └── readme.md           # Symbols directory documentation
│
├── 6_Semblance/            # Design and appearance guidelines
│   └── readme.md           # Semblance documentation
│
├── 7_Testing/              # Testing documentation and procedures
│   └── readme.md           # Testing guidelines
│
└── resources/              # Strategic planning and GTM documentation
    ├── README.md           # Resources directory overview
    └── gtm-strategy.md     # Comprehensive go-to-market strategy
```

### Directory Structure Philosophy

The project follows a **Real → Environment → UI → Formula → Symbols → Semblance → Testing** methodology:

1. **1_real**: Business reality, objectives, and strategic planning
2. **2_environment**: Development and deployment environment setup
3. **3_ui**: User interface development guidelines
4. **4_formula**: Processes, methodologies, and analytical documentation
5. **5_Symbols**: Complete set of production-ready HTML pages
6. **6_Semblance**: Design consistency and appearance standards
7. **7_Testing**: Quality assurance and testing procedures

### Navigation Structure

The site uses a hierarchical navigation menu defined in `menu.js`:

- **Home** → Main landing page
- **Platform** (dropdown)
  - Features → Platform capabilities and features
  - How It Works → Process and methodology
  - Use Cases → Industry-specific applications
- **Services** (dropdown)
  - Onboarding → Getting started guide
  - Workshops → 10-step AI workshop process
  - Agile Transformation → Agile services
- **Pricing** → Plans and pricing
- **Company** (dropdown)
  - About → Company information
  - Success Stories → Case studies
  - FAQ → Common questions
  - Founder → Founder profile
  - Transformations → Transformation examples
  - Partners → Partner ecosystem
- **Contact** → Get in touch
- **Sign In** → User authentication
- **Get Started** → Begin assessment (CTA button)

## SEO Features

The website is fully optimized for search engines with the following features:

### Meta Tags
- **Comprehensive meta descriptions** for all pages with relevant keywords
- **Open Graph tags** for enhanced social media sharing (Facebook, LinkedIn)
- **Twitter Card tags** for optimized Twitter/X sharing
- **Canonical URLs** to prevent duplicate content issues
- **Robots meta tags** for proper indexing control

### Structured Data (Schema.org)
- **Organization schema** with company information and contact details
- **WebSite schema** with search functionality
- **BreadcrumbList schema** for navigation hierarchy
- **Course schema** on the onboarding page for educational content
- **WebApplication schema** on the assessment page

### Search Engine Optimization
- **sitemap.xml** - XML sitemap listing all pages for search engine crawlers
- **robots.txt** - Properly configured crawler directives
- **Semantic HTML** structure with proper heading hierarchy (h1, h2, h3)
- **Keyword optimization** in titles, descriptions, and content
- **Mobile-responsive** design for better mobile search rankings

### How to Update SEO
1. **Update sitemap.xml**: When adding new pages, add them to the sitemap with proper priority and change frequency
2. **Meta tags**: Update meta descriptions and titles in each HTML file's `<head>` section
3. **Structured data**: Modify the JSON-LD scripts at the bottom of each page to reflect content changes

## Development Workflow

### Basic Workflow
1. **Pull changes**: `git pull`
2. **Create a branch**: `git checkout -b feature/your-feature`
3. **Make changes**: Edit files using your preferred editor
4. **Test locally**: Open in browser or use Live Server
5. **Run sanity check**: `./sanity-check.sh`
6. **Commit**: `git commit -m "Add feature"`
7. **Push**: `git push origin feature/your-feature`
8. **Create PR**: Submit pull request for review

### Code Quality Checks

Before committing, ensure your changes pass all checks:

```bash
# Run the comprehensive sanity check
./sanity-check.sh

# Check specific aspects:
# - File structure validation
# - HTML/CSS/JavaScript analysis
# - Security checks
# - SEO validation
# - Accessibility checks
# - Performance metrics
# - Link validation
```

The sanity check provides color-coded output:
- 🟢 **[OK]**: Everything is fine
- 🟡 **[WARNING]**: Minor issues to address
- 🔴 **[CRITICAL]**: Serious issues requiring immediate attention

See [SANITY-CHECK-README.md](4_formula/SANITY-CHECK-README.md) for detailed documentation.

## Internationalization (i18n)

The website supports both English and Turkish languages:

- **Language Toggle**: EN/TR buttons in the navigation bar allow users to switch languages
- **Persistent Preference**: Language choice is saved in browser localStorage
- **Comprehensive Coverage**: All pages support bilingual content including navigation, hero sections, features, and footers
- **Easy Maintenance**: Translations are managed in `script.js` using a structured JSON format

### How It Works

The translation system uses `data-i18n` attributes on HTML elements:

```html
<h1 data-i18n="hero.title">Transform Your Enterprise with AI</h1>
```

When users switch languages, JavaScript updates the content from the translations object in `script.js`:

```javascript
translations.tr.hero.title = "İşletmenizi Yapay Zeka ile Dönüştürün"
```

## Technologies Used

- HTML5
- CSS3 (with modern features like Grid and Flexbox)
- Vanilla JavaScript
- React (for assessment page)
- Responsive Design
- Schema.org Structured Data
- Open Graph Protocol
- i18n (Internationalization) with Turkish/English support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Common Issues

**404 Errors on GitHub Pages**
- Ensure file paths are correct and case-sensitive (e.g., `Image.png` vs `image.png`)
- Verify files are committed and pushed to the main branch

**Changes Not Showing**
- GitHub Pages deployment takes 1-2 minutes
- Try a hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- Clear browser cache

**Sanity Check Fails**
```bash
# Make script executable
chmod +x sanity-check.sh

# Run with bash explicitly
bash sanity-check.sh
```

**Live Server Not Working**
- Install the "Live Server" VS Code extension
- Right-click on `index.html` → "Open with Live Server"
- Ensure no other service is using port 5500

### Getting Help

1. Check the [FAQ page](https://deliverypilot.net/faq.html)
2. Review documentation in `2_environment/` and `4_formula/`
3. Check the [Project Status](1_real/todo.md) for known issues
4. Open an issue on GitHub with detailed information

## Business Strategy & Planning

This project includes comprehensive strategic documentation:

- **[Objectives & OKRs](1_real/objectives.md)**: Strategic objectives and key results
- **[Project Status](1_real/todo.md)**: Kanban board tracking progress
- **[Business Analysis](4_formula/business-analysis.md)**: Deep dive into business model and customer development
- **[Market Validation Strategy](MARKET-VALIDATION-STRATEGY.md)**: Go-to-market approach
- **[GTM Strategy](resources/gtm-strategy.md)**: Comprehensive go-to-market strategy

### Strategic Objectives

Three core objectives drive Delivery Pilot:

1. **Accelerate Enterprise AI Transformation**: Deploy and scale AI applications with confidence
2. **Bridge the AI Skills Gap (RAISE)**: Solve "Rapid AI Increases Skills Expectations" challenge
3. **Build Trust and Community Growth**: Expand through YouTube content and partner network

## Development Best Practices

For comprehensive coding standards and best practices, see [copilot.md](copilot.md). This guide covers:
- HTML, CSS, and JavaScript best practices
- SEO optimization techniques
- Security guidelines
- Performance optimization
- Accessibility standards
- Development workflow
- Quality assurance checklist

Additional process documentation in [4_formula/](4_formula/):
- **[Menu Usage](4_formula/MENU-USAGE.md)**: Navigation system documentation
- **[SEO Improvements](4_formula/SEO-IMPROVEMENTS.md)**: SEO optimization guide
- **[Refactoring Summary](4_formula/REFACTORING-SUMMARY.md)**: Code refactoring history

## Contributing

Contributions are welcome! Please read [copilot.md](copilot.md) for our coding standards and best practices before submitting a Pull Request.

## Project Health & Metrics

**Current Status**: 🟢 Active Development

**Quality Metrics** (from latest sanity check):
- Overall Health Score: 85/100 (Good)
- Critical Issues: 0
- Warnings: Minor (manageable)
- Test Coverage: Comprehensive

**Key Features Status**:
- ✅ SEO Optimization: Complete
- ✅ Bilingual Support (EN/TR): Active
- ✅ Responsive Design: Fully implemented
- ✅ Accessibility: WCAG compliant
- ✅ Performance: Optimized

## Deployment

**Production URL**: https://deliverypilot.net

**Deployment Method**: Automatic via GitHub Pages
- **Trigger**: Push to `main` branch
- **Build Time**: 1-2 minutes
- **Status**: Check "Deployments" section on GitHub repository

**Custom Domain Configuration**: Configured in repository settings

## License

This project is available for use in enterprise AI transformation initiatives.

---

## Project Information

**Repository**: [rifaterdemsahin/delivery-pilot-web](https://github.com/rifaterdemsahin/delivery-pilot-web)

**Website**: [deliverypilot.net](https://deliverypilot.net)

**Last Major Update**: December 2025

**Technology Stack**: HTML5, CSS3, Vanilla JavaScript, React (assessment tool)

**Maintained By**: Delivery Pilot Team

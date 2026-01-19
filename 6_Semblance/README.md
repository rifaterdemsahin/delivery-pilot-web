# Semblance Folder - Sanity Check Reports

This folder contains comprehensive sanity check reports for the Delivery Pilot website.

## About Sanity Checks

The sanity checks scan all HTML pages across the website and provide detailed analysis of:
- HTML validation (DOCTYPE, meta tags, character encoding)
- SEO optimization (meta descriptions, titles, Open Graph tags)
- Accessibility (alt attributes, semantic HTML, ARIA)
- Link validation (broken internal links)
- Code quality (inline styles, file sizes)
- Performance metrics

## Running a Sanity Check

To generate a new sanity check report, run the comprehensive sanity check script from the repository root:

```bash
./comprehensive-sanity-check.sh
```

This will automatically:
1. Scan all HTML pages in the repository (including subdirectories)
2. Perform comprehensive checks on each page
3. Generate a detailed markdown report with today's date
4. Save the report to `6_Semblance/sanity-check-YYYY-MM-DD.md`

## Report Structure

Each report includes:

### Executive Summary
- Quick stats (pages scanned, issues found, clean pages)
- Overall assessment status (🟢 Good / 🟡 Needs Improvement / 🔴 Needs Immediate Attention)

### Page-by-Page Analysis
- Detailed findings for each HTML page
- Issues categorized as Critical (❌) or Warnings (⚠️)
- Clean pages marked with ✅

### Recommendations
- Prioritized action items (High/Medium/Low priority)
- Specific improvements to deliver value proposition

### Value Proposition Delivery Status
- Current state assessment
- What needs to happen for success
- Actionable next steps

## Report Files

Reports are named with the date they were generated:
- `sanity-check-2026-01-19.md` - Report from January 19, 2026
- Future reports will follow the same pattern: `sanity-check-YYYY-MM-DD.md`

## Frequency

It's recommended to run sanity checks:
- Before major releases
- After significant content updates
- Monthly for ongoing quality monitoring
- When investigating quality issues

## Interpreting Results

- **Critical Issues**: Must be fixed immediately (impacts functionality)
- **Warnings**: Should be addressed to improve quality (impacts UX, SEO, accessibility)
- **Clean Pages**: No issues found, meets all quality standards

## Version History

- 2026-01-19: Initial comprehensive sanity check report generated

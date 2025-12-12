#!/bin/bash
# Sanity Check Script for Delivery Pilot Web Project
# This script performs comprehensive checks on the project

echo "=========================================="
echo "DELIVERY PILOT WEB - SANITY CHECK"
echo "=========================================="
echo ""

# Initialize counters
TOTAL_ISSUES=0
WARNINGS=0
CRITICAL=0

# Colors for output
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Function to print colored output
print_critical() {
    echo -e "${RED}[CRITICAL]${NC} $1"
    ((CRITICAL++))
    ((TOTAL_ISSUES++))
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
    ((WARNINGS++))
    ((TOTAL_ISSUES++))
}

print_success() {
    echo -e "${GREEN}[OK]${NC} $1"
}

echo "1. FILE STRUCTURE CHECKS"
echo "=========================================="

# Check if critical files exist
if [ -f "index.html" ]; then
    print_success "index.html exists"
else
    print_critical "index.html is missing"
fi

if [ -f "script.js" ]; then
    print_success "script.js exists"
else
    print_critical "script.js is missing"
fi

if [ -f "styles.css" ]; then
    print_success "styles.css exists"
else
    print_critical "styles.css is missing"
fi

if [ -f "menu.js" ]; then
    print_success "menu.js exists"
else
    print_critical "menu.js is missing"
fi

# Check for sitemap and robots.txt
if [ -f "sitemap.xml" ]; then
    print_success "sitemap.xml exists"
else
    print_warning "sitemap.xml is missing (SEO impact)"
fi

if [ -f "robots.txt" ]; then
    print_success "robots.txt exists"
else
    print_warning "robots.txt is missing (SEO impact)"
fi

echo ""
echo "2. HTML FILE ANALYSIS"
echo "=========================================="

# Count HTML files
HTML_COUNT=$(find . -maxdepth 1 -name "*.html" | wc -l)
echo "Total HTML files: $HTML_COUNT"

# Check for DOCTYPE declarations
echo "Checking DOCTYPE declarations..."
for file in *.html; do
    if ! grep -q "<!DOCTYPE html>" "$file"; then
        print_warning "Missing DOCTYPE in $file"
    fi
done

# Check for viewport meta tags
echo "Checking viewport meta tags..."
VIEWPORT_COUNT=$(grep -l 'name="viewport"' *.html | wc -l)
if [ $VIEWPORT_COUNT -eq $HTML_COUNT ]; then
    print_success "All HTML files have viewport meta tags"
else
    print_warning "Not all HTML files have viewport meta tags ($VIEWPORT_COUNT/$HTML_COUNT)"
fi

# Check for lang attribute
echo "Checking lang attributes..."
for file in *.html; do
    if ! grep -q '<html lang=' "$file"; then
        print_warning "Missing lang attribute in $file"
    fi
done

# Check for meta charset
echo "Checking meta charset..."
for file in *.html; do
    if ! grep -q 'charset="UTF-8"' "$file"; then
        print_warning "Missing UTF-8 charset in $file"
    fi
done

# Check for inline styles (maintainability issue)
echo "Checking for inline styles..."
INLINE_STYLES=$(grep -c 'style=' *.html 2>/dev/null | awk -F: '{sum+=$2} END {print sum}')
if [ $INLINE_STYLES -gt 10 ]; then
    print_warning "Found $INLINE_STYLES inline style attributes (consider moving to CSS)"
elif [ $INLINE_STYLES -gt 0 ]; then
    echo "Found $INLINE_STYLES inline style attributes (acceptable)"
fi

echo ""
echo "3. JAVASCRIPT ANALYSIS"
echo "=========================================="

# Count JS files
JS_COUNT=$(find . -maxdepth 1 -name "*.js" | wc -l)
echo "Total JavaScript files: $JS_COUNT"

# Check for console.log statements
echo "Checking for console statements..."
CONSOLE_COUNT=$(grep -c "console\." *.js 2>/dev/null | awk -F: '{sum+=$2} END {print sum}')
if [ $CONSOLE_COUNT -gt 0 ]; then
    print_warning "Found $CONSOLE_COUNT console statements (should be removed in production)"
else
    print_success "No console statements found"
fi

# Check for TODO/FIXME comments
echo "Checking for TODO/FIXME comments..."
TODO_COUNT=$(grep -ri "TODO\|FIXME\|XXX\|HACK" *.js *.html *.css 2>/dev/null | wc -l)
if [ $TODO_COUNT -gt 0 ]; then
    echo "Found $TODO_COUNT TODO/FIXME comments"
else
    print_success "No TODO/FIXME comments found"
fi

# Check for undefined variables
echo "Checking for potential undefined variables..."
UNDEFINED_COUNT=$(grep -n "undefined" *.js 2>/dev/null | wc -l)
if [ $UNDEFINED_COUNT -gt 0 ]; then
    echo "Found $UNDEFINED_COUNT references to 'undefined'"
fi

echo ""
echo "4. CSS ANALYSIS"
echo "=========================================="

# Count CSS files
CSS_COUNT=$(find . -maxdepth 1 -name "*.css" | wc -l)
echo "Total CSS files: $CSS_COUNT"

# Check CSS file sizes
for file in *.css; do
    SIZE=$(wc -l < "$file")
    if [ $SIZE -gt 1000 ]; then
        print_warning "$file is large ($SIZE lines) - consider splitting"
    else
        echo "$file: $SIZE lines"
    fi
done

# Check for media queries (responsive design)
echo "Checking for responsive design..."
MEDIA_QUERIES=$(grep -c "@media" styles.css 2>/dev/null)
if [ $MEDIA_QUERIES -gt 0 ]; then
    print_success "Found $MEDIA_QUERIES media queries (responsive design detected)"
else
    print_warning "No media queries found in styles.css"
fi

echo ""
echo "5. SECURITY CHECKS"
echo "=========================================="

# Check for external CDN dependencies
echo "Checking external dependencies..."
CDN_COUNT=$(grep -rh "https://" *.html | grep -E "(cdn|unpkg|jsdelivr)" | wc -l)
if [ $CDN_COUNT -gt 0 ]; then
    echo "Found $CDN_COUNT external CDN references"
    print_warning "External CDN dependencies detected (consider SRI hashes)"
fi

# Check for missing alt attributes in images
echo "Checking image alt attributes..."
IMG_NO_ALT=$(grep -o '<img[^>]*>' *.html | grep -v 'alt=' | wc -l)
if [ $IMG_NO_ALT -gt 0 ]; then
    print_warning "Found $IMG_NO_ALT images without alt attributes (accessibility issue)"
else
    print_success "All images have alt attributes"
fi

# Check for hardcoded credentials or API keys
echo "Checking for hardcoded credentials..."
CREDS=$(grep -ri "password\|api_key\|secret\|token" *.js *.html 2>/dev/null | grep -v "password-input\|password-field\|password:\|api-key" | wc -l)
if [ $CREDS -gt 0 ]; then
    print_critical "Potential hardcoded credentials found - manual review required"
else
    print_success "No obvious hardcoded credentials found"
fi

echo ""
echo "6. SEO CHECKS"
echo "=========================================="

# Check for meta descriptions
echo "Checking meta descriptions..."
META_DESC_COUNT=$(grep -l 'name="description"' *.html | wc -l)
echo "Pages with meta descriptions: $META_DESC_COUNT/$HTML_COUNT"
if [ $META_DESC_COUNT -lt $HTML_COUNT ]; then
    print_warning "Not all pages have meta descriptions"
fi

# Check for Open Graph tags
echo "Checking Open Graph tags..."
OG_COUNT=$(grep -l 'property="og:' *.html | wc -l)
if [ $OG_COUNT -gt 0 ]; then
    print_success "Found Open Graph tags in $OG_COUNT pages"
else
    print_warning "No Open Graph tags found (impacts social sharing)"
fi

# Check sitemap validity
if [ -f "sitemap.xml" ]; then
    echo "Checking sitemap.xml..."
    SITEMAP_URLS=$(grep -c "<loc>" sitemap.xml)
    echo "Sitemap contains $SITEMAP_URLS URLs"
fi

echo ""
echo "7. ACCESSIBILITY CHECKS"
echo "=========================================="

# Check for semantic HTML
echo "Checking semantic HTML usage..."
SEMANTIC_COUNT=$(grep -rho '<\(header\|nav\|main\|section\|article\|aside\|footer\)' *.html | wc -l)
if [ $SEMANTIC_COUNT -gt 10 ]; then
    print_success "Good use of semantic HTML ($SEMANTIC_COUNT elements)"
else
    print_warning "Limited semantic HTML usage ($SEMANTIC_COUNT elements)"
fi

# Check for ARIA attributes
echo "Checking ARIA attributes..."
ARIA_COUNT=$(grep -ro 'aria-[a-z]*=' *.html | wc -l)
if [ $ARIA_COUNT -gt 0 ]; then
    echo "Found $ARIA_COUNT ARIA attributes"
else
    print_warning "No ARIA attributes found (may impact accessibility)"
fi

echo ""
echo "8. PERFORMANCE CHECKS"
echo "=========================================="

# Check total code size
TOTAL_SIZE=$(du -sh . | cut -f1)
echo "Total project size: $TOTAL_SIZE"

# Count total lines of code
TOTAL_LINES=$(wc -l *.html *.css *.js 2>/dev/null | tail -1 | awk '{print $1}')
echo "Total lines of code: $TOTAL_LINES"

# Check for large files
echo "Checking for large files..."
find . -maxdepth 1 -type f -size +100k -exec ls -lh {} \; | awk '{print $9 ": " $5}' | while read line; do
    print_warning "Large file detected: $line"
done

echo ""
echo "9. LINK VALIDATION"
echo "=========================================="

# Check for potential broken internal links
echo "Checking internal links..."
BROKEN_LINKS=0
grep -oh 'href="[^"]*\.html[^"]*"' *.html | sed 's/href="//;s/"$//' | sed 's/#.*//' | sort -u | while read link; do
    # Skip external URLs
    if [[ $link == http* ]]; then
        continue
    fi
    if [ ! -f "$link" ]; then
        print_warning "Potential broken link: $link"
        ((BROKEN_LINKS++))
    fi
done

echo ""
echo "10. FILENAME CHECKS"
echo "=========================================="

# Check for typos in common filenames
if [ -f "assesment.html" ]; then
    print_warning "Filename typo: 'assesment.html' (should be 'assessment.html')"
    TYPO_REFS=$(grep -r "assesment.html" *.html *.js *.md sitemap.xml 2>/dev/null | wc -l)
    echo "  Found $TYPO_REFS references to this misspelled filename"
fi

echo ""
echo "=========================================="
echo "SANITY CHECK SUMMARY"
echo "=========================================="
echo ""
echo "Total Issues Found: $TOTAL_ISSUES"
echo "  - Critical: $CRITICAL"
echo "  - Warnings: $WARNINGS"
echo ""

if [ $CRITICAL -gt 0 ]; then
    echo -e "${RED}Status: FAILED${NC} - Critical issues need immediate attention"
    exit 1
elif [ $WARNINGS -gt 10 ]; then
    echo -e "${YELLOW}Status: NEEDS ATTENTION${NC} - Several warnings to address"
    exit 0
else
    echo -e "${GREEN}Status: PASSED${NC} - Project is in good shape"
    exit 0
fi

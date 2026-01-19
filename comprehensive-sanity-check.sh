#!/bin/bash
# Comprehensive Sanity Check Script for All Pages
# Generates a detailed markdown report in the 6_Semblance folder

# Get today's date for filename
TODAY=$(date +%Y-%m-%d)
OUTPUT_FILE="6_Semblance/sanity-check-${TODAY}.md"

# Initialize the report
cat > "$OUTPUT_FILE" << 'EOF'
# Comprehensive Sanity Check Report
EOF

echo "Date: $(date '+%Y-%m-%d %H:%M:%S')" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Initialize counters
TOTAL_PAGES=0
PAGES_WITH_ISSUES=0
TOTAL_ISSUES=0
CRITICAL_ISSUES=0
WARNING_ISSUES=0

echo "## Executive Summary" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Count all HTML pages
HTML_FILES=$(find . -type f -name "*.html" | sort)
TOTAL_PAGES=$(echo "$HTML_FILES" | wc -l)

echo "- **Total Pages Scanned**: $TOTAL_PAGES" >> "$OUTPUT_FILE"
echo "- **Scan Date**: $(date '+%Y-%m-%d')" >> "$OUTPUT_FILE"
echo "- **Scan Time**: $(date '+%H:%M:%S')" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Initialize temporary files for storing issues
TEMP_ISSUES=$(mktemp)
TEMP_WARNINGS=$(mktemp)

echo "## Page-by-Page Analysis" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Function to check a single page
check_page() {
    local file="$1"
    local page_issues=0
    local page_warnings=0
    
    echo "### Page: \`$file\`" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
    
    # Check if file exists and is readable
    if [ ! -r "$file" ]; then
        echo "- ❌ **CRITICAL**: File not readable" >> "$OUTPUT_FILE"
        echo "$file: File not readable" >> "$TEMP_ISSUES"
        ((page_issues++))
        ((CRITICAL_ISSUES++))
    fi
    
    # Check DOCTYPE
    if ! grep -q "<!DOCTYPE html>" "$file" 2>/dev/null; then
        echo "- ⚠️ Missing DOCTYPE declaration" >> "$OUTPUT_FILE"
        echo "$file: Missing DOCTYPE" >> "$TEMP_WARNINGS"
        ((page_warnings++))
        ((WARNING_ISSUES++))
    fi
    
    # Check for lang attribute
    if ! grep -q '<html lang=' "$file" 2>/dev/null; then
        echo "- ⚠️ Missing lang attribute in html tag" >> "$OUTPUT_FILE"
        echo "$file: Missing lang attribute" >> "$TEMP_WARNINGS"
        ((page_warnings++))
        ((WARNING_ISSUES++))
    fi
    
    # Check for charset
    if ! grep -q 'charset="UTF-8"' "$file" 2>/dev/null; then
        echo "- ⚠️ Missing or incorrect charset declaration" >> "$OUTPUT_FILE"
        echo "$file: Missing UTF-8 charset" >> "$TEMP_WARNINGS"
        ((page_warnings++))
        ((WARNING_ISSUES++))
    fi
    
    # Check for viewport meta tag
    if ! grep -q 'name="viewport"' "$file" 2>/dev/null; then
        echo "- ⚠️ Missing viewport meta tag (mobile responsiveness)" >> "$OUTPUT_FILE"
        echo "$file: Missing viewport meta tag" >> "$TEMP_WARNINGS"
        ((page_warnings++))
        ((WARNING_ISSUES++))
    fi
    
    # Check for title tag
    if ! grep -q '<title>' "$file" 2>/dev/null; then
        echo "- ❌ **CRITICAL**: Missing title tag (SEO impact)" >> "$OUTPUT_FILE"
        echo "$file: Missing title tag" >> "$TEMP_ISSUES"
        ((page_issues++))
        ((CRITICAL_ISSUES++))
    else
        # Check if title is empty or too short
        TITLE_LENGTH=$(grep -o '<title>[^<]*</title>' "$file" 2>/dev/null | sed 's/<title>//;s/<\/title>//' | tr -d '\n' | wc -c)
        if [ "$TITLE_LENGTH" -lt 10 ]; then
            echo "- ⚠️ Title tag is too short (SEO impact)" >> "$OUTPUT_FILE"
            echo "$file: Title too short" >> "$TEMP_WARNINGS"
            ((page_warnings++))
            ((WARNING_ISSUES++))
        fi
    fi
    
    # Check for meta description
    if ! grep -q 'name="description"' "$file" 2>/dev/null; then
        echo "- ⚠️ Missing meta description (SEO impact)" >> "$OUTPUT_FILE"
        echo "$file: Missing meta description" >> "$TEMP_WARNINGS"
        ((page_warnings++))
        ((WARNING_ISSUES++))
    fi
    
    # Check for Open Graph tags
    if ! grep -q 'property="og:' "$file" 2>/dev/null; then
        echo "- ⚠️ Missing Open Graph tags (social sharing impact)" >> "$OUTPUT_FILE"
        echo "$file: Missing OG tags" >> "$TEMP_WARNINGS"
        ((page_warnings++))
        ((WARNING_ISSUES++))
    fi
    
    # Check for images without alt attributes
    IMG_NO_ALT=$(grep -o '<img[^>]*>' "$file" 2>/dev/null | grep -v 'alt=' | wc -l)
    if [ "$IMG_NO_ALT" -gt 0 ]; then
        echo "- ⚠️ Found $IMG_NO_ALT image(s) without alt attribute (accessibility)" >> "$OUTPUT_FILE"
        echo "$file: $IMG_NO_ALT images without alt" >> "$TEMP_WARNINGS"
        ((page_warnings++))
        ((WARNING_ISSUES++))
    fi
    
    # Check for broken internal links
    LINKS=$(grep -oh 'href="[^"]*\.html[^"]*"' "$file" 2>/dev/null | sed 's/href="//;s/"$//' | sed 's/#.*//')
    for link in $LINKS; do
        # Skip external URLs and empty links
        if [[ $link == http* ]] || [ -z "$link" ]; then
            continue
        fi
        
        # Construct full path relative to current file's directory
        FILE_DIR=$(dirname "$file")
        if [[ $link == /* ]]; then
            # Absolute path from repo root
            LINK_PATH=".${link}"
        else
            # Relative path
            LINK_PATH="${FILE_DIR}/${link}"
        fi
        
        # Check if the resolved path exists (suppress realpath errors for non-existent paths)
        if [ -e "$LINK_PATH" ]; then
            # Path exists, no issue
            continue
        elif ! realpath -q "$LINK_PATH" &>/dev/null; then
            # Path doesn't exist
            echo "- ⚠️ Potential broken internal link: \`$link\`" >> "$OUTPUT_FILE"
            echo "$file: Broken link to $link" >> "$TEMP_WARNINGS"
            ((page_warnings++))
            ((WARNING_ISSUES++))
        fi
    done
    
    # Check for inline styles (maintainability)
    INLINE_STYLES=$(grep -o 'style=' "$file" 2>/dev/null | wc -l)
    if [ "$INLINE_STYLES" -gt 5 ]; then
        echo "- ⚠️ Excessive inline styles ($INLINE_STYLES occurrences)" >> "$OUTPUT_FILE"
        echo "$file: $INLINE_STYLES inline styles" >> "$TEMP_WARNINGS"
        ((page_warnings++))
        ((WARNING_ISSUES++))
    fi
    
    # Check file size
    FILE_SIZE=$(wc -c < "$file")
    if [ "$FILE_SIZE" -gt 100000 ]; then
        SIZE_KB=$((FILE_SIZE / 1024))
        echo "- ⚠️ Large file size (${SIZE_KB}KB) - may affect performance" >> "$OUTPUT_FILE"
        echo "$file: Large file ${SIZE_KB}KB" >> "$TEMP_WARNINGS"
        ((page_warnings++))
        ((WARNING_ISSUES++))
    fi
    
    # Summary for this page
    if [ "$page_issues" -eq 0 ] && [ "$page_warnings" -eq 0 ]; then
        echo "- ✅ **Status**: All checks passed" >> "$OUTPUT_FILE"
    else
        echo "- 📊 **Status**: $page_issues critical issue(s), $page_warnings warning(s)" >> "$OUTPUT_FILE"
        ((PAGES_WITH_ISSUES++))
    fi
    
    echo "" >> "$OUTPUT_FILE"
    
    TOTAL_ISSUES=$((TOTAL_ISSUES + page_issues + page_warnings))
}

# Process all HTML files
echo "Scanning $TOTAL_PAGES HTML pages..."
while IFS= read -r file; do
    check_page "$file"
done <<< "$HTML_FILES"

# Add summary statistics
sed -i "/## Executive Summary/a\\
\\
### Quick Stats\\
\\
- **Pages with Issues**: $PAGES_WITH_ISSUES / $TOTAL_PAGES\\
- **Total Issues Found**: $TOTAL_ISSUES\\
- **Critical Issues**: $CRITICAL_ISSUES\\
- **Warnings**: $WARNING_ISSUES\\
- **Clean Pages**: $((TOTAL_PAGES - PAGES_WITH_ISSUES))\\
" "$OUTPUT_FILE"

# Add overall assessment section
echo "## Overall Assessment" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

if [ "$CRITICAL_ISSUES" -gt 0 ]; then
    echo "### 🔴 Status: NEEDS IMMEDIATE ATTENTION" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
    echo "The website has **$CRITICAL_ISSUES critical issue(s)** that require immediate attention." >> "$OUTPUT_FILE"
elif [ "$WARNING_ISSUES" -gt 10 ]; then
    echo "### 🟡 Status: NEEDS IMPROVEMENT" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
    echo "The website has **$WARNING_ISSUES warning(s)** that should be addressed to improve quality." >> "$OUTPUT_FILE"
else
    echo "### 🟢 Status: GOOD" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
    echo "The website is in good shape with only minor issues to address." >> "$OUTPUT_FILE"
fi

echo "" >> "$OUTPUT_FILE"

# Add recommendations section
echo "## Recommendations for Value Proposition Delivery" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "To effectively deliver the value proposition of Delivery Pilot as an enterprise AI transformation platform, the following improvements are recommended:" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "### High Priority" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

if [ "$CRITICAL_ISSUES" -gt 0 ]; then
    echo "1. **Fix Critical Issues**: Address all $CRITICAL_ISSUES critical issue(s) immediately" >> "$OUTPUT_FILE"
fi

echo "2. **SEO Optimization**: Ensure all pages have proper meta descriptions, titles, and Open Graph tags" >> "$OUTPUT_FILE"
echo "3. **Accessibility**: Add alt attributes to all images and improve semantic HTML usage" >> "$OUTPUT_FILE"
echo "4. **Mobile Responsiveness**: Ensure all pages have viewport meta tags" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "### Medium Priority" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "1. **Link Validation**: Fix all broken internal links to improve user experience" >> "$OUTPUT_FILE"
echo "2. **Performance**: Optimize large files to improve page load times" >> "$OUTPUT_FILE"
echo "3. **Code Quality**: Reduce inline styles and move them to CSS files" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "### Low Priority" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "1. **Social Sharing**: Add Open Graph tags to all pages for better social media integration" >> "$OUTPUT_FILE"
echo "2. **Internationalization**: Ensure consistent language attributes across all pages" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Add value proposition delivery section
echo "## Value Proposition Delivery Status" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "### Current State" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "The Delivery Pilot website serves as the primary marketing and educational platform for enterprise AI transformation. Based on this sanity check:" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "- **Content Coverage**: $TOTAL_PAGES pages covering various aspects of the platform" >> "$OUTPUT_FILE"
echo "- **Technical Quality**: " >> "$OUTPUT_FILE"

if [ "$CRITICAL_ISSUES" -eq 0 ] && [ "$WARNING_ISSUES" -lt 20 ]; then
    echo "  - ✅ Good technical foundation with minor improvements needed" >> "$OUTPUT_FILE"
elif [ "$CRITICAL_ISSUES" -eq 0 ]; then
    echo "  - ⚠️ Solid foundation but several areas need improvement" >> "$OUTPUT_FILE"
else
    echo "  - ❌ Technical issues present that may impact user experience" >> "$OUTPUT_FILE"
fi

echo "- **SEO Readiness**: " >> "$OUTPUT_FILE"
PAGES_WITH_META_DESC=$(grep -l 'name="description"' $(find . -name "*.html") 2>/dev/null | wc -l)
SEO_PERCENTAGE=$((PAGES_WITH_META_DESC * 100 / TOTAL_PAGES))
echo "  - $SEO_PERCENTAGE% of pages have meta descriptions" >> "$OUTPUT_FILE"

echo "- **Accessibility**: " >> "$OUTPUT_FILE"
TOTAL_IMGS=$(grep -oh '<img[^>]*>' $(find . -name "*.html") 2>/dev/null | wc -l)
IMGS_WITHOUT_ALT=$(grep -oh '<img[^>]*>' $(find . -name "*.html") 2>/dev/null | grep -v 'alt=' | wc -l)
if [ "$IMGS_WITHOUT_ALT" -gt 0 ]; then
    echo "  - Found $IMGS_WITHOUT_ALT images without alt tags out of $TOTAL_IMGS total images" >> "$OUTPUT_FILE"
else
    echo "  - All images have alt attributes" >> "$OUTPUT_FILE"
fi

echo "" >> "$OUTPUT_FILE"
echo "### What Needs to Happen" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "To effectively deliver the value proposition of helping enterprises accelerate their AI transformation journey:" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "1. **Fix Critical Technical Issues**: Ensure all pages are technically sound and accessible" >> "$OUTPUT_FILE"
echo "2. **Optimize for Discovery**: Improve SEO elements so potential clients can find the platform" >> "$OUTPUT_FILE"
echo "3. **Enhance User Experience**: Fix broken links and improve navigation" >> "$OUTPUT_FILE"
echo "4. **Ensure Accessibility**: Make content accessible to all users including those with disabilities" >> "$OUTPUT_FILE"
echo "5. **Optimize Performance**: Improve page load times for better user engagement" >> "$OUTPUT_FILE"
echo "6. **Maintain Quality**: Regularly run sanity checks to catch issues early" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Add conclusion
echo "## Conclusion" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "This comprehensive sanity check has analyzed all $TOTAL_PAGES pages of the Delivery Pilot website. " >> "$OUTPUT_FILE"
echo "The findings provide a clear roadmap for improving the technical quality and user experience of the platform. " >> "$OUTPUT_FILE"
echo "By addressing the identified issues, the website will be better positioned to deliver its value proposition " >> "$OUTPUT_FILE"
echo "of helping enterprises accelerate their AI transformation journey." >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "---" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "*Report generated on $(date '+%Y-%m-%d at %H:%M:%S')*" >> "$OUTPUT_FILE"

# Clean up temporary files
rm -f "$TEMP_ISSUES" "$TEMP_WARNINGS"

# Print summary to console
echo ""
echo "=========================================="
echo "COMPREHENSIVE SANITY CHECK COMPLETE"
echo "=========================================="
echo ""
echo "Total Pages Scanned: $TOTAL_PAGES"
echo "Pages with Issues: $PAGES_WITH_ISSUES"
echo "Critical Issues: $CRITICAL_ISSUES"
echo "Warnings: $WARNING_ISSUES"
echo ""
echo "Report saved to: $OUTPUT_FILE"
echo ""

if [ "$CRITICAL_ISSUES" -gt 0 ]; then
    echo "Status: NEEDS IMMEDIATE ATTENTION"
    exit 1
else
    echo "Status: PASSED"
    exit 0
fi

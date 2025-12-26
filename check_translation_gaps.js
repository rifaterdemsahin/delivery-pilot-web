const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '5_Symbols');
const fixMode = process.argv.includes('--fix');

function getHtmlFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getHtmlFiles(filePath));
        } else {
            if (path.extname(file) === '.html') {
                results.push(filePath);
            }
        }
    });
    return results;
}

function checkGaps() {
    console.log('Checking for missing Turkish translations...');
    const allFiles = getHtmlFiles(contentDir);
    
    // Filter for English files (not ending in -tr.html) and exclude special internal files if needed
    const enFiles = allFiles.filter(f => !f.endsWith('-tr.html') && !f.includes('simulations/')); 
    
    let missingCount = 0;

    enFiles.forEach(enFile => {
        const dir = path.dirname(enFile);
        const ext = path.extname(enFile);
        const name = path.basename(enFile, ext);
        
        const trFilename = `${name}-tr${ext}`;
        const trFilePath = path.join(dir, trFilename);

        if (!fs.existsSync(trFilePath)) {
            missingCount++;
            console.log(`[MISSING] ${trFilename} (for ${path.relative(process.cwd(), enFile)})`);
            
            if (fixMode) {
                try {
                    fs.copyFileSync(enFile, trFilePath);
                    console.log(`  [FIXED] Created ${trFilename}`);
                    
                    // Optional: Basic content update to indicate it's a copy
                    let content = fs.readFileSync(trFilePath, 'utf8');
                    content = content.replace(/<html lang="en">/g, '<html lang="tr">');
                    fs.writeFileSync(trFilePath, content);
                    
                } catch (err) {
                    console.error(`  [ERROR] Failed to create ${trFilename}: ${err.message}`);
                }
            }
        }
    });

    console.log('\nSummary:');
    console.log(`Total English files checked: ${enFiles.length}`);
    console.log(`Missing Turkish files: ${missingCount}`);
    
    if (missingCount > 0 && !fixMode) {
        console.log('\nTo create missing files automatically, run:');
        console.log('node check_translation_gaps.js --fix');
    } else if (missingCount > 0 && fixMode) {
        console.log('\nGap fixing complete. Please translate the newly created files.');
    } else {
        console.log('No gaps found! All English files have a corresponding -tr version.');
    }
}

checkGaps();

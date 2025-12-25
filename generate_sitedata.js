const fs = require("fs");
const path = require("path");

const contentDir = path.join(__dirname, "5_Symbols");
const outputFile = path.join(__dirname, "sitedata.json");

// Helper to strip HTML tags and get text content
function stripHtml(html) {
  // Remove scripts and styles first
  html = html.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gim, "");
  html = html.replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gim, "");

  // Replace <br> with space
  html = html.replace(/<br\s*\/?>/gi, " ");

  // Strip all tags
  let text = html.replace(/<[^>]+>/g, " ");

  // Decode HTML entities (basic ones)
  text = text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  // Collapse whitespace
  return text.replace(/\s+/g, " ").trim();
}

// Helper to extract title
function extractTitle(html) {
  const match = html.match(/<title>(.*?)<\/title>/i);
  return match ? match[1] : "Untitled Page";
}

// Helper to recursively get all HTML files
function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else {
      if (path.extname(file) === ".html") {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

function generateSiteData() {
  const siteData = [];

  if (!fs.existsSync(contentDir)) {
    console.error(`Directory not found: ${contentDir}`);
    return;
  }

  const files = getAllHtmlFiles(contentDir);

  files.forEach((filePath) => {
    const content = fs.readFileSync(filePath, "utf8");

    const title = extractTitle(content);
    const textContent = stripHtml(content); // Basic implementation

    // Calculate relative path for URL
    const relativePath = path.relative(path.dirname(contentDir), filePath);

    // Only add if there's actual content
    if (textContent.length > 0) {
      siteData.push({
        title: title
          .replace("Delivery Pilot - ", "")
          .replace(" | Delivery Pilot", ""), // Clean up title
        url: relativePath,
        content: textContent,
        id: relativePath, // Use relative path as ID
      });
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(siteData, null, 2));
  console.log(`Generated sitedata.json with ${siteData.length} pages.`);
}

generateSiteData();

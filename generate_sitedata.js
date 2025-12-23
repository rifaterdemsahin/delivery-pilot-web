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

function generateSiteData() {
  const siteData = [];

  if (!fs.existsSync(contentDir)) {
    console.error(`Directory not found: ${contentDir}`);
    return;
  }

  const files = fs.readdirSync(contentDir);

  files.forEach((file) => {
    if (path.extname(file) === ".html") {
      const filePath = path.join(contentDir, file);
      const content = fs.readFileSync(filePath, "utf8");

      const title = extractTitle(content);
      const textContent = stripHtml(content); // Basic implementation

      // Only add if there's actual content
      if (textContent.length > 0) {
        siteData.push({
          title: title
            .replace("Delivery Pilot - ", "")
            .replace(" | Delivery Pilot", ""), // Clean up title
          url: `5_Symbols/${file}`,
          content: textContent,
          id: file, // Use filename as ID
        });
      }
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(siteData, null, 2));
  console.log(`Generated sitedata.json with ${siteData.length} pages.`);
}

generateSiteData();

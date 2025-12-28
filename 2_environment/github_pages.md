📅 Updated: 2025-12-28

# 🌍 GitHub Pages

This project is hosted on GitHub Pages, which serves the static HTML/CSS/JS files directly from the repository.

**Rationale:**
Publish agents and collect feedback for freemium-based proof of concepts in the workshops.

## ⚙️ Configuration

- **Source**: The site is served from the `root` directory of the default branch (`main`).
- **Domain**: [deliverypilot.net](https://deliverypilot.net) (or similar custom domain if configured) / `rifaterdemsahin.github.io/delivery-pilot-web`.

## 🚀 Deployment

Deployment is **automatic**.

1.  **Push to main**: When you push code to the `main` branch, GitHub Pages automatically rebuilds the site.
2.  **Wait**: It usually takes 1-2 minutes for changes to go live.
3.  **Verify**: Check the "Deployments" section on the GitHub repository homepage to see the status.

## 🔧 Troubleshooting

- **404 Errors**: Ensure your file paths are correct. Linux/GitHub is case-sensitive (e.g., `Image.png` != `image.png`).
- **Caching**: If you don't see changes, try a hard refresh (Cmd+Shift+R) or clear your browser cache.

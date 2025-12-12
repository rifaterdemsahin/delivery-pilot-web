# Local Environment Setup

This guide explains how to set up the Delivery Pilot Web project on your local machine.

## Prerequisites

- **Operating System**: macOS, Windows, or Linux
- **Git**: For version control
- **Visual Studio Code (VS Code)**: Recommended editor
- **Browser**: Chrome, Firefox, Safari, or Edge

## Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/rifaterdemsahin/delivery-pilot-web.git
    cd delivery-pilot-web
    ```

2.  **Open in VS Code**
    ```bash
    code .
    ```

## Development Tools

### Recommended Extensions
We recommend the following VS Code extensions for this project:
- **Live Server**: For real-time preview of HTML/CSS changes.
- **Prettier**: For code formatting.
- **ESLint**: For JavaScript linting.

### Running the Project
Since this is a static website, you don't need a complex build server.

1.  Open `index.html` in VS Code.
2.  Click "Go Live" in the status bar (if Live Server is installed).
3.  Or, open the file directly in your browser:
    ```
    open index.html
    ```

## Workflow
1.  **Pull changes**: `git pull`
2.  **Create a branch**: `git checkout -b feature/your-feature`
3.  **Make changes**: Edit files using VS Code.
4.  **Test**: View changes in the browser.
5.  **Commit**: `git commit -m "Add feature"`
6.  **Push**: `git push origin feature/your-feature`

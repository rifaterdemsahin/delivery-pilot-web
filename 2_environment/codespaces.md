# GitHub Codespaces

Delivery Pilot Web is configured to be fully editable directly in the cloud using GitHub Codespaces.

## What is Codespaces?

GitHub Codespaces provides a complete, configurable development environment in the cloud. You can start developing instantly without installing anything on your local machine.

## How to use

1.  Navigate to the repository on GitHub.
2.  Click the **Code** button (green).
3.  Select the **Codespaces** tab.
4.  Click **Create codespace on main** (or your current branch).

## Configuration

The environment is automatically configured based on the repository content.
- **Root**: `/workspaces/delivery-pilot-web`
- **Editor**: VS Code (web version)

## Benefits

- **Consistency**: Everyone gets the same OS and tools.
- **Speed**: No need to `clone` or `npm install` locally on slow networks.
- **security**: Code stays in the cloud.

## Lifecycle
- **Stop**: Codespaces time out after a period of inactivity to save costs.
- **Delete**: You can delete old codespaces from your GitHub dashboard.

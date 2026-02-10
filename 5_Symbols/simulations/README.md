📅 Updated: 2026-02-14

# Workshop Simulations

This directory contains the interactive simulation pages and environment checklist for the Delivery Pilot workshop series. These simulations are designed to help participants assess their readiness and learn new skills through active doing.

## Goal

- **Interactive Retrieval**: Help participants identify skill gaps by asking questions and showing immediate answers/resources.
- **Micro-Learning**: steps should be concise, ideally 10 steps or fewer.
- **Rich Media**: Use YouTube links for deep dives and emojis for visual engagement.
- **Tracking**: Capture participant progress via email and n8n webhooks.

## Standard Practices

When creating a new simulation, follow these patterns to ensure consistency:

### 1. File Structure & Design

- **Single File**: Each simulation should be a self-contained HTML file (e.g., `rag_simulation.html`).
- **Styles**: Import `../../styles.css` and `../../menu.js`.
- **Master Template**: ALWAYS start from `simulation_template.html`.
  - It includes the standard Vide -> Checklist -> Git Instructions -> Certificate Submission flow.
- **Hero Section**: Use a consistent gradient header.

  ```css
  background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%); /* Example */
  ```

- **Layout**: Use a card-based layout for the content containers.

### 2. User Experience (UX)

- **Video First**: Every simulation starts with a video context.
- **Checklist Interaction**:
  - Use `<input type="checkbox">` for steps.
  - Reveal answers or resources (YouTube links) immediately or as part of the step description.
  - Use Emojis (🚀, 🧠, ✅) to make the text scannable and friendly.
- **Git Integration**: Instructions to Fork and Clone the repository are mandatory.
- **Certificate Submission**: A final form to submit the repo link and email for verification.

### 3. Data Integration (n8n)

All simulations must report back to the central n8n webhook to track progress.

**Webhook URL:**
`https://n8n.rifaterdemsahin.com/webhook/c0345ec9-8cf1-4baf-a2df-b3236a3a9225`

**Payload Structure:**

```json
{
  "type": "certificate_submission",
  "simulation": "Simulation Name", // e.g. "RAG Simulation"
  "repoUrl": "https://github.com/user/delivery-pilot",
  "email": "user@example.com",
  "timestamp": "ISO-8601 Date",
  "checklist": {
    "step1": true,
    // ...
  }
}
```

### 4. Navigation

- **Update Index**: Always add a link to your new simulation in `5_Symbols/simulations/index.html`.
- **Card Elements**: Include an icon, title, description, and color-coded "Start" button.

### To Execute

1. Copy `simulation_template.html` to `new_simulation.html`.
2. Update the Title, Description, and Video ID.
3. Populate the Checklist items.
4. Ensure the N8N payload uses the correct `simulation` name.
5. Add the entry to `index.html`.

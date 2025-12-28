📅 Updated: 2025-12-26

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
- **Hero Section**: Use a consistent gradient header.
  ```css
  background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%); /* Example */
  ```
- **Layout**: Use a card-based layout for the content containers.

### 2. User Experience (UX)
- **Login Gate**: Always start with an email entry form. Store the email in `localStorage` under `dp_simulation_email` (or specific key if needed) to remember the user.
- **Checklist Interaction**:
    - Use `<input type="checkbox">` for steps.
    - Reveal answers or resources (YouTube links) immediately or as part of the step description.
    - Use Emojis (🚀, 🧠, ✅) to make the text scannable and friendly.
- **Video Resources**: Link to YouTube tutorials for every complex step. Open in new tab: `target="_blank"`.

### 3. Data Integration (n8n)
All simulations must report back to the central n8n webhook to track progress.

**Webhook URL:**
`https://n8n.rifaterdemsahin.com/webhook/c0345ec9-8cf1-4baf-a2df-b3236a3a9225`

**Payload Structure:**
```json
{
  "type": "simulation_name", // e.g. "rag_simulation"
  "email": "user@example.com",
  "timestamp": "ISO-8601 Date",
  "steps_completed": {
    "step1": true,
    "step2": true
    // ...
  },
  "hiddenContext": {
    "nextSteps": "Guidance for what to do next...",
    "resourceLink": "https://example.com/more-info"
  }
}
```

### 4. Navigation
- **Update Index**: Always add a link to your new simulation in `5_Symbols/simulations/index.html`.
- **Card Elements**: Include an icon, title, description, and color-coded "Start" button.

### To Execute
1. Copy an existing simulation (like `rag_simulation.html`) as a template.
2. Update the `type` in the JavaScript payload.
3. Customize the steps, content, and hero color.
4. Add the entry to `index.html`.
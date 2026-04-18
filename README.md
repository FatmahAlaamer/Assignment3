# Assignment3

# Fatimah Alaamer — Personal Portfolio
### Assignment 3 | SWE363 | KFUPM

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub API](https://img.shields.io/badge/GitHub_API-181717?style=flat&logo=github&logoColor=white)

---

## Project Overview

An advanced personal portfolio web application built for the **SWE363** course at KFUPM.  
This version (Assignment 3) builds on Assignment 2 by integrating external APIs, advanced JavaScript logic, state management, and performance optimizations.

The portfolio showcases two engineering projects — **Cartier VR Store** and **SAR Train UX Optimization** — alongside the team project **Medad**, a food-sharing platform connecting restaurants with charities.

> **Live Demo:** Open `index.html` in any modern browser — no server required.

---

## What's New in Assignment 3

| Feature | Description |
|---|---|
| GitHub API | Live repositories fetched from GitHub REST API |
| Filter + Sort | Projects filterable by category and sortable by date or name |
| Form Validation | Real-time inline validation with error messages per field |
| Visit Counter | Tracks and displays number of user visits via `localStorage` |
| Time-on-site Timer | Counts seconds/minutes spent on the page |
| Dark Mode (improved) | Persists across sessions, covers all new sections |

---

## Features

### UI & Theme
- **Bold & Creative** pastel color palette — pink, mint, lavender, peach, sky blue
- **Dark / Light mode toggle** — state persisted via `localStorage`
- **Scroll animations** — sections fade in using the `Intersection Observer API`
- **Responsive layout** — tested on desktop, tablet, and mobile

### Projects Section
- Projects rendered dynamically from a JavaScript array
- **Filter by category** — All / VR / UX / Web
- **Sort** — Newest, Oldest, or A→Z
- Each card has an expandable **View Details** section with project specifics
- Color-coded tag badges per category

### GitHub Repositories (Live API)
- Fetches repositories from `https://api.github.com/users/FatmahAlaamer/repos`
- Displays: repo name, description, language, star count, and a direct link
- Shows a user-friendly error message if the API is unavailable

### Contact Form
- Validates **three conditions** before allowing submission:
  1. Name field must not be empty
  2. Email must match a valid format (`user@domain.com`)
  3. Message must be at least 10 characters
- Inline error messages appear under each invalid field
- On success, displays a confirmation message and resets the form

### ⏱ Engagement Stats
- **Visit counter** — increments on each page load, stored in `localStorage`
- **Time-on-site timer** — live counter displayed in the hero section

---

## How to Use the Website

### Navigating
- Use the **top navigation bar** to jump between sections: About, Projects, GitHub, Contact
- Click the **Night 🌙 / Day ☀️ button** (top right) to toggle dark/light mode — your preference is saved automatically

### Browsing Projects
1. Go to the **Projects** section
2. Click a **filter button** (All / VR / UX / Web) to show projects by category
3. Use the **Sort dropdown** to reorder by date or alphabetically
4. Click **View Details** on any card to expand the full project description
5. Click again (**Show Less**) to collapse it

### GitHub Repositories
- Scroll to the **GitHub Repositories** section
- Cards load automatically from the GitHub API
- Click **Open on GitHub →** to visit the repository directly

### Sending a Message
1. Scroll to the **Get In Touch** section
2. Fill in your **Name**, **Email**, and **Message** (minimum 10 characters)
3. Click **Send Message**
4. If any field is invalid, a red error message appears beneath it
5. Fix the errors and resubmit — a green confirmation message will appear

---

## File Structure

assignment-3/
├── index.html                          # Main HTML structure
├── css/
│   └── styles.css                      # All styling, themes, animations
├── js/
│   └── script.js                       # All interactivity and API calls
├── Assets/
│   └── images/
│       ├── Cartier.jpg                 # Cartier VR project image
│       ├── SAR.jpg                     # SAR UX project image
│       └── Medad.png                   # Medad platform screenshot
├── docs/
│   ├── ai-usage-report.md              # Detailed AI tool usage log
│   └── technical-documentation.md     # Technical implementation details

README.md

---

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Safari, Firefox, Edge)
- No installations, servers, or dependencies required

### Running Locally
```bash
# Option 1 — just open the file
open index.html

# Option 2 — use VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

### Notes
- The **GitHub API** requires an internet connection to load repositories
- If repositories don't appear, GitHub's rate limit may have been reached (60 requests/hour for unauthenticated requests) — refresh after a minute
- All other features work fully offline

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure — `<nav>`, `<section>`, `<footer>` |
| CSS3 | Custom Properties, Flexbox, Grid, transitions, media queries |
| JavaScript (ES6+) | DOM manipulation, fetch API, LocalStorage, Intersection Observer |
| GitHub REST API | Live repository data (`/users/{username}/repos`) |
| Google Fonts | Plus Jakarta Sans typeface |

---

## AI Implementation Summary

See full details in [`docs/ai-usage-report.md`](docs/ai-usage-report.md).

### Tools Used
- **Gemini (Google AI)** — Assignment 1 & 2 boilerplate and logic refinement
- **Claude (Anthropic)** — Assignment 3 advanced features, API integration, validation logic

### How AI Was Used Responsibly
All AI output was reviewed, tested, and modified before use. Specific changes made manually:
- Replaced generic color values with the custom pastel CSS variable system
- Rewrote project descriptions to reflect actual academic work
- Added `onerror` fallback on images after testing with missing files
- Restructured the GitHub fetch to filter only specific repositories by name
- Identified and fixed a bug where two nested `fetch` chains caused a syntax error

### Known AI Risks & Limitations Encountered
- **Hallucinated APIs** — Gemini once suggested a CSS property (`text-balance`) that wasn't yet widely supported; had to verify on MDN before using
- **Over-engineering** — Claude's first suggestion for form validation used a third-party library; simplified to pure regex manually
- **Context loss** — AI tools don't remember previous conversations, so I had to re-explain the file structure each session
- **Generic output** — Default AI color schemes (purple gradients on white) were replaced entirely with the custom pastel palette

---

## Improvements from Assignment 2 Feedback

| Feedback Received | Fix Applied in Assignment 3 |
|---|---|
| Form allows invalid emails | Added regex email validation with inline error message |
| No user guidance for features | Added step-by-step "How to Use" section in this README |
| AI usage needs more depth | Added risks, mistakes, and limitations section above |

---

## Developer Information

| | |
|---|---|
| **Name** | Fatimah Alaamer |
| **Student ID** | 202267900 |
| **University** | King Fahd University of Petroleum and Minerals (KFUPM) |
| **Course** | SWE363 — Web Engineering |
| **GitHub** | [@FatmahAlaamer](https://github.com/FatmahAlaamer) |

---

*© 2026 Fatimah Alaamer. Built for SWE363.*

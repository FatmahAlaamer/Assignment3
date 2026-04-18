# Technical Documentation — Assignment 3
**Student:** Fatimah Alaamer | **ID:** 202267900 | **Course:** SWE363

---

## 1. Project Overview

A feature-rich personal portfolio web application built with vanilla HTML, CSS, and JavaScript. Assignment 3 extends the Assignment 2 base by adding an external API integration, advanced filtering/sorting logic, improved form validation, and persistent state management.

**Live usage:** Open `index.html` in any modern browser. Internet connection required for the GitHub API section only.

---

## 2. File Structure
assignment-3/
├── index.html                     # Page structure and all HTML sections
├── css/
│   └── styles.css                 # Design system, layout, themes, animations
├── js/
│   └── script.js                  # All interactivity, API calls, validation
├── Assets/
│   └── images/
│       ├── Cartier.jpg            # Cartier VR project image
│       ├── SAR.jpg                # SAR UX project image
│       └── Medad.png              # Medad platform screenshot
├── docs/
│   ├── ai-usage-report.md         # AI tool usage log
│   └── technical-documentation.md # This file
README.md

---

## 3. Architecture

### HTML — Semantic Structure
- `<nav>` — sticky navigation with theme toggle
- `<section id="about">` — hero with timer and visit counter
- `<section id="projects">` — filter bar + dynamically rendered project grid
- `<section id="github">` — live GitHub API data
- `<section id="contact">` — validated contact form
- `<footer>` — copyright

All sections use semantic tags for accessibility and SEO.

### CSS — Design System
CSS Custom Properties are used as a single source of truth for all colors, eliminating hardcoded values entirely:

```css
:root {
    --pink:     #FFB3C6;
    --mint:     #B5EAD7;
    --lavender: #C9B8F5;
    --peach:    #FFD4B2;
    --sky:      #B5D8F7;
    --yellow:   #FFF0A0;
    --ink:      #1a1a2e;
    --ink-soft: #4a4a6a;
    --bg:       #fdfcff;
    --card-bg:  #ffffff;
    --border:   #ece9f5;
}
```

Dark mode overrides all variables under `body.dark-theme` — no color is hardcoded anywhere in the stylesheet.

Layout uses **CSS Grid** for project and GitHub repo cards (`repeat(auto-fill, minmax(..., 1fr))`), and **Flexbox** for navigation, filter bar, and hero stats.

### JavaScript — Module Breakdown

| Section | Key Functions | APIs Used |
|---|---|---|
| Theme toggle | `localStorage.getItem/setItem` | localStorage |
| Visit counter | Increment on DOMContentLoaded | localStorage |
| Timer | `setInterval` every 1000ms | — |
| Project render | `renderProjects()` | — |
| Filter | `dataset.filter` + array `.filter()` | — |
| Sort | `.sort()` with date comparison | — |
| GitHub API | `fetch()` + `.then().catch()` | GitHub REST API |
| Form validation | Regex + DOM class toggling | — |
| Scroll animation | `IntersectionObserver` | — |

---

## 4. Feature Implementation Details

### 4.1 GitHub API Integration

**Endpoint used:**
GET https://api.github.com/users/FatmahAlaamer/repos?sort=updated&per_page=20

**Flow:**
1. Page loads → `fetch()` called immediately
2. Loading message shown while request is pending
3. Response filtered to only `['Assignment2', 'Assigment-1']` by name
4. Cards rendered with name, description, language, stars, and link
5. If fetch fails (network error or API rate limit) → user-friendly error message shown

**Rate limiting:** GitHub allows 60 unauthenticated requests per hour per IP. The site handles this gracefully with a `.catch()` block.

### 4.2 Project Filter & Sort

Projects are stored as a JavaScript array of objects:
```js
const projects = [
  { title, tag, date, desc, details, img }
]
```

On every filter or sort change:
1. A copy of the array is made (`let list = [...projects]`)
2. Filter is applied first: `list.filter(p => p.tag === activeFilter)`
3. Sort is applied second: `list.sort((a, b) => new Date(b.date) - new Date(a.date))`
4. The grid is re-rendered from scratch with the new list

This ensures filter and sort always work correctly together.

### 4.3 Contact Form Validation

Three conditions must all pass before submission is accepted:

| Field | Rule | Error Shown |
|---|---|---|
| Name | `value.trim()` must not be empty | "Please enter your name." |
| Email | Must match `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` | "Please enter a valid email address." |
| Message | Must be ≥ 10 characters | "Please write a message (minimum 10 characters)." |

On failure: field gets `.invalid` class (red border), error `<span>` becomes visible.
On success: form resets, green confirmation message appears on the page (not in console).

### 4.4 State Management

| State | Storage | Persists? |
|---|---|---|
| Dark / Light theme | `localStorage` key: `theme` | ✅ Yes — survives refresh |
| Visit count | `localStorage` key: `visitCount` | ✅ Yes — increments each visit |
| Active filter | JS variable `activeFilter` | ❌ Session only |
| Active sort | JS variable `activeSort` | ❌ Session only |
| Timer | JS variable `seconds` | ❌ Session only — resets on refresh |

### 4.5 Scroll Animations

Uses `IntersectionObserver` to add `.visible` class when a section enters the viewport:
```js
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
```

This is more performant than scroll event listeners because it does not fire continuously — it only triggers when the element crosses the 0.1 threshold.

---

## 5. Performance Optimizations

| Optimization | Implementation |
|---|---|
| Font loading | Google Fonts loaded with `&display=swap` to prevent render-blocking |
| Image fallback | `onerror="this.style.display='none'"` prevents broken image icons |
| Script placement | `<script>` tag at end of `<body>` — HTML parsed before JS executes |
| No unused CSS | All classes in stylesheet are actively used |
| Efficient re-render | Project grid re-renders only on user interaction, not on every event |
| IntersectionObserver | Used instead of scroll listeners for better performance |

---

## 6. Browser Compatibility

Tested on:
- Chrome 120+ ✅
- Safari 17+ ✅
- Firefox 121+ ✅
- Mobile Safari (iOS) ✅
- Chrome for Android ✅

All features use standard ES6+ APIs with broad support. No polyfills required.

---

## 7. Known Limitations

| Limitation | Details |
|---|---|
| GitHub API rate limit | 60 requests/hour without authentication — error message shown if exceeded |
| Contact form is frontend-only | No email is actually sent — backend/server not in scope for this assignment |
| Timer resets on refresh | By design — session-only state |
| Images are local files | Must be in `Assets/images/` folder — no CDN used |

---

## 8. Improvements Over Assignment 2

| Assignment 2 Issue | Assignment 3 Fix |
|---|---|
| Form allowed invalid emails | Regex validation + inline error messages |
| No user guidance in README | Step-by-step How to Use section added |
| JS greeting only in console | All feedback is user-facing on the page |
| Hard-coded colors in CSS | All colors use CSS custom properties exclusively |
| Missing setup instructions | Full setup section in README |
| AI report missing learning outcomes | Full Learning Outcomes section in ai-usage-report.md |

---

*© 2026 Fatimah Alaamer — SWE363, KFUPM*
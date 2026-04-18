# AI Usage Report — Assignment 3
**Student:** Fatimah Alaamer | **ID:** 202267900 | **Course:** SWE363

---

## 1. Tools Used & Use Cases

| Tool | Use Case |
|------|----------|
| Gemini (Google AI) | Boilerplate HTML/CSS structure for Assignment 1 base |
| Claude (Anthropic) | Advanced feature planning, GitHub API integration, form validation, CSS design system, debugging, and documentation review |

---

## 2. Detailed Use Cases

### Assignment 1 (Gemini)
Used to generate a boilerplate HTML/CSS structure and a JavaScript snippet for a time-based greeting. I simplified the AI output to use basic Flexbox, removed unnecessary complexity, and updated the color scheme manually to match my design.

### Assignment 3 (Claude)

**Use Case 1 — GitHub API Integration**
Asked Claude to explain how to use `fetch()` with the GitHub REST API and handle HTTP errors. Claude explained the full Promise chain structure (`.then().catch()`) and why `per_page=20` was needed to ensure both target repositories appeared in the response instead of being cut off.

**Use Case 2 — Filter + Sort Logic**
Asked Claude to explain how to combine filtering and sorting on a JavaScript array before re-rendering the project grid. Claude explained why re-rendering from a data array is more reliable than showing/hiding static HTML — especially when filter and sort must work together simultaneously.

**Use Case 3 — Contact Form Validation**
Asked Claude to walk through building multi-field validation without a library. Claude explained the regex pattern `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` and why using `novalidate` on the form tag combined with custom JavaScript gives better per-field UX control than built-in browser validation.

**Use Case 4 — Debugging a Broken fetch()**
When two nested `fetch()` chains caused a silent syntax error, I asked Claude to identify the cause. Claude explained the error was a duplicated and unclosed `.then()` block from manually merging two code versions — this taught me that JavaScript Promise chains fail silently in some browsers when syntax is broken.

**Use Case 5 — Documentation Review**
Asked Claude to cross-reference the README structure against the assignment rubric. Claude identified that Setup Instructions and Learning Outcomes were missing — which matched the actual feedback I received in Assignments 1 and 2.

---

## 3. Benefits & Challenges

### Benefits
- Claude explained *why* patterns work, not just *what* the code does — this was more valuable than copying output directly.
- Debugging the broken fetch chain was significantly faster with AI identifying the exact cause.
- Cross-referencing the README against the rubric helped catch missing sections before submission.

### Challenges & Risks

| Challenge / Risk | What Happened | How I Handled It |
|---|---|---|
| Over-engineering | Claude suggested using `validator.js` library for email validation | Replaced with a single regex line — no external dependencies needed |
| Unverified API behavior | Claude assumed GitHub API always returns repos with `per_page=6` | Tested manually, changed to `per_page=20` after target repos weren't appearing |
| Generic aesthetics | Default AI color suggestions were purple gradients on white | Replaced entirely with my custom pastel CSS variable palette |
| Context loss between sessions | AI has no memory — had to re-explain file structure every session | Started keeping a personal notes file with variable names and structure |
| Hallucinated CSS support | Gemini suggested `text-wrap: balance` | Checked MDN — not fully supported, removed it |

---

## 4. Learning Outcomes

**1. REST API consumption with fetch()**
Before this assignment, I had never called an external API from JavaScript. I now understand the full flow: making a GET request, handling the Promise with `.then()`, parsing JSON, filtering the response, and displaying it in the DOM. I also learned how rate limiting works and how to handle it gracefully with `.catch()`.

**2. Promise chain syntax and debugging**
Debugging the broken nested fetch taught me that JavaScript Promise chains are strict about closure — an unclosed `.then()` block causes the entire script to fail. This was not obvious from the error message alone, which showed me the importance of understanding code structure rather than just copying it.

**3. CSS Custom Properties as a design system**
I now understand why CSS variables are better than hardcoded colors. Changing `--lavender` in one place updates every badge, border, focus ring, and dark mode override across the entire site simultaneously. This is a real workflow used in production CSS.

**4. State-driven rendering**
Instead of hiding/showing static HTML cards, I learned to store data in a JavaScript array and re-render the grid on every interaction. This is the foundational pattern behind frameworks like React and Vue — understanding it in vanilla JS first made the concept much clearer.

**5. Form validation architecture**
I learned the difference between HTML5 native validation and custom JavaScript validation. Custom validation allows inline per-field error messages that appear exactly where the user made the mistake — this is significantly better UX and is the industry standard pattern.

---

## 5. Responsible Use & Modifications

All AI-generated suggestions were reviewed line by line, tested in the browser, and modified before inclusion:

- Replaced generic color values with my custom `--pink`, `--mint`, `--lavender` CSS variable system
- Rewrote all project data to reflect my actual projects (Cartier VR, SAR UX, Medad)
- Added `onerror` fallback on `<img>` tags after testing with missing image files
- Changed GitHub fetch from `per_page=6` to `per_page=20` with a name filter after manual testing
- Simplified form validation from a library suggestion to pure regex
- All documentation files were written by me based on my actual development process

---

*© 2026 Fatimah Alaamer — SWE363, KFUPM*

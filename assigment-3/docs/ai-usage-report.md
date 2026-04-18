# AI Usage Report — Assignment 3

## Tools Used

| Tool | Use Case |
|------|----------|
| Gemini (Google AI) | Boilerplate HTML/CSS structure for Assignment 1 base |
| Claude (Anthropic) | Advanced feature planning, GitHub API integration code, form validation logic, and code review |

---

## Use Cases

### Assignment 1 (Gemini)
Used to generate a boilerplate HTML/CSS structure. Also provided a JavaScript snippet for a time-based greeting. I simplified the AI output to use basic Flexbox and updated the color scheme manually.

### Assignment 3 (Claude)
Used Claude to help plan and implement the four advanced features required:
- **GitHub API integration** — asked Claude to explain how to use `fetch()` with the GitHub REST API and handle errors gracefully with a user-friendly fallback message.
- **Filter + Sort logic** — asked Claude to explain how to combine filtering and sorting on an array before rendering cards dynamically, instead of hiding/showing static HTML.
- **Form validation** — asked Claude to walk through regex email validation and how to show inline error messages per field without using a library.
- **Dark mode persistence** — Claude helped review the existing `localStorage` approach from Assignment 1 and extend it to cover the new GitHub and filter sections.

---

## Benefits & Challenges

**Benefits:** Claude was helpful for explaining *why* a pattern works, not just generating code. For example, it explained why re-attaching event listeners after re-rendering the project grid is necessary, which helped me understand JavaScript's DOM lifecycle better.

**Challenges:** The AI sometimes generated overly complex or generic code that didn't match my existing file structure. I had to refactor suggestions to match my CSS variable names and existing class names from Assignment 1.

---

## Learning Outcomes

- Learned how to consume a real external REST API (GitHub) using `fetch()` and handle both success and failure states.
- Understood the pattern of storing UI state in variables (`activeFilter`, `activeSort`) and re-rendering on change.
- Improved understanding of HTML5 form validation best practices — specifically why `novalidate` on the form combined with custom JS gives better UX control than built-in browser validation.

---

## Responsible Use & Modifications

All AI-generated suggestions were reviewed, tested, and modified before inclusion:
- Replaced generic placeholder color values with my own `--primary` CSS variable system.
- Rewrote project data to reflect my actual projects (Cartier VR, SAR UX, Medad).
- Added the `onerror` fallback on `<img>` tags myself after testing with missing image files.
- The `docs/ai-usage-report.md` and `docs/technical-documentation.md` files were written by me to reflect my actual process.
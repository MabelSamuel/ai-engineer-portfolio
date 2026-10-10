# Mabel Samuel — AI Engineering Portfolio

A responsive, standalone portfolio built with HTML, CSS, and vanilla JavaScript.

## Files
- `index.html` — content and structure
- `style.css` — responsive visual styling
- `script.js` — mobile navigation and configurable links

## Before publishing
Open `script.js` and replace the empty strings in `PORTFOLIO_LINKS`:
- `linkedin`: your personal LinkedIn profile
- `cv`: a publicly accessible PDF URL, or add your resume as `cv.pdf` in this folder
- `docuchat`: the guided DocuChat GitHub repository
- `groupProject`: the team's AI-powered task management repository

Only add real links. The website intentionally does not invent project repository URLs or claim that the group concept is a finished product.

## Run locally
Open `index.html` in a browser. For a local server, you can use VS Code Live Server or run:
`python3 -m http.server 8000`
Then visit `http://localhost:8000`.

## Deploy
### GitHub Pages
1. Create a GitHub repository, for example `ai-engineering-portfolio`.
2. Upload `index.html`, `style.css`, `script.js`, and your CV PDF if using a local file.
3. In repository Settings → Pages, select deployment from the `main` branch and root folder.
4. Save and wait for the published URL.

### Netlify
Drag the project folder into Netlify Drop, or connect the repository in Netlify. Keep all three files in the same published root folder.

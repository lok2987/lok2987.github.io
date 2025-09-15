# Chainlift Profile (React + Vite, raw CSS)

Minimal, dark-themed, tabbed personal profile for a blockchain-focused backend dev.
Ready for GitHub Pages.

## Quickstart

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Create a repo (public) and push this project.
2. If deploying to a **project site** (https://username.github.io/repo-name/):
   - Edit `vite.config.js` and set:
     ```js
     base: '/repo-name/'
     ```
3. Run:
   ```bash
   npm run deploy
   ```
4. In GitHub, ensure **Pages** source is set to **GitHub Actions** or **Deploy from a branch** (gh-pages branch).
   The `gh-pages` package will publish to the `gh-pages` branch.

### Notes
- This site avoids routing to keep GitHub Pages SPA quirks simple (tabs are client-side).
- Replace placeholders with your content (Résumé file, links, ENS, addresses).
- All styling is custom raw CSS (no Tailwind / UI frameworks).

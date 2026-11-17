# Lvoq Stream — Privacy & Terms

Static legal site for **Lvoq Stream**, built with React + Vite for GitHub Pages.

## URLs (after Pages is enabled)

| Page | Path |
|------|------|
| Home | `https://pabelandino.github.io/privacyandterms/` |
| Privacy Policy | `https://pabelandino.github.io/privacyandterms/privacy` |
| Terms of Service | `https://pabelandino.github.io/privacyandterms/terms` |
| Meta OAuth redirect | `https://pabelandino.github.io/privacyandterms/auth/facebook/` (trailing slash) |

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173/privacyandterms/`.

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

Production is served from the **`gh-pages`** branch (built `dist/`), not from `main` (source only).

```bash
npm ci
npm run build
npx gh-pages -d dist
```

Settings → **Pages** → Source: branch **`gh-pages`**, folder **`/`**.

If the home page is blank and the console shows `/src/main.tsx` 404, Pages is pointing at `main` by mistake.

## Meta / Facebook

Use the Privacy URL and OAuth redirect URL above in the Meta Developer Console (see Lvoq Stream project docs).
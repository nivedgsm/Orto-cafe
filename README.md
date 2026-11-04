# Orto Café — static Next.js website

A responsive, editorial-style café website designed around Orto Café's Jumeirah waterfront identity: warm stone neutrals, olive accents, serif display typography, generous whitespace and photography-led sections.

## Requirements
- Node.js 18.18+ (Node 20 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Build for static hosting
```bash
npm install
npm run build
```
Next.js exports the complete static site into `out/` because `output: 'export'` is enabled.

### Hostinger / cPanel
1. Run `npm install` and `npm run build` on your computer.
2. Open the generated `out` folder.
3. Upload the **contents** of `out` (not the `out` folder itself) into `public_html` using Hostinger File Manager or FTP.
4. Make sure `index.html` is directly inside `public_html`.

No Node.js server is required on Hostinger for the exported version.

### GitHub + Vercel
1. Create a GitHub repository and push this project.
2. Import the repository into Vercel.
3. Framework preset: Next.js. Build command: `npm run build`. Output directory: `out` (usually detected automatically).
4. Deploy. Every push to the connected branch can trigger a new deployment.

## Customisation
- Contact, map and Instagram links are at the top of `src/app/page.tsx` (`MAPS`, `PHONE`, `INSTAGRAM`).
- Main copy and menu highlights are in `src/app/page.tsx`.
- Colours, spacing, typography and responsive rules are in `src/app/globals.css`.
- The wordmark is a typographic SVG at `public/orto-wordmark.svg`.

## Brand and asset notes
- The supplied references identify the Jumeirah location at 395 Al Athar Street, Dubai. Public listings show +971 4 345 5060 and daily hours of 7 AM–12 AM; confirm these with the café before publishing.
- The included ORTO wordmark is a clean typographic recreation for this concept, not a verified official logo file. Replace it with the café's approved brand asset if supplied.
- Photography is loaded from third-party image URLs for this prototype. For a production handoff, obtain permission/approved originals from the café and save them in `public/images`, then update the image paths in the page and CSS. Remote photo hosts can change or block hotlinking.
- Menu content is intentionally written as general highlights. Confirm the current menu, pricing and dietary information with the café before publishing.

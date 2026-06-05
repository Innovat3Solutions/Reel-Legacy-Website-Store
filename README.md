# Reel Legacy — Storefront

Premium performance apparel for those who live the fishing lifestyle. **Built different. Earned, not given.**

A React + Vite + TypeScript storefront styled with Tailwind CSS and animated with Motion.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. (Optional) Set `GEMINI_API_KEY` in a `.env` file — only needed for Gemini-powered features. Copy `.env.example` to `.env` to start.
3. Start the dev server:
   ```bash
   npm run dev
   ```
   The site runs at http://localhost:3000.

## Build

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Project Structure

- `src/components/` — page sections (Header, Hero, Featured Collection, New Arrivals, Lifestyle gallery, Footer, etc.)
- `public/images/` — site imagery (hero, clothing, lifestyle, logos, favicon)
- `Images/` — original source uploads

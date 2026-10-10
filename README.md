# STS FZE website

Static 5-page marketing site for Superior Tubular Solutions (STS) FZE, built with Next.js (App Router) and exported to plain HTML.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # writes the static site to /out
npm run preview    # serve /out locally
```

Upload the contents of `out/` to any static host (Netlify, Vercel, Cloudflare Pages, cPanel, S3).

## Structure

```
src/
  app/                 one folder per page (route)
    page.js            Home
    about/page.js      About
    capabilities/      Capabilities
    quality/           Quality and certifications
    contact/           Contact and quote form
    layout.js          fonts, header, footer, metadata
    sitemap.js robots.js not-found.js icon.svg
  components/
    layout/            Header, Footer, Logo
    ui/                Photo, Figure, PageHead, CtaBand
    contact/           RfqForm (client component)
  data/                all copy that changes: site.js, capabilities.js, certifications.js
  styles/              tokens.css, base.css, layout.css, components.css
public/images/         facility, machining, surface, inspection, certificates
```

## Before going live

1. `src/data/site.js`: set the real `url`, sales `email` and `phone`.
2. `src/data/certifications.js`: the API Q1, API 5B and ISO 9001 certificates expire on 11 November 2026.
   Update the dates and replace the scans in `public/images/certificates/` when renewed.
3. The quote form opens the visitor's email app (the site has no server). To receive submissions
   directly, point the form at Formspree, Netlify Forms or your own endpoint in `RfqForm.js`.

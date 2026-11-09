# Studio Ligjore Gega – Av. Gentjan Gega

Static Astro site for the law studio of Av. Gentjan Gega in Tirana. Two pages per
language: a Quinn Emanuel–style attorney profile (`/`) and a studio page (`/studio/`). The profile has portrait and contact block, then tabbed sections
(tabs on desktop, an accordion on mobile, all sections stacked without JS), office photos,
and contact with hours and a map. Albanian at `/`, English at `/en/`.

```
npm run dev      # http://localhost:4321 (preview config "gega-law" uses port 4340)
npm run build    # astro check + build → dist/
```

## Where things live

- `src/data/site.ts`: phone, address, coordinates, hours, vCard path
- `src/i18n/content.ts`: profile copy, SQ and EN
- `src/i18n/studio.ts`: studio page copy, SQ and EN
- `src/components/Profile.astro`, `src/components/Studio.astro`: the two pages
- `public/gentjan-gega.vcf`: the downloadable contact card

Panes marked `todo: true` show a dashed placeholder in `npm run dev` and are left out of
the production build when they are still empty.

## Content source

The profile (home) and the studio page use the client's own text from
"Gentjan Gega.docx" (Nov 2026). Albanian is his wording; the English is our
translation and should be read by him before launch.

## Open questions for the client

- Email address (it appears everywhere once `site.email` is filled in)
- Domain (`astro.config.mjs` and the vCard use the placeholder `studioligjoregega.al`)
- The six scientific publications: titles, journals and years, if he wants them listed
- Notable representations: none yet (the pane only shows in `npm run dev`)
- Bar membership / registration number: not in his CV, so the site doesn't mention it
- English translation: needs his approval
- WhatsApp on the same number? There is also no contact form yet: add a PHP handler if wanted
  (same pattern as the MK AluPlast and Marketixo sites).

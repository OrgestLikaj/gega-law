# Studio Ligjore Gega – Av. Gentjan Gega

Static Astro site for the law studio of Av. Gentjan Gega in Tirana. Layout follows a
Quinn Emanuel–style attorney profile: portrait and contact block, then tabbed sections
(tabs on desktop, an accordion on mobile, all sections stacked without JS), office photos,
and contact with hours and a map. Albanian at `/`, English at `/en/`.

```
npm run dev      # http://localhost:4321 (preview config "gega-law" uses port 4340)
npm run build    # astro check + build → dist/
```

## Where things live

- `src/data/site.ts`: phone, address, coordinates, hours, vCard path
- `src/i18n/content.ts`: all copy for SQ and EN
- `src/components/Profile.astro`: the page
- `public/gentjan-gega.vcf`: the downloadable contact card

Panes marked `todo: true` show a dashed placeholder in `npm run dev` and are left out of
the production build when they are still empty.

## Open questions for the client

- Spelling: the logo and plaque say **Gentjan**; the brief said "Gentian". The site uses Gentjan.
- Email address (it appears everywhere once `site.email` is filled in)
- Domain (`astro.config.mjs` and the vCard use the placeholder `studioligjoregega.al`)
- Practice areas: the current list is a typical general-practice list. Confirm or edit it.
- Biography: the facts in it are limited to what is on Google Maps and the signage. Ask for
  his year of admission, prior roles and education.
- Notable representations, Education, Languages: no content yet
- Admission: confirm membership of the Dhoma Kombëtare e Avokatisë (and the registration number, if he wants it shown)
- WhatsApp on the same number? There is also no contact form yet: add a PHP handler if wanted
  (same pattern as the MK AluPlast and Marketixo sites).

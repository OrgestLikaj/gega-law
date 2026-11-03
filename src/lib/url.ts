// Prefixes site-relative paths with the configured base, so the same build
// works at the domain root and under a GitHub Pages sub-path (/gega-law/).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => `${base}${path}`;

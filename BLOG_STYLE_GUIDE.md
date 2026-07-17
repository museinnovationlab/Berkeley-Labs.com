# Berkeley Labs Journal — Blog Style Guide

The standard for every article on `berkeley-labs.com/blog`. Follow this so the blog
stays consistent in voice, structure, SEO, and quality.

## Goal & guardrails
- **Purpose:** SEO + thought leadership that earns trust and drives discovery of our apps
  (Kiron, B-Side, whatever's next).
- **Quality over quantity.** Do NOT mass-produce. Google's "scaled content abuse" policy
  penalizes thin, low-differentiation bulk content at the *domain* level — a pile of
  filler could poison the whole site's ability to rank. Every article must be a POV only
  Berkeley Labs can credibly hold.
- **Earn the reader before pitching.** Give real, actionable advice first — including advice
  that doesn't involve our products (that's what makes it credible). The CTA comes at the end.
- **Specific, not superlative.** No "nothing else like it" / unfalsifiable claims. Name
  concrete, checkable differentiators. Competitors exist; false claims are a liability.
- **Real sources only.** Quotes must be genuine and linked to a real source. Never fabricate
  a quote or misattribute one. Verify wording and who said it before quoting.

## Voice
- Smart, direct, a little wry. Confident but not breathless.
- Dog personality is used **sparingly** in the body — the essay is serious; the humor lands
  at the very end (see sign-off). One light touch mid-article is fine; don't overdo it.
- Short paragraphs. Concrete nouns. Cut hedging.

## Article structure (the framework)
1. **Hook** — a real quote or a vivid claim that sets up the tension.
2. **The assumption / status quo** — name the belief everyone holds without examining it.
3. **What changed** — the shift that breaks the assumption (with a linked source/quote).
4. **Honest counterpoint** — where the easy version of this take is wrong; the credibility
   section. Give advice that doesn't need our products.
5. **The part that matters** — the non-obvious consequence most people miss.
6. **Actionable takeaways** — a short bulleted list the reader can actually use.
7. **Honest CTA** — tie to Berkeley Labs / our apps with *specific* differentiators, briefly.
8. **Dog-themed sign-off** — REQUIRED. 1–2 sentences, relevant to the article's theme, making
   a self-aware "we're a studio run by dogs" joke. Wrap it in `<p class="dog-sign-off">…</p>`
   and end with a 🐾. This is the signature that closes every article.

## SEO checklist (every article)
- Unique, keyword-aware `<title>` (~50–60 chars) and meta `description` (~150–160 chars).
- `rel=canonical` at the exact served URL (trailing slash: `/blog/<slug>/`).
- OG + Twitter tags (handled by `Layout.astro`).
- JSON-LD `Article` structured data (handled by `BlogLayout.astro` from props).
- Target low-competition, high-intent long-tail phrasing — not head terms a young domain
  can't win. Research real phrasing with WebSearch first; don't guess.
- Add the post to `src/data/posts.js` (newest first) AND `public/sitemap.xml`.
- Cross-link between related articles (internal links help crawling + ranking).
- Use the REAL current date for `publishISO` / `publishDisplay` — check it, don't assume.

## Technical pattern
- One file per article: `src/pages/blog/<slug>.astro`, using `BlogLayout.astro`.
- URLs are directory-style with trailing slash: `/blog/<slug>/` (Astro `trailingSlash: 'always'`).
- Use absolute paths for links/assets (`/brand/...`, `/#work`) since articles live in a subdir.
- Body prose uses the `.article` class styles in `global.css` (h2/h3, blockquote+cite, lists,
  `.dog-sign-off`). Blockquotes: `<blockquote>…<cite>— Name, <a>source</a></cite></blockquote>`.
- Preview locally BEFORE deploying: `npm run build` then
  `python3 -m http.server 8765 --directory dist` → open `http://127.0.0.1:8765/blog/`.
  Confirm all pages 200, no broken links, canonical + JSON-LD present.

## Deploy & Search Console
- Push to `main` → Netlify auto-deploys.
- Submit the sitemap to Google Search Console as the FULL URL:
  `https://berkeley-labs.com/sitemap.xml` (a bare path fails on a domain property).
- SEO is a 3–6 month compounding play. Nothing ranks in week one. Be honest about that.

# Klean Sweep Co. — Website Task Sheet

## Status: In Progress — Paused After Session 2
**Last updated:** 2026-03-19

---

## Completed

### Foundation
- [x] 4-page static site (index, services, about, faq)
- [x] Cormorant Garamond + Jost font system
- [x] Color system — champagne gold `#C4A46B`, near-black `#111111`, cool cream `#F5F3F0`
- [x] Sticky nav, FAQ accordion, testimonial carousel (9 reviews, 3 slides)
- [x] Trust bar, service cards, add-on grid, inline contact forms
- [x] SEO: Schema.org JSON-LD, unique titles + meta descriptions
- [x] `.gitignore`, `HANDOFF.md`, `TASKS.md`, `CLAUDE.md`
- [x] GitHub: https://github.com/Welcome2Git25/klean-sweep-co

### Visual Polish
- [x] Full color palette overhaul → cooler, architectural (matches reference apartment)
- [x] Typography bump — all small text increased for readability across all 4 pages
- [x] Services page — Loyalty section cleaned up (only Recurring Discounts + Referral Rewards)
- [x] "Move from Customer to Client." subheading added under loyalty section headline

### Hero Image (AI via kie.ai Nano Banana 2)
- [x] v1–v6 iterations (see HANDOFF.md for full history)
- [x] **v7 — CURRENT HERO** (`images/hero-v7.jpg`)
  - 4K, 4096×2304, 1.2MB
  - Diagonal wide-angle, Dallas skyline with Reunion Tower
  - Cream bouclé sofa, chocolate throw, olive pillow, barrel chairs
  - Sculptural live-edge walnut coffee table, contemporary art, fiddle leaf fig
  - Bare dining table, brass ring pendant, portfolio-grade

### Infrastructure
- [x] kie.ai API integration (`nano-banana-2` model)
- [x] File upload via `kieai.redpandaai.co/api/file-stream-upload`
- [x] PowerShell 4K crop pipeline (4096×4096 → 4096×2304 JPEG)
- [x] `.env` with `KIE_API_KEY` (not committed)
- [x] 9 curated luxury interior reference images in `images/`

---

## To Do

### High Priority (Before Launch)
- [ ] Connect contact form to Formspree or similar — currently static, no submissions received
- [ ] Real logo / wordmark — currently text-only "Klean Sweep Co."
- [ ] Mobile QA — review all 4 pages on phone viewport (untested)

### Medium Priority
- [ ] Google Maps embed on `about.html` (service area visual)
- [ ] Before/after cleaning photo section on home or services page
- [ ] Booking page or Calendly embed for scheduling
- [ ] Team photo on `about.html`

### Hero / Images (Ongoing — Optional)
- [ ] Generate unique hero images for `services.html` and `about.html` pages (currently use Unsplash)
- [ ] Consider generating a before/after pair using `nano-banana-edit`

### Nice to Have
- [ ] Animated counter on trust bar stats (counts up on scroll)
- [ ] Scroll-triggered fade-ins on section cards
- [ ] Blog / tips page
- [ ] Instagram feed embed

---

## Deploy Checklist (When Ready)
- [ ] Buy / connect domain
- [ ] Deploy via Netlify or Vercel
- [ ] Set `<link rel="canonical">` URLs on all pages
- [ ] Submit sitemap to Google Search Console
- [ ] Link Google My Business listing to live site

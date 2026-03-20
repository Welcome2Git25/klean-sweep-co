# Klean Sweep Co. — Handoff Document

## Project Overview
Premium luxury residential cleaning website for **Klean Sweep Co.**, Dallas TX.
Built as a full custom replacement for their existing Durable-hosted site, targeting high-end residential clients.

**Live repo:** https://github.com/Welcome2Git25/klean-sweep-co
**Run locally:** `npx serve -l 3000 .` → http://localhost:3000

---

## Pages
| File | Route | Description |
|---|---|---|
| `index.html` | `/` | Home — hero, trust bar, services overview, testimonials, contact |
| `services.html` | `/services` | Full service tiers + add-ons + pricing |
| `about.html` | `/about` | Mission, values, team, location |
| `faq.html` | `/faq` | 23 questions across 3 sections (accordion) |

---

## Design System

### Fonts
- **Display / Headlines:** Cormorant Garamond (Google Fonts)
- **Body / UI:** Jost (Google Fonts)

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `gold` | `#C4A46B` | Primary accent — buttons, links, eyebrows, rules |
| `gold.light` | `#D8C4A8` | Stars, subtle highlights |
| `gold.dark` | `#9A7A48` | Hover states |
| `navy` / dark sections | `#111111` | Trust bar, contact section, why section |
| Footer bg | `#0A0A0A` | Footer across all pages |
| Ivory bg | `#F5F3F0` | Page background |
| Stone / borders | `#E0DDD8` | Card borders, dividers |
| Muted text | `#8A8886` | Captions, attribution |

### Hero
- Full-screen (`100vh`) with slow zoom animation (18s)
- Image: `images/hero-v4.jpg` — AI-generated via kie.ai Nano Banana 2 (Gemini 3.1 Flash), 4096×2304
- Overlay: `rgba(10,10,10,0.60)` neutral dark gradient
- Reference aesthetic: `IMG_8793.jpeg` (user's own apartment photo)

---

## AI Image Generation
| File | Model | Notes |
|---|---|---|
| `images/hero-v4.jpg` | nano-banana-2 | **Current hero** — portfolio grade, v4 |
| `images/hero-v3.jpg` | nano-banana-2 | v3 backup |
| `images/hero-v2.jpg` | nano-banana-2 | v2 backup |
| `images/hero-generated.jpg` | nano-banana-2 | v1 — city skyline wide shot |

API credentials are in `.env` (not committed). Key stored as `KIE_API_KEY`.

---

## Tech Stack
- Pure HTML5 + Tailwind CSS (Play CDN v3, inline config)
- Vanilla JS — nav scroll effect, FAQ accordion, testimonial carousel
- No build step, no dependencies, no backend
- Contact forms are static (no submission handler yet)

---

## Business Info
- **Phone:** 469-336-4488
- **Email:** kleansweepco@gmail.com
- **Location:** Dallas Design District, 75207
- **Hours:** Mon–Fri, 9am–5pm
- **Payments:** Zelle, Apple Pay, cash

---

## Known Gaps / Next Steps
See `TASKS.md` for the full prioritized task list.

**Highest priority before launch:**
1. Connect contact form to Formspree or similar
2. Real logo / wordmark
3. Mobile QA across all 4 pages
4. Deploy to Netlify/Vercel + point custom domain

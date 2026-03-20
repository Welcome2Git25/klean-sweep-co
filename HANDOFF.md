# Klean Sweep Co. — Handoff Document

## Project Overview
Premium luxury residential cleaning website for **Klean Sweep Co.**, Dallas TX.
Built as a full custom replacement for their existing Durable-hosted site, targeting high-end residential clients.

**Live repo:** https://github.com/Welcome2Git25/klean-sweep-co
**Run locally:** `npx serve -l 3000 .` → http://localhost:3000

---

## Current State — Where We Left Off

**Hero image:** `images/hero-v7.jpg` — 4K, 4096×2304, 1.2MB
- Diagonal wide-angle shot of luxury high-rise living room
- Dallas skyline with Reunion Tower visible through black-framed windows
- Cream bouclé sofa, chocolate brown throw, velvet olive pillow
- Barrel chairs, sculptural live-edge walnut coffee table (reference: `images/Coffee_Table_Image.jpeg`)
- Contemporary art canvas (ochre/charcoal), B&W architectural print, fiddle leaf fig
- Dining area in background — bare table, brass ring pendant, no table settings
- Portfolio-grade, Architectural Digest aesthetic

**Typography:** All small text bumped up across all 4 pages for readability:
- `.section-eyebrow` 0.65rem → 0.75rem
- `.form-label` 0.62rem → 0.72rem
- Body/paragraph text 0.88–0.95rem → 0.95–1.05rem
- Testimonial stars, add-on text, accordion text all increased

**Services page — Loyalty section:** Cleaned up — only Recurring Discounts and Referral Rewards cards shown. Added "Move from Customer to Client." subheading in eyebrow style.

---

## Pages
| File | Route | Description |
|---|---|---|
| `index.html` | `/` | Home — hero, trust bar, services overview, why us, testimonials, contact |
| `services.html` | `/services` | Full service tiers + add-ons + pricing + loyalty section |
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
| Dark sections | `#111111` | Trust bar, contact section, why section |
| Footer bg | `#0A0A0A` | Footer across all pages |
| Page bg | `#F5F3F0` | Cool cream background |
| Stone / borders | `#E0DDD8` | Card borders, dividers |
| Muted text | `#8A8886` | Captions, attribution |

---

## AI Image Generation — kie.ai Setup

**API key:** stored in `.env` as `KIE_API_KEY=43c01a4962ad08b380d2a4913a64cf73` (not committed to git)

**Generation workflow:**
```bash
# 1. Submit task
curl -s -X POST "https://api.kie.ai/api/v1/jobs/createTask" \
  -H "Authorization: Bearer $KIE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"nano-banana-2","input":{"prompt":"...","output_format":"png","image_size":"16:9","resolution":"4K"}}'

# 2. Poll status (taskId from response)
curl -s "https://api.kie.ai/api/v1/jobs/recordInfo?taskId={taskId}" \
  -H "Authorization: Bearer $KIE_API_KEY"

# 3. Download result URL from resultJson.resultUrls[0]
curl -s -L "{url}" -o images/hero-vX-raw.png

# 4. Crop to 16:9 JPEG via PowerShell (raw is 4096x4096 square)
# Crop rect: x=0, y=800, w=4096, h=2304, quality=88
```

**Edit workflow (image-to-image):**
- Upload source: `POST https://kieai.redpandaai.co/api/file-stream-upload` with `-F "file=@..." -F "uploadPath=klean-sweep"`
- Submit edit: model `google/nano-banana-edit`, field `image_urls` (not `image_input`)
- Note: edit model only outputs 1344×768 — use generation model for 4K quality

### Hero Image History
| File | Notes |
|---|---|
| `hero-generated.jpg` | v1 — wide NYC skyline |
| `hero-v2.jpg` | v2 — sofa close-up |
| `hero-v3.jpg` | v3 — full room, lounge chairs |
| `hero-v4.jpg` | v4 — barrel chairs, walnut table, diagonal angle (NYC) |
| `hero-v5.jpg` | v5 — edit attempt, Dallas skyline, low-res (1344×768) |
| `hero-v6.jpg` | v6 — 4K Dallas but wrong angle |
| **`hero-v7.jpg`** | **CURRENT** — v4 angle + Dallas skyline + bare dining table, 4K |

---

## Tech Stack
- Pure HTML5 + Tailwind CSS (Play CDN v3, inline config)
- Vanilla JS — nav scroll, FAQ accordion, testimonial carousel
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

## Key Rules
- Always preview generated images before applying to site — get user approval first
- Raw PNGs (~33MB) excluded from git via `.gitignore`
- Edit model (`nano-banana-edit`) only outputs 1344×768 — use generation model for 4K
- Serve via `npx serve`, never `file://`

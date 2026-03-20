# Klean Sweep Co. — Luxury Website

Premium residential home cleaning service website for Klean Sweep Co., based in Dallas, TX.

## Tech Stack
- Pure HTML5 + Tailwind CSS (Play CDN v3 with custom config)
- Google Fonts: Playfair Display (serif, headlines) + Inter (sans-serif, body)
- Unsplash for luxury interior photography (no API key needed)
- Vanilla JS for nav toggle, FAQ accordion, testimonial carousel

## How to Run
```bash
npx serve -l 3000 .
```
Then open http://localhost:3000

## Pages
| File | Page |
|------|------|
| `index.html` | Home (hero, services overview, testimonials, contact form) |
| `services.html` | Services & Pricing (full checklists + add-ons) |
| `about.html` | About Us (mission, values, location) |
| `faq.html` | FAQ (accordion, 3 sections) |

## Brand Colors
| Name | Hex |
|------|-----|
| Teal (primary) | `#2F87AC` |
| Navy (deep) | `#305B78` |
| Gold (accent) | `#EED578` |
| Cream (background) | `#FEF9F3` |
| Charcoal (text) | `#414141` |

## Business Info
- Phone: 469-336-4488
- Location: Dallas Design District, 75207
- Service area: Central Dallas — Knox Henderson to Downtown
- Hours: M–F, 9am–5pm

## Conventions
- All pages share the same sticky nav and footer structure
- CTAs link to the `#contact` anchor on the current page (inline contact form)
- No external booking tool; contact form is static HTML (no backend)
- Images always include descriptive `alt` text for SEO/accessibility
- Never use `file://` — always serve via `npx serve`

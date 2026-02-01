# Klean Sweep Co. Website - Handoff Instructions

## Project Overview
A professional single-page website for **Klean Sweep Co.**, a residential cleaning service in Central Dallas, Texas.

**Tagline**: "Because Your Home is Your Sanctuary"

---

## File Locations

```
c:\Users\leand\OneDrive\Documents\Claude Skills\klean-sweep-co\
├── index.html    # Complete website (HTML + CSS + JS all-in-one)
└── HANDOFF.md    # This file
```

---

## GitHub Repository

**URL**: https://github.com/Welcome2Git25/klean-sweep-co

**GitHub Pages** (if enabled): https://welcome2git25.github.io/klean-sweep-co/

---

## Design Specifications

### Aesthetic
- **Style**: Serene & Organic
- **Vibe**: Calm, peaceful, sanctuary-like, natural

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Sage Green | `#9CAF94` | Primary accent, CTAs, icons |
| Sage Dark | `#6B8065` | Hover states, emphasis |
| Warm Beige | `#E8DDD4` | Secondary backgrounds |
| Soft Cream | `#FAF8F5` | Primary background |
| Muted Terracotta | `#C4A484` | Accent highlights, stars, badges |
| Charcoal | `#2D2D2D` | Primary text |
| Soft Black | `#1A1A1A` | Dark sections (footer, testimonials) |

### Typography
- **Headlines**: Cormorant Garamond (Google Fonts) - elegant serif
- **Body**: Outfit (Google Fonts) - clean sans-serif

### Visual Elements
- Organic blob shapes with morphing CSS animations
- Wave/curved SVG section dividers
- Glass-morphism cards (testimonials)
- Floating elements with subtle float animation
- Scroll-triggered reveal animations (Intersection Observer)

---

## Current Implementation

### Sections Completed
1. **Navigation** - Fixed, semi-transparent with blur, mobile hamburger menu
2. **Hero** - Animated blobs, dual CTAs, floating badges, HD living room image
3. **Services** - 3 pricing cards with HD images (Basic $99, Detail $139, Move-out Custom)
4. **About/Why Choose Us** - Asymmetric layout, features grid, "500+ Homes Cleaned" badge
5. **Testimonials** - Dark background, infinite scrolling carousel, glass-morphism cards
6. **Contact Form** - Split layout (sage info panel + white form), form validation
7. **Footer** - 4-column grid, social links, copyright

### Features Implemented
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll navigation
- Mobile menu with overlay
- Form submission with success state
- Scroll reveal animations
- Testimonial carousel (pauses on hover)
- Accessibility features (skip link, ARIA labels, focus states)
- Prefers-reduced-motion support

---

## Services & Pricing (from original site)

### Basic Clean - $99 bi-weekly
- Dusting all surfaces
- Mirror cleaning
- Countertop sanitization
- Bathroom fixture cleaning
- Appliance exterior cleaning
- Floor maintenance (vacuum/mop)

### Detail Clean - $139 bi-weekly (POPULAR)
- Everything in Basic Clean PLUS:
- Ceiling fan dusting
- Light fixture cleaning
- Baseboard cleaning
- Linen changes
- High-touch point sanitization

### Move-out Clean - Custom Pricing
- Full deep clean throughout
- Interior/exterior appliance cleaning
- Cabinet & drawer cleaning
- Flexible scheduling
- Complete property preparation

### Add-on Services
Laundry, Organization, Refrigerator/Oven Interior, Dish Washing, Cabinet Cleaning, Special Projects

---

## Images Used (Unsplash)

All images are loaded via Unsplash CDN URLs:

| Section | Image URL |
|---------|-----------|
| Hero | `photo-1600585154340-be6161a56a0c` (modern living room) |
| Basic Clean | `photo-1584820927498-cfe5211fd8bf` (kitchen cleaning) |
| Detail Clean | `photo-1527515637462-cff94eecc1ac` (detailed cleaning) |
| Move-out | `photo-1560448204-e02f11c3d0e2` (empty apartment) |
| About | `photo-1556909114-f6e7ad7d3136` (cleaning professional) |

---

## Original Website Reference

**URL**: https://kleansweepco.mydurable.com/

Use this for content reference, testimonial wording, and feature parity checks.

---

## Potential Next Steps

### Enhancements
- [ ] Add FAQ accordion section
- [ ] Add Blog preview section
- [ ] Add image gallery/before-after showcase
- [ ] Add trust badges (BBB, Google Reviews, etc.)
- [ ] Add booking calendar integration
- [ ] Connect form to email service (Formspree, Netlify Forms, etc.)

### Optimizations
- [ ] Compress and self-host images for faster loading
- [ ] Add favicon and Open Graph meta tags
- [ ] Add structured data (JSON-LD) for SEO
- [ ] Minify CSS/JS for production
- [ ] Add Google Analytics

### Content
- [ ] Update contact phone/email with real info
- [ ] Add real team photos
- [ ] Add more testimonials from actual clients
- [ ] Update social media links

---

## Tech Stack

- **Pure HTML/CSS/JavaScript** - No frameworks
- **Google Fonts** - Cormorant Garamond + Outfit
- **Unsplash** - Stock images via CDN
- Single file deployment - just upload `index.html`

---

## Quick Commands

```bash
# Navigate to project
cd "c:\Users\leand\OneDrive\Documents\Claude Skills\klean-sweep-co"

# Open in browser
start index.html

# Git operations
git status
git add .
git commit -m "Your message"
git push
```

---

## Contact Info (placeholder - update with real info)

- **Location**: Central Dallas, TX
- **Phone**: (214) 555-0123
- **Email**: hello@kleansweepco.com
- **Hours**: Mon-Sat: 8am - 6pm

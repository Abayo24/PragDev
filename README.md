# PragDev Softwares — Next.js Website

A modern, high-converting website for PragDev Softwares built with:

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS v3**
- **next/font** (Fraunces, Outfit, JetBrains Mono — zero layout shift)

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
pragdev/
├── app/
│   ├── globals.css        # Tailwind base + custom animations
│   ├── layout.tsx         # Root layout with fonts & metadata
│   └── page.tsx           # Home page — assembles all sections
├── components/
│   ├── Cursor.tsx         # Custom magnetic cursor
│   ├── Loader.tsx         # Animated loading screen
│   ├── Nav.tsx            # Sticky nav + mobile hamburger
│   ├── Hero.tsx           # Full-screen hero section
│   ├── Ticker.tsx         # Orange scrolling tech ticker
│   ├── About.tsx          # About + animated counters
│   ├── Services.tsx       # Editorial numbered service list
│   ├── WhyUs.tsx          # Why choose us split layout
│   ├── Portfolio.tsx      # Bento grid portfolio
│   ├── Process.tsx        # 6-step process (forest green bg)
│   ├── Testimonials.tsx   # Pull-quote testimonials layout
│   ├── CTA.tsx            # Full-bleed orange CTA banner
│   ├── Contact.tsx        # Contact form + info
│   ├── Footer.tsx         # Footer with columns + socials
│   └── ScrollRevealProvider.tsx  # IntersectionObserver reveal
├── hooks/
│   └── useScrollReveal.ts # Scroll-triggered reveal hook
├── tailwind.config.ts     # Custom tokens (colors, fonts, animations)
├── tsconfig.json
└── next.config.ts
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| `cream` | `#F2EDE3` |
| `ink` | `#0F0D09` |
| `orange` | `#E8400C` |
| `lime` | `#A3FF00` |
| `forest` | `#0D2A1A` |
| `font-display` | Fraunces (serif) |
| `font-body` | Outfit (sans) |
| `font-mono` | JetBrains Mono |

---

## ✏️ Customisation

- **Contact details** → `components/Contact.tsx` — update email, phone, location
- **Portfolio projects** → `components/Portfolio.tsx` — edit the `projects` array
- **Testimonials** → `components/Testimonials.tsx` — edit the `testimonials` array
- **Services** → `components/Services.tsx` — edit the `services` array
- **Colors** → `tailwind.config.ts` → `theme.extend.colors`
- **Fonts** → `app/layout.tsx` — swap `next/font/google` imports

---

## 🌐 Deployment

Deploy instantly to [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

Or push to GitHub and connect to Vercel via their dashboard for automatic deployments.

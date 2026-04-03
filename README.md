# Alizar Raza — Portfolio

> Next.js 14 · TypeScript · GSAP · Sanity CMS · Tailwind CSS · Lenis · Vercel

Cinematic, horizontally-scrolling portfolio inspired by Lusion & Joby Aviation.
Full CMS via Sanity Studio embedded at `/studio`.

---

## Tech Stack

| Layer       | Tech                              |
|-------------|-----------------------------------|
| Framework   | Next.js 14 (App Router)           |
| Language    | TypeScript                        |
| Styling     | Tailwind CSS                      |
| Animation   | GSAP 3 + ScrollTrigger            |
| Smooth Scroll | Lenis                           |
| CMS         | Sanity v3 (embedded studio)       |
| Images      | next/image + @sanity/image-url    |
| Deployment  | Vercel                            |

---

## Project Structure

```
alizar-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout — fonts, metadata, providers
│   │   ├── page.tsx                # Home page — fetches CMS data, renders sections
│   │   └── studio/[[...tool]]/
│   │       ├── page.tsx            # Sanity Studio UI (route: /studio)
│   │       └── layout.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Cursor.tsx          # Custom dot + trail cursor
│   │   │   ├── Navbar.tsx          # Fixed nav, blend-mode, mobile hamburger
│   │   │   ├── Ticker.tsx          # Bottom accent ticker bar
│   │   │   ├── MagneticButton.tsx  # Cursor-following magnetic button
│   │   │   ├── SanityImage.tsx     # next/image wrapper for Sanity assets
│   │   │   └── Providers.tsx       # Lenis + GSAP init, progress bar
│   │   └── sections/
│   │       ├── HeroSection.tsx     # Full-viewport cinematic hero
│   │       ├── HorizontalScroll.tsx # GSAP-pinned horizontal scroll wrapper
│   │       ├── AboutSection.tsx    # Split image/text panel
│   │       ├── SkillsSection.tsx   # Tech stack grid with hover-fill effect
│   │       ├── ProjectsSection.tsx # Work intro + ProjectCard list
│   │       ├── ProjectCard.tsx     # 3D tilt card with parallax image
│   │       ├── ExperienceSection.tsx # Timeline with GSAP line draw
│   │       └── ContactSection.tsx  # Full-screen CTA with magnetic buttons
│   ├── hooks/
│   │   ├── useLenis.ts             # Smooth scroll hook
│   │   ├── useHorizontalScroll.ts  # GSAP horizontal scroll hook
│   │   └── useMagneticCursor.ts    # Cursor magnet hook
│   ├── lib/
│   │   ├── sanity.ts               # Sanity client + urlFor
│   │   ├── queries.ts              # All GROQ queries + async fetchers
│   │   └── utils.ts                # cn() class merge utility
│   ├── types/
│   │   └── index.ts                # Project, Experience, Skill types
│   └── styles/
│       └── globals.css             # Tailwind, CSS vars, cursor, ticker, noise
├── sanity/
│   ├── schemas/
│   │   ├── project.ts              # Project document schema
│   │   └── experience.ts           # Experience + Skill schemas
│   └── index.ts                    # Schema barrel export
├── sanity.config.ts                # Sanity Studio config
├── next.config.ts                  # Image domains, transpile sanity
├── tailwind.config.ts              # Colors, fonts, custom sizes
├── vercel.json                     # Vercel deploy config
└── .env.local.example              # Environment variable template
```

---

## Quick Start

### 1. Clone & install

```bash
git clone https://github.com/yourusername/alizar-portfolio.git
cd alizar-portfolio
npm install
```

### 2. Set up Sanity project

```bash
# Create a free Sanity project
npx sanity@latest init --bare

# Note your Project ID from the output (looks like: abc123de)
```

Go to **sanity.io/manage** → your project → **API** tab:
- Add `http://localhost:3000` to CORS origins (with credentials)
- Create a **Read** token for server-side fetches (optional but recommended)

### 3. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id_here"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-01-01"
SANITY_API_READ_TOKEN="your_read_token_here"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 4. Run locally

```bash
npm run dev
```

Open **http://localhost:3000** — your portfolio.
Open **http://localhost:3000/studio** — your CMS.

### 5. Add your content in Sanity Studio

Go to `/studio` and add:

**Projects** (most important):
- Title, slug, order, cover image, tags, description, live URL, GitHub URL

**Experience**:
- Role, company, period, description, tags

**Skills** (optional — fallback list is built in):
- Name, category, order

---

## Deploy to Vercel in One Command

### Option A — Vercel CLI (fastest)

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Deploy (follow the prompts)
vercel

# Set environment variables
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
vercel env add NEXT_PUBLIC_SANITY_DATASET
vercel env add NEXT_PUBLIC_SANITY_API_VERSION
vercel env add SANITY_API_READ_TOKEN
vercel env add NEXT_PUBLIC_SITE_URL

# Deploy to production
vercel --prod
```

### Option B — GitHub + Vercel Dashboard

1. Push your repo to GitHub
2. Go to **vercel.com** → New Project → Import your repo
3. Add environment variables in the Vercel dashboard
4. Click Deploy — done ✅

### After deploying

Add your Vercel production URL to Sanity CORS:
- **sanity.io/manage** → your project → **API** → **CORS origins**
- Add `https://your-domain.vercel.app` (with credentials checked)

---

## Customise Your Content

### Update your info

| File | What to change |
|------|---------------|
| `src/app/layout.tsx` | Site title, description, OG metadata |
| `src/components/sections/HeroSection.tsx` | Hero headline, subtitle |
| `src/components/sections/ContactSection.tsx` | Email, social links |
| `src/components/ui/Ticker.tsx` | Ticker bar text |
| `src/components/ui/Navbar.tsx` | Nav logo (AR) |

### Add a project in CMS

1. Go to `/studio`
2. Click **Projects** → **+ New**
3. Fill in title, description, cover image, tags, URLs
4. Hit **Publish**
5. Your site auto-revalidates every 60 seconds (ISR)

### Change accent colour

In `src/styles/globals.css`:
```css
:root {
  --accent: #c8f03c;  /* Change this to any colour */
}
```

Also update `tailwind.config.ts`:
```ts
accent: '#c8f03c',  /* Match this */
```

---

## Performance

- All data fetched server-side (zero client waterfalls)
- ISR revalidation every 60s for projects
- next/image for all images (WebP + lazy loading)
- GSAP animations use `will-change: transform` and `transform3d` for GPU compositing
- Lenis smooth scroll synced to GSAP ticker for zero jank

---

## License

MIT — use freely, but a credit or star is appreciated 🙏

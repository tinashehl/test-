# FORMA Studio — Architecture Portfolio

A production-ready architecture portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Design

- **Mood**: Quiet luxury, gallery-like, editorial
- **Palette**: Warm White `#F7F6F3` / Deep Charcoal `#111111` / Stone Grey `#BEB8AE` / Architectural Beige `#DDD6CC`
- **Typography**: Cormorant Garamond (serif headings) + Inter (sans-serif body)
- **Dark mode**: Supported, respects OS preference, persisted in localStorage

## Stack

| Tool | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| next/font | Google Fonts (zero layout shift) |
| next/image | Optimised image loading |

## Pages

| Route | Description |
|---|---|
| `/` | Home: hero, selected works, studio preview, services, journal |
| `/works` | Filterable project grid |
| `/works/[slug]` | Full project detail with parallax + gallery |
| `/studio` | Philosophy, process, team |
| `/services` | Accordion services list |
| `/journal` | Essay listing with hover preview |
| `/contact` | Contact info + inquiry form |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customisation

### Studio name & content
Update `app/layout.tsx` (metadata), `components/layout/nav.tsx` (logo), and `components/layout/footer.tsx`.

### Projects
Edit `lib/data/projects.ts` — each project has a slug, hero image, gallery images, and rich editorial content.

### Journal
Edit `lib/data/journal.ts` — each post has a title, category, date, excerpt, and full body.

### Images
Replace the Unsplash URLs in `lib/data/projects.ts` with your own photography. The `next/image` component handles optimisation automatically.

### Colors
All palette values are in `tailwind.config.ts`. Update once, changes propagate everywhere.

## Deployment on Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository in the [Vercel dashboard](https://vercel.com/new) for automatic deployments on every push.

**Environment**: No environment variables required for basic deployment. Add `NEXT_PUBLIC_` prefixed variables for analytics or a contact form backend.

## Folder Structure

```
architecture-portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout, fonts, SEO
│   ├── page.tsx            # Home page
│   ├── works/              # Works index + project detail
│   ├── studio/             # Studio/about page
│   ├── services/           # Services accordion
│   ├── journal/            # Essay listing
│   └── contact/            # Contact form
├── components/
│   ├── home/               # Home-specific sections
│   ├── layout/             # Nav, footer, page transition
│   ├── shared/             # Reusable primitives
│   ├── ui/                 # Cursor, scroll progress
│   └── works/              # Project card + detail
└── lib/
    ├── data/               # Project and journal content
    └── utils.ts            # cn(), formatDate(), padIndex()
```

## License

MIT

# Loic Fonkam — Portfolio

Personal portfolio website built with Next.js, Tailwind CSS, and GSAP.

**Live:** [loicfonkam.com](https://loicfonkam.com)

## Credits

Originally created by [Asnel Christian](https://github.com/AsnelChristian). Redesigned with Brittany Chiang-inspired polish and interactivity.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** GSAP + ScrollTrigger
- **UI Components:** Radix UI, shadcn/ui
- **Email:** Brevo API
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Add your BREVO_API_KEY

# Run dev server
npm run dev

# Build for production
npm run build
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `BREVO_API_KEY` | Brevo API key for the contact form |

## Modifying Content

All text content lives in a single file: [`src/app/data/index.tsx`](/src/app/data/index.tsx)

This includes:
- Personal information (name, summary, social links)
- Work experience
- Projects
- Testimonies

The TypeScript schemas governing the data structure are in [`src/app/schema/index.ts`](/src/app/schema/index.ts).

You can edit the data file directly on GitHub from your phone — any commit to `main` triggers an automatic Vercel deployment.

## Project Structure

```
src/
├── app/
│   ├── api/send/       # Contact form API route (Brevo)
│   ├── data/           # All editable content
│   ├── schema/         # TypeScript types
│   ├── globals.css     # Global styles + utilities
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── ui/             # Reusable UI primitives (shadcn)
│   ├── hero.tsx        # Hero section
│   ├── experience.tsx  # Work experience timeline
│   ├── projects.tsx    # Project grid (bento layout)
│   ├── testimony.tsx   # Auto-scrolling testimonials
│   ├── contact.tsx     # Contact form
│   ├── navbar.tsx      # Nav with scroll-spy
│   ├── spotlight.tsx   # Cursor-following gradient
│   ├── side-socials.tsx # Fixed side social links
│   └── section-heading.tsx # Numbered section headers
├── constants/          # Nav items
└── lib/                # Utilities
```

## License

MIT

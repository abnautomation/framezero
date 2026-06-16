# Frame Zero — AI Animation Education Website

A premium, beginner-friendly educational website teaching AI-powered 3D animation. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, and MDX.

## Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build — must pass clean
```

## Project Structure

```
framezero/
├── app/                         # All pages (Next.js App Router)
│   ├── page.tsx                 # Home
│   ├── about/
│   ├── start-here/
│   ├── learn/                   # 5 guide pages
│   ├── tools/
│   ├── workflow/
│   ├── services/
│   ├── case-studies/[slug]/
│   ├── blog/[slug]/
│   ├── resources/
│   ├── faq/
│   ├── contact/
│   ├── community/
│   ├── newsletter/
│   ├── glossary/
│   ├── privacy/ + terms/
│   ├── api/
│   │   ├── subscribe/route.ts   # Newsletter stub — connect provider here
│   │   └── contact/route.ts     # Contact form stub — connect email here
│   ├── sitemap.ts               # Auto-generated sitemap.xml
│   └── robots.ts
├── components/
│   ├── layout/                  # Header, Footer, ThemeProvider, GuideLayout
│   ├── sections/                # Homepage section components
│   └── ui/                      # Reusable components
├── config/site.ts               # All global config (brand, URLs, nav links)
├── lib/
│   ├── utils.ts                 # cn(), formatDate()
│   ├── motion.ts                # Framer Motion variants
│   └── blog.ts                  # Blog post metadata
└── mdx-components.tsx           # MDX component mappings
```

## Adding a Blog Post

1. Add to `lib/blog.ts`:
```ts
{
  slug: "my-new-post",
  title: "Post Title",
  description: "SEO description.",
  date: "2025-07-15",
  readTime: "5 min",
  category: "Tutorial",
}
```

2. Add content in `app/blog/[slug]/page.tsx` inside the `content` object:
```tsx
"my-new-post": (
  <>
    <h2>Introduction</h2>
    <p>Your content...</p>
  </>
),
```

The page auto-generates. Sitemap updates on next build.

## Adding a Case Study

1. Add to `caseStudies` array in `app/case-studies/page.tsx`
2. Add `details` in `app/case-studies/[slug]/page.tsx`

## Connecting Newsletter (TODO)

Edit `app/api/subscribe/route.ts`. Replace the stub with your provider:

```ts
// Mailchimp
import mailchimp from "@mailchimp/mailchimp_marketing";
mailchimp.setConfig({ apiKey: process.env.MAILCHIMP_API_KEY, server: "us1" });
await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID!, {
  email_address: email, status: "subscribed",
});
```

Store keys in `.env.local` — never commit them.

## Connecting Contact Form (TODO)

Edit `app/api/contact/route.ts`. Example with Resend:

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: "contact@framezero.studio",
  to: "hunterhenry070@gmail.com",
  subject: `New message from ${body.name}`,
  text: body.message,
  reply_to: body.email,
});
```

## Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://www.framezero.studio
MAILCHIMP_API_KEY=...
MAILCHIMP_LIST_ID=...
RESEND_API_KEY=...
```

## Deploying to Vercel

1. Push to GitHub
2. Import in vercel.com
3. Set environment variables in Vercel dashboard
4. Deploy

## Site Config

Everything in `config/site.ts`:
- `BRAND_NAME`, `TAGLINE`, `CONTACT_EMAIL`, `WHATSAPP_URL`
- `navLinks` — header navigation
- `footerLinks` — footer columns

## Design Tokens

CSS variables in `app/globals.css`:
- `--color-indigo` #5b5bd6 (primary brand)
- `--color-violet` #8a5cf6
- `--color-coral` #ff6b5e (CTA)
- `--color-mint` #3ddc97 (success)
- Dark mode via `.dark` class on `<html>` (toggled by ThemeProvider)

## Affiliate Links (Tools Directory)

In `app/tools/page.tsx`, update each tool's `href` with your affiliate URL. The `rel="noopener noreferrer sponsored nofollow"` is already applied.

## Future: Consulting

Footer "Work with us" link → `/contact`. Create `/consulting` page when ready and update `footerLinks` in `config/site.ts`.

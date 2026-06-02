# ESTOB Prints — Website

> Premium printing, branding, and production solutions. Lagos, Nigeria.

## 🗂 Project Structure

```
estob-prints/
├── public/
│   ├── logo.png              ← ADD: ESTOB logo PNG
│   ├── favicon.ico           ← ADD: Favicon
│   ├── og-image.jpg          ← ADD: Social sharing image (1200×630px)
│   └── images/               ← ADD: Portfolio & product images here
│
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← Root layout: Navbar + Footer + metadata
│   │   ├── page.tsx          ← Homepage
│   │   ├── about/page.tsx    ← About Us page
│   │   ├── services/page.tsx ← Services page
│   │   ├── portfolio/page.tsx← Portfolio/Gallery page
│   │   └── contact/page.tsx  ← Contact page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    ← Sticky responsive nav
│   │   │   └── Footer.tsx    ← Site footer
│   │   ├── sections/         ← Homepage sections
│   │   │   ├── Hero.tsx
│   │   │   ├── TickerTape.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   └── ContactCTA.tsx
│   │   └── ui/               ← Reusable components
│   │       ├── Button.tsx
│   │       ├── SectionHeading.tsx
│   │       └── ServiceCard.tsx
│   │
│   └── lib/
│       └── constants.ts      ← ⭐ All site data lives here (update this!)
│
├── tailwind.config.ts        ← Brand colors, fonts, animations
├── next.config.ts
└── package.json
```

---

## 🚀 Local Setup

### Prerequisites
- Node.js v18+ installed
- npm or yarn

### Steps

```bash
# 1. Navigate to the project folder
cd estob-prints

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# → http://localhost:3000
```

---

## 📝 Updating Content

All site data (phone, email, services, social links) lives in one file:

```
src/lib/constants.ts
```

Update these before going live:
- `CONTACT_INFO.phone` — real phone number
- `CONTACT_INFO.whatsapp` — real WhatsApp number
- `CONTACT_INFO.email` — real email address
- `CONTACT_INFO.address` — full street address
- `CONTACT_INFO.social.*` — real social media URLs
- `STATS` — real numbers if different
- `SITE_META.url` — production domain

---

## 🖼 Adding Images

1. Add logo PNG → `/public/logo.png`
2. Add portfolio images → `/public/images/`
3. In Portfolio.tsx, replace placeholder `<div>` blocks with:

```tsx
import Image from "next/image";

<Image
  src="/images/project-name.jpg"
  alt="Project description"
  fill
  className="object-cover"
/>
```

---

## 🌐 Deploying to Vercel

Vercel is the recommended platform (built by the Next.js team).

### Steps:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial ESTOB Prints website"
   git remote add origin https://github.com/yourusername/estob-prints.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repo
   - Framework: **Next.js** (auto-detected)
   - Click **Deploy**

3. **Add custom domain:**
   - In Vercel dashboard → Settings → Domains
   - Add `estobprints.com`
   - Update DNS records with your domain registrar

### Environment Variables (if needed later):
Add in Vercel dashboard → Settings → Environment Variables

---

## 🔮 Next Steps (Remaining Pages)

After homepage approval, build in this order:

1. `/about` — Full about page with team, story, values
2. `/services` — Detailed services page with individual service sections
3. `/portfolio` — Full gallery with filter by category
4. `/contact` — Contact form + WhatsApp + map + address

---

## 🎨 Brand Colors Reference

| Color     | Hex       | Usage                          |
|-----------|-----------|-------------------------------|
| ESTOB Red | `#EF2020` | Primary — CTAs, accents, logo |
| Black     | `#000000` | Hero backgrounds               |
| Charcoal  | `#1E1E1E` | Dark section backgrounds       |
| White     | `#FFFFFF` | Light section backgrounds      |
| Cyan      | `#30C5F4` | CMYK accent                    |
| Magenta   | `#EC008C` | CMYK accent                    |
| Yellow    | `#FFE600` | CMYK accent                    |

---

Built with Next.js 14 + Tailwind CSS.

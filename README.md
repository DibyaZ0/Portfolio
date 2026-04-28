# Dibya Jyoti Sahoo — Personal Portfolio

A modern, dark-themed, fully responsive personal portfolio website for **Dibya Jyoti Sahoo**, an entry-level Full Stack (MERN) Software Engineer based in Bengaluru, India.

## 🎯 Project Goals

- Position Dibya as a hireable full-stack software engineer.
- Showcase his MERN stack experience, internship achievements, and signature projects.
- Provide recruiters with a clear, fast and visually impressive single-page experience.

## ✨ Currently Completed Features

- **Sticky animated navbar** with smooth-scroll links, scroll-aware styling and a mobile hamburger menu.
- **Hero section** with:
  - Animated typing effect cycling through roles (Full Stack Developer, MERN Stack Engineer, etc.)
  - Gradient name treatment
  - Live "Available for opportunities" status pill with pulsing dot
  - 3D-tilted code card showcasing his developer profile in JS
  - Floating tech tags (React, Node.js, MongoDB) with float animation
  - Primary CTAs (View My Work, Get In Touch) and social icons
- **About section** with bio copy, animated stat counters (months of experience, % latency reduction, projects/hackathons) and a Quick Facts info card.
- **Skills section** — six categorised skill cards (Web, Languages, Databases, Frameworks & Tools, Concepts, Soft Skills) with chip-style tags.
- **Experience timeline** — vertical timeline featuring:
  - Cuvette Tech — Full Stack Developer Intern (Sep 2024 – Jun 2025)
  - CodeAlpha — Web Developer Intern
  - Trident Academy of Technology — B.Tech CSE
- **Projects section** — feature-rich cards for:
  - Restaurant Management Web Application (May 2025)
  - Ticketing System & CRM (March 2025)
- **Certifications & Achievements** — six-card grid (MERN cert, CodeAlpha cert, SIH 2022, Flipkart Grid 5.0, IIT Bhubaneswar Innovation Expo, Class XII).
- **Contact section** — clickable contact list (email, phone, LinkedIn, GitHub, location) plus a validated contact form that opens the user's email client (`mailto:` flow).
- **Footer** with logo, socials and dynamic copyright year.
- **Back-to-top floating button** that appears after scroll.
- **Scroll reveal animations** (IntersectionObserver-based) for sections, cards and stats.
- **Counter animations** for the About stats.
- **Animated background** with grid overlay and multi-radial gradient glow.
- **Fully responsive** layout — desktop, tablet and mobile breakpoints (≤980px, ≤720px, ≤480px).
- **Accessibility** — semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), ARIA labels on icon-only buttons, `prefers-reduced-motion` support.

## 🗺️ Functional Entry URIs

The site is a single-page application; all sections are reachable via in-page anchors:

| Path | Section |
|------|---------|
| `/index.html#hero` | Hero / landing |
| `/index.html#about` | About me |
| `/index.html#skills` | Skills & tech stack |
| `/index.html#experience` | Experience & education timeline |
| `/index.html#projects` | Featured projects |
| `/index.html#certifications` | Certifications & achievements |
| `/index.html#contact` | Contact info + form |

External links: `mailto:dibyajyoti.sahoo1711@gmail.com`, `tel:+919692102044`, LinkedIn, GitHub.

## 📁 Project Structure

```
index.html         # Main single-page site
css/
  └── style.css    # All styles (dark theme, responsive, animations)
js/
  └── main.js      # Interactivity: typing, nav, reveal, counters, form
README.md          # This file
```

## 🎨 Design System

- **Theme**: Dark, tech-inspired
- **Primary palette**: Violet `#7c5cff` → Cyan `#22d3ee` → Pink `#f471b5` (gradient accents)
- **Background**: Near-black `#07080d` with subtle grid + radial gradient glow
- **Typography**:
  - Display: **Space Grotesk**
  - Body: **Inter**
  - Mono / code: **JetBrains Mono**
- **Icons**: Font Awesome 6.4

## 💾 Data Models / Storage

This is a **static portfolio** — no database or backend storage is used. All content is hard-coded in `index.html` based on the resume data. The contact form uses a client-side `mailto:` fallback (no server processing).

## 🚧 Features Not Yet Implemented

- Live project demos / GitHub repo deep links (placeholder `#` links currently used for LinkedIn & GitHub — replace with real URLs).
- Downloadable PDF resume button.
- Project detail modal / dedicated case-study pages.
- Blog / writing section.
- Server-side contact form (currently `mailto:` only).
- Light/dark theme toggle (only dark mode currently).
- Multi-language support.

## 🔭 Recommended Next Steps

1. **Replace placeholder URLs** in the navbar, hero socials, footer and contact section with the real GitHub and LinkedIn profile URLs.
2. **Add a "Download Resume" button** in the hero that links to a hosted PDF copy of the resume.
3. **Add real project screenshots** in `images/` to replace the emoji placeholders inside `.project-visual`.
4. **Hook the contact form to a service** like Formspree, EmailJS or Netlify Forms for true server-side delivery.
5. **Add SEO meta tags** (Open Graph, Twitter cards) and a `favicon.ico`.
6. **Deploy** via the **Publish tab** to make the site live.

## 🚀 Deployment

To deploy this website and make it publicly accessible, use the **Publish tab** in the project. The Publish tab handles all deployment automatically and provides the live URL.

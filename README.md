# 🖥️ Retro-blog — A Retro-Futurist Blog Template

<img width="1920" height="970" alt="screencapture-retro-blog-template-vercel-app-2025-12-19-22_22_12" src="https://github.com/user-attachments/assets/b5fff841-5a8d-4d05-b77f-fe2584b1a4ae" />


**Retro-blog** is a sleek, developer-friendly blog template infused with **retro-futurist aesthetics** think glowing terminals, CRT scanlines, circuit grids, and cyberpunk vibes. Built with **Next.js, TypeScript, and Tailwind CSS**, it offers ready-to-use, fully typed components so you can launch a striking blog in minutes.

Perfect for tech writers, indie hackers, or anyone who believes the future looked cooler in 1984.

## 📋 Table of Contents

- [✨ Features](#-features)
- [⚙️ Tech Stack](#️-tech-stack)
- [🚀 Installation](#-installation)
- [🎨 Customization](#-customization)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

## ✨ Features

- **Retro-Futurist UI**: CRT scanlines, glowing teal accents, terminal-style typography, and animated status indicators.
- **Fully Static**: No database or CMS required—content defined via TypeScript objects.
- **Responsive Design**: Looks sharp on mobile, tablet, and desktop.
- **Pre-Built Pages**:  
  - Blog post view  
  - About page  
  - Privacy Policy  
  - Contact form (static showcase)
- **Type-Safe**: Written in TypeScript with clear interfaces.
- **Zero Runtime Dependencies**: No analytics, trackers, or bloat.

## ⚙️ Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom retro theme)
- **No UI Library**: Pure Tailwind 
> ✅ *Lightweight, fast, and 100% yours to customize.*

## 🚀 Installation

### Prerequisites

- Node.js v18 or higher
- npm, Yarn, or pnpm

### Steps

1. **Clone the repo**
   ```bash
   git clone https://github.com/homayunmmdy/Retro-blog.git
   cd Blogg
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the dev server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit → [http://localhost:3000](http://localhost:3000)

---

## 🎨 Customization

All content is managed in:
```
src/app/config/StaticData.ts
```

To customize:
- Replace placeholder images in `public/image/`
- Update blog posts, comments, and page content in `StaticData`
- Modify colors or effects in Tailwind classes (no CSS files needed)
- Add real form handling to the Contact page via Next.js API routes


## 🤝 Contributing

We welcome contributions! To help improve **Retro-blog**:

1. 🍴 Fork the repository
2. 🌿 Create a new branch (`feat/your-feature` or `fix/bug-name`)
3. 💾 Commit your changes
4. 🔁 Push to your fork
5. 📥 Open a Pull Request with a clear description

Please keep the retro aesthetic and type safety intact!

## 📜 License

MIT License 

> **Blogg**: Where the future is analog, and the code is clean.  
> Made with ☕ and nostalgia by [Homayoun M.](https://github.com/homayounmmdy)

# GEMINI.md - Keystyle Project

## Purpose
This project is the official website for **Keystore**, a platform likely focused on design, professional services, or a creative showcase. It's built with modern web technologies for a premium, performant, and responsive user experience.

## Architecture
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Shadcn/ui (Radix-based) and Framer Motion for animations.
- **Directory Structure**:
  - `src/app/`: App router pages and layouts.
  - `src/components/`: Reusable UI components (Hero, Services, Testimonials, etc.).
  - `src/lib/`: Utility functions and shared logic.

## Key Files
- `src/app/page.tsx`: Main entry point (Landing Page).
- `src/components/Hero.tsx`: Main visual introduction.
- `src/components/Navbar.tsx`: Global navigation.
- `src/components/Services.tsx`: Service offerings section.

## Local Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/floraleong2025/keystyle_web.git
   cd keystyle_web
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run development server**:
   ```bash
   npm run dev
   ```
4. **Open in browser**: [http://localhost:3000](http://localhost:3000)

## Conventions
- Follow the **PRAR Workflow** (Perceive, Reason, Act, Refine) for all modifications.
- Maintain **LEARNINGS.gemini.md** for every task cycle.
- Use **Conventional Commits** (e.g., `feat:`, `fix:`, `docs:`).
- Keep UI consistent with the theme (Modern, Sleek, Performant).

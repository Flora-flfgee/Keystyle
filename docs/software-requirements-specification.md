# Software Requirements Specification: KEYSTYLE SARTORIAL

## 1. Introduction
This document serves as the technical blueprint for the **Keystyle Sartorial** web platform, the corporate presence for **Flora Leong's** image consultancy.

## 2. Technical Stack
*   **Framework**: Next.js (App Router, version 15.3.3 compatible).
*   **Styling**: Tailwind CSS for responsive and fluid layouts.
*   **Animations**: Framer Motion for premium transitions, parallax, and micro-interactions.
*   **Icons**: Lucide (React) and Material Symbols (Google Fonts).
*   **Fonts**: 
    *   **Manrope**: Primary heading and brand font.
    *   **Inter**: Secondary body and metadata font.
*   **Media**: High-definition video (`Ping_Bw.mp4`) and optimized photography (Grayscale/High-contrast formats).

## 3. Core Requirements (5W1H Integration)

### WHO (User & Role)
*   **Target User**: Middle-aged professional men, CEOs, and global executives.
*   **Administrator**: Flora Leong (via GitHub push/Vercel automatic deployments).

### WHAT (System Assets)
*   Editorial-grade Landing Page with dynamic components.
*   **MDX Blog Engine (Eddie Blog Module v1.2)**: For content-led lead generation (The Power Suit, Global Wardrobe, etc.).
*   **Video Integration**: Cinematic modal for the "Ping" makeover story.

### WHERE (Deployment Hub)
*   **Hosting**: Vercel (Singapore/Global Edge).
*   **Domain**: `keystyle.sg` (canonical: `https://www.keystyle.sg`).

### WHEN (Build Cycles)
*   **Cycle**: 2024–2026.
*   Integration with Vercel for continuous deployment on every GitHub push.

### WHY (Performance Rationale)
*   **Authoritative Performance**: Sub-second page loads to meet high-profile user expectations.
*   **SEO & Visibility**: Self-referencing canonicals for all blog/page paths.
*   **Visual Authority**: Dark mode for prestige and focus.

### HOW (Implementation Patterns)
*   **PRAR Workflow**: Consistent Perceive, Reason, Act, Refine process.
*   **OpenClaw Protocol v1.2**: MDX-based blogging with a central `BlogMeta` registry.
*   **Emerald-Gold Design Tokens**: Shared color palette across all UI.

## 4. Feature Specifications
*   **Navbar**: Glassmorphic, sticky navigation with smooth scroll to sections (Services, About, Diaries, etc.).
*   **Hero Section**: 
    *   Interactive parallax text overlays.
    *   Cinematic video player modal (`Play Film`).
    *   Call-to-action (CTA): "Book your consultation."
*   **Services Grid**: High-contrast, monochromatic-to-color hover effects for Consultancy and Refinement services.
*   **Testimonials Slider**: Interactive quote system featuring boardroom leaders.
*   **Instagram Integration**: A "Sartorial Vision" grid that showcases stylized visuals.

## 5. Security & Canonicalization
*   **Canonical Tags**: Required on every page to prevent duplicate index issues.
*   **SEO Metadata**: Dynamic metadata generation using Next.js Metadata API.

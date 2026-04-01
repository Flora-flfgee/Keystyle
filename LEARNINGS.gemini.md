# LEARNINGS.gemini.md - Learning Log

## [2026-03-26] - Initial Repo Push
- **Action**: Initialized the local repository in `/Users/eddyho/python0/keystyle_2`.
- **Reason**: User requested to push the current code to a new GitHub repository at `https://github.com/floraleong2025/keystyle_web.git`.
- **Act**:
  - Investigated current directory structure and confirmed it's a Next.js App Router project.
  - Created `.gitignore` to protect sensitive information (like the `.env` containing the token) and exclude dependencies/build files.
  - Configured git origin with the provided token for authentication.
  - Pushed the initial codebase to the `main` branch.
- **Refine**: Added mandatory documentation files (`GEMINI.md`, `LEARNINGS.gemini.md`, `README.md`, etc.) for project sustainability and visibility.

## [2026-03-26T20:00:00] - Eddie Blog Module v1.2 Implementation
- **Action**: Implemented the "Diaries" blog section and underlying infrastructure.
- **Reason**: User requested the "Eddie Blog Module v1.2" for high-performance MDX-based blogging with a central registry.
- **Act**:
  - Updates `next.config.ts` to support MDX and custom page extensions.
  - Created a central `BlogMeta` registry in `src/data/blog-metadata.ts` for centralized post management.
  - Developed `BlogContent` and `BlogModal` using `next/dynamic` to load naked MDX files without frontmatter parsers, adhering to the OpenClaw Protocol v1.2.
  - Refactored `BlogGrid` into `DiariesSection` and `InstagramSection`, placing the new blog section above the Instagram feed.
  - Created a dedicated `/diaries` archive page with category filtering.
- **Refine**: Verified the dynamic import logic and ensured the design system (Manrope/Inter fonts, HSL colors) is consistently applied to the new modules.

## [2026-04-01] - Fix Vercel Build Failure (MDX & Files)
- **Action**: Resolved "Module not found" and MDX parsing errors at Vercel.
- **Reason**: Build failure caused by missing `.mdx` files in `src/content/blogs` and incomplete MDX configuration in `next.config.ts`.
- **Act**:
  - Identified missing files referenced by `src/data/blog-registry.ts`.
  - Recreated the three blog post files with initial structured content based on `src/data/blog-metadata.ts`.
  - Updated `next.config.ts` to properly wrap the configuration with `@next/mdx` for Next.js 15.3.3.
  - Aligned git email with previous repository contributor (`monstereacom@gmail.com`).
- **Refine**: Successfully verified local production build via `npm run build` and pushed fixes to GitHub repository.

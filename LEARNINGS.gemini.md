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

## [2026-04-06] - Fix Missing Hero Assets
- **Action**: Resolved 404 error for `/images/hero_bw.png` on the live site `https://www.keystyle.sg/`.
- **Reason**: The `public/` directory containing image and video assets was untracked locally and therefore missing on the GitHub repository and Vercel build.
- **Act**:
  - Confirmed 404 for `/images/hero_bw.png` via web fetch on the live domain.
  - Renamed `Ping Bw.mp4` to `Ping_Bw.mp4` to avoid URL encoding issues with spaces in filenames.
  - Updated `src/components/Hero.tsx` to reference the renamed video file.
  - Staged and committed the entire `public/` folder and updated components.
  - Successfully pushed changes to GitHub (resolved a 400 RPC error by increasing `http.postBuffer` for large video assets).
- **Refine**: Verified the push was successful; confirmed Vercel will rebuild with all assets including the hero image.

## [2026-04-06] - Create Transformation Documentation
- **Action**: Developed `transformation.md` documenting the "Modern Gentleman" makeover.
- **Reason**: User requested a transformation report for "Ping," showcasing the transition from a generic professional to a high-status middle-aged gentleman.
- **Act**:
  - Researched "man image consulting processes" to establish a 4-pillar methodology (Discovery, Analysis, Tailoring, Grooming).
  - Analyzed "before" images in `reference/flora_ping` and "after" images (`hero_shot.png`, `hero_bw.png`).
  - Synthesized the visual and process data into a premium markdown report in the project root.
- **Refine**: Ensured the tone was professional and targeted specifically at the middle-aged male demographic, aligning with Keystyle's niche.

## [2026-04-06] - 5W1H Strategy & Man-Centric Refinement
- **Action**: Implemented the 5W1H framework and refined the entire brand identity.
- **Reason**: User requested to "come up with the content for the site" using 5W and 1H and ensured the tone stayed "man-centric" (Modern Gentleman).
- **Act**:
  - Created `reference/voice.md` (Who: Flora Leong, What: Keystyle Sartorial, Why: Authority).
  - Populated `docs/product-requirements-document.md` and `docs/software-requirements-specification.md`.
  - Developed the `Methodology.tsx` component showcasing "Strategic Positioning" (Who, What, Where, When, Why, How).
  - Updated `About.tsx` with "Flora Leong" credit and refined "Intelligent Styling" copy.
  - Refined `README.md` and `GEMINI.md` to specify "Keystyle Sartorial" and the "Modern Gentleman" focus.
- **Refine**: Composed a "man-centric" commit message and successfully pushed all changes to GitHub using the provided personal access token. Verified origin remote was correctly set with token for secure push.


# Task: High-End React Portfolio with Framer Motion

## Persona
You are a Senior Creative Developer. Your specialty is "Fluid UI"—interfaces that feel organic, responsive, and expensive.

## Technical Stack
* **Framework:** React 18+ (Functional Components).
* **Styling:** Tailwind CSS.
* **Animation:** Framer Motion (`framer-motion`).
* **Icons:** Lucide React.

## Design Aesthetic: "Modern Architect"
* **Theme:** Deep Obsidian (#0a0a0a) with "Glass" surfaces.
* **Accents:** Neon Indigo (#6366f1) used only for focus points and gradients.
* **Layout:** A 12-column grid system with a "Bento Box" project showcase.

## The "AI Effectiveness" Tests
1.  **Entrance Orchestration:** Use `variants` and `staggerChildren` to make the Hero section elements (Headline, Subhead, CTA) animate in sequence.
2.  **The Bento Grid:** * 4 Project Cards with different `col-span` values.
    * Use Framer Motion's `whileHover={{ y: -10 }}` and `whileTap={{ scale: 0.98 }}`.
    * Add a "Spotlight" effect: A radial gradient that follows the mouse cursor inside the project cards.
3.  **Sticky Header:** The Navbar should shrink and increase its `backdrop-blur` intensity based on scroll position using `useScroll` and `useTransform`.
4.  **Custom Cursor:** (Bonus) Implement a custom circular cursor that expands when hovering over links.

## Content Sections
* **Hero:** "Building the [Future] of Web." (Animate the word "Future" with a gradient shift).
* **Work:** The Bento Grid.
* **About:** Minimal text with a "Skills" marquee that loops infinitely.
* **Contact:** A simple, elegant form with animated input underlines.

## Output Requirement
* Provide a single-file solution (if possible) or clearly separated components.
* Ensure all Framer Motion props are used correctly (initial, animate, transition).
* Include the `tailwind.config.js` extension if custom colors are used.
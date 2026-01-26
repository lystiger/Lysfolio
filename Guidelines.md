# AI Coding Guideline – Portfolio (Stress Test Edition)

## 0. Intent (Read This First)

This guideline is for building **my actual public portfolio**, not a sandbox.

Secondary goal:

* Stress-test AI’s ability to deliver **production-quality visuals** while remaining controlled

This document prioritizes:

* Visual clarity
* Consistency
* Professional polish

Over:

* Extreme flexibility
* Experimental patterns

---

## 1. Success Criteria

The portfolio is successful if:

* It looks clean, modern, and intentional
* Visual hierarchy is obvious at first glance
* Codebase remains understandable after weeks of no touch
* AI-generated code requires minimal cleanup

If visuals degrade or code becomes chaotic, the AI has failed.

---

## 2. Tech Stack (Locked)

The AI must not modify this stack.

* Frontend: React + TypeScript
* Build Tool: Vite
* Styling: Tailwind CSS
* UI Primitives: shadcn/ui (approved)
* Icons: lucide-react (approved)
* Routing: React Router

No additional libraries without explicit approval.

---

## 3. Design Philosophy (Strict)

The AI must follow these principles:

* Minimalist, content-first design
* Strong spacing and typography over decoration
* Subtle UI, not flashy UI
* Dark mode optional, but light mode must exist

The AI must not:

* Use gradients excessively
* Use glassmorphism or neon styles
* Add decorative animations by default

---

## 4. Layout System (Non-Negotiable)

* Max content width: `max-w-5xl`
* Centered layout for all pages
* Consistent vertical rhythm using spacing scale
* Clear section separation

Every page must follow a predictable structure:

1. Page header (title + short description)
2. Main content
3. Footer or closing section

---

## 5. Project Structure (Strict)

```
src/
 ├─ components/      # Reusable UI components
 ├─ pages/           # Route-level pages
 ├─ layouts/         # Page scaffolding
 ├─ data/            # Typed static data
 ├─ hooks/           # Custom hooks
 ├─ utils/           # Pure helpers
 ├─ styles/          # Global styles (rare)
 ├─ App.tsx
 └─ main.tsx
```

Rules:

* One component per file
* No mock data inside JSX
* No routing logic outside `pages/`

---

## 6. Visual Components Rules

* Prefer shadcn/ui components when applicable
* Customize via Tailwind, not component rewrites
* Buttons, cards, badges, and typography must be consistent site-wide

Do not invent a new UI pattern if an existing one is already used.

---

## 7. Typography & Spacing

* Use Tailwind default font stack
* Headings must follow a clear hierarchy (`h1` → `h3`)
* Line length must remain readable (no full-width paragraphs)
* Use whitespace generously

If unsure, add more space, not more elements.

---

## 8. Data Modeling

* All content (projects, skills, links) must live in `src/data/`
* Data must be typed
* Components receive data via props

No API calls.
No hardcoded content inside layout components.

---

## 9. Interaction & Animation Rules

* Animations are optional
* If used, they must be subtle and purposeful
* No animation should block content visibility

Hover effects are preferred over entrance animations.

---

## 10. AI Autonomy Boundaries

### The AI MAY:

* Propose layout improvements
* Adjust spacing and typography
* Refactor repetitive JSX

### The AI MUST NOT:

* Change visual direction
* Introduce new libraries
* Add features not requested
* Over-abstract components

If uncertain → ask before implementing.

---

## 11. Output Requirements

When generating code:

* Output complete files only
* Briefly state the intent of the file
* Respect directory boundaries

No tutorials. No commentary essays.

---

## 12. Quality Bar

This portfolio represents me professionally.

The AI must assume:

* This will be reviewed by engineers
* Visual sloppiness equals technical sloppiness

When in doubt, choose:

> Simpler, cleaner, clearer.

---

## 13. Evolution

This guideline may evolve, but changes must be explicit.

No silent reinterpretation of rules.

This is a **stress test** — failures are expected and documented.

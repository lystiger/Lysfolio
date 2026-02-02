# Task: Interactive 3D Flip Card Component

## Technical Specs
* **Framework:** React + Framer Motion.
* **CSS Physics:** Enable `perspective: 1000px` on the parent and `transform-style: preserve-3d` on the animated element.
* **Backface Logic:** Both Front and Back must use `backface-visibility: hidden`.

## Animation Logic: "The Bounce Stop"
* **Trigger:** `whileHover` or state-controlled `animate`.
* **Transition:** `type: "spring"`.
* **Physics Values:** * `stiffness`: 300 (Fast start).
    * `damping`: 10-15 (Visible bounce/overshoot at the end).
    * `rotateY`: 180 degrees.

## Style Guide
* **Front:** Visual-heavy (use a gradient background or abstract pattern).
* **Back:** Data-heavy (technical specs, links, or a small chart).
* **Border:** A 1px subtle glow when the card is in mid-flip.

## AI Instructions
1. Ensure the card handles "hover exit" gracefully so it doesn't snap back instantly but bounces back to $0^\circ$.
2. Add a `whileTap={{ scale: 0.95 }}` effect for mobile responsiveness.

## Content
1. The card displaying some quick facts about user like (name, age, phone, address, nationality).
2. The other side display relation status, hobbies.
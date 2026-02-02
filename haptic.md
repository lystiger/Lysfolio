# Task: Implement Kinetic Haptic Text Rotation

## Feature Overview
Add a "Polyglot Hero" text component that rotates through multiple languages with high-fidelity physics and haptic feedback with the word "Hello, I am Lystiger" in MainLayout.tsx

## Physics Requirements (Framer Motion)
* **The "Quickstop":** Use a `spring` transition with high `stiffness` (400) and `damping` (20) to ensure the word "snaps" into place.
* **The "Bounce":** Add a slight `scale` overshoot in the `animate` prop (e.g., scale from 0.8 to 1.05 and settle at 1).
* **Exit Strategy:** Words should exit by sliding upward and fading out with a `filter: blur(4px)` effect.

## Haptic Requirements (Web API)
* **Function:** `navigator.vibrate([40, 20, 20])`.
* **Trigger:** The vibration must fire inside a `useEffect` synchronized with the state change of the word index.

## Design Context
* **Font:** Monospace (e.g., JetBrains Mono) to emphasize the "coding" nature of the portfolio.
* **Colors:** Transition the text color slightly for each language (e.g., English = Blue, Japanese = Red, French = White).

## AI Instructions
1. Create a reusable `HapticText.jsx` component.
2. Ensure the layout is "stable" (no layout shifting when word lengths change).
3. Add a fallback for browsers that do not support `navigator.vibrate` to prevent console errors.
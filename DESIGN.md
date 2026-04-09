# ITHAC Digital Hub - Design System Guide

## Design Theme Overview
- **Color Mode**: LIGHT
- **Primary Font**: MANROPE
- **Headline Font**: MANROPE
- **Body Font**: INTER
- **Label Font**: INTER
- **Corner Roundness**: ROUND_FOUR

## Color Palette

### Base Theme Overrides
- **Primary**: `#000000`
- **Secondary**: `#0000C6` (Electric Blue)
- **Tertiary**: `#00C0F0` (Azure)
- **Neutral / Surface**: `#F8F9FA`

### Comprehensive Token List (Named Colors)
| Token Category | Token Name | Hex Value |
| :--- | :--- | :--- |
| **Background & Surfaces** | `background` | `#f8f9fa` |
| | `surface` | `#f8f9fa` |
| | `surface_variant` | `#e1e3e4` |
| | `surface_bright` | `#f8f9fa` |
| | `surface_dim` | `#d9dadb` |
| | `surface_container_lowest` | `#ffffff` |
| | `surface_container_low` | `#f3f4f5` |
| | `surface_container` | `#edeeef` |
| | `surface_container_high` | `#e7e8e9` |
| | `surface_container_highest` | `#e1e3e4` |
| **Primary** | `primary` | `#232323` |
| | `on_primary` | `#ffffff` |
| | `primary_container` | `#393939` |
| | `on_primary_container` | `#a2a2a2` |
| **Secondary** | `secondary` | `#3a43e6` |
| | `on_secondary` | `#ffffff` |
| | `secondary_container` | `#5660ff` |
| | `on_secondary_container` | `#fffbff` |
| **Tertiary** | `tertiary` | `#002733` |
| | `on_tertiary` | `#ffffff` |
| | `tertiary_container` | `#003e50` |
| | `on_tertiary_container` | `#00b0dc` |
| **Errors & Outlines** | `error` | `#ba1a1a` |
| | `error_container` | `#ffdad6` |
| | `outline` | `#767587` |
| | `outline_variant` | `#c6c5d8` |

> Note: The project uses a fully mapped Material 3 (M3) derivative color palette, which includes deep tones like `tertiary_fixed_dim`, `surface_container`, `inverse_surface` and on-variant tones. Refer to `tailwind.config.js` for the exact full token list.

---

# Design System Strategy: The Digital Cynosure

## 1. Overview & Creative North Star
**The Creative North Star: "The Editorial Architect"**

This design system rejects the "cookie-cutter" SaaS aesthetic in favor of a high-end, editorial experience. We are not just building a portal; we are designing a center of excellence. The visual language balances the authority of a legacy institution with the agility of a modern tech hub.

To move beyond the "template" look, we employ **Intentional Asymmetry** and **Tonal Depth**. By utilizing wide gutters, oversized typography, and overlapping glass layers, we create a sense of digital "Cynosure"—a focal point that guides the eye through complex information with ease and elegance. The interface should feel like a premium digital magazine: breathable, authoritative, and sophisticated.

---

## 2. Colors & Surface Architecture
Our palette is rooted in a high-contrast monochromatic base, energized by a spectrum of "Electric Blues."

### Color Roles
*   **Primary (`#232323`) & Surface (`#f8f9fa`):** These define our structural foundation. We lead with white-space to signify clarity and trust.
*   **Secondary (`#3a43e6`):** Used for primary actions and high-significance brand moments.
*   **Tertiary & Accents (`#002733`, `#00C0F0`):** These "Cyan" and "Azure" tones are reserved for data visualization, progress indicators, and "innovation" highlights.

### The "No-Line" Rule
**Borders are prohibited for sectioning.** To separate content, designers must use background color shifts (e.g., a `surface-container-low` section sitting on a `surface` background). If you feel the need for a line, you haven't used your surface tokens correctly.

### The "Glass & Gradient" Rule
To inject "soul" into the tech-heavy content, apply a subtle linear gradient to main CTAs (e.g., `secondary` to `secondary-container`). For floating modals or navigation overlays, use **Glassmorphism**:
*   **Background:** `surface-container-lowest` at 80% opacity.
*   **Effect:** `backdrop-filter: blur(12px)`.

---

## 3. Typography
We use a dual-font strategy to balance technical precision with human-centric warmth.

*   **Display & Headlines (Manrope):** Chosen for its geometric modernism. **Display-lg (3.5rem)** should be used with tight letter-spacing (-0.02em) to create an authoritative, editorial "masthead" feel.
*   **Body & Labels (Inter):** The industry standard for readability. Use **Body-lg (1rem)** for standard prose to ensure the hub feels accessible and empowering.
*   **Hierarchy as Identity:** Use extreme scale differences. A `display-md` headline paired with a `label-md` uppercase sub-header creates an immediate sense of high-end hierarchy.

---

## 4. Elevation & Depth
We define hierarchy through **Tonal Layering** rather than artificial shadows.

*   **The Layering Principle:** Treat the UI as stacked sheets of fine paper. 
    *   Base: `surface`
    *   Sectioning: `surface-container-low`
    *   Interactive Cards: `surface-container-lowest` (White)
*   **Ambient Shadows:** If a "floating" element is required, use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(25, 28, 29, 0.05)`. It should feel like a soft glow of light, not a "drop shadow."
*   **The "Ghost Border" Fallback:** If a container absolutely requires a boundary (e.g., an input field), use the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** `secondary` background with `on-secondary` text. `xl` (0.75rem) roundedness. 
*   **Secondary (The "Glass" Button):** `surface-container-highest` background with a subtle 10% `outline` ghost border.
*   **States:** On hover, primary buttons should shift to `secondary-container` with a soft ambient shadow.

### Cards & Content Modules
*   **The Container Rule:** Forbid divider lines. Use `md` (0.375rem) or `lg` (0.5rem) corner radii. 
*   **Visual Soul:** High-quality photography must be integrated into cards using "Bleed Layouts" where the image touches three edges of the container, grounding the tech context in human collaboration.

### Input Fields & Forms
*   **Style:** Minimalist. No heavy boxes. Use `surface-container-low` as the fill color with a `sm` (0.125rem) bottom-only accent in `primary` when focused (`border-b-2 border-transparent focus:border-primary focus:ring-0`).
*   **Micro-copy:** Labels use `label-md` or `text-sm font-bold uppercase tracking-wider` in `on-surface-variant` for a muted, sophisticated look.

### Decorative Layout Elements
*   **Abstract Circles:** Soften the technical layout with subtle geometric shapes (e.g. `bg-tertiary-fixed-dim/20 rounded-full`) rendered physically behind images `(-z-10)`.

### Navigation (The "Command Bar")
*   Instead of a standard top-nav, consider a centered "floating" navigation bar using the **Glassmorphism** rule. This feels modern and places the user at the center of the experience.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use intentional white space. If a layout feels "full," remove an element.
*   **Do** overlap elements. A photo slightly overlapping a `surface-container` adds professional depth.
*   **Do** use `secondary` (Deep Blue) for critical trust moments (e.g., certifications, login).

### Don'ts:
*   **Don't** use 1px solid black borders. It breaks the editorial flow.
*   **Don't** use "bubbly" `full` roundedness for everything. Stick to `md` and `lg` for a more "architectural" feel.
*   **Don't** use generic stock photos. Use imagery that feels candid, diverse, and high-contrast to match the palette.
*   **Don't** use dividers. Use the Spacing Scale (vertical white space) to define content blocks.

---

**Director's Note:** Remember, this design system is about **intent**. Every pixel should feel like it was placed with a purpose. We are building a cynosure—a guiding star for IT professionals. Make it feel worthy of their ambition.

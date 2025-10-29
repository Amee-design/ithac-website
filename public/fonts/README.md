# Font Files Directory

This directory should contain the Satoshi font files:

## Required Files:

- `Satoshi-Regular.woff2` (400 weight)
- `Satoshi-Medium.woff2` (500 weight)
- `Satoshi-Bold.woff2` (700 weight)
- `Satoshi-Black.woff2` (800 weight)

## Download Source:

You can download Satoshi font from:

- [Indian Type Foundry](https://indiantypefoundry.com/fonts/satoshi)
- [Google Fonts](https://fonts.google.com) (if available)
- Or use any premium font alternative like:
  - Poppins (Google Fonts)
  - DM Sans (Google Fonts)
  - Plus Jakarta Sans (Google Fonts)

## Alternative Font Setup:

If you prefer to use Google Fonts instead of local files, update `layout.tsx`:

```tsx
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-satoshi", // Using same variable for consistency
  weight: ["400", "500", "700", "800"],
});
```

## Current Status:

🔄 **Action Required:** Download and place Satoshi font files in this directory, or switch to Google Fonts alternative.

/**
 * Modern EdTech Design System
 * Brand: Information Technologies Hub and Cynosure
 * Vision: Clean, Modern Minimalist UI with High-Tech EdTech Feel
 */

// New Brand Colors System
export const colors = {
  // Primary Colors
  primary: "#FFFFFF", // Base white for sections and layout
  primaryLight: "#F5F7FA", // Light background
  primaryLighter: "#ECEEF3", // Lighter background variant

  // Secondary Blue (Deep blue for headings, navigation, key UI)
  secondaryBlue: "#0000C6", // Main secondary blue
  secondaryBlueDark: "#00009A", // Darker variant
  secondaryBlueDarker: "#00006B", // Darkest variant

  // Accent Aqua (CTAs, highlights, links, visual emphasis)
  accentAqua: "#00C0F0", // Main accent aqua
  accentAquaLight: "#5EDFFF", // Light variant
  accentAquaDark: "#0094B8", // Dark variant

  // Soft Variants
  softBlueTint: "#E5E8FF", // Soft blue tint
  accentAquaTint: "#DFF9FF", // Soft aqua tint

  // Utility colors
  darkGray: "#1A1A1A", // Base text color
  grayLight: "#F5F7FA", // Section background
  gold: "#F5C542", // Accent of prestige
  silver: "#C7CBD1", // Clean interface accent
  error: "#E63946", // Warning/error
} as const;

// Gradient Definitions
export const gradients = {
  // Hero Gradient: linear-gradient(135deg, #0000C6 0%, #00C0F0 100%)
  hero: "bg-gradient-to-br from-secondary-blue to-accent-aqua",

  // Button Gradient: linear-gradient(135deg, #00C0F0 0%, #5EDFFF 100%)
  button: "bg-gradient-to-r from-accent-aqua to-accent-aqua-light",

  // Additional brand gradients
  primary: "bg-gradient-to-r from-secondary-blue to-accent-aqua",
  accent: "bg-gradient-to-r from-accent-aqua to-secondary-blue-dark",
  cta: "bg-gradient-to-r from-accent-aqua to-accent-aqua-light",
  light: "bg-gradient-to-br from-soft-blue-tint to-white",
  text: "bg-gradient-to-r from-secondary-blue to-accent-aqua bg-clip-text text-transparent",
} as const;

// Typography Styles
export const typography = {
  // Hero Titles (modern EdTech look)
  heroTitle:
    "text-5xl md:text-7xl font-extrabold font-satoshi bg-gradient-to-r from-secondary-blue to-accent-aqua bg-clip-text text-transparent",

  // Section Headings (deep blue for authority)
  sectionHeading:
    "text-3xl md:text-4xl font-bold font-satoshi text-secondary-blue",

  // Subheadings (consistent brand color)
  subheading:
    "text-xl md:text-2xl font-semibold font-satoshi text-secondary-blue-dark",

  // Body Text (accessible and clean)
  body: "text-base md:text-lg text-ithac-dark-gray/90 leading-relaxed font-inter",

  // Small Text
  small: "text-sm text-ithac-dark-gray/70 font-inter",

  // Light Text (modern with Satoshi Light)
  light: "text-base font-light font-satoshi text-ithac-dark-gray/80",

  // Accent Text (aqua for highlights)
  accent: "text-accent-aqua font-medium",
  highlight: "text-accent-aqua-dark font-medium",

  // Gold for premium features
  premium: "text-ithac-gold font-medium",
} as const;

// Button Styles
export const buttons = {
  // Primary button with hero gradient
  primary:
    "bg-gradient-to-r from-secondary-blue to-accent-aqua text-white rounded-full px-8 py-3 font-semibold shadow-lg shadow-brand-blue/30 hover:scale-105 hover:shadow-brand-blue/50 transition-all duration-300",

  // Secondary outline button
  secondary:
    "border-2 border-secondary-blue text-secondary-blue hover:bg-secondary-blue hover:text-white rounded-full px-8 py-3 transition-all duration-300 font-semibold",

  // Ghost button (subtle)
  ghost:
    "text-secondary-blue hover:bg-soft-blue-tint rounded-full px-6 py-2 transition-all duration-300",

  // CTA button with aqua gradient
  cta: "bg-gradient-to-r from-accent-aqua to-accent-aqua-light text-white rounded-full px-10 py-4 font-bold text-lg shadow-xl shadow-brand-aqua/30 hover:scale-105 hover:shadow-brand-aqua/50 transition-all duration-300",

  // Hero button (large, prominent)
  hero: "bg-gradient-to-r from-secondary-blue to-accent-aqua text-white rounded-full px-12 py-4 font-bold text-xl shadow-2xl hover:scale-105 transition-all duration-300",

  // Aqua accent button
  accent:
    "bg-accent-aqua text-white hover:bg-accent-aqua-dark rounded-full px-8 py-3 font-semibold transition-all duration-300",
} as const;

// Card Styles
export const cards = {
  // Base card with clean white background
  base: "bg-white rounded-3xl shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300",

  // Feature card with brand shadow
  feature:
    "bg-white rounded-3xl p-8 shadow-xl shadow-brand-blue/10 hover:shadow-brand-blue/20 hover:scale-[1.02] transition-all duration-300",

  // Service card with soft blue gradient
  service:
    "bg-gradient-to-br from-white to-soft-blue-tint rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-soft-blue-tint/50",

  // Premium card with aqua tint
  premium:
    "bg-gradient-to-br from-white to-accent-aqua-tint rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-accent-aqua-light/30",

  // Testimonial card
  testimonial:
    "bg-primary-light rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300",

  // Glass card for overlays
  glass:
    "bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-xl",
} as const;

// Animation Classes
export const animations = {
  fadeInUp: "animate-fade-in-up",
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  zoomIn: "animate-zoom-in",
  float: "animate-float",
  glow: "animate-glow",
  gradientShift: "animate-gradient-shift",
} as const;

// Layout Utilities
export const layout = {
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  section: "py-20 lg:py-32",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
} as const;

// Navigation Styles
export const navigation = {
  navbar: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
  navbarScrolled:
    "bg-white/90 backdrop-blur-lg shadow-lg border-b border-soft-blue-tint/20",
  navbarTransparent: "bg-transparent",
  navLink:
    "text-secondary-blue hover:text-accent-aqua transition-colors duration-200 font-medium",
  navLinkActive: "text-accent-aqua font-semibold",
  mobileMenu:
    "bg-white/95 backdrop-blur-lg border border-soft-blue-tint/30 rounded-2xl shadow-xl",
} as const;

// Utility function to combine classes
export const cn = (
  ...classes: (string | undefined | false | null)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

// Component presets for common patterns
export const presets = {
  // Hero section with brand gradient background
  heroSection:
    "min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-secondary-blue to-accent-aqua",

  // Modern hero with subtle background
  heroSectionLight:
    "min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-soft-blue-tint to-white",

  // Standard section wrapper
  sectionWrapper: `${layout.section} relative bg-white`,

  // Light section with tint
  sectionWrapperLight: `${layout.section} relative bg-gradient-to-br from-primary-light to-white`,

  // Card grid layout
  cardGrid: `${layout.grid} ${layout.container}`,

  // Centered content
  centeredContent: "flex flex-col items-center justify-center text-center",

  // Glass card with brand styling
  glassCard: "bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl",

  // Feature section
  featureSection: `${layout.section} bg-gradient-to-br from-soft-blue-tint/30 to-accent-aqua-tint/30`,
} as const;

const designSystem = {
  colors,
  gradients,
  typography,
  buttons,
  cards,
  animations,
  layout,
  navigation,
  cn,
  presets,
};

export default designSystem;

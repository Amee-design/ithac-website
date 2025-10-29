/**
 * ITHAC Design System
 * Brand: Information Technologies Hub and Cynosure
 * Vision: Google Design + Apple Precision + African Innovation Energy
 */

// ITHAC Brand Colors
export const colors = {
  // Core Brand Palette
  blue: "#0056D2", // Primary brand blue
  blueDark: "#003A8C", // Deep trust blue
  lightBlue: "#E6F0FF", // Background accent
  darkGray: "#1A1A1A", // Base text color
  grayLight: "#F5F7FA", // Section background
  gold: "#F5C542", // Accent of prestige
  silver: "#C7CBD1", // Clean interface accent
  emerald: "#00C2A8", // Innovation accent
  purple: "#5B3DF5", // Creative accent for highlights
  error: "#E63946", // Warning/error
} as const;

// Gradient Definitions
export const gradients = {
  primary: "bg-gradient-to-r from-ithac-blue to-ithac-purple",
  accent: "bg-gradient-to-r from-ithac-emerald to-ithac-blue-dark",
  cta: "bg-gradient-to-r from-[#0056D2] to-[#00C2A8]",
  hero: "bg-gradient-to-br from-ithac-blue via-ithac-purple to-ithac-emerald",
  footer: "bg-gradient-to-r from-ithac-blue to-ithac-gold opacity-20",
  text: "bg-gradient-to-r from-ithac-blue to-ithac-purple bg-clip-text text-transparent",
} as const;

// Typography Styles
export const typography = {
  // Hero Titles
  heroTitle:
    "text-5xl md:text-7xl font-extrabold font-satoshi bg-gradient-to-r from-ithac-blue to-ithac-purple bg-clip-text text-transparent",

  // Section Headings
  sectionHeading:
    "text-3xl md:text-4xl font-bold font-satoshi text-ithac-dark-gray",

  // Subheadings
  subheading:
    "text-xl md:text-2xl font-semibold font-satoshi text-ithac-dark-gray",

  // Body Text
  body: "text-base md:text-lg text-ithac-dark-gray/90 leading-relaxed font-inter",

  // Small Text
  small: "text-sm text-ithac-dark-gray/70 font-inter",

  // Light Text (new with Satoshi Light)
  light: "text-base font-light font-satoshi text-ithac-dark-gray/80",

  // Accent Text
  accent: "text-ithac-gold font-medium",
  highlight: "text-ithac-emerald font-medium",
} as const;

// Button Styles
export const buttons = {
  primary:
    "bg-gradient-to-r from-ithac-blue to-ithac-purple text-white rounded-full px-8 py-3 font-semibold shadow-lg shadow-ithac-blue/30 hover:scale-105 hover:shadow-ithac-blue/50 transition-all duration-300",

  secondary:
    "border border-ithac-blue text-ithac-blue hover:bg-ithac-blue hover:text-white rounded-full px-8 py-3 transition-all duration-300 font-semibold",

  ghost:
    "text-ithac-blue hover:bg-ithac-light-blue rounded-full px-6 py-2 transition-all duration-300",

  cta: "bg-gradient-to-r from-ithac-emerald to-ithac-blue text-white rounded-full px-10 py-4 font-bold text-lg shadow-xl shadow-ithac-emerald/30 hover:scale-105 hover:shadow-ithac-emerald/50 transition-all duration-300",
} as const;

// Card Styles
export const cards = {
  base: "bg-white rounded-3xl shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300",

  feature:
    "bg-white rounded-3xl p-8 shadow-xl shadow-ithac-blue/10 hover:shadow-ithac-blue/20 hover:scale-[1.02] transition-all duration-300",

  service:
    "bg-gradient-to-br from-white to-ithac-light-blue rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-ithac-light-blue/50",

  testimonial:
    "bg-ithac-gray-light rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300",
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
  navbarScrolled: "bg-white/90 backdrop-blur-ithac shadow-lg",
  navbarTransparent: "bg-transparent",
  navLink:
    "text-ithac-dark-gray hover:text-ithac-blue transition-colors duration-200 font-medium",
} as const;

// Utility function to combine classes
export const cn = (
  ...classes: (string | undefined | false | null)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

// Component presets for common patterns
export const presets = {
  heroSection:
    "min-h-screen flex items-center justify-center relative overflow-hidden",

  sectionWrapper: `${layout.section} relative`,

  cardGrid: `${layout.grid} ${layout.container}`,

  centeredContent: "flex flex-col items-center justify-center text-center",

  glassCard: "bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl",
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

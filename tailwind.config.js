/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pfp/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ITHAC Brand Core Palette
        "ithac-blue": "#0056D2",
        "ithac-blue-dark": "#003A8C",
        "ithac-light-blue": "#E6F0FF",
        "ithac-dark-gray": "#1A1A1A",
        "ithac-gray-light": "#F5F7FA",
        "ithac-gold": "#F5C542",
        "ithac-silver": "#C7CBD1",
        "ithac-emerald": "#00C2A8",
        "ithac-purple": "#5B3DF5",
        "ithac-error": "#E63946",
        // Legacy colors (keeping for backward compatibility)
        primary: "#003B75",
        secondary: "#4348C0",
        tertiary: "#F76A4E",
        stroke: "#D5D5D5",
        "faded-text": "#979797",
        "feed-color": "#F2F8FF",
        "line-color-2": "#AECFF0",
        white: "#FFFFFF",
        black: "#000000",
        transparent: "transparent",
        current: "currentColor",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        poppins: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "Satoshi", "system-ui", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "zoom-in": "zoomIn 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "gradient-shift": "gradientShift 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 86, 210, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(0, 86, 210, 0.6)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "ithac-blue": "0 10px 40px rgba(0, 86, 210, 0.3)",
        "ithac-purple": "0 10px 40px rgba(91, 61, 245, 0.3)",
        "ithac-emerald": "0 10px 40px rgba(0, 194, 168, 0.3)",
        "ithac-gold": "0 10px 40px rgba(245, 197, 66, 0.3)",
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.12)",
      },
      backdropBlur: {
        ithac: "12px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        100: "25rem",
        112: "28rem",
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

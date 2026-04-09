import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import localFont from "next/font/local";
import Chatbot from "../components/Chatbot";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "700", "800"],
});

// Using local Satoshi font files
const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Black.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-BlackItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ITHAC | Empowering Africa's Digital Future",
  description:
    "Information Technologies Hub and Cynosure — cultivating innovation, creativity, and entrepreneurship in Africa.",
  keywords: [
    "IT training Lagos",
    "software development Nigeria",
    "coding bootcamp",
    "tech education",
    "hackathon Lagos",
    "programming courses",
    "web development training",
    "mobile app development",
    "tech skills",
    "career advancement",
    "tech innovation",
    "Nigeria tech hub",
    "African digital transformation",
    "ITHAC",
    "Information Technologies Hub",
  ],
  authors: [{ name: "ITHAC Team" }],
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "ITHAC | Empowering Africa's Digital Future",
    description:
      "Information Technologies Hub and Cynosure — cultivating innovation, creativity, and entrepreneurship in Africa.",
    images: ["/og.png"],
    type: "website",
    siteName: "ITHAC",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "ITHAC | Empowering Africa's Digital Future",
    description:
      "Information Technologies Hub and Cynosure — cultivating innovation, creativity, and entrepreneurship in Africa.",
    images: ["/og.png"],
    creator: "@ithac_ng",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "education",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0000C6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable} ${manrope.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style>{`.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }`}</style>
      </head>
      <body className="font-body antialiased bg-surface text-on-surface">
        <Navbar />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}

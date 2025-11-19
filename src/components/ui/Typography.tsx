import React from "react";
import { cn } from "../../lib/design-system";

interface TypographyProps {
  variant?:
    | "heroTitle"
    | "sectionHeading"
    | "subheading"
    | "body"
    | "small"
    | "light"
    | "accent"
    | "highlight"
    | "premium";
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  as,
  className,
  children,
}) => {
  const variants = {
    heroTitle:
      "text-5xl md:text-7xl font-extrabold font-satoshi bg-gradient-to-r from-secondary-blue to-accent-aqua bg-clip-text text-transparent",
    sectionHeading:
      "text-3xl md:text-4xl font-bold font-satoshi text-secondary-blue",
    subheading:
      "text-xl md:text-2xl font-semibold font-satoshi text-secondary-blue-dark",
    body: "text-base md:text-lg text-ithac-dark-gray/90 leading-relaxed font-inter",
    small: "text-sm text-ithac-dark-gray/70 font-inter",
    light: "text-base font-light font-satoshi text-ithac-dark-gray/80",
    accent: "text-accent-aqua font-medium",
    highlight: "text-accent-aqua-dark font-medium",
    premium: "text-ithac-gold font-medium",
  };

  // Default element mapping based on variant
  const defaultElements = {
    heroTitle: "h1" as const,
    sectionHeading: "h2" as const,
    subheading: "h3" as const,
    body: "p" as const,
    small: "span" as const,
    light: "p" as const,
    accent: "span" as const,
    highlight: "span" as const,
    premium: "span" as const,
  };

  const Element = as || defaultElements[variant];

  return React.createElement(
    Element,
    {
      className: cn(variants[variant], className),
    },
    children
  );
};

export default Typography;

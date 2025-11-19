import React from "react";
import { cn } from "../../lib/design-system";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "cta" | "hero" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-secondary-blue to-accent-aqua text-white shadow-lg shadow-brand-blue/30 hover:scale-105 hover:shadow-brand-blue/50",
    secondary:
      "border-2 border-secondary-blue text-secondary-blue hover:bg-secondary-blue hover:text-white",
    ghost: "text-secondary-blue hover:bg-soft-blue-tint",
    cta: "bg-gradient-to-r from-accent-aqua to-accent-aqua-light text-white shadow-xl shadow-brand-aqua/30 hover:scale-105 hover:shadow-brand-aqua/50",
    hero: "bg-gradient-to-r from-secondary-blue to-accent-aqua text-white shadow-2xl hover:scale-105 hover:shadow-brand-blue/60",
    accent:
      "bg-accent-aqua text-white hover:bg-accent-aqua-dark shadow-lg hover:shadow-brand-aqua/40",
  };

  const sizes = {
    sm: "rounded-full px-4 py-2 text-sm",
    md: "rounded-full px-8 py-3 text-base",
    lg: "rounded-full px-10 py-4 text-lg",
    xl: "rounded-full px-12 py-5 text-xl font-bold",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

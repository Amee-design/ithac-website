import React from "react";
import { cn } from "../../lib/design-system";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "cta";
  size?: "sm" | "md" | "lg";
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
      "bg-gradient-to-r from-ithac-blue to-ithac-purple text-white shadow-lg shadow-ithac-blue/30 hover:scale-105 hover:shadow-ithac-blue/50",
    secondary:
      "border border-ithac-blue text-ithac-blue hover:bg-ithac-blue hover:text-white",
    ghost: "text-ithac-blue hover:bg-ithac-light-blue",
    cta: "bg-gradient-to-r from-ithac-emerald to-ithac-blue text-white shadow-xl shadow-ithac-emerald/30 hover:scale-105 hover:shadow-ithac-emerald/50",
  };

  const sizes = {
    sm: "rounded-full px-4 py-2 text-sm",
    md: "rounded-full px-8 py-3 text-base",
    lg: "rounded-full px-10 py-4 text-lg",
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

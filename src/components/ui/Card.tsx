import React from "react";
import { cn } from "../../lib/design-system";

interface CardProps {
  variant?:
    | "base"
    | "feature"
    | "service"
    | "testimonial"
    | "premium"
    | "glass";
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  variant = "base",
  className,
  children,
}) => {
  const variants = {
    base: "bg-white rounded-3xl shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300",
    feature:
      "bg-white rounded-3xl p-8 shadow-xl shadow-brand-blue/10 hover:shadow-brand-blue/20 hover:scale-[1.02] transition-all duration-300",
    service:
      "bg-gradient-to-br from-white to-soft-blue-tint rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-soft-blue-tint/50",
    testimonial:
      "bg-primary-light rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300",
    premium:
      "bg-gradient-to-br from-white to-accent-aqua-tint rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-accent-aqua-light/30",
    glass:
      "bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-xl",
  };

  return <div className={cn(variants[variant], className)}>{children}</div>;
};

export default Card;

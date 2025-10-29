import React from 'react';
import { cn } from '../../lib/design-system';

interface CardProps {
  variant?: 'base' | 'feature' | 'service' | 'testimonial';
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ 
  variant = 'base',
  className,
  children
}) => {
  const variants = {
    base: "bg-white rounded-3xl shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300",
    feature: "bg-white rounded-3xl p-8 shadow-xl shadow-ithac-blue/10 hover:shadow-ithac-blue/20 hover:scale-[1.02] transition-all duration-300",
    service: "bg-gradient-to-br from-white to-ithac-light-blue rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-ithac-light-blue/50",
    testimonial: "bg-ithac-gray-light rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300",
  };

  return (
    <div className={cn(variants[variant], className)}>
      {children}
    </div>
  );
};

export default Card;
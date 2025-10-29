import React from "react";
import { cn } from "../../lib/design-system";

interface ContainerProps {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  size = "xl",
  className,
  children,
}) => {
  const sizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div className={cn(sizes[size], "mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;

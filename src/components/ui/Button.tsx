// FILE: src/components/ui/Button.tsx
// Purpose: Reusable button component with primary and outline variants.
// Used across all CTA sections throughout the site.

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "outline-dark";
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  external = false,
  size = "md",
  icon,
}) => {
  // ─── Size classes ──────────────────────────────────────────────────
  const sizeClasses = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-base",
  };

  // ─── Variant classes ───────────────────────────────────────────────
  const variantClasses = {
    primary: `
      bg-estob-red text-white border-2 border-estob-red
      hover:bg-estob-red-dark hover:border-estob-red-dark
      hover:-translate-y-0.5 hover:shadow-brand
    `,
    outline: `
      bg-transparent text-white border-2 border-white/70
      hover:bg-white hover:text-estob-red hover:border-white
      hover:-translate-y-0.5
    `,
    "outline-dark": `
      bg-transparent text-estob-charcoal border-2 border-estob-charcoal
      hover:bg-estob-charcoal hover:text-white
      hover:-translate-y-0.5
    `,
  };

  const baseClasses = `
    inline-flex items-center gap-2 font-heading font-bold uppercase tracking-wider
    rounded transition-all duration-250 cursor-pointer
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  const content = (
    <>
      {children}
      {icon && <span className="transition-transform duration-200 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  // Render as <a> for external links, Next <Link> for internal, or <button>
  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

export default Button;

// FILE: src/components/ui/ServiceCard.tsx
// Purpose: Reusable service card used in the Services section and Services page.
// Features hover lift, color accent border, and icon display.

import React from "react";
import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  accentColor?: string;    // Hex color for the top accent bar
  href?: string;           // Optional link to service detail page
  variant?: "light" | "dark";
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  accentColor = "#EF2020",
  href,
  variant = "light",
}) => {
  const bgClass = variant === "dark"
    ? "bg-estob-charcoal-2 text-white"
    : "bg-white text-estob-charcoal";

  const subtitleClass = variant === "dark"
    ? "text-white/60"
    : "text-estob-gray-3";

  const CardContent = () => (
    <div
      className={`
        relative group rounded-lg overflow-hidden
        ${bgClass}
        p-7 h-full
        border border-transparent
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-card-hover
        cursor-pointer
      `}
      style={{
        // Dynamic top accent border using inline style for custom color
        borderTopColor: accentColor,
        borderTopWidth: "3px",
      }}
    >
      {/* ── Background glow on hover ───────────────────────────── */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"
        style={{ background: accentColor }}
      />

      {/* ── Icon ──────────────────────────────────────────────── */}
      <div
        className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${accentColor}18` }} // 10% opacity background
      >
        {icon}
      </div>

      {/* ── Title ─────────────────────────────────────────────── */}
      <h3 className="font-heading font-bold text-lg mb-3 leading-tight">
        {title}
      </h3>

      {/* ── Description ───────────────────────────────────────── */}
      <p className={`font-body text-sm leading-relaxed ${subtitleClass}`}>
        {description}
      </p>

      {/* ── Arrow indicator ───────────────────────────────────── */}
      <div
        className="mt-5 flex items-center gap-1 text-xs font-heading font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1"
        style={{ color: accentColor }}
      >
        Learn More <span>→</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full no-underline">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};

export default ServiceCard;

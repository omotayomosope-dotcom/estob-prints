// FILE: src/components/ui/SectionHeading.tsx
// Purpose: Consistent section heading component used across all major sections.
// Supports dark and light backgrounds, optional eyebrow label, and accent color.

import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;           // Small label above the heading e.g. "Our Services"
  title: string;              // Main heading text
  titleAccent?: string;       // Highlighted/colored portion of the heading
  subtitle?: string;          // Optional paragraph below heading
  align?: "left" | "center";
  theme?: "light" | "dark";   // Controls text color for different bg colors
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}) => {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const textColor = theme === "dark" ? "text-white" : "text-estob-charcoal";
  const subtitleColor = theme === "dark" ? "text-white/60" : "text-estob-gray-3";

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {/* ── Eyebrow Label ──────────────────────────────────────── */}
      {eyebrow && (
        <div className="flex items-center gap-2">
          {/* CMYK ink dots as brand decoration */}
          <span className="w-2 h-2 rounded-full bg-estob-cyan inline-block" />
          <span className="w-2 h-2 rounded-full bg-estob-magenta inline-block" />
          <span className="w-2 h-2 rounded-full bg-estob-yellow inline-block" />
          <span
            className="font-heading font-700 text-xs uppercase tracking-[0.18em] text-estob-red"
          >
            {eyebrow}
          </span>
        </div>
      )}

      {/* ── Main Heading ───────────────────────────────────────── */}
      <h2 className={`font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight ${textColor}`}>
        {title}
        {titleAccent && (
          <>
            {" "}
            <span className="text-estob-red">{titleAccent}</span>
          </>
        )}
      </h2>

      {/* ── Underline Accent Bar ───────────────────────────────── */}
      <div className={`flex gap-1 h-1 ${align === "center" ? "mx-auto" : ""}`}>
        <span className="w-10 h-1 bg-estob-red rounded-full" />
        <span className="w-3 h-1 bg-estob-cyan rounded-full" />
        <span className="w-2 h-1 bg-estob-magenta rounded-full" />
      </div>

      {/* ── Subtitle / Description ─────────────────────────────── */}
      {subtitle && (
        <p className={`font-body text-base md:text-lg max-w-2xl leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

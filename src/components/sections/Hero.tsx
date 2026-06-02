"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export default function Hero() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      paddingTop: "160px",
      backgroundImage: "url('/printing-machine.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>

      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to bottom, rgba(12,8,8,0.55) 0%, rgba(10,6,6,0.65) 50%, rgba(8,4,4,0.85) 100%)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "#C41A1A", zIndex: 3 }} />

      <div className="container-estob" style={{ paddingBottom: "4rem", position: "relative", zIndex: 2 }}>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
          <span style={{ display: "block", width: "20px", height: "1px", background: "#C41A1A", flexShrink: 0 }} />
          <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)" }}>
            Ogba, Ikeja Lagos — Premium Prints
          </span>
        </div>

        <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: "clamp(3.2rem, 8vw, 8rem)", lineHeight: 1.0, letterSpacing: "-0.03em", color: "white" }}>
          <span style={{ display: "block" }}>We Print.</span>
          <span style={{ display: "block" }}>We Brand.</span>
          <span style={{ display: "block", color: "#C41A1A" }}>We Deliver.</span>
          <span style={{ display: "block", color: "rgba(255,255,255,0.55)", fontSize: "clamp(2rem, 5vw, 5rem)" }}>Every Time.</span>
        </h1>

        <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {[
            { icon: "🏆", label: "25 Years of Excellence" },
            { icon: "🚚", label: "Nationwide Delivery" },
            { icon: "⚡", label: "Fast Turnaround" },
            { icon: "⭐", label: "Premium Quality" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "12px" }}>{item.icon}</span>
              <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div style={{ margin: "2rem 0", display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ display: "block", width: "40px", height: "1px", background: "#C41A1A" }} />
          <span style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#C41A1A", opacity: 0.5 }} />
        </div>

        <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "clamp(0.9rem,1.3vw,1.05rem)", lineHeight: 1.9, color: "rgba(255,255,255,0.85)", maxWidth: "360px", marginBottom: "2rem", background: "rgba(0,0,0,0.25)", padding: "1rem 1.2rem", backdropFilter: "blur(4px)" }}>
          25 years of premium printing from Ogba, Ikeja. Serving governments, corporations and organizations across Nigeria.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "1.2rem" }}>
          {[
            { icon: "⭐", label: "Trusted by 500+ Businesses" },
            { icon: "✓", label: "25 Years Experience" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "11px", color: "#C41A1A" }}>{item.icon}</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(255,255,255,0.55)" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem", alignItems: "center" }}>
          <Link href="/contact" style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "13px", letterSpacing: "0.25em", textTransform: "uppercase", color: "white", textDecoration: "none", background: "#C41A1A", padding: "22px 56px", transition: "all 0.2s ease", display: "inline-flex", alignItems: "center", gap: "10px", boxShadow: "0 4px 24px rgba(196,26,26,0.5)" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#991414"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#C41A1A"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
            Get a Quote →
          </Link>

          <Link href="/portfolio" style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)", textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.6)", padding: "22px 40px", transition: "all 0.2s ease", display: "inline-flex", alignItems: "center", gap: "8px" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "white"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.6)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
            View Our Work →
          </Link>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {["Business Cards", "Flyers", "Banners", "Packaging", "Branding", "Large Format"].map((service, i) => (
            <span key={i} style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.12)", padding: "6px 14px", background: "rgba(255,255,255,0.04)" }}>
              {service}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {[
            { v: "5,000+", l: "Projects Completed" },
            { v: "500+",   l: "Clients Served" },
            { v: "25+",    l: "Years in Business" },
            { v: "100%",   l: "Quality Guaranteed" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: "2rem", color: "white", lineHeight: 1, letterSpacing: "-0.03em" }}>{s.v}</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "9px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "6px" }}>{s.l}</div>
            </div>
          ))}
        </div>

      </div>

      <div style={{ position: "absolute", bottom: "2rem", right: "4rem", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.4 }}>
        <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "white", writingMode: "vertical-rl" }}>SCROLL</span>
        <div style={{ width: "1px", height: "50px", background: "linear-gradient(to bottom, white, transparent)" }} />
      </div>

    </section>
  );
}

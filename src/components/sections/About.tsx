"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const STATS = [
  {
    v: "5,000+", l: "Projects Completed",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C41A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
  },
  {
    v: "500+", l: "Clients Served",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C41A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    v: "25+", l: "Years Experience",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C41A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    v: "100%", l: "Quality Guaranteed",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C41A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="about" style={{ background: "#ffffff", padding: isMobile ? "4rem 0" : "7rem 0", borderBottom: "1px solid #eeeeee" }}>
      <div className="container-estob">

        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
          gap: isMobile ? "2.5rem" : "5rem",
          alignItems: "center",
          marginBottom: isMobile ? "3rem" : "5rem",
        }}>

          {/* Left — copy */}
          <div className="reveal-left">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
              <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
              <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C41A1A" }}>About</span>
            </div>

            <h2 style={{
              fontFamily: "'Poppins',sans-serif", fontWeight: 900,
              fontSize: "clamp(2rem,4vw,3.2rem)",
              lineHeight: 1.05, letterSpacing: "-0.02em",
              color: "#111111", marginBottom: "2rem",
            }}>
              More Than<br /><span style={{ color: "#C41A1A" }}>Ink on Paper.</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginBottom: "2.5rem", maxWidth: isMobile ? "100%" : "340px" }}>
              <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.9, color: "#555555" }}>
                At ESTOB Prints, we believe printing is more than ink on paper. It is about visibility, perception, and helping brands communicate with confidence.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.9, color: "#555555" }}>
                We specialize in premium printing, branding, corporate merchandise, and customized print solutions for businesses, churches, organizations and events across Nigeria and beyond.
              </p>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.9rem", lineHeight: 1.6, color: "#111111" }}>
                Quality execution. Creative delivery. Reliable service.
              </p>
            </div>

            <Link href="/about" style={{
              fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "10px",
              letterSpacing: "0.2em", textTransform: "uppercase", color: "#999999",
              textDecoration: "none", borderBottom: "1px solid #dddddd", paddingBottom: "3px", transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#C41A1A"; (e.currentTarget as HTMLElement).style.borderColor = "#C41A1A"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#999999"; (e.currentTarget as HTMLElement).style.borderColor = "#dddddd"; }}>
              Our Story →
            </Link>
          </div>

          {/* Right — image (hidden on mobile) */}
          {!isMobile && (
            <div className="reveal-right" style={{ position: "relative" }}>
              <div style={{
                position: "absolute",
                top: "16px", left: "16px",
                right: "-16px", bottom: "-16px",
                background: "#f5f5f5", zIndex: 0,
              }} />
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0,
                height: "3px", background: "#C41A1A", zIndex: 3,
              }} />
              <img
                src="/stationery.png"
                alt="ESTOB Prints Premium Branded Stationery Ogba Ikeja Lagos"
                style={{
                  position: "relative", zIndex: 1,
                  width: "100%", height: "400px",
                  objectFit: "cover", objectPosition: "center",
                  display: "block", filter: "contrast(1.05)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                }}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2,
                background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
                padding: "2rem 1.5rem 1.5rem",
              }}>
                <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
                  Premium Print Production
                </div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>
                  Produced in Ogba, Ikeja
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats — 2x2 on mobile, 4 columns on desktop */}
        <div className="reveal" style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: "1px",
          background: "#eeeeee",
        }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ background: "#ffffff", padding: isMobile ? "1.8rem 1.2rem" : "2.5rem 2rem", transition: "background 0.3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#fafafa"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#ffffff"; }}>
              <div style={{ marginBottom: "1rem" }}>{s.icon}</div>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: isMobile ? "2rem" : "2.8rem", color: "#C41A1A", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>{s.v}</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: "11px", color: "#aaaaaa", letterSpacing: "0.08em" }}>{s.l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

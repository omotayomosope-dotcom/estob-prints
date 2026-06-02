"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const CLIENTS = [
  { name: "August Berries", category: "Fashion Retail", location: "Ogba Central Mall, Ikeja", image: "/august-berries.jpg" },
  { name: "BS Hair", category: "Beauty & Hair", location: "Ogba, Lagos", image: "/hair-bag-transparent.png" },
];

const TEXT_CLIENTS = [
  { name: "Government Agencies", category: "Federal & State" },
  { name: "Corporate Organizations", category: "Corporate" },
  { name: "Churches & NGOs", category: "Religious & Non-profit" },
  { name: "Events & Weddings", category: "Events" },
];

export default function Clients() {
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
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: "#ffffff", padding: isMobile ? "4rem 0" : "9rem 0", borderBottom: "1px solid #eeeeee" }}>
      <div className="container-estob">

        {/* Header */}
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "2rem" }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
            <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C41A1A" }}>
              Our Clients
            </span>
          </div>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.0, letterSpacing: "-0.02em", color: "#111111", marginBottom: "1rem" }}>
            Trusted by Businesses<br />Across Nigeria and Beyond.
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "1rem", lineHeight: 1.9, color: "#888888", maxWidth: "480px" }}>
            From fashion stores to government agencies, churches to corporations. Every brand deserves premium print.
          </p>
        </div>

        {/* Image client cards */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "2px", background: "#eeeeee", marginBottom: "2px" }}>
          {CLIENTS.map((c, i) => (
            <div key={i} style={{ background: "#ffffff", position: "relative", overflow: "hidden", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#f9f9f9"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#ffffff"; }}>
              <Image
                src={c.image}
                alt={`${c.name} — ESTOB Prints Client`}
                fill
                style={{ objectFit: "contain", padding: "2rem", transition: "transform 0.4s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                padding: "2rem 1.5rem 1.5rem",
              }}>
                <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "14px", color: "white", letterSpacing: "-0.01em" }}>{c.name}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "11px", color: "rgba(255,255,255,0.6)", marginTop: "2px" }}>{c.category} · {c.location}</div>
              </div>
              <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "#C41A1A" }} />
            </div>
          ))}
        </div>

        {/* Text client grid — 2 cols on mobile */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: "2px", background: "#eeeeee", marginBottom: isMobile ? "3rem" : "5rem" }}>
          {TEXT_CLIENTS.map((c, i) => (
            <div key={i} style={{
              background: "#ffffff", padding: "1.5rem 1.2rem",
              borderTop: "2px solid #C41A1A",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#f9f9f9"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#ffffff"; }}>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: isMobile ? "12px" : "13px", color: "#111111", marginBottom: "6px" }}>{c.name}</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "11px", color: "#aaaaaa", letterSpacing: "0.05em" }}>{c.category}</div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", alignItems: "center" }}>
          {[
            { v: "500+",   l: "Happy Clients" },
            { v: "25+",    l: "Years in Business" },
            { v: "5,000+", l: "Projects Completed" },
          ].map((s, i) => (
            <div key={i} style={{
              padding: isMobile ? "1.5rem 0.5rem" : "0 2rem 0 0",
              borderRight: i < 2 ? "1px solid #eeeeee" : "none",
              textAlign: isMobile ? "center" : "left",
            }}>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: isMobile ? "1.8rem" : "3rem", color: "#111111", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "10px", color: "#aaaaaa", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "6px" }}>{s.l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

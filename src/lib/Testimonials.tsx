"use client";
import React, { useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    quote: "ESTOB Prints delivered our corporate branded bags on time and the quality was outstanding. Every detail was perfect. We will definitely be coming back.",
    name: "Mrs. Adewale",
    title: "CEO, Adewale & Associates",
    category: "Corporate",
    initial: "A",
  },
  {
    quote: "We needed 500 customized pens for our church anniversary and ESTOB came through perfectly. Premium quality, fast delivery, great price. Highly recommended.",
    name: "Pastor Emmanuel",
    title: "Senior Pastor, Grace Assembly Ikeja",
    category: "Church",
    initial: "E",
  },
  {
    quote: "Our wedding souvenirs were absolutely beautiful. The notebook print was crisp and the bags were elegant. Our guests kept complimenting them.",
    name: "Chidinma O.",
    title: "Bride, February 2024",
    category: "Events",
    initial: "C",
  },
  {
    quote: "I have been using ESTOB for all my business printing needs for over 5 years. Consistent quality, honest pricing and they always meet deadlines.",
    name: "Mr. Babatunde",
    title: "MD, Babatunde Enterprises",
    category: "Corporate",
    initial: "B",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: "#111111", padding: "9rem 0" }}>
      <div className="container-estob">

        {/* Header */}
        <div className="reveal" style={{ marginBottom: "5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "2rem" }}>
              <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
              <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C41A1A" }}>
                Testimonials
              </span>
            </div>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.0, letterSpacing: "-0.02em", color: "white" }}>
              What Our Clients<br />Say About Us.
            </h2>
          </div>
          <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "1rem", lineHeight: 1.9, color: "rgba(255,255,255,0.5)", maxWidth: "320px" }}>
            Over 200 satisfied clients across Lagos trust ESTOB Prints for premium quality every time.
          </p>
        </div>

        {/* Testimonial cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", background: "rgba(255,255,255,0.05)" }} className="grid-cols-1 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="reveal" style={{
              background: "#111111", padding: "3rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              transitionDelay: `${i * 80}ms`,
              position: "relative", overflow: "hidden",
              transition: "background 0.3s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1a1a1a"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#111111"; }}>

              {/* Quote mark */}
              <div style={{
                position: "absolute", top: "1.5rem", right: "2rem",
                fontFamily: "Georgia, serif", fontSize: "6rem", color: "rgba(196,26,26,0.12)",
                lineHeight: 1, userSelect: "none", pointerEvents: "none",
              }}>
                "
              </div>

              {/* Category badge */}
              <div style={{
                display: "inline-block", marginBottom: "1.5rem",
                fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "9px",
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#C41A1A", border: "1px solid rgba(196,26,26,0.3)",
                padding: "4px 12px",
              }}>
                {t.category}
              </div>

              {/* Quote text */}
              <p style={{
                fontFamily: "'Inter',sans-serif", fontWeight: 300,
                fontSize: "1rem", lineHeight: 1.9,
                color: "rgba(255,255,255,0.75)",
                marginBottom: "2.5rem",
                fontStyle: "italic",
              }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: "#C41A1A", display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0,
                }}>
                  <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "16px", color: "white" }}>{t.initial}</span>
                </div>
                <div>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "13px", color: "white" }}>{t.name}</div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>{t.title}</div>
                </div>
              </div>

              {/* Red left accent */}
              <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "#C41A1A", opacity: 0.5 }} />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="reveal" style={{ marginTop: "4rem", textAlign: "center" }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "13px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>
            Testimonials from real clients served across Ogba, Ikeja and Lagos.
          </p>
        </div>
      </div>
    </section>
  );
}

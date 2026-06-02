"use client";
import React, { useEffect, useRef } from "react";

const POINTS = [
  { title: "Premium Quality",        desc: "Every print job executed to the highest possible standard. No compromises." },
  { title: "Timely Delivery",        desc: "We respect your deadlines. Every order ships when promised, every time." },
  { title: "Creative Solutions",     desc: "Fresh thinking applied to every brief, from concept to final delivery." },
  { title: "Professional Execution", desc: "Expert handling at every stage. Pre-press, production and finishing." },
  { title: "Trusted Service",        desc: "Businesses, churches and organisations across Lagos trust us because we consistently deliver." },
  { title: "Attention to Detail",    desc: "We obsess over the details so your brand always looks its absolute best." },
];

const cardStyle: React.CSSProperties = {
  background: "#ffffff",
  padding: "3rem 2.5rem",
  position: "relative",
  overflow: "hidden",
  cursor: "default",
};

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="why-us" style={{ background: "#ffffff", padding: "9rem 0", borderBottom: "1px solid #eeeeee" }}>

      <div className="container-estob">

        {/* Header */}
        <div className="reveal" style={{ marginBottom: "5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "2rem" }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
            <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C41A1A" }}>
              Why Us
            </span>
          </div>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.0, letterSpacing: "-0.02em", color: "#111111" }}>
            Why ESTOB Prints.
          </h2>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#e8e8e8" }} className="grid-cols-1 md:grid-cols-3">
          {POINTS.map((p, i) => (
            <div
              key={i}
              className="reveal"
              style={{ ...cardStyle, transitionDelay: `${i * 60}ms` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#f7f7f7"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#ffffff"; }}
            >
              {/* Faded bg number */}
              <span style={{
                position: "absolute", bottom: "-10px", right: "12px",
                fontFamily: "'Poppins',sans-serif", fontWeight: 900,
                fontSize: "5rem", color: "rgba(0,0,0,0.035)",
                letterSpacing: "-0.05em", lineHeight: 1,
                userSelect: "none", pointerEvents: "none", zIndex: 0,
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Red accent line */}
                <div style={{
                  width: "20px", height: "2px",
                  background: "#C41A1A", marginBottom: "1rem",
                }} />

                {/* Number */}
                <div style={{
                  fontFamily: "'Poppins',sans-serif", fontWeight: 900,
                  fontSize: "2rem", color: "#111111",
                  letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "1rem",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 style={{
                  fontFamily: "'Poppins',sans-serif", fontWeight: 700,
                  fontSize: "1rem", color: "#111111",
                  marginBottom: "0.8rem", letterSpacing: "-0.01em",
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter',sans-serif", fontWeight: 300,
                  fontSize: "13px", color: "#aaaaaa", lineHeight: 1.8,
                }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Red strip */}
        <div className="reveal" style={{
          marginTop: "4rem", padding: "1.8rem 3rem",
          background: "#A31515",
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2.5rem",
        }}>
          {POINTS.map((p, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>✓</span>
              <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>
                {p.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

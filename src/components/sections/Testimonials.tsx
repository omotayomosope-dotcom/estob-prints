"use client";
import React, { useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    quote: "ESTOB Prints delivered our corporate branded bags on time and the quality was outstanding. Every detail was perfect. We will definitely be coming back.",
    name: "Babatunde M.",
    title: "Business Owner, Lagos",
    category: "Corporate",
    initial: "A",
  },
  {
    quote: "We needed 500 customized pens for our church anniversary and ESTOB came through perfectly. Premium quality, fast delivery, great price. Highly recommended.",
    name: "Pastor Emmanuel",
    title: "Senior Pastor, Ikeja",
    category: "Church",
    initial: "E",
  },
  {
    quote: "Our wedding souvenirs were absolutely beautiful. The notebook print was crisp and the bags were elegant. Our guests kept complimenting them.",
    name: "Betty O.",
    title: "Bride, October 2025",
    category: "Events",
    initial: "C",
  },
  {
    quote: "I have been using ESTOB for all my business printing needs for over 5 years. Consistent quality, honest pricing and they always meet deadlines.",
    name: "Temple Group Ltd.",
    title: "Managing Director, Lagos"
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
    <section ref={ref} style={{ background: "#111111", padding: "9rem 0 7rem" }}>
      <div className="container-estob">

        {/* Header */}
        <div className="reveal" style={{ marginBottom: "5rem", maxWidth: "700px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "2rem" }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
            <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C41A1A" }}>
              Testimonials
            </span>
          </div>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.0, letterSpacing: "-0.02em", color: "white", marginBottom: "1.5rem" }}>
            What Our Clients<br />Say About Us.
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "1rem", lineHeight: 1.9, color: "rgba(255,255,255,0.45)", maxWidth: "420px" }}>
            Over 500 satisfied clients across Nigeria trust ESTOB Prints for premium quality, every time.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }} className="grid-cols-1 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="reveal testi-card" style={{ transitionDelay: `${i * 80}ms` }}>

              <div className="quote-mark">&#8220;</div>

              <div style={{
                display: "inline-block", marginBottom: "1.5rem",
                fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "9px",
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#C41A1A", border: "1px solid rgba(196,26,26,0.4)",
                padding: "4px 12px",
              }}>
                {t.category}
              </div>

              <p style={{
                fontFamily: "'Inter',sans-serif", fontWeight: 300,
                fontSize: "1rem", lineHeight: 1.9,
                color: "rgba(255,255,255,0.8)",
                marginBottom: "2.5rem",
              }}>
                &#8220;{t.quote}&#8221;
              </p>

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
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="reveal" style={{ marginTop: "4rem", textAlign: "center" }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "13px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>
            Testimonials from real clients served across Nigeria and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}

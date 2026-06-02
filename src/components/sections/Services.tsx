"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const SERVICES = [
  { n: "01", title: "Premium Printing", desc: "High-quality print solutions for businesses, brands, events, and organizations." },
  { n: "02", title: "Branding & Corporate Identity", desc: "Helping brands create professional and memorable visual experiences." },
  { n: "03", title: "Corporate Merchandise", desc: "Customized branded products that strengthen visibility and customer connection." },
  { n: "04", title: "Large Format Printing", desc: "Bold visual solutions built for attention and impact at scale." },
  { n: "05", title: "Promotional Materials", desc: "Creative print products designed to support campaigns and events." },
  { n: "06", title: "Custom Print Solutions", desc: "Tailored production solutions based on your unique business needs." },
];

export default function Services() {
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
    <section ref={ref} id="services" style={{ background: "#fafafa", padding: "9rem 0", borderBottom: "1px solid #eeeeee" }}>
      <div className="container-estob">
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "2rem" }}>
              <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
              <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C41A1A" }}>Services</span>
            </div>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.0, letterSpacing: "-0.02em", color: "#111111" }}>
              What We Do.
            </h2>
          </div>
          <Link href="/services" style={{
            fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "10px",
            letterSpacing: "0.2em", textTransform: "uppercase", color: "#999999",
            textDecoration: "none", borderBottom: "1px solid #dddddd", paddingBottom: "3px", transition: "all 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#C41A1A"; (e.currentTarget as HTMLElement).style.borderColor = "#C41A1A"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#999999"; (e.currentTarget as HTMLElement).style.borderColor = "#dddddd"; }}>
            All Services →
          </Link>
        </div>

        {SERVICES.map((s, i) => (
          <div key={i} className="reveal" style={{
            transitionDelay: `${i * 60}ms`,
            display: "grid", gridTemplateColumns: "48px 1fr 24px",
            gap: "2.5rem", alignItems: "center",
            padding: "2.2rem 0",
            borderTop: "1px solid #eeeeee",
            cursor: "default", transition: "all 0.3s ease",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.paddingLeft = "12px"; (e.currentTarget as HTMLElement).style.borderTopColor = "rgba(196,26,26,0.2)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.paddingLeft = "0"; (e.currentTarget as HTMLElement).style.borderTopColor = "#eeeeee"; }}>
            <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 400, fontSize: "11px", color: "rgba(196,26,26,0.35)", letterSpacing: "0.05em" }}>{s.n}</span>
            <div>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(1rem,2vw,1.25rem)", color: "#111111", marginBottom: "6px", letterSpacing: "-0.01em" }}>{s.title}</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "13px", color: "#aaaaaa", lineHeight: 1.6 }}>{s.desc}</div>
            </div>
            <span style={{ color: "#cccccc", fontSize: "14px" }}>→</span>
          </div>
        ))}
        <div style={{ borderTop: "1px solid #eeeeee" }} />
      </div>
    </section>
  );
}


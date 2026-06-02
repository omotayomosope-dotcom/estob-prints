"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const WORK = [
  { title: "Corporate Branding Package", cat: "Branding",      img: "/stationery.png"    },
  { title: "Roll-Up Banner Production",  cat: "Large Format",  img: "/banner.jpg"         },
  { title: "Branded Bag Collection",     cat: "Merchandise",   img: "/hair-bag.jpg"       },
  { title: "Business Card Suite",        cat: "Premium Print", img: "/work1.jpeg"         },
  { title: "Wedding Print Collection",   cat: "Custom Print",  img: "/wedding-bag.png"    },
  { title: "Corporate Brand Package",    cat: "Branding",      img: "/work2.jpeg"         },
  { title: "Branded Pen Collection",     cat: "Merchandise",   img: "/work4.jpeg"         },
  { title: "Branded Umbrella",           cat: "Merchandise",   img: "/work3.jpeg"         },
  { title: "Dark Branded Bag",           cat: "Merchandise",   img: "/hair-bag-dark.jpg"  },
  { title: "August Berries Branding",    cat: "Client Work",   img: "/august-berries.jpg" },
  { title: "Client Book Production",     cat: "Premium Print", img: "/client-book.png"    },
];

export default function Portfolio() {
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
    <section ref={ref} id="portfolio" style={{ background: "#0a0a0a", padding: "9rem 0" }}>
      <div className="container-estob">

        {/* Header */}
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "2rem" }}>
              <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
              <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C41A1A" }}>Our Work</span>
            </div>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.0, letterSpacing: "-0.02em", color: "#ffffff" }}>
              Work That<br /><span style={{ color: "#C41A1A" }}>Speaks.</span>
            </h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.4)", maxWidth: "380px", marginTop: "1.5rem" }}>
              Every piece we produce carries the weight of intention — designed to command attention, built to last.
            </p>
          </div>
          <Link href="/portfolio" style={{
            fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "10px",
            letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)",
            textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "3px", transition: "all 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#C41A1A"; (e.currentTarget as HTMLElement).style.borderColor = "#C41A1A"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; }}>
            Full Portfolio →
          </Link>
        </div>

        {/* Row 1 — large left, two small right */}
        <div className="reveal port-row" style={{ gridTemplateColumns: "2fr 1fr", height: "600px" }}>
          <div className="port-card" style={{ height: "100%" }}>
            <img src={WORK[0].img} alt={WORK[0].title} />
            <div className="port-number">01</div>
            <div className="port-overlay">
              <div className="port-accent" />
              <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "6px" }}>{WORK[0].cat}</div>
              <div className="port-title" style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "20px", color: "white", lineHeight: 1.2 }}>{WORK[0].title}</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", height: "100%" }}>
            {[WORK[1], WORK[2]].map((w, i) => (
              <div key={i} className="port-card" style={{ flex: 1 }}>
                <img src={w.img} alt={w.title} />
                <div className="port-number">0{i + 2}</div>
                <div className="port-overlay">
                  <div className="port-accent" />
                  <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "4px" }}>{w.cat}</div>
                  <div className="port-title" style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "14px", color: "white" }}>{w.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — four equal cards */}
        <div className="reveal port-row" style={{ gridTemplateColumns: "repeat(4, 1fr)", height: "320px" }}>
          {[WORK[3], WORK[4], WORK[5], WORK[6]].map((w, i) => (
            <div key={i} className="port-card" style={{ height: "100%" }}>
              <img src={w.img} alt={w.title} />
              <div className="port-number">0{i + 4}</div>
              <div className="port-overlay">
                <div className="port-accent" />
                <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "4px" }}>{w.cat}</div>
                <div className="port-title" style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "13px", color: "white" }}>{w.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 3 — two small left, large middle, small right */}
        <div className="reveal port-row" style={{ gridTemplateColumns: "1fr 1.5fr 1fr", height: "600px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", height: "100%" }}>
            {[WORK[7], WORK[8]].map((w, i) => (
              <div key={i} className="port-card" style={{ flex: 1 }}>
                <img src={w.img} alt={w.title} />
                <div className="port-number">0{i + 8}</div>
                <div className="port-overlay">
                  <div className="port-accent" />
                  <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "4px" }}>{w.cat}</div>
                  <div className="port-title" style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "14px", color: "white" }}>{w.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="port-card" style={{ height: "100%" }}>
            <img src={WORK[9].img} alt={WORK[9].title} />
            <div className="port-number">10</div>
            <div className="port-overlay">
              <div className="port-accent" />
              <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "6px" }}>{WORK[9].cat}</div>
              <div className="port-title" style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "20px", color: "white", lineHeight: 1.2 }}>{WORK[9].title}</div>
            </div>
          </div>
          <div className="port-card" style={{ height: "100%" }}>
            <img src={WORK[10].img} alt={WORK[10].title} />
            <div className="port-number">11</div>
            <div className="port-overlay">
              <div className="port-accent" />
              <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "6px" }}>{WORK[10].cat}</div>
              <div className="port-title" style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "16px", color: "white", lineHeight: 1.2 }}>{WORK[10].title}</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="reveal" style={{ textAlign: "center", marginTop: "5rem", paddingTop: "4rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "rgba(255,255,255,0.35)", marginBottom: "2rem", letterSpacing: "0.05em" }}>
            Ready to create something extraordinary?
          </p>
          <Link href="/contact" style={{
            fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "10px",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "white", textDecoration: "none",
            background: "#C41A1A", padding: "18px 48px",
            transition: "background 0.2s ease", display: "inline-block",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#991414"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#C41A1A"; }}>
            Start Your Project →
          </Link>
        </div>

      </div>
    </section>
  );
}

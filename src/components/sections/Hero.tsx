"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

const WhatsAppIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.845L.057 23.617a.75.75 0 00.921.921l5.772-1.467A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.497-5.2-1.367l-.373-.214-3.868.984.999-3.758-.232-.382A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

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
      paddingTop: "140px",
      backgroundImage: "url('/printing-machine.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>

      {/* Dark overlay - lightened to show printing machine */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(to bottom, rgba(12,8,8,0.55) 0%, rgba(10,6,6,0.65) 50%, rgba(8,4,4,0.85) 100%)",
      }} />

      {/* Red bottom accent */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "3px", background: "#C41A1A", zIndex: 3,
      }} />

      {/* Main Content */}
      <div className="container-estob" style={{ paddingBottom: "6rem", position: "relative", zIndex: 2 }}>

        {/* Eyebrow */}
        <div className="fade-up" style={{ animationDelay: "0.1s", display: "flex", alignItems: "center", gap: "14px", marginBottom: "3rem" }}>
          <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
          <span style={{
            fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "10px",
            letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)",
          }}>
            Ogba, Ikeja Lagos — Premium Print House
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-up" style={{
          animationDelay: "0.2s",
          fontFamily: "'Poppins',sans-serif", fontWeight: 900,
          fontSize: "clamp(3.2rem, 8vw, 8rem)",
          lineHeight: 1.0, letterSpacing: "-0.03em", color: "white",
        }}>
          <span style={{ display: "block" }}>We Print.</span>
          <span style={{ display: "block" }}>We Brand.</span>
          <span style={{ display: "block", color: "#C41A1A" }}>We Deliver.</span>
          <span style={{
            display: "block",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.25)",
          }}>
            Every Time.
          </span>
        </h1>

        {/* Divider */}
        <div className="fade-up" style={{ animationDelay: "0.4s", margin: "3rem 0", display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ display: "block", width: "40px", height: "1px", background: "#C41A1A" }} />
          <span style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#C41A1A", opacity: 0.5 }} />
        </div>

        {/* Subtext */}
        <p className="fade-up" style={{
          animationDelay: "0.5s",
          fontFamily: "'Inter',sans-serif", fontWeight: 300,
          fontSize: "clamp(0.9rem,1.3vw,1.05rem)",
          lineHeight: 1.9, color: "rgba(255,255,255,0.55)",
          maxWidth: "420px", marginBottom: "2.5rem",
        }}>
          25 years of premium printing from the heart of Ogba, Ikeja. Serving governments, corporations, churches and organizations across Nigeria and beyond.
        </p>

        {/* CTAs */}
        <div className="fade-up" style={{ animationDelay: "0.55s", display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "5rem" }}>
          <Link href="/contact" style={{
            fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "10px",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "white", textDecoration: "none",
            background: "#C41A1A", padding: "16px 40px",
            transition: "background 0.2s ease", display: "inline-block",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#991414"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#C41A1A"; }}>
            Get a Quote
          </Link>

          <Link href="/portfolio" style={{
            fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "10px",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)", textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.3)", padding: "16px 40px",
            transition: "all 0.2s ease", display: "inline-block",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "white"; (e.currentTarget as HTMLElement).style.color = "white"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}>
            View Our Work
          </Link>

          <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,"")}`}
            target="_blank" rel="noopener noreferrer" style={{
            fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "10px",
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)", textDecoration: "none",
            transition: "color 0.2s", padding: "16px 0",
            display: "inline-flex", alignItems: "center", gap: "6px",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"; }}>
            <WhatsAppIcon />
            WhatsApp Us
          </a>
        </div>

        {/* Stats */}
        <div className="fade-up" style={{
          animationDelay: "0.7s",
          display: "flex", flexWrap: "wrap", gap: "4rem",
          paddingTop: "3rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}>
          {[
            { v: "5,000+", l: "Projects Completed" },
            { v: "500+",   l: "Clients Served"     },
            { v: "25+",    l: "Years in Business"  },
            { v: "100%",   l: "Quality Guaranteed" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'Poppins',sans-serif", fontWeight: 900,
                fontSize: "2.4rem", color: "white",
                lineHeight: 1, letterSpacing: "-0.03em",
              }}>
                {s.v}
              </div>
              <div style={{
                fontFamily: "'Inter',sans-serif", fontWeight: 300,
                fontSize: "9px", color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "8px",
              }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2rem", right: "4rem", zIndex: 3,
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        opacity: 0.4,
      }}>
        <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "white", writingMode: "vertical-rl" }}>SCROLL</span>
        <div style={{ width: "1px", height: "50px", background: "linear-gradient(to bottom, white, transparent)" }} />
      </div>

    </section>
  );
}

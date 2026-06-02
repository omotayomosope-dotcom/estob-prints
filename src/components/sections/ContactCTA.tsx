"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

const WhatsAppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.845L.057 23.617a.75.75 0 00.921.921l5.772-1.467A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.497-5.2-1.367l-.373-.214-3.868.984.999-3.758-.232-.382A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

export default function ContactCTA() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const contacts = [
    { label: "Phone",   value: CONTACT_INFO.phone,  href: `tel:${CONTACT_INFO.phone}`,    icon: <Phone size={14} strokeWidth={1.5} /> },
    { label: "Email",   value: CONTACT_INFO.email,  href: `mailto:${CONTACT_INFO.email}`,  icon: <Mail size={14} strokeWidth={1.5} /> },
    { label: "Main Office — Ogba", value: "1 Akinwale Street, Off Yaya Abatan\nOgba – Ikeja, Lagos", href: "https://maps.google.com/?q=1+Akinwale+Street+Ogba+Ikeja+Lagos", icon: <MapPin size={14} strokeWidth={1.5} /> },
    { label: "Branch — Agege", value: "56 Ijaiye Road\nAgege, Lagos, Nigeria", href: "https://maps.google.com/?q=56+Ijaiye+Road+Agege+Lagos", icon: <MapPin size={14} strokeWidth={1.5} /> },
  ];

  return (
    <section ref={ref} style={{ background: "#111111", padding: "0", overflow: "hidden" }}>
      <style>{`
        @keyframes float {
          0%   { transform: translateY(0px) rotate(-1deg); }
          50%  { transform: translateY(-20px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(-1deg); }
        }
        .bag-float { animation: float 4.5s ease-in-out infinite; }
      `}</style>

      <div className="container-estob">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "stretch" }}
          className="grid-cols-1 lg:grid-cols-2">

          {/* LEFT */}
          <div style={{ padding: "7rem 0" }}>
            <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "2.5rem" }}>
              <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
              <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C41A1A" }}>Contact</span>
            </div>

            <h2 className="reveal" style={{
              fontFamily: "'Poppins',sans-serif", fontWeight: 800,
              fontSize: "clamp(2rem,4vw,3.8rem)", lineHeight: 1.1,
              letterSpacing: "-0.03em", color: "white", marginBottom: "2rem",
            }}>
              Let's Build<br /><span style={{ color: "#C41A1A" }}>Something Great.</span>
            </h2>

            <p className="reveal" style={{
              fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "1.05rem",
              lineHeight: 2, color: "rgba(255,255,255,0.85)", maxWidth: "420px", marginBottom: "3rem",
            }}>
              Need printing, branding, merchandise or production support? We are ready to help. Based in Ogba, Ikeja and Agege. Serving Nigeria and beyond.
            </p>

            <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "4rem" }}>
              <Link href="/contact" style={{
                fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "10px",
                letterSpacing: "0.2em", textTransform: "uppercase", color: "white",
                textDecoration: "none", background: "#C41A1A", padding: "16px 36px",
                transition: "background 0.2s", display: "inline-flex", alignItems: "center", gap: "8px",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#991414"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#C41A1A"; }}>
                Get a Quote
              </Link>

              <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,"")}`}
                target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "10px",
                letterSpacing: "0.2em", textTransform: "uppercase", color: "white",
                textDecoration: "none", background: "#222222",
                border: "1px solid rgba(255,255,255,0.15)", padding: "16px 36px",
                transition: "all 0.2s", display: "inline-flex", alignItems: "center", gap: "8px",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#333333"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#222222"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)"; }}>
                <WhatsAppIcon />
                WhatsApp Us
              </a>
            </div>

            {/* Contact details */}
            <div className="reveal" style={{ paddingTop: "3rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ display: "flex", gap: "3rem", marginBottom: "2rem", flexWrap: "wrap" }}>
                {contacts.slice(0, 2).map((c, i) => (
                  <a key={i} href={c.href}
                    style={{ textDecoration: "none", transition: "opacity 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.6"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <div style={{ width: "26px", height: "26px", background: "#C41A1A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ color: "white" }}>{c.icon}</span>
                      </div>
                      <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C41A1A" }}>{c.label}</span>
                    </div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, paddingLeft: "34px" }}>{c.value}</div>
                  </a>
                ))}
              </div>
              <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
                {contacts.slice(2).map((c, i) => (
                  <a key={i} href={c.href} target="_blank" rel="noopener noreferrer"
                    style={{ textDecoration: "none", transition: "opacity 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.6"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <div style={{ width: "26px", height: "26px", background: "#C41A1A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ color: "white" }}>{c.icon}</span>
                      </div>
                      <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C41A1A" }}>{c.label}</span>
                    </div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, whiteSpace: "pre-line", paddingLeft: "34px" }}>{c.value}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — bag centered, larger, with glow */}
          <div className="reveal" style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background: "#111111",
            minHeight: "600px",
          }}>

            {/* Red glow behind bag */}
            <div style={{
              position: "absolute",
              width: "500px", height: "500px",
              background: "radial-gradient(circle, rgba(196,26,26,0.18) 0%, transparent 65%)",
              borderRadius: "50%",
              zIndex: 1,
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
            }} />

            {/* Floating bag — centered and larger */}
            <div className="bag-float" style={{
              position: "relative", zIndex: 2,
              width: "100%",
              padding: "2rem",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Image
                src="/hair-bag-transparent.png"
                alt="ESTOB Prints Premium Branded Merchandise Ogba Ikeja Lagos"
                width={700}
                height={700}
                style={{
                  width: "100%",
                  maxWidth: "480px",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.9))",
                }}
              />
            </div>

            {/* Caption */}
            <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", zIndex: 3 }}>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                Premium Branded Merchandise
              </div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "11px", color: "rgba(255,255,255,0.25)", marginTop: "4px" }}>
                Ogba – Ikeja & Agege, Lagos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

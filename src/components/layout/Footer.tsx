"use client";
import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

const NAV = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Services",  href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact",   href: "/contact" },
];

const SOCIAL = [
  { l: "IG", h: CONTACT_INFO.social.instagram },
  { l: "FB", h: CONTACT_INFO.social.facebook },
  { l: "X",  h: CONTACT_INFO.social.twitter },
  { l: "LI", h: CONTACT_INFO.social.linkedin },
];

const CONTACTS = [
  { l: "Phone",   v: CONTACT_INFO.phone,  h: `tel:${CONTACT_INFO.phone}`,    icon: <Phone size={12} strokeWidth={2} color="white" /> },
  { l: "Email",   v: CONTACT_INFO.email,  h: `mailto:${CONTACT_INFO.email}`, icon: <Mail size={12} strokeWidth={2} color="white" /> },
  { l: "Main Office — Ogba", v: CONTACT_INFO.address, h: "https://maps.google.com/?q=1+Akinwale+Street+Ogba+Ikeja+Lagos", icon: <MapPin size={12} strokeWidth={2} color="white" /> },
  { l: "Branch — Agege", v: CONTACT_INFO.address2, h: "https://maps.google.com/?q=56+Ijaiye+Road+Agege+Lagos", icon: <MapPin size={12} strokeWidth={2} color="white" /> },
];

const WhatsAppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.845L.057 23.617a.75.75 0 00.921.921l5.772-1.467A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.497-5.2-1.367l-.373-.214-3.868.984.999-3.758-.232-.382A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      <div className="container-estob" style={{ padding: "5rem 1.5rem 3rem" }}>
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: "20px", color: "white", letterSpacing: "-0.03em", lineHeight: 1 }}>ESTOB</div>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "9px", color: "#C41A1A", letterSpacing: "0.22em", marginTop: "3px" }}>PRINTS</div>
            </div>
            <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "12px", color: "rgba(255,255,255,0.3)", lineHeight: 1.9, marginBottom: "2rem" }}>
              Premium printing, branding, and production solutions. Nigeria and beyond.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {SOCIAL.map((s, i) => (
                <a key={i} href={s.h} target="_blank" rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "9px",
                    color: "rgba(255,255,255,0.4)", textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.08)", width: "32px", height: "32px",
                    display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; (e.currentTarget as HTMLElement).style.background = "#C41A1A"; (e.currentTarget as HTMLElement).style.borderColor = "#C41A1A"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"; (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}>
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: "1.5rem" }}>Pages</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {NAV.map(n => (
                <li key={n.href}>
                  <Link href={n.href} style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "12px", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: "1.5rem" }}>Services</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Premium Printing","Branding","Large Format","Merchandise","Promotional","Custom","Paper Supplies"].map(s => (
                <li key={s}>
                  <Link href="/services" style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "12px", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: "1.5rem" }}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {CONTACTS.map((c, i) => (
                <a key={i} href={c.h} target={i >= 2 ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ textDecoration: "none", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{
                    width: "26px", height: "26px", background: "#C41A1A",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: "1px",
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: "9px", color: "rgba(196,26,26,0.7)", letterSpacing: "0.15em", marginBottom: "2px" }}>{c.l}</div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "11px", color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}>{c.v}</div>
                  </div>
                </a>
              ))}

              {/* WhatsApp button — compact */}
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,"")}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  marginTop: "4px",
                  fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "9px",
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "white", textDecoration: "none",
                  background: "#25D366", padding: "12px 20px",
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  transition: "background 0.2s",
                  width: "fit-content",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1da851"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#25D366"; }}>
                <WhatsAppIcon />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "11px", color: "rgba(255,255,255,0.15)" }}>
            © {new Date().getFullYear()} ESTOB Prints. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 300, fontSize: "11px", color: "rgba(255,255,255,0.15)" }}>
            Ogba – Ikeja & Agege, Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}

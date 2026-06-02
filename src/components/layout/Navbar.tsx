"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

const NAV = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Services",  href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights",  href: "/Insights" },
  { label: "Contact",   href: "/contact" },
];

const WhatsAppIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.845L.057 23.617a.75.75 0 00.921.921l5.772-1.467A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.497-5.2-1.367l-.373-.214-3.868.984.999-3.758-.232-.382A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <>
      {/* Top bar - hidden on mobile */}
      <div className="hidden lg:block" style={{ background: "#C41A1A", padding: "10px 0", position: "relative", zIndex: 100 }}>
        <div className="container-estob" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href={`tel:${CONTACT_INFO.phone}`} style={{ fontFamily: "'Inter',sans-serif", fontSize: "11px", letterSpacing: "0.08em", color: "rgba(255,255,255,0.9)", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
              <Phone size={11} strokeWidth={2} />
              {CONTACT_INFO.phone}
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} style={{ fontFamily: "'Inter',sans-serif", fontSize: "11px", letterSpacing: "0.08em", color: "rgba(255,255,255,0.9)", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
              <Mail size={11} strokeWidth={2} />
              {CONTACT_INFO.email}
            </a>
          </div>
          <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,"")}`} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'Poppins',sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{
        position: "fixed",
        top: scrolled ? 0 : "41px",
        left: 0, right: 0, zIndex: 99,
        background: "rgba(255,255,255,0.98)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
        padding: scrolled ? "0.8rem 0" : "1rem 0",
        transition: "all 0.4s ease",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
      }}>
        <div className="container-estob" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: "20px", color: "#111111", letterSpacing: "-0.03em", lineHeight: 1 }}>ESTOB</div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "9px", color: "#C41A1A", letterSpacing: "0.25em", lineHeight: 1, marginTop: "3px" }}>PRINTS</div>
          </Link>

          {/* Desktop links */}
          <ul style={{ display: "flex", gap: "1.8rem", listStyle: "none", alignItems: "center" }} className="hidden lg:flex">
            {NAV.map(n => (
              <li key={n.href}>
                <Link href={n.href} style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: path === n.href ? "#C41A1A" : "#222222",
                  textDecoration: "none",
                  borderBottom: path === n.href ? "1.5px solid #C41A1A" : "1.5px solid transparent",
                  paddingBottom: "3px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = "#C41A1A";
                  (e.currentTarget as HTMLElement).style.borderBottomColor = "#C41A1A";
                }}
                onMouseLeave={e => {
                  if (path !== n.href) {
                    (e.currentTarget as HTMLElement).style.color = "#222222";
                    (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent";
                  }
                }}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side — CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link href="/contact" className="hidden lg:block" style={{
              fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "10px",
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "white", textDecoration: "none",
              background: "#C41A1A", padding: "11px 24px",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#991414"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#C41A1A"; }}>
              Get a Quote
            </Link>

            {/* Hamburger */}
            <button onClick={() => setOpen(!open)} className="lg:hidden"
              style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", flexDirection: "column", gap: "5px" }}>
              <span style={{ display: "block", width: "22px", height: "1px", background: "#111", transition: "all 0.3s", transform: open ? "rotate(45deg) translate(4px,4px)" : "none" }} />
              <span style={{ display: "block", width: "22px", height: "1px", background: "#111", transition: "all 0.3s", opacity: open ? 0 : 1 }} />
              <span style={{ display: "block", width: "22px", height: "1px", background: "#111", transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 98,
        background: "#ffffff",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: "2.5rem",
        opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.35s ease",
      }}>
        <div style={{ marginBottom: "1rem" }}>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: "28px", color: "#111111", letterSpacing: "-0.03em", lineHeight: 1, textAlign: "center" }}>ESTOB</div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "10px", color: "#C41A1A", letterSpacing: "0.25em", textAlign: "center", marginTop: "3px" }}>PRINTS</div>
        </div>
        {NAV.map(n => (
          <Link key={n.href} href={n.href} style={{
            fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "2rem",
            letterSpacing: "-0.02em", textTransform: "uppercase",
            color: path === n.href ? "#C41A1A" : "#111111", textDecoration: "none",
          }}>
            {n.label}
          </Link>
        ))}
        <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,"")}`}
          target="_blank" rel="noopener noreferrer"
          style={{
            fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "11px",
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "white", textDecoration: "none",
            background: "#25D366", padding: "14px 36px",
            display: "flex", alignItems: "center", gap: "8px",
          }}>
          <WhatsAppIcon />
          WhatsApp Us
        </a>
        <Link href="/contact" style={{
          fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "11px",
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: "white", textDecoration: "none",
          background: "#C41A1A", padding: "14px 36px",
        }}>
          Get a Quote
        </Link>
      </div>
    </>
  );
}

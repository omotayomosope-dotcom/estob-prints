"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

const S = { fontFamily: "'Poppins', sans-serif" };
const SI = { fontFamily: "'Inter', sans-serif" };

const SERVICES_OFFERED = [
  { title: "Business Cards & Stationery", desc: "Premium business cards, letterheads, and compliment slips, printed and ready quickly." },
  { title: "Banners & Large Format", desc: "Roll-up banners, billboards, and event signage produced on-site." },
  { title: "Branded Merchandise", desc: "Branded bags, mugs, pens, and corporate gifts customized to your brand." },
  { title: "Corporate Branding", desc: "Logo design, brand guidelines, and full corporate identity packages." },
  { title: "Offset Paper Supply", desc: "Wholesale offset paper, art paper, and matte paper for printers and bulk buyers." },
];

const FAQS = [
  {
    q: "Where exactly is ESTOB Prints located in Ogba?",
    a: "Our main office is at 1 Akinwale Street, Off Yaya Abatan, Ogba, Ikeja, Lagos — close to Isalu Hospitals and the Ogba Sunday Market on Wempco Road.",
  },
  {
    q: "Do I need an appointment to visit?",
    a: "No appointment needed. Walk-in consultations are welcome during our opening hours, Monday to Saturday, 8am to 6pm.",
  },
  {
    q: "What printing services are available at the Ogba branch?",
    a: "Our Ogba location handles the full range of services: business cards, banners, branded merchandise, corporate branding, promotional materials, and offset paper supply.",
  },
  {
    q: "How long has ESTOB Prints been operating in Ogba?",
    a: "ESTOB Prints has served businesses, churches, and organizations in Ogba and across Lagos for over 25 years.",
  },
];

export default function PrintingPressOgbaClient() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main ref={ref} style={{ background: "#ffffff", paddingTop: "120px" }}>

      {/* Hero */}
      <section style={{ background: "#ffffff", padding: "5rem 0 4rem", borderBottom: "1px solid #eeeeee" }}>
        <div className="container-estob" style={{ maxWidth: "800px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "2rem" }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
            <span style={{ ...S, fontWeight: 500, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C41A1A" }}>Our Ogba Location</span>
          </div>
          <h1 style={{ ...S, fontWeight: 900, fontSize: "clamp(2.2rem,5vw,4rem)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#111111", marginBottom: "1.5rem" }}>
            Printing Press in <span style={{ color: "#C41A1A" }}>Ogba, Ikeja.</span>
          </h1>
          <p style={{ ...SI, fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.9, color: "#666666", maxWidth: "640px" }}>
            ESTOB Prints is a trusted printing press based in Ogba, Ikeja, with over 25 years of experience serving businesses, churches, and organizations across Lagos. Whether you need business cards, banners, branded merchandise, or full corporate branding, our Ogba office is ready to help, no appointment necessary.
          </p>
        </div>
      </section>

      {/* Why this location */}
      <section className="reveal" style={{ background: "#f7f7f7", padding: "4rem 0" }}>
        <div className="container-estob" style={{ maxWidth: "800px" }}>
          <h2 style={{ ...S, fontWeight: 800, fontSize: "1.6rem", color: "#111111", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
            Why Choose Our Ogba Office
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <p style={{ ...SI, fontWeight: 300, fontSize: "1rem", lineHeight: 1.9, color: "#555555" }}>
              Our Ogba office sits at 1 Akinwale Street, Off Yaya Abatan, easily accessible from across Ikeja and within walking distance of Isalu Hospitals and the popular Ogba Sunday Market on Wempco Road.
            </p>
            <p style={{ ...SI, fontWeight: 300, fontSize: "1rem", lineHeight: 1.9, color: "#555555" }}>
              We welcome walk-in consultations, Monday to Saturday, 8am to 6pm. Bring your design, or let our team help you create one from scratch, either way, you can discuss your project in person and see material samples before placing an order.
            </p>
          </div>
        </div>
      </section>

      {/* Services at this location */}
      <section className="reveal" style={{ background: "#ffffff", padding: "4rem 0" }}>
        <div className="container-estob" style={{ maxWidth: "800px" }}>
          <h2 style={{ ...S, fontWeight: 800, fontSize: "1.6rem", color: "#111111", letterSpacing: "-0.02em", marginBottom: "2rem" }}>
            Services Available at Our Ogba Location
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#eeeeee" }} className="grid-cols-1 lg:grid-cols-2">
            {SERVICES_OFFERED.map((s, i) => (
              <div key={i} style={{ background: "#ffffff", padding: "1.8rem" }}>
                <h3 style={{ ...S, fontWeight: 700, fontSize: "1rem", color: "#111111", marginBottom: "0.6rem" }}>{s.title}</h3>
                <p style={{ ...SI, fontWeight: 300, fontSize: "0.9rem", lineHeight: 1.7, color: "#777777" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal" style={{ background: "#f7f7f7", padding: "4rem 0" }}>
        <div className="container-estob" style={{ maxWidth: "800px" }}>
          <h2 style={{ ...S, fontWeight: 800, fontSize: "1.6rem", color: "#111111", letterSpacing: "-0.02em", marginBottom: "2rem" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {FAQS.map((f, i) => (
              <div key={i} style={{ borderBottom: "1px solid #e0e0e0", paddingBottom: "1.5rem" }}>
                <h3 style={{ ...S, fontWeight: 700, fontSize: "1rem", color: "#111111", marginBottom: "0.6rem" }}>{f.q}</h3>
                <p style={{ ...SI, fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.8, color: "#666666" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#111111", padding: "5rem 0" }}>
        <div className="container-estob" style={{ maxWidth: "640px", textAlign: "center" }}>
          <h2 style={{ ...S, fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.3rem)", color: "white", letterSpacing: "-0.02em", marginBottom: "1.2rem" }}>
            Visit Us in Ogba <span style={{ color: "#C41A1A" }}>Today.</span>
          </h2>
          <p style={{ ...SI, fontWeight: 300, fontSize: "1rem", color: "rgba(255,255,255,0.5)", marginBottom: "2.5rem" }}>
            1 Akinwale Street, Off Yaya Abatan, Ogba, Ikeja, Lagos — Mon to Sat, 8am to 6pm.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,"")}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                ...S, fontWeight: 700, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase",
                color: "white", textDecoration: "none", background: "#C41A1A",
                padding: "16px 32px", display: "inline-block",
              }}>
              Chat on WhatsApp →
            </a>
            <Link href="/contact" style={{
              ...S, fontWeight: 700, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "white", textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)",
              padding: "16px 32px", display: "inline-block",
            }}>
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

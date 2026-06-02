"use client";
// FILE: src/app/contact/page.tsx
import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

const S = { fontFamily: "'Poppins', sans-serif" };
const SI = { fontFamily: "'Inter', sans-serif" };

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello ESTOB Prints!%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService: ${form.service}%0A%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,"")}?text=${msg}`, "_blank");
    setSent(true);
  };

  const inputStyle = {
    width: "100%", padding: "1rem 1.2rem",
    fontFamily: "'Inter',sans-serif", fontSize: "13px",
    border: "1px solid #e0e0e0", background: "#ffffff",
    color: "#111111", outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    ...S, fontWeight: 500, fontSize: "10px",
    letterSpacing: "0.15em", textTransform: "uppercase" as const,
    color: "#999999", display: "block", marginBottom: "8px",
  };

  const contacts = [
    {
      label: "Call Us",
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone}`,
      sub: "Mon - Sat, 8am - 6pm",
      icon: <Phone size={16} strokeWidth={2} color="white" />,
    },
    {
      label: "Email Us",
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      sub: "We reply within 24 hours",
      icon: <Mail size={16} strokeWidth={2} color="white" />,
    },
    {
      label: "Main Office — Ogba",
      value: CONTACT_INFO.address,
      href: "https://maps.google.com/?q=1+Akinwale+Street+Ogba+Ikeja+Lagos",
      sub: "Available for site visits",
      icon: <MapPin size={16} strokeWidth={2} color="white" />,
    },
    {
      label: "Branch Office — Agege",
      value: CONTACT_INFO.address2,
      href: "https://maps.google.com/?q=56+Ijaiye+Road+Agege+Lagos",
      sub: "Available for site visits",
      icon: <MapPin size={16} strokeWidth={2} color="white" />,
    },
    {
      label: "Working Hours",
      value: "Mon – Sat: 8:00am – 6:00pm",
      href: "#",
      sub: "Sunday: Closed",
      icon: <Clock size={16} strokeWidth={2} color="white" />,
    },
  ];

  return (
    <main style={{ background: "#ffffff", paddingTop: "120px" }}>

      {/* Hero */}
      <section style={{ background: "#ffffff", padding: "6rem 0 5rem", borderBottom: "1px solid #eeeeee" }}>
        <div className="container-estob">
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "2rem" }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
            <span style={{ ...S, fontWeight: 500, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C41A1A" }}>Contact Us</span>
          </div>
          <h1 style={{ ...S, fontWeight: 900, fontSize: "clamp(2.5rem,6vw,6rem)", lineHeight: 1.0, letterSpacing: "-0.03em", color: "#111111", marginBottom: "2rem" }}>
            Let's Build Something<br /><span style={{ color: "#C41A1A" }}>Great.</span>
          </h1>
          <p style={{ ...SI, fontWeight: 300, fontSize: "1.1rem", lineHeight: 1.9, color: "#888888", maxWidth: "500px" }}>
            Need printing, branding, merchandise, or customized production support? We are ready to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ background: "#ffffff", padding: "6rem 0" }}>
        <div className="container-estob">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "8rem", alignItems: "start" }}
            className="grid-cols-1 lg:grid-cols-2">

            {/* Left — contact details */}
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {contacts.map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{
                      width: "42px", height: "42px",
                      background: "#C41A1A",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {c.icon}
                    </div>
                    <div>
                      <div style={{ ...S, fontWeight: 600, fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C41A1A", marginBottom: "5px" }}>{c.label}</div>
                      <a href={c.href} target={i === 2 || i === 3 ? "_blank" : undefined} rel="noopener noreferrer"
                        style={{ ...S, fontWeight: 700, fontSize: "0.9rem", color: "#111111", textDecoration: "none", display: "block", marginBottom: "3px", lineHeight: 1.5 }}>
                        {c.value}
                      </a>
                      <div style={{ ...SI, fontWeight: 300, fontSize: "11px", color: "#aaaaaa" }}>{c.sub}</div>
                    </div>
                  </div>
                ))}

                {/* WhatsApp button */}
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,"")}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    ...S, fontWeight: 700, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "white", textDecoration: "none", background: "#111111",
                    padding: "16px 32px", display: "inline-flex", alignItems: "center", gap: "10px",
                    transition: "background 0.2s", marginTop: "0.5rem",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#C41A1A"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#111111"; }}>
                  <MessageCircle size={14} strokeWidth={2} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {sent ? (
                <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                  <h3 style={{ ...S, fontWeight: 800, fontSize: "1.5rem", color: "#111111", marginBottom: "1rem" }}>Message Sent!</h3>
                  <p style={{ ...SI, fontWeight: 300, color: "#888888" }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                        style={inputStyle}
                        onFocus={e => (e.target as HTMLElement).style.borderColor = "#C41A1A"}
                        onBlur={e => (e.target as HTMLElement).style.borderColor = "#e0e0e0"} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                        style={inputStyle}
                        onFocus={e => (e.target as HTMLElement).style.borderColor = "#C41A1A"}
                        onBlur={e => (e.target as HTMLElement).style.borderColor = "#e0e0e0"} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+234..."
                        style={inputStyle}
                        onFocus={e => (e.target as HTMLElement).style.borderColor = "#C41A1A"}
                        onBlur={e => (e.target as HTMLElement).style.borderColor = "#e0e0e0"} />
                    </div>
                    <div>
                      <label style={labelStyle}>Service Needed</label>
                      <select name="service" value={form.service} onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer" }}>
                        <option value="">Select a service</option>
                        <option>Premium Printing</option>
                        <option>Branding & Corporate Identity</option>
                        <option>Corporate Merchandise</option>
                        <option>Large Format Printing</option>
                        <option>Promotional Materials</option>
                        <option>Custom Print Solutions</option>
                        <option>Offset Paper Supplies</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required
                      placeholder="Tell us about your project..." rows={5}
                      style={{ ...inputStyle, resize: "vertical" as const }}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = "#C41A1A"}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = "#e0e0e0"} />
                  </div>
                  <button type="submit" style={{
                    ...S, fontWeight: 700, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "white", background: "#C41A1A", border: "none",
                    padding: "18px 44px", cursor: "pointer", transition: "background 0.2s",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#991414"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#C41A1A"; }}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

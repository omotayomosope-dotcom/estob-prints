// FILE: src/app/services/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services | ESTOB Prints",
  description: "Premium printing, branding, corporate merchandise, large format printing, promotional materials and custom print solutions in Lagos Nigeria.",
};

const S = { fontFamily: "'Poppins', sans-serif" };
const SI = { fontFamily: "'Inter', sans-serif" };

const SERVICES = [
  {
    n: "01", title: "Premium Printing",
    desc: "High-quality print solutions designed for businesses, brands, events, and organizations. From business cards to corporate stationery — we execute every print job to the highest standard.",
    items: ["Business Cards", "Letterheads", "Compliment Slips", "Brochures", "Flyers", "Posters", "Calendars", "Books & Magazines"],
  },
  {
    n: "02", title: "Branding & Corporate Identity",
    desc: "We help brands create professional, memorable, and consistent visual identities. From logo design to full brand guidelines — we build brands that command authority.",
    items: ["Logo Design", "Brand Guidelines", "Stationery Design", "Brand Identity Systems", "Corporate Profiles", "Presentation Templates"],
  },
  {
    n: "03", title: "Corporate Merchandise",
    desc: "Customized branded products that strengthen your visibility and deepen customer connection. We produce premium merchandise that makes your brand unforgettable.",
    items: ["Branded Bags", "Corporate Gifts", "Branded Apparel", "Mugs & Bottles", "Pens & Stationery", "Branded Packaging"],
  },
  {
    n: "04", title: "Large Format Printing",
    desc: "Bold, high-impact visual solutions built for maximum attention and scale. From billboards to event backdrops — we make your brand impossible to ignore.",
    items: ["Banners & Rollups", "Billboards", "Event Backdrops", "Vehicle Branding", "Wall Graphics", "Signage & Wayfinding"],
  },
  {
    n: "05", title: "Promotional Materials",
    desc: "Creative print products designed to support your campaigns, marketing activations, and events. We produce materials that drive results.",
    items: ["Event Programs", "Invitation Cards", "Table Cards", "Gift Bags", "Packaging", "Campaign Materials"],
  },
  {
    n: "06", title: "Custom Print Solutions",
    desc: "Have a unique requirement? We build tailored production solutions around your specific business needs. No project is too complex.",
    items: ["Custom Packaging", "Specialty Finishes", "Embossing & Foiling", "Die-Cut Shapes", "Lamination", "Bespoke Projects"],
  },
  {
    n: "07", title: "Offset Paper Importation and Wholesaler",
    desc: "We supply premium quality offset paper and print materials sourced directly from trusted international manufacturers. Reliable stock. Competitive pricing. Fast delivery across Lagos.",
    items: ["Offset Paper Rolls", "24/36 Paper Sizes", "Art Paper", "Matt Paper", "Cream Bond", "Bulk Supply Orders"],
  },
];

export default function ServicesPage() {
  return (
    <main style={{ background: "#f7f7f7", paddingTop: "120px" }}>

      <style>{`
        .service-row { transition: background 0.3s ease; }
        .service-row:hover { background: #f0f0f0 !important; }
        .service-row:hover .service-accent-line { width: 48px !important; }
        .service-row:hover .service-title { transform: translateY(-2px); }
        .service-title { transition: transform 0.25s ease; }
        .service-accent-line { transition: width 0.3s ease; }
        .include-item { transition: background 0.2s ease; border-left: 2px solid transparent; }
        .include-item:hover { background: #e2e2e2 !important; border-left: 2px solid #C41A1A !important; padding-left: 1.6rem !important; }
        .include-item span { display: inline-block; transition: transform 0.2s ease; }
        .include-item:hover span { transform: translateX(4px); }
      `}</style>

      {/* HERO */}
      <section style={{ background: "linear-gradient(160deg, #ffffff 0%, #f4f4f4 100%)", padding: "5rem 0 0", borderBottom: "1px solid #e2e2e2" }}>
        <div className="container-estob">
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "2rem" }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
            <span style={{ ...S, fontWeight: 500, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C41A1A" }}>What We Do</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "flex-end" }} className="grid-cols-1 lg:grid-cols-2">
            <div style={{ paddingBottom: "4rem" }}>
              <h1 style={{ ...S, fontWeight: 900, fontSize: "clamp(2.8rem, 6vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.04em", color: "#111111", marginBottom: "2rem" }}>
                Our{" "}<span style={{ color: "#C41A1A" }}>Services.</span>
              </h1>
              <p style={{ ...SI, fontWeight: 300, fontSize: "1rem", lineHeight: 1.9, color: "#888888", maxWidth: "480px", marginBottom: "2.5rem" }}>
                Premium print and production solutions designed to make your brand unforgettable — across every format, every medium, every project.
              </p>
              <div style={{ display: "flex", gap: "2.5rem", paddingTop: "2rem", borderTop: "1px solid #e0e0e0" }}>
                {[
                  { num: "25+",    label: "Years Experience" },
                  { num: "5,000+", label: "Projects Completed" },
                  { num: "7",      label: "Service Areas" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div style={{ ...S, fontWeight: 900, fontSize: "1.6rem", color: "#111111", letterSpacing: "-0.03em" }}>{stat.num}</div>
                    <div style={{ ...SI, fontWeight: 400, fontSize: "10px", color: "#aaaaaa", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#C41A1A", zIndex: 2 }} />
              <Image src="/printing-machine.png" alt="ESTOB Prints — Premium Printing Production" width={700} height={500}
                style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", display: "block", filter: "grayscale(20%) contrast(1.05)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)", padding: "2rem 1.5rem 1.5rem" }}>
                <span style={{ ...SI, fontWeight: 400, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Production Floor · Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section style={{ background: "#f7f7f7", padding: "3rem 0" }}>
        <div className="container-estob">
          {SERVICES.map((s, i) => (
            <div key={i}>
              <div className="service-row grid-cols-1 lg:grid-cols-2"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start", padding: "4rem 2rem", borderBottom: s.n === "07" ? "none" : "1px solid #e8e8e8", background: "#f7f7f7", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "50%", left: "-10px", transform: "translateY(-50%)", ...S, fontWeight: 900, fontSize: "clamp(6rem, 12vw, 11rem)", color: "rgba(0,0,0,0.04)", letterSpacing: "-0.05em", lineHeight: 1, userSelect: "none", pointerEvents: "none", zIndex: 0 }}>
                  {s.n}
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div className="service-accent-line" style={{ width: "24px", height: "2px", background: "#C41A1A", marginBottom: "0.75rem" }} />
                  <h2 className="service-title" style={{ ...S, fontWeight: 900, fontSize: "clamp(1.8rem,3vw,2.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "#111111", marginBottom: "1.2rem" }}>
                    {s.title}{s.n === "07" && <span style={{ ...SI, fontWeight: 600, fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "white", background: "#C41A1A", padding: "3px 8px", marginLeft: "12px", verticalAlign: "middle" }}>New</span>}
                  </h2>
                  <p style={{ ...SI, fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.9, color: "#777777" }}>{s.desc}</p>
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ ...S, fontWeight: 600, fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#aaaaaa", marginBottom: "1.5rem" }}>Includes</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e0e0e0" }}>
                    {s.items.map((item, j) => (
                      <div key={j} className="include-item" style={{ background: "#ebebeb", padding: "1rem 1.2rem" }}>
                        <span style={{ ...SI, fontWeight: 400, fontSize: "12px", color: "#555555" }}>→ {item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Photo + Video — shows after Offset Paper Importation and Wholesaler (service 07) */}
              {s.n === "07" && (
                <div style={{ borderTop: "1px solid #e8e8e8" }}>
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#C41A1A", zIndex: 2 }} />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }} className="grid-cols-1 lg:grid-cols-2">
                      <div style={{ position: "relative", overflow: "hidden" }}>
                        <Image src="/offset-paper.jpeg" alt="Offset Paper Stock — ESTOB Prints" width={700} height={500}
                          style={{ width: "100%", height: "500px", objectFit: "cover", display: "block" }} />
                      </div>
                      <div style={{ position: "relative", overflow: "hidden" }}>
                        <video autoPlay muted loop playsInline style={{ width: "100%", height: "500px", objectFit: "cover", display: "block", filter: "contrast(1.05)" }}>
                          <source src="/container.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)", padding: "3rem 2rem 2rem" }}>
                      <div style={{ ...S, fontWeight: 600, fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "8px" }}>
                        Premium Offset Paper Supplies
                      </div>
                      <div style={{ ...S, fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.5rem)", color: "white", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                        Sourced from Trusted<br /><span style={{ color: "#C41A1A" }}>International Manufacturers.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: "120px", background: "linear-gradient(to bottom, #f7f7f7 0%, #111111 100%)" }} />

      {/* CTA */}
      <section style={{ background: "#111111", padding: "6rem 0 8rem" }}>
        <div className="container-estob" style={{ textAlign: "center" }}>
          <div style={{ width: "40px", height: "2px", background: "#C41A1A", margin: "0 auto 2rem" }} />
          <h2 style={{ ...S, fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "white", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
            Your Brand Deserves More<br /><span style={{ color: "#C41A1A" }}>Than Standard Print.</span>
          </h2>
          <p style={{ ...SI, fontWeight: 300, fontSize: "1rem", color: "rgba(255,255,255,0.4)", maxWidth: "420px", margin: "0 auto 3rem" }}>
            Tell us what you need and we'll build a tailored production solution around your specific business goals.
          </p>
          <a href="/contact" style={{ ...S, fontWeight: 700, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "white", textDecoration: "none", background: "#C41A1A", padding: "18px 52px", display: "inline-block" }}>
            Get a Quote →
          </a>
        </div>
      </section>

    </main>
  );
}

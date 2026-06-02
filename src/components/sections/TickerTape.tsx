"use client";

const items = [
  "Premium Printing",
  "Corporate Branding",
  "Large Format",
  "Promotional Materials",
  "Merchandise",
  "Custom Solutions",
  "Event Branding",
  "Business Cards",
  "Banners & Signage",
];
const doubled = [...items, ...items];

export default function TickerTape() {
  return (
    /* FIX 3: Darker bg to match #181818 feel. Tighter padding. Editorial strip. */
    <div style={{
      background: "#161616",
      padding: "10px 0",
      overflow: "hidden",
      borderTop: "1px solid rgba(255,255,255,0.04)",
      borderBottom: "1px solid rgba(255,255,255,0.04)",
    }} aria-hidden>
      <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
        {/* FIX 3: slower marquee via longer animation duration in globals.css */}
        <div className="marquee-inner" style={{ animationDuration: "40s" }}>
          {doubled.map((item, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", padding: "0 2rem" }}>
              {/* FIX 3: thinner typography — font weight down, size down, spacing tighter */}
              <span style={{
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 300,
                fontSize: "9px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
              }}>
                {item}
              </span>
              {/* FIX 3: smaller, softer separator — thin dash instead of bold diamond */}
              <span style={{
                marginLeft: "2rem",
                color: "rgba(196,26,26,0.5)",
                fontSize: "5px",
              }}>
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


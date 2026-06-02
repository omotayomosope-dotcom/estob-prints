"use client";
import Link from "next/link";
import { POSTS } from "@/lib/posts";
import { useState } from "react";

const S = { fontFamily: "'Poppins', sans-serif" };
const SI = { fontFamily: "'Inter', sans-serif" };

export default function InsightsPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featured = POSTS.find(p => p.featured) || POSTS[0];
  const rest = POSTS;

  return (
    <main style={{ background: "#ffffff", paddingTop: "120px" }}>

      <style>{`
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: #eeeeee;
        }
        @media (max-width: 768px) {
          .insights-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            background: transparent;
          }
          .insights-card {
            border: 1px solid #eeeeee !important;
          }
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
          .featured-img {
            height: 260px !important;
          }
          .featured-content {
            padding: 2rem !important;
          }
        }
        .insights-card:hover .card-img {
          transform: scale(1.04);
        }
        .insights-card:hover .card-title {
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .insights-card:hover {
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
        }
        .card-img {
          transition: transform 0.5s ease;
        }
      `}</style>

      {/* Hero */}
      <section style={{ background: "#ffffff", padding: "3rem 0 3rem", borderBottom: "1px solid #eeeeee" }}>
        <div className="container-estob">
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "1.2rem" }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
            <span style={{ ...S, fontWeight: 500, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C41A1A" }}>Insights</span>
          </div>
          <h1 style={{ ...S, fontWeight: 900, fontSize: "clamp(2.5rem,5vw,5rem)", lineHeight: 1.0, letterSpacing: "-0.03em", color: "#111111", marginBottom: "1.2rem" }}>
            Print. Brand.<br /><span style={{ color: "#C41A1A" }}>Learn.</span>
          </h1>
          <p style={{ ...SI, fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.9, color: "#888888", maxWidth: "560px" }}>
            Practical print tips, branding strategies, and production insights gained from over 25 years of helping businesses create memorable brand experiences.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section style={{ background: "#f7f7f7", padding: "4rem 0", borderBottom: "1px solid #eeeeee" }}>
        <div className="container-estob">
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "2rem" }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
            <span style={{ ...S, fontWeight: 500, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C41A1A" }}>Featured Insight</span>
          </div>
          <Link href={`/Insights/${featured.slug}`} style={{ textDecoration: "none" }}>
            <div className="featured-grid" style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "0",
              alignItems: "center",
              background: "#ffffff",
              overflow: "hidden",
              boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 30px rgba(0,0,0,0.06)"; }}>
              {featured.thumbnail && (
                <div className="featured-img" style={{ overflow: "hidden", height: "420px" }}>
                  <img
                    src={featured.thumbnail}
                    alt={featured.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                  />
                </div>
              )}
              <div className="featured-content" style={{ padding: "3rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                  <span style={{ ...S, fontWeight: 600, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C41A1A", border: "1px solid rgba(196,26,26,0.3)", padding: "3px 10px" }}>{featured.category}</span>
                  <span style={{ ...SI, fontWeight: 300, fontSize: "11px", color: "#aaaaaa" }}>{featured.date}</span>
                  <span style={{ ...SI, fontWeight: 300, fontSize: "11px", color: "#aaaaaa" }}>{featured.readTime}</span>
                </div>
                <h2 style={{ ...S, fontWeight: 900, fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#111111", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "1.2rem" }}>
                  {featured.title}
                </h2>
                <p style={{ ...SI, fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.9, color: "#666666", marginBottom: "2rem" }}>
                  {featured.excerpt}
                </p>
                <span style={{ ...S, fontWeight: 700, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C41A1A", borderBottom: "1px solid #C41A1A", paddingBottom: "2px" }}>
                  Read Article →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Articles Grid */}
      <section style={{ background: "#ffffff", padding: "5rem 0" }}>
        <div className="container-estob">
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "2.5rem" }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
            <span style={{ ...S, fontWeight: 500, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C41A1A" }}>All Insights</span>
          </div>
          <div className="insights-grid">
            {rest.map((post, i) => (
              <Link key={i} href={`/Insights/${post.slug}`} style={{ textDecoration: "none" }}>
                <div className="insights-card" style={{
                  background: "#ffffff",
                  height: "100%",
                  transition: "box-shadow 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}>
                  {post.thumbnail && (
                    <div style={{ overflow: "hidden", height: "220px" }}>
                      <img
                        className="card-img"
                        src={post.thumbnail}
                        alt={post.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    </div>
                  )}
                  <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap" }}>
                      <span style={{ ...S, fontWeight: 600, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C41A1A", border: "1px solid rgba(196,26,26,0.3)", padding: "3px 10px" }}>{post.category}</span>
                      <span style={{ ...SI, fontWeight: 300, fontSize: "10px", color: "#aaaaaa" }}>{post.date}</span>
                      <span style={{ ...SI, fontWeight: 300, fontSize: "10px", color: "#aaaaaa" }}>{post.readTime}</span>
                    </div>
                    <h2 className="card-title" style={{ ...S, fontWeight: 700, fontSize: "1rem", color: "#111111", lineHeight: 1.4, letterSpacing: "-0.01em", marginBottom: "0.8rem", flex: 1 }}>
                      {post.title}
                    </h2>
                    <p style={{ ...SI, fontWeight: 300, fontSize: "0.88rem", lineHeight: 1.8, color: "#888888", marginBottom: "1.5rem" }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1rem", borderTop: "1px solid #eeeeee" }}>
                      <span style={{ ...SI, fontWeight: 300, fontSize: "10px", color: "#aaaaaa" }}>{post.date}</span>
                      <span style={{ ...S, fontWeight: 600, fontSize: "10px", letterSpacing: "0.1em", color: "#C41A1A" }}>Read →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section style={{ background: "#111111", padding: "6rem 0" }}>
        <div className="container-estob" style={{ maxWidth: "600px", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "1.5rem" }}>
            <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
            <span style={{ ...S, fontWeight: 500, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C41A1A" }}>Stay Updated</span>
            <span style={{ display: "block", width: "28px", height: "1px", background: "#C41A1A" }} />
          </div>
          <h2 style={{ ...S, fontWeight: 900, fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "white", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            Get Insights Delivered<br /><span style={{ color: "#C41A1A" }}>Monthly.</span>
          </h2>
          <p style={{ ...SI, fontWeight: 300, fontSize: "1rem", lineHeight: 1.9, color: "rgba(255,255,255,0.5)", marginBottom: "2.5rem" }}>
            Practical printing and branding insights delivered to your inbox every month. No spam, just value.
          </p>
          {subscribed ? (
            <div style={{ ...S, fontWeight: 600, fontSize: "14px", color: "#C41A1A", padding: "1.5rem", border: "1px solid rgba(196,26,26,0.3)" }}>
              Thank you for subscribing! We will be in touch.
            </div>
          ) : (
            <div style={{ display: "flex", gap: "0", maxWidth: "480px", margin: "0 auto" }}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  flex: 1, padding: "14px 20px",
                  fontFamily: "'Inter',sans-serif", fontSize: "13px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)",
                  color: "white", outline: "none",
                }}
              />
              <button
                onClick={() => { if (email) setSubscribed(true); }}
                style={{
                  ...S, fontWeight: 700, fontSize: "10px", letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "white",
                  background: "#C41A1A", border: "none",
                  padding: "14px 28px", cursor: "pointer",
                  transition: "background 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#991414"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#C41A1A"; }}>
                Subscribe
              </button>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}

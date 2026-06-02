"use client";
import Link from "next/link";
import { POSTS, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

const S = { fontFamily: "'Poppins', sans-serif" };
const SI = { fontFamily: "'Inter', sans-serif" };

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={key++} style={{ ...S, fontWeight: 800, fontSize: "1.4rem", color: "#111111", letterSpacing: "-0.02em", lineHeight: 1.2, margin: "3rem 0 1rem" }}>
          {trimmed.replace("## ", "")}
        </h2>
      );
    } else if (trimmed.includes("[") && trimmed.includes("](")) {
      const parts = trimmed.split(/(\[.+?\]\(.+?\))/g);
      elements.push(
        <p key={key++} style={{ ...SI, fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.9, color: "#555555", margin: "1rem 0" }}>
          {parts.map((part, j) => {
            const match = part.match(/\[(.+?)\]\((.+?)\)/);
            if (match) {
              return (
                <a key={j} href={match[2]} style={{ color: "#C41A1A", textDecoration: "underline", fontWeight: 500 }}
                  target={match[2].startsWith("http") ? "_blank" : undefined}
                  rel={match[2].startsWith("http") ? "noopener noreferrer" : undefined}>
                  {match[1]}
                </a>
              );
            }
            return part;
          })}
        </p>
      );
    } else {
      elements.push(
        <p key={key++} style={{ ...SI, fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.9, color: "#555555", margin: "1rem 0" }}>
          {trimmed}
        </p>
      );
    }
  }
  return elements;
}

export default function PostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main style={{ background: "#ffffff", paddingTop: "120px" }}>

      <section style={{ background: "#ffffff", padding: "5rem 0 4rem", borderBottom: "1px solid #eeeeee" }}>
        <div className="container-estob" style={{ maxWidth: "800px" }}>
          <Link href="/Insights" style={{ ...S, fontWeight: 500, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999999", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "2.5rem" }}>
            ← Back to Insights
          </Link>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "2rem" }}>
            <span style={{ ...S, fontWeight: 600, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C41A1A", border: "1px solid rgba(196,26,26,0.3)", padding: "3px 10px" }}>{post.category}</span>
            <span style={{ ...SI, fontWeight: 300, fontSize: "11px", color: "#aaaaaa" }}>{post.readTime}</span>
            <span style={{ ...SI, fontWeight: 300, fontSize: "11px", color: "#aaaaaa" }}>{post.date}</span>
          </div>
          <h1 style={{ ...S, fontWeight: 900, fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#111111" }}>
            {post.title}
          </h1>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "5rem 0 8rem" }}>
        <div className="container-estob" style={{ maxWidth: "720px" }}>

          {post.thumbnail && (
            <div style={{ marginBottom: "3rem", overflow: "hidden" }}>
              <img src={post.thumbnail} alt={post.title} style={{ width: "100%", height: "480px", objectFit: "cover", display: "block" }} />
            </div>
          )}

          <p style={{ ...SI, fontWeight: 400, fontSize: "1.15rem", lineHeight: 1.9, color: "#444444", marginBottom: "2rem", borderLeft: "3px solid #C41A1A", paddingLeft: "1.5rem" }}>
            {post.excerpt}
          </p>

          {renderContent(post.content)}

          <div style={{ marginTop: "5rem", padding: "3rem", background: "#111111" }}>
            <div style={{ ...S, fontWeight: 600, fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C41A1A", marginBottom: "1rem" }}>Ready to Print?</div>
            <h3 style={{ ...S, fontWeight: 900, fontSize: "1.8rem", color: "white", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Let ESTOB Prints bring<br />your brand to life.
            </h3>
            <Link href="/contact" style={{
              ...S, fontWeight: 700, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "white", textDecoration: "none", background: "#C41A1A",
              padding: "14px 36px", display: "inline-block", marginTop: "1rem",
            }}>
              Get a Quote →
            </Link>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <Link href="/Insights" style={{ ...S, fontWeight: 500, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999999", textDecoration: "none", borderBottom: "1px solid #dddddd", paddingBottom: "3px" }}>
              ← Back to Insights
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

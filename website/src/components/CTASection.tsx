"use client";

import { useState, useEffect } from "react";
import Reveal from "./Reveal";

export default function CTASection() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  return (
    <section style={{
      background: "var(--color-black)",
      padding: isMobile ? "80px 20px" : "120px 48px",
      borderTop: "1px solid rgba(196,162,86,0.1)",
      borderBottom: "1px solid rgba(196,162,86,0.1)",
      textAlign: "center",
      position: "relative", overflow: "hidden",
    }}>
      {/* Gold vertical line decoration */}
      <div style={{ position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)", width: 1, height: 60, background: "linear-gradient(to bottom, var(--color-gold), transparent)" }} />

      <Reveal>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <span className="eyebrow">Be The First</span>
          <span className="gold-rule" style={{ margin: "20px auto 0" }} />
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.2, color: "var(--color-white)", marginBottom: 20, marginTop: 0 }}>
            Interested in Our<br /><em style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>Next Project?</em>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-gray-light)", lineHeight: 1.9, marginBottom: 40, fontWeight: 300 }}>
            Our first project sold out entirely. Get in touch to be the first to know about our upcoming luxury development.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" as const }}>
            <a href="tel:+919653593919" style={{
              background: "var(--color-gold)", color: "var(--color-black)",
              fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.22em",
              textTransform: "uppercase", fontWeight: 500, padding: "15px 36px",
              transition: "background 0.3s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--color-gold-light)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--color-gold)")}
            >Call Now</a>
            <a href="#contact" style={{
              border: "1px solid rgba(196,162,86,0.4)", color: "var(--color-cream)",
              fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.22em",
              textTransform: "uppercase", padding: "15px 36px",
              transition: "border-color 0.3s, color 0.3s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.color = "var(--color-gold)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(196,162,86,0.4)"; e.currentTarget.style.color = "var(--color-cream)"; }}
            >View Contact Details</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

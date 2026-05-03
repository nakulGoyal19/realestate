"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    setTimeout(() => setLoaded(true), 100);
    return () => window.removeEventListener("resize", h);
  }, []);

  const stats = [
    { val: "2680", unit: "sqft", label: "Built-up Area" },
    { val: "4", unit: "BHK", label: "Ultra Luxury" },
    { val: "12+", unit: "Brands", label: "Premium" },
    { val: "100%", unit: "", label: "Sold Out" },
  ];

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
      {/* BG Image */}
      <div style={{
        position: "absolute", inset: 0,
        background: "url('/images/building-exterior.png') center center / cover no-repeat",
        transform: "scale(1.05)",
        animation: "slowZoom 20s ease-out infinite alternate",
      }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,8,7,0.35) 0%, rgba(8,8,7,0.1) 40%, rgba(8,8,7,0.7) 75%, rgba(8,8,7,0.97) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(8,8,7,0.5) 0%, transparent 60%)" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, width: "100%", padding: isMobile ? "0 20px 160px" : "0 48px 100px" }}>
        <div style={{ maxWidth: 700 }}>
          {/* Eyebrow */}
          <div style={{
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)",
            transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
            marginBottom: 16,
          }}>
            <span className="eyebrow">MDC Sector-6, Panchkula</span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 300,
            fontSize: isMobile ? "52px" : "clamp(52px, 7vw, 96px)", lineHeight: 1.05,
            letterSpacing: "-0.01em", color: "var(--color-white)",
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(30px)",
            transition: "opacity 1s ease 0.5s, transform 1s ease 0.5s",
            marginBottom: 8,
          }}>
            Life Meets<br /><em style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>Luxury.</em>
          </h1>

          {/* Description */}
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.8,
            color: "var(--color-gray-light)", maxWidth: 480, fontWeight: 300,
            letterSpacing: "0.03em",
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)",
            transition: "opacity 1s ease 0.75s, transform 1s ease 0.75s",
            marginBottom: 32,
          }}>
            Ultra-luxurious 4 BHK floors crafted to perfection — Italian marble, German fittings, and world-class brands where every detail speaks elegance.
          </p>

          {/* CTAs */}
          <div style={{
            display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" as const,
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)",
            transition: "opacity 1s ease 0.95s, transform 1s ease 0.95s",
          }}>
            <a href="/project/panchkula-4bhk" style={{
              background: "var(--color-gold)", color: "var(--color-black)",
              border: "none", padding: "14px 32px",
              fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.22em",
              textTransform: "uppercase", fontWeight: 500, cursor: "pointer",
              transition: "background 0.3s", display: "inline-block",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--color-gold-light)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--color-gold)")}
            >View Project</a>
            <a href="#philosophy" style={{
              fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "var(--color-cream)",
              borderBottom: "1px solid rgba(245,240,230,0.3)", paddingBottom: 2,
              transition: "color 0.3s, border-color 0.3s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--color-gold)"; e.currentTarget.style.borderColor = "var(--color-gold)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--color-cream)"; e.currentTarget.style.borderColor = "rgba(245,240,230,0.3)"; }}
            >Our Philosophy</a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        position: "absolute", bottom: 0,
        right: 0,
        left: isMobile ? 0 : "auto",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, auto)",
        borderTop: "1px solid rgba(196,162,86,0.2)",
        borderLeft: isMobile ? "none" : "1px solid rgba(196,162,86,0.2)",
        opacity: loaded ? 1 : 0,
        transition: "opacity 1s ease 1.2s",
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            padding: isMobile ? "16px 20px" : "20px 28px",
            borderRight: isMobile ? (i % 2 === 0 ? "1px solid rgba(196,162,86,0.2)" : "none") : (i < 3 ? "1px solid rgba(196,162,86,0.2)" : "none"),
            borderBottom: isMobile && i < 2 ? "1px solid rgba(196,162,86,0.2)" : "none",
            textAlign: "center" as const,
            background: "rgba(8,8,7,0.8)", backdropFilter: "blur(8px)",
          }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: isMobile ? 22 : 26, fontWeight: 300, color: "var(--color-gold-light)", lineHeight: 1 }}>
              {s.val}<span style={{ fontSize: 12, marginLeft: 2 }}>{s.unit}</span>
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gray-light)", marginTop: 5 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll hint — desktop */}
      {!isMobile && (
        <div style={{
          position: "absolute", bottom: 120, right: 48,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          opacity: loaded ? 0.5 : 0, transition: "opacity 1s ease 1.5s",
        }}>
          <div style={{ width: 1, height: 40, background: "var(--color-gold)", animation: "scrollPulse 2s ease-in-out infinite" }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: 8, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-gold)", writingMode: "vertical-rl" }}>Scroll</span>
        </div>
      )}
    </section>
  );
}

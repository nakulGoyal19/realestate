"use client";

import { useState, useEffect } from "react";
import Reveal from "./Reveal";

const BRAND_LIST = [
  { name: "ACC", abbr: "ACC", color: "#e8000d" },
  { name: "GROHE", abbr: "GROHE", color: "#0057a8" },
  { name: "KITEC", abbr: "KITEC", color: "#c4a256" },
  { name: "KONE", abbr: "KONE", color: "#4a90d9" },
  { name: "Kamdhenu", abbr: "KSL", color: "#c4a256" },
  { name: "Supreme", abbr: "SIL", color: "#e8000d" },
  { name: "UltraTech", abbr: "UTC", color: "#ef7f1a" },
  { name: "Schneider", abbr: "SE", color: "#3dcd58" },
  { name: "Havells", abbr: "HVL", color: "#e63329" },
  { name: "LAPP", abbr: "LAPP", color: "#e4002b" },
  { name: "Neropure", abbr: "NPR", color: "#c4a256" },
  { name: "Tenax", abbr: "TNX", color: "#c4a256" },
];

function BrandCard({ brand }: { brand: (typeof BRAND_LIST)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? "rgba(196,162,86,0.45)" : "rgba(196,162,86,0.12)"}`,
        background: hovered ? "rgba(196,162,86,0.05)" : "rgba(8,8,7,0.4)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: 8, minHeight: 90, padding: "20px 12px",
        transition: "all 0.35s", cursor: "default",
      }}
    >
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: brand.abbr.length <= 3 ? 24 : brand.abbr.length <= 4 ? 19 : 14,
        fontWeight: 400,
        letterSpacing: brand.abbr.length > 4 ? "0.1em" : "0.04em",
        color: hovered ? brand.color : "rgba(255,255,255,0.6)",
        transition: "color 0.35s",
        lineHeight: 1,
      }}>{brand.abbr}</div>
      <div style={{
        fontFamily: "var(--font-body)", fontSize: 8,
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: hovered ? "var(--color-gold)" : "var(--color-gray-mid)",
        textAlign: "center", lineHeight: 1.4,
        transition: "color 0.35s",
      }}>{brand.name}</div>
    </div>
  );
}

export default function BrandsSection() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  return (
    <section style={{ background: "var(--color-dark)", padding: isMobile ? "72px 20px" : "100px 48px", borderTop: "1px solid rgba(196,162,86,0.1)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="eyebrow">Quality Assured</span>
            <span className="gold-rule" style={{ margin: "20px auto 0" }} />
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 48px)", color: "var(--color-white)", marginTop: 0 }}>
              Top Brands We <em style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>Trust</em>
            </h2>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "repeat(6, 1fr)", gap: 2 }}>
          {BRAND_LIST.map((b, i) => (
            <BrandCard key={i} brand={b} />
          ))}
        </div>
      </div>
    </section>
  );
}

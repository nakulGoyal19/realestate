"use client";

import { useState, useEffect } from "react";
import Reveal from "./Reveal";

export default function PhilosophySection() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  const points = [
    { title: "Uncompromising Quality", desc: "Only the finest materials — from Italian marble to German-imported fittings." },
    { title: "Full Transparency", desc: "Every detail, every material, every cost — openly communicated." },
    { title: "Standing Apart", desc: "A standard no other project in the market can claim to match." },
  ];

  return (
    <section id="philosophy" style={{ background: "var(--color-off-black)", padding: isMobile ? "80px 20px" : "120px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 48 : 80, alignItems: "center" }}>
        {/* Text */}
        <div>
          <Reveal>
            <span className="eyebrow">Who We Are</span>
            <span className="gold-rule" style={{ marginTop: 20 }} />
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(36px, 4vw, 58px)", lineHeight: 1.15, color: "var(--color-white)", marginBottom: 32 }}>
              Our<br /><em style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>Philosophy</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.9, color: "var(--color-gray-light)", fontWeight: 300, marginBottom: 24 }}>
              Our philosophy revolves around placing our customers at the forefront of everything we do. We believe in creating exceptional living spaces that meet and exceed our valued client&apos;s expectations.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.9, color: "var(--color-gray-light)", fontWeight: 300 }}>
              Taking great care to ensure that every aspect of our properties is crafted to perfection — this is the cornerstone of our approach.
            </p>
            <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(196,162,86,0.2)" }}>
              {points.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 20, marginBottom: i < 2 ? 28 : 0 }}>
                  <div style={{ width: 1, background: "var(--color-gold)", flexShrink: 0, marginTop: 3 }} />
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--color-cream)", fontWeight: 400, marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--color-gray-mid)", lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Image */}
        <Reveal delay={1}>
          <div style={{ position: "relative" }}>
            <img src="/images/lobby-1.png" alt="Luxury lobby interior"
              style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block" }} />
            <div style={{
              position: "absolute", bottom: -1, left: -1, right: -1,
              height: 3, background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
            }} />
            {!isMobile && (
              <div style={{
                position: "absolute", top: -24, right: -24,
                width: 120, height: 120,
                border: "1px solid rgba(196,162,86,0.3)",
                zIndex: -1,
              }} />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

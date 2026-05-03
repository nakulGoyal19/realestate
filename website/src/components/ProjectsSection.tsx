"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

export default function ProjectsSection() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  return (
    <section id="projects" style={{ background: "var(--color-black)", padding: isMobile ? "80px 20px" : "120px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <Reveal>
          <div style={{ marginBottom: 48, display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-end", gap: 20 }}>
            <div>
              <span className="eyebrow">Portfolio</span>
              <span className="gold-rule" style={{ marginTop: 20 }} />
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(36px, 4vw, 58px)", lineHeight: 1.15, color: "var(--color-white)" }}>
                Our<br /><em style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>Projects</em>
              </h2>
            </div>
            {!isMobile && (
              <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--color-gray-mid)", maxWidth: 280, lineHeight: 1.8, textAlign: "right" }}>
                Each development is conceived as a singular statement of luxury — never repeated, never compromised.
              </p>
            )}
          </div>
        </Reveal>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 2 }}>
          {/* Project 01 */}
          <Reveal>
            <Link href="/project/panchkula-4bhk" className="project-card" style={{ position: "relative", display: "block", overflow: "hidden", cursor: "pointer" }}>
              <div style={{ aspectRatio: "4/5", overflow: "hidden" }}>
                <img className="proj-img" src="/images/building-exterior.png" alt="Panchkula 4 BHK"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)" }} />
              </div>
              <div className="proj-overlay" style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, transparent 30%, rgba(8,8,7,0.92) 100%)",
                opacity: 0.6, transition: "opacity 0.4s",
              }} />
              {/* Sold Out ribbon */}
              <div style={{
                position: "absolute", top: 24, left: 24,
                background: "var(--color-gold)", color: "var(--color-black)",
                fontFamily: "var(--font-body)", fontSize: 9, letterSpacing: "0.2em",
                textTransform: "uppercase", padding: "6px 14px", fontWeight: 500,
              }}>Sold Out</div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 32px 28px" }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: 8 }}>Project 01</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 300, color: "var(--color-white)", lineHeight: 1.2, marginBottom: 8 }}>
                  4 BHK Ultra-Luxurious Floors
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--color-gray-light)", letterSpacing: "0.05em" }}>MDC Sector-6, Panchkula · 2680 sqft</div>
                <div className="proj-cta" style={{ marginTop: 20, opacity: 0, transition: "opacity 0.3s", display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)" }}>Explore Project</span>
                  <span style={{ color: "var(--color-gold)", fontSize: 14 }}>→</span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Project 02 — Coming Soon */}
          <Reveal delay={2}>
            <div style={{
              position: "relative", background: "var(--color-dark)",
              display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
              aspectRatio: isMobile ? "auto" : "4/5", minHeight: isMobile ? 360 : "auto",
              border: "1px solid rgba(196,162,86,0.12)",
            }}>
              <div style={{ textAlign: "center", padding: 48 }}>
                <div style={{ width: 64, height: 64, border: "1px solid rgba(196,162,86,0.3)", margin: "0 auto 32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "var(--color-gold)", fontWeight: 300 }}>02</span>
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: 16 }}>Coming Soon</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 300, color: "var(--color-cream)", lineHeight: 1.3, marginBottom: 20 }}>
                  Something<br /><em style={{ fontStyle: "italic" }}>Extraordinary</em><br />Awaits
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--color-gray-mid)", lineHeight: 1.8, marginBottom: 36 }}>
                  Our next luxury development is in the works. Be among the first to know.
                </p>
                <a href="#contact" style={{
                  display: "inline-block",
                  border: "1px solid var(--color-gold)", color: "var(--color-gold)",
                  fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.2em",
                  textTransform: "uppercase", padding: "12px 28px",
                  transition: "background 0.3s, color 0.3s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--color-gold)"; e.currentTarget.style.color = "var(--color-black)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--color-gold)"; }}
                >Get Notified</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

const specs = [
  { category: "Structure", items: [
    { brand: "Kamdhenu Steel 550", detail: "Structural steel throughout — foundation to roof" },
    { brand: "ACC Cement", detail: "All civil work" },
    { brand: "Special Red Bricks", detail: "Exclusive vendor, prevents efflorescence" },
    { brand: "Supreme Industries", detail: "Drainage pipes rated 6 kgf pressure" },
  ]},
  { category: "Bathroom & Plumbing", items: [
    { brand: "KITEC Fittings", detail: "Aluminium-composite, 50-year lifespan" },
    { brand: "GROHE (German)", detail: "All faucets, taps, sinks & concealed tanks" },
  ]},
  { category: "Electrical", items: [
    { brand: "LAPP Cables (German)", detail: "FRLSH wiring, 99.9% fire-retardant" },
    { brand: "Havells", detail: "Module boxes throughout" },
    { brand: "Schneider Electric", detail: "All MCBs and mainboards" },
  ]},
  { category: "Flooring", items: [
    { brand: "Italian Marble", detail: "All living areas, sourced directly from Rajasthan" },
    { brand: "Vitrified Tiles", detail: "6×8 crème beige in basement" },
    { brand: "Granite", detail: "Staircase & stilt floors" },
  ]},
  { category: "Climate & Lift", items: [
    { brand: "VRV AC System", detail: "Lobby, dining — copper piping" },
    { brand: "KONE Lift", detail: "6-person, global tier-1 brand" },
  ]},
  { category: "Water & Waterproofing", items: [
    { brand: "NEROPURE Tanks", detail: "1500L steel 316L (Ti) — 10× premium" },
    { brand: "UltraTech", detail: "Rubber-layer waterproofing, every floor" },
  ]},
];

const floorPlan: [string, string][] = [
  ["Lobby", "19′4½″ × 15′6″"], ["Drawing Room", "18′4½″ × 13′1½″"],
  ["Bedroom 1", "12′7½″ × 13′6″"], ["Bedroom 2", "14′6″ × 12′0″"],
  ["Bedroom 3", "13′6″ × 13′0″"], ["Bedroom 4", "13′6″ × 13′0″"],
  ["Kitchen", "10′6″ × 13′0″"], ["Dining", "14′0″ × 10′10½″"],
];

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

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function SpecCard({ s, isMobile }: { s: typeof specs[0]; isMobile: boolean }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ background: "var(--color-black)", padding: isMobile ? "28px 20px" : "36px", transition: "background 0.3s" }}
      onMouseEnter={e => (e.currentTarget.style.background = "rgba(196,162,86,0.03)")}
      onMouseLeave={e => (e.currentTarget.style.background = "var(--color-black)")}
    >
      <div style={{ fontFamily: "var(--font-body)", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: 20 }}>{s.category}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {s.items.map((item, j) => (
          <div key={j} style={{ paddingLeft: 12, borderLeft: "1px solid rgba(196,162,86,0.3)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--color-cream)", marginBottom: 4 }}>{item.brand}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--color-gray-mid)", lineHeight: 1.7 }}>{item.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const specRef = useReveal();
  const galleryTitleRef = useReveal();
  const locationRef = useReveal();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    setTimeout(() => setHeroLoaded(true), 100);
    return () => window.removeEventListener("resize", h);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", height: isMobile ? "60vh" : "75vh", minHeight: 480, overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <div style={{ position: "absolute", inset: 0, background: "url('/images/lobby-1.png') center center / cover no-repeat" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,8,7,0.5) 0%, rgba(8,8,7,0.2) 40%, rgba(8,8,7,0.85) 85%, rgba(8,8,7,1) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, width: "100%", padding: isMobile ? "0 20px 40px" : "0 48px 72px" }}>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-end", gap: 24 }}>
            <div>
              <Link href="/" style={{
                fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "var(--color-gold)", marginBottom: 16, display: "block",
              }}>← Back to Home</Link>
              <div style={{
                display: "inline-block", background: "var(--color-gold)", color: "var(--color-black)",
                fontFamily: "var(--font-body)", fontSize: 9, letterSpacing: "0.2em",
                textTransform: "uppercase", padding: "5px 14px", fontWeight: 500, marginBottom: 16,
              }}>Sold Out</div>
              <h1 style={{
                fontFamily: "var(--font-display)", fontWeight: 300,
                fontSize: isMobile ? "36px" : "clamp(40px, 5.5vw, 72px)",
                lineHeight: 1.1, color: "var(--color-white)", marginBottom: 10,
                opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? "none" : "translateY(20px)",
                transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
              }}>
                4 BHK Ultra-Luxurious<br /><em style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>Floors</em>
              </h1>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--color-gray-light)", letterSpacing: "0.06em" }}>
                MDC Sector-6, Panchkula · Near I.T. Park Chandigarh
              </p>
            </div>
            {/* Stats chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {([["4", "Bedrooms"], ["4", "Bathrooms"], ["2680", "sqft"], ["West", "Facing"]] as const).map(([v, l], i) => (
                <div key={i} style={{ background: "rgba(8,8,7,0.7)", backdropFilter: "blur(8px)", border: "1px solid rgba(196,162,86,0.2)", padding: isMobile ? "12px 16px" : "16px 22px", textAlign: "center", minWidth: isMobile ? 70 : 80 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: isMobile ? 18 : 24, fontWeight: 300, color: "var(--color-gold-light)" }}>{v}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gray-light)", marginTop: 3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan */}
      <section style={{ background: "var(--color-off-black)", padding: isMobile ? "72px 20px" : "100px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 80, alignItems: "start" }}>
          <div>
            <span className="eyebrow">Layout</span>
            <span className="gold-rule" style={{ marginTop: 20 }} />
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 42, color: "var(--color-white)", marginBottom: 36 }}>
              Floor <em style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>Plan</em>
            </h2>
            <div style={{ borderTop: "1px solid rgba(196,162,86,0.15)" }}>
              {floorPlan.map(([room, dim], i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid rgba(196,162,86,0.08)" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--color-cream)", letterSpacing: "0.05em" }}>{room}</span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "var(--color-gold-muted)", fontStyle: "italic" }}>{dim}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src="/images/page-02.png" alt="Floor Plan" style={{ width: "100%", border: "1px solid rgba(196,162,86,0.15)", display: "block" }} />
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section style={{ background: "var(--color-black)", padding: isMobile ? "72px 20px" : "100px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={specRef} className="reveal" style={{ marginBottom: 48 }}>
            <span className="eyebrow">Premium Quality</span>
            <span className="gold-rule" style={{ marginTop: 20 }} />
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 42, color: "var(--color-white)" }}>
              What Makes Us <em style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>Special</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 2, background: "rgba(196,162,86,0.06)" }}>
            {specs.map((s, i) => <SpecCard key={i} s={s} isMobile={isMobile} />)}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ background: "var(--color-off-black)", padding: isMobile ? "72px 20px" : "100px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={galleryTitleRef} className="reveal" style={{ marginBottom: 36, display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-end", gap: 20 }}>
            <div>
              <span className="eyebrow">Visual Tour</span>
              <span className="gold-rule" style={{ marginTop: 20 }} />
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 42, color: "var(--color-white)" }}>
                <em style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>Gallery</em>
              </h2>
            </div>
          </div>
          <ImageGallery />
        </div>
      </section>

      {/* Location */}
      <section style={{ background: "var(--color-dark)", padding: isMobile ? "72px 20px" : "100px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 80, alignItems: "start" }}>
          <div ref={locationRef} className="reveal">
            <span className="eyebrow">Prime Location</span>
            <span className="gold-rule" style={{ marginTop: 20 }} />
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 42, color: "var(--color-white)", marginBottom: 24 }}>
              <em style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>Location</em>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-gray-light)", lineHeight: 1.9, marginBottom: 28 }}>
              Plot No. 576P, MDC Sector-6, Panchkula<br />
              Near I.T. Park Chandigarh, 134114
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {[
                "Close proximity to I.T. Park Chandigarh",
                "Well-connected to Chandigarh city centre",
                "Near DLF City Centre Mall",
                "Near The Lalit Chandigarh",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 4, height: 4, background: "var(--color-gold)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--color-gray-light)" }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid rgba(196,162,86,0.2)", paddingTop: 28 }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: 16 }}>Reach Us At</div>
              {[
                { name: "Gaurav Goyal", phone: "+91 96535-93919", tel: "+919653593919" },
                { name: "Jagdeep Bansal", phone: "+91 98032-49177", tel: "+919803249177" },
              ].map((c, i) => (
                <a key={i} href={`tel:${c.tel}`} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "13px 0", borderBottom: "1px solid rgba(196,162,86,0.08)",
                }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--color-cream)" }}>{c.name}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--color-gold)" }}>{c.phone}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <img src="/images/location-map.png" alt="Location Map" style={{ width: "100%", display: "block", border: "1px solid rgba(196,162,86,0.15)" }} />
          </div>
        </div>
      </section>

      {/* Brands grid */}
      <section style={{ background: "var(--color-off-black)", padding: isMobile ? "60px 20px" : "80px 48px", borderTop: "1px solid rgba(196,162,86,0.1)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <span className="eyebrow">Trusted Partners</span>
          <span className="gold-rule" style={{ margin: "20px auto 32px" }} />
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "repeat(6, 1fr)", gap: 2 }}>
            {BRAND_LIST.map((b, i) => (
              <div key={i} className="brand-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, minHeight: 90, padding: "20px 12px" }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: b.abbr.length <= 3 ? 24 : b.abbr.length <= 4 ? 19 : 14,
                  fontWeight: 400, color: "rgba(255,255,255,0.6)", lineHeight: 1,
                }}>{b.abbr}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gray-mid)", textAlign: "center", lineHeight: 1.4 }}>{b.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

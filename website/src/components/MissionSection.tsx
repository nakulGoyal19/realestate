"use client";

import { useState, useEffect, useRef } from "react";

const pillars = [
  { num: "01", title: "Highest Quality", desc: "We aim to offer our clients the highest quality in luxury living spaces — no shortcuts, no compromises." },
  { num: "02", title: "Full Transparency", desc: "Complete openness with clients and stakeholders throughout every phase of the project." },
  { num: "03", title: "Detailed Information", desc: "Every aspect, every material, every specification — disclosed and documented in full." },
  { num: "04", title: "Standing Apart", desc: "Our goal is to stand out from any other project available in the market, definitively." },
];

function MissionCard({ p, i, isMobile }: { p: typeof pillars[0]; i: number; isMobile: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(i % 2) + 1}`}
      style={{
        background: "var(--color-off-black)", padding: isMobile ? "32px 24px" : "48px",
        transition: "background 0.3s",
      }}
      onMouseEnter={e => (e.currentTarget.style.background = "rgba(196,162,86,0.04)")}
      onMouseLeave={e => (e.currentTarget.style.background = "var(--color-off-black)")}
    >
      <div style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 300, color: "rgba(196,162,86,0.12)", lineHeight: 1, marginBottom: 20 }}>{p.num}</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: isMobile ? 22 : 26, fontWeight: 400, color: "var(--color-cream)", marginBottom: 12 }}>{p.title}</div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-gray-mid)", lineHeight: 1.8 }}>{p.desc}</div>
    </div>
  );
}

export default function MissionSection() {
  const [isMobile, setIsMobile] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission" style={{ background: "var(--color-off-black)", padding: isMobile ? "80px 20px" : "120px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={titleRef} className="reveal" style={{ marginBottom: 56 }}>
          <span className="eyebrow">What Drives Us</span>
          <span className="gold-rule" style={{ marginTop: 20 }} />
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(36px, 4vw, 58px)", lineHeight: 1.15, color: "var(--color-white)" }}>
            Our<br /><em style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>Mission</em>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "2px", background: "rgba(196,162,86,0.08)" }}>
          {pillars.map((p, i) => <MissionCard key={i} p={p} i={i} isMobile={isMobile} />)}
        </div>
      </div>
    </section>
  );
}

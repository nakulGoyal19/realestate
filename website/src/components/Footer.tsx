"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  return (
    <footer id="contact" style={{ background: "var(--color-off-black)", padding: isMobile ? "60px 20px 32px" : "80px 48px 40px", borderTop: "1px solid rgba(196,162,86,0.15)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr", gap: isMobile ? 40 : 64, marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid rgba(196,162,86,0.1)" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div style={{ width: 40, height: 40, border: "1px solid var(--color-gold)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--color-gold)", fontWeight: 300 }}>V</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-cream)" }}>VARINDIT UPKRAM PVT LTD</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontStyle: "italic", color: "var(--color-gold-muted)" }}>Life Meets Luxury</div>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--color-gray-mid)", lineHeight: 1.9, maxWidth: 320, marginBottom: 20 }}>
              Creating exceptional living spaces that exceed expectations. Every detail speaks elegance.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(90,88,80,0.7)", letterSpacing: "0.05em" }}>CIN: U74999PB2022PTC056715</p>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: 24 }}>Quick Links</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "Our Projects", href: "/#projects" },
                { label: "Philosophy", href: "/#philosophy" },
                { label: "Our Mission", href: "/#mission" },
                { label: "Panchkula 4 BHK", href: "/project/panchkula-4bhk" },
              ].map((l) => (
                <Link key={l.label} href={l.href} style={{
                  fontFamily: "var(--font-body)", fontSize: 12, color: "var(--color-gray-light)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--color-gray-light)")}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: 24 }}>Reach Us</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { name: "Gaurav Goyal", phone: "+91 96535-93919", tel: "+919653593919" },
                { name: "Jagdeep Bansal", phone: "+91 98032-49177", tel: "+919803249177" },
              ].map((c) => (
                <div key={c.name}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "var(--color-cream)", marginBottom: 4 }}>{c.name}</div>
                  <a href={`tel:${c.tel}`} style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--color-gray-light)", transition: "color 0.3s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-gold)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-gray-light)")}
                  >{c.phone}</a>
                </div>
              ))}
              <div style={{ paddingTop: 12, borderTop: "1px solid rgba(196,162,86,0.1)" }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--color-gray-mid)", lineHeight: 1.8 }}>
                  Plot No. 576P, MDC Sector-6<br />Panchkula, Near I.T. Park Chandigarh, 134114
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(90,88,80,0.6)", letterSpacing: "0.05em" }}>
            © 2026 Varindit Upkram Pvt Ltd. All rights reserved.
          </p>
          <div style={{ width: 40, height: 1, background: "rgba(196,162,86,0.3)" }} />
        </div>
      </div>
    </footer>
  );
}

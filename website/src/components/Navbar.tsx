"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const onScroll = () => setScrolled(window.scrollY > 60);
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: "Projects", href: "/#projects" },
    { label: "Philosophy", href: "/#philosophy" },
    { label: "Mission", href: "/#mission" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: isMobile ? "16px 20px" : (scrolled || menuOpen ? "16px 48px" : "28px 48px"),
        background: (scrolled || menuOpen) ? "rgba(8,8,7,0.97)" : "transparent",
        backdropFilter: (scrolled || menuOpen) ? "blur(12px)" : "none",
        borderBottom: (scrolled || menuOpen) ? "1px solid rgba(196,162,86,0.15)" : "1px solid transparent",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.5s ease",
      }}>
        {/* Logo */}
        <Link href="/" style={{
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{
            width: 34, height: 34, border: "1px solid var(--color-gold)",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 17, color: "var(--color-gold)", fontWeight: 300 }}>V</span>
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-cream)", fontWeight: 400, lineHeight: 1.3 }}>VARINDIT UPKRAM</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 7.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-gold-muted)", fontWeight: 400, lineHeight: 1.3 }}>PVT LTD</div>
          </div>
        </Link>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
            {links.map((link) => (
              <a key={link.label} href={link.href} style={{
                fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "var(--color-gray-light)",
                transition: "color 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-gray-light)")}
              >{link.label}</a>
            ))}
          </div>
        )}

        {/* Hamburger */}
        {isMobile && (
          <button onClick={() => setMenuOpen((v) => !v)} style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", gap: 5, padding: 4,
          }}
          aria-label="Toggle menu"
          >
            <span style={{ display: "block", width: 22, height: 1, background: menuOpen ? "var(--color-gold)" : "var(--color-cream)", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
            <span style={{ display: "block", width: 22, height: 1, background: menuOpen ? "var(--color-gold)" : "var(--color-cream)", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: 22, height: 1, background: menuOpen ? "var(--color-gold)" : "var(--color-cream)", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
          </button>
        )}
      </nav>

      {/* Mobile fullscreen menu */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 99,
        background: "rgba(8,8,7,0.98)",
        display: isMobile ? "flex" : "none", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: 40,
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? "all" : "none",
        transition: "opacity 0.4s ease",
      }}>
        {links.map((link, i) => (
          <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} style={{
            fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 300,
            color: "var(--color-cream)",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s, color 0.3s`,
            letterSpacing: "0.02em",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--color-gold)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--color-cream)")}
          >{link.label}</a>
        ))}
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <div style={{ width: 40, height: 1, background: "rgba(196,162,86,0.3)", margin: "0 auto 20px" }} />
          <a href="tel:+919653593919" style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: "0.15em", color: "var(--color-gold)" }}>+91 96535-93919</a>
        </div>
      </div>
    </>
  );
}

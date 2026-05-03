"use client";

import { useState, useEffect } from "react";

const galleryImages = [
  { src: "/images/lobby-1.png", label: "Entrance Foyer & Lobby — View 1", cat: "Lobby" },
  { src: "/images/lobby-2.png", label: "Entrance Foyer & Lobby — View 2", cat: "Lobby" },
  { src: "/images/lobby-3.png", label: "Entrance Foyer & Lobby — View 3", cat: "Lobby" },
  { src: "/images/bedroom-1.png", label: "Bedroom — View 1", cat: "Bedrooms" },
  { src: "/images/bedroom-2.png", label: "Bedroom — View 2", cat: "Bedrooms" },
  { src: "/images/bedroom-3.png", label: "Bedroom — View 3", cat: "Bedrooms" },
  { src: "/images/bedroom-4.png", label: "Bedroom — View 4", cat: "Bedrooms" },
  { src: "/images/building-exterior.png", label: "Building Exterior", cat: "Exterior" },
  { src: "/images/marble-sourcing.png", label: "Italian Marble Sourcing", cat: "Materials" },
];

const categories = ["All", "Lobby", "Bedrooms", "Exterior", "Materials"];

export default function ImageGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<(typeof galleryImages)[0] | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.cat === activeCategory);

  return (
    <>
      {/* Category filters */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              background: activeCategory === cat ? "var(--color-gold)" : "transparent",
              border: `1px solid ${activeCategory === cat ? "var(--color-gold)" : "rgba(196,162,86,0.25)"}`,
              color: activeCategory === cat ? "var(--color-black)" : "var(--color-gray-light)",
              fontFamily: "var(--font-body)", fontSize: 9, letterSpacing: "0.18em",
              textTransform: "uppercase", padding: "8px 14px", cursor: "pointer",
              transition: "all 0.3s",
            }}
          >{cat}</button>
        ))}
      </div>

      {/* Masonry grid */}
      <div style={{ columns: isMobile ? 2 : 3, gap: 2, marginTop: 24 }}>
        {filtered.map((img, i) => (
          <div
            key={i}
            className="gallery-item"
            style={{ marginBottom: 2, overflow: "hidden", cursor: "pointer", position: "relative", breakInside: "avoid" }}
            onClick={() => setLightboxImg(img)}
          >
            <img src={img.src} alt={img.label} style={{ width: "100%", display: "block", transition: "transform 0.6s ease" }} />
            <div className="gallery-label" style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              background: "linear-gradient(transparent, rgba(8,8,7,0.8))",
              padding: "20px 12px 10px",
              fontFamily: "var(--font-body)", fontSize: 9, color: "var(--color-cream)",
              opacity: 0, transition: "opacity 0.3s",
            }}>{img.label}</div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(8,8,7,0.96)", zIndex: 1000,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: isMobile ? 16 : 40,
          }}
        >
          <div style={{ position: "relative", maxWidth: 1000, width: "100%" }} onClick={e => e.stopPropagation()}>
            <img src={lightboxImg.src} alt={lightboxImg.label} style={{ width: "100%", display: "block", maxHeight: "80vh", objectFit: "contain" }} />
            <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--color-gray-light)", textAlign: "center", marginTop: 12, letterSpacing: "0.1em" }}>{lightboxImg.label}</div>
            <button onClick={() => setLightboxImg(null)} style={{
              position: "absolute", top: -36, right: 0, background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)",
            }}>× Close</button>
          </div>
        </div>
      )}
    </>
  );
}

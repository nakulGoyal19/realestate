"use client";

import { useState } from "react";

const galleryImages = [
  {
    src: "/images/lobby-1.png",
    alt: "Entrance Foyer & Lobby - View 1",
    category: "Lobby",
  },
  {
    src: "/images/lobby-2.png",
    alt: "Entrance Foyer & Lobby - View 2",
    category: "Lobby",
  },
  {
    src: "/images/lobby-3.png",
    alt: "Entrance Foyer & Lobby - View 3",
    category: "Lobby",
  },
  {
    src: "/images/bedroom-1.png",
    alt: "Bedroom - View 1",
    category: "Bedrooms",
  },
  {
    src: "/images/bedroom-2.png",
    alt: "Bedroom - View 2",
    category: "Bedrooms",
  },
  {
    src: "/images/bedroom-3.png",
    alt: "Bedroom - View 3",
    category: "Bedrooms",
  },
  {
    src: "/images/bedroom-4.png",
    alt: "Bedroom - View 4",
    category: "Bedrooms",
  },
  {
    src: "/images/building-exterior.png",
    alt: "Building Exterior",
    category: "Exterior",
  },
  {
    src: "/images/marble-sourcing.png",
    alt: "Italian Marble Sourcing",
    category: "Materials",
  },
];

const categories = ["All", "Lobby", "Bedrooms", "Exterior", "Materials"];

export default function ImageGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigate = (direction: 1 | -1) => {
    if (lightboxIndex === null) return;
    const newIndex =
      (lightboxIndex + direction + filtered.length) % filtered.length;
    setLightboxIndex(newIndex);
  };

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-sage-800 text-white"
                : "bg-white text-sage-600 hover:bg-sage-100 border border-sage-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((img, i) => (
          <button
            key={img.src}
            onClick={() => openLightbox(i)}
            className="gallery-item relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <p className="text-white text-sm font-medium">{img.alt}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(-1);
            }}
            className="absolute left-2 md:left-6 text-white/80 hover:text-white z-10 p-2"
            aria-label="Previous"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white/80 text-center mt-3 text-sm">
              {filtered[lightboxIndex].alt}
            </p>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(1);
            }}
            className="absolute right-2 md:right-6 text-white/80 hover:text-white z-10 p-2"
            aria-label="Next"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Projects", href: "/#projects" },
    { label: "Philosophy", href: "/#philosophy" },
    { label: "Mission", href: "/#mission" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.08)]"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 transition-all duration-500 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className={`w-10 h-10 flex items-center justify-center border transition-all ${
                scrolled
                  ? "border-gold-400 text-gold-500"
                  : "border-gold-300/60 text-gold-300"
              }`}
            >
              <span className="font-[family-name:var(--font-heading)] text-xl font-bold leading-none">
                V
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`text-sm md:text-[15px] font-bold tracking-[0.18em] font-[family-name:var(--font-heading)] transition-colors ${
                  scrolled ? "text-sage-900" : "text-white"
                }`}
              >
                VARINDIT UPKRAM
              </span>
              <span
                className={`text-[8px] md:text-[9px] tracking-[0.4em] mt-1 font-light transition-colors ${
                  scrolled ? "text-sage-500" : "text-white/60"
                }`}
              >
                PVT LTD
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-[12px] tracking-[0.15em] uppercase px-5 py-2.5 transition-colors group/link ${
                  scrolled
                    ? "text-sage-600 hover:text-sage-900"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[1.5px] transition-all duration-300 group-hover/link:w-3/5 ${
                    scrolled ? "bg-gold-500" : "bg-gold-300"
                  }`}
                />
              </a>
            ))}
            <div
              className={`w-px h-5 mx-4 ${
                scrolled ? "bg-sage-200" : "bg-white/20"
              }`}
            />
            <a
              href="/#contact"
              className={`text-[12px] tracking-[0.15em] uppercase px-6 py-2.5 border transition-all duration-300 ${
                scrolled
                  ? "border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white"
                  : "border-gold-300/50 text-gold-200 hover:bg-gold-300/20 hover:border-gold-300"
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] transition-all duration-300 origin-center ${
                scrolled ? "bg-sage-800" : "bg-white"
              } ${isOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] transition-all duration-300 ${
                scrolled ? "bg-sage-800" : "bg-white"
              } ${isOpen ? "opacity-0 scale-0" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] transition-all duration-300 origin-center ${
                scrolled ? "bg-sage-800" : "bg-white"
              } ${isOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-sage-100/50 px-6 pt-5 pb-7 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between text-[13px] tracking-[0.12em] uppercase text-sage-700 hover:text-gold-500 py-4 border-b border-sage-100/60 transition-colors"
            >
              {link.label}
              <svg
                className="w-3.5 h-3.5 text-sage-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 text-[12px] tracking-[0.15em] uppercase bg-sage-900 text-white py-4 mt-5 hover:bg-sage-800 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative h-screen min-h-[650px] max-h-[1000px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/building-exterior.png"
            alt="Varindit Upkram - Ultra Luxurious 4 BHK Floors"
            className="w-full h-full object-cover object-center scale-105"
            style={{ animation: "slowZoom 20s ease-in-out infinite alternate" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
        </div>

        {/* Decorative side text */}
        <div className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4 z-10">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold-300/50" />
          <span className="text-[10px] tracking-[0.3em] text-gold-300/70 uppercase [writing-mode:vertical-lr] rotate-180">
            Life Meets Luxury
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-gold-300/50 to-transparent" />
        </div>

        {/* Hero content - uses same px as stats strip for alignment */}
        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl md:ml-8 lg:ml-12">
            {/* Tagline */}
            <div className="animate-fade-in-up mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-gold-400" />
                <span className="text-gold-300 text-[11px] sm:text-[12px] tracking-[0.4em] uppercase font-light">
                  Varindit Upkram Pvt Ltd
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="animate-fade-in-up-delay-1 mb-8">
              <h1 className="font-[family-name:var(--font-heading)] text-white leading-[1.1]">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Life Meets
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-shimmer mt-2">
                  Luxury
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="animate-fade-in-up-delay-2 mb-12">
              <p className="text-white/70 text-sm sm:text-base leading-[1.8] max-w-lg font-light">
                Ultra-luxurious 4 BHK floors crafted to perfection with
                Italian marble, German fittings, and world-class brands —
                where every detail speaks elegance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-400 text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:shadow-[0_4px_25px_rgba(196,154,60,0.4)]"
              >
                View Projects
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#philosophy"
                className="inline-flex items-center justify-center border border-white/25 hover:border-white/60 text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-light transition-all duration-300 hover:bg-white/5 backdrop-blur-sm"
              >
                Our Philosophy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="bg-black/40 backdrop-blur-md border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
              <div className="py-5 sm:py-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
                  {[
                    { value: "2680", unit: "sqft", label: "Built-up Area" },
                    { value: "4", unit: "BHK", label: "Ultra Luxury" },
                    { value: "12+", unit: "", label: "Premium Brands" },
                    { value: "100%", unit: "", label: "Sold Out" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center sm:text-left">
                      <p className="text-white font-[family-name:var(--font-heading)] text-xl sm:text-2xl leading-tight">
                        {stat.value}
                        {stat.unit && (
                          <span className="text-gold-300 text-xs sm:text-sm ml-1.5 font-[family-name:var(--font-body)] font-light">
                            {stat.unit}
                          </span>
                        )}
                      </p>
                      <p className="text-white/40 text-[10px] sm:text-[11px] tracking-[0.15em] uppercase mt-1.5">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 animate-float">
          <span className="text-[9px] tracking-[0.3em] uppercase text-white/40">
            Scroll
          </span>
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-gold-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════ PHILOSOPHY ═══════════ */}
      <section id="philosophy" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="section-divider" />
                <span className="text-gold-500 text-[11px] tracking-[0.3em] uppercase">
                  Who We Are
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-sage-900 mb-8 leading-[1.2]">
                Our Philosophy
              </h2>
              <p className="text-sage-600 text-base md:text-lg leading-[1.9] mb-6">
                Our philosophy revolves around placing our customers at the
                forefront of everything we do. We believe in creating exceptional
                living spaces that meet and exceed our valued client&apos;s
                expectations.
              </p>
              <p className="text-sage-600 text-base md:text-lg leading-[1.9]">
                Taking great care to ensure that every aspect of our properties is
                crafted to perfection &mdash; this is the cornerstone of our
                approach.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/images/lobby-1.png"
                  alt="Luxury lobby interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold-300/40 -z-10 hidden lg:block" />
              <div className="absolute -top-5 -right-5 w-24 h-24 border border-sage-200/50 -z-10 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROJECTS ═══════════ */}
      <section id="projects" className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="section-divider" />
              <span className="text-gold-500 text-[11px] tracking-[0.3em] uppercase">
                Portfolio
              </span>
              <div className="section-divider" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-sage-900 mb-5">
              Our Projects
            </h2>
            <p className="text-sage-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Explore our exclusive luxury developments, each crafted with
              uncompromising quality and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Project 1 - Sold Out */}
            <Link
              href="/project/panchkula-4bhk"
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute top-5 right-5 z-20 bg-crimson-600 text-white px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase shadow-lg">
                Sold Out
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/building-exterior.png"
                  alt="4 BHK Ultra-Luxurious Floors, MDC Sector-6, Panchkula"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-7 pt-6 pb-7">
                <p className="text-gold-500 text-[10px] tracking-[0.2em] uppercase font-medium mb-2">
                  Project 01
                </p>
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-sage-900 mb-3 group-hover:text-crimson-600 transition-colors">
                  4 BHK Ultra-Luxurious Floors
                </h3>
                <p className="text-sage-400 text-sm mb-5">
                  MDC Sector-6, Panchkula &bull; Near I.T. Park Chandigarh
                </p>
                <div className="flex items-center gap-5 text-[11px] text-sage-400 mb-6">
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m0 8v2a2 2 0 01-2 2h-2" /></svg>
                    2680 sqft
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" /></svg>
                    West Facing
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" /></svg>
                    4 BHK
                  </span>
                </div>
                <div className="pt-5 border-t border-sage-100 flex items-center text-crimson-600 text-[12px] tracking-[0.12em] uppercase font-medium group-hover:gap-3 gap-2 transition-all">
                  Explore Project
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </Link>

            {/* Project 2 - Coming Soon */}
            <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-sage-100">
              <div className="absolute top-5 right-5 z-20 bg-gold-500 text-white px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase shadow-lg">
                Coming Soon
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-sage-100 via-cream to-gold-50 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
                <div className="text-center px-10 relative">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-dashed border-sage-300 flex items-center justify-center">
                    <svg className="w-7 h-7 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl text-sage-800 mb-3">
                    Next Project
                  </h3>
                  <p className="text-sage-400 text-sm leading-[1.8]">
                    Something extraordinary is on its way. Stay tuned for our
                    next luxury development.
                  </p>
                </div>
              </div>
              <div className="px-7 pt-6 pb-7">
                <p className="text-gold-500 text-[10px] tracking-[0.2em] uppercase font-medium mb-2">
                  Project 02
                </p>
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-sage-900 mb-3">
                  New Project Coming Soon
                </h3>
                <p className="text-sage-400 text-sm mb-6">
                  Location to be announced
                </p>
                <div className="pt-5 border-t border-sage-100 flex items-center gap-2.5 text-gold-500 text-[12px] tracking-[0.12em] uppercase font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  Get Notified
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ BRANDS ═══════════ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="section-divider" />
              <span className="text-gold-500 text-[11px] tracking-[0.3em] uppercase">
                Quality Assured
              </span>
              <div className="section-divider" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-sage-900">
              Top Brands We Trust
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5 max-w-4xl mx-auto">
            {[
              "ACC", "GROHE", "KITEC", "KONE", "Kamdhenu Steel", "Supreme",
              "UltraTech", "Schneider Electric", "Havells", "LAPP", "Neropure", "Tenax",
            ].map((brand) => (
              <div
                key={brand}
                className="bg-cream rounded-lg py-5 px-4 flex items-center justify-center hover:bg-cream-dark transition-colors border border-sage-100/50"
              >
                <span className="text-sage-600 font-medium text-[11px] md:text-xs text-center tracking-wide leading-tight">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MISSION ═══════════ */}
      <section id="mission" className="py-24 md:py-32 bg-sage-900 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-10 h-px bg-gold-400" />
            <span className="text-gold-400 text-[11px] tracking-[0.3em] uppercase">
              What Drives Us
            </span>
            <div className="w-10 h-px bg-gold-400" />
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl mb-16">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              {
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                title: "Highest Quality",
                text: "We aim to offer our clients the highest quality in luxury living spaces.",
              },
              {
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                title: "Full Transparency",
                text: "We strive to ensure full transparency with our clients and stakeholders throughout the project.",
              },
              {
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                title: "Detailed Information",
                text: "We provide detailed information on every aspect and material used in our project.",
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Stand Apart",
                text: "Our goal is to stand out from any other project available in the market.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-[1.8]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-sage-800 to-sage-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-12 text-center relative">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl lg:text-4xl text-white mb-5">
            Interested in Our Next Project?
          </h2>
          <p className="text-sage-300 mb-10 max-w-xl mx-auto text-sm md:text-base leading-[1.8] font-light">
            Our first project sold out quickly. Get in touch to be the first to
            know about our upcoming luxury development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919653593919"
              className="inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-400 text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:shadow-[0_4px_25px_rgba(196,154,60,0.4)]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-light transition-all duration-300 hover:bg-white/5"
            >
              View Contact Details
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

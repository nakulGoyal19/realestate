export default function Footer() {
  return (
    <footer className="bg-sage-900 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 flex items-center justify-center border border-gold-400/40">
                <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-gold-400 leading-none">
                  V
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold tracking-[0.18em] font-[family-name:var(--font-heading)]">
                  VARINDIT UPKRAM
                </span>
                <span className="text-[8px] tracking-[0.4em] mt-1 text-white/40">
                  PVT LTD
                </span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-[1.8] mt-5 font-light">
              Life Meets Luxury. Creating exceptional living spaces that exceed
              expectations.
            </p>
            <p className="text-white/20 text-[11px] mt-6 tracking-wide">
              CIN: U74999PB2022PTC056715
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.25em] uppercase mb-6 text-gold-400">
              Quick Links
            </h4>
            <div className="space-y-3.5">
              {[
                { label: "Our Projects", href: "/#projects" },
                { label: "Philosophy", href: "/#philosophy" },
                { label: "Our Mission", href: "/#mission" },
                { label: "MDC Sector-6, Panchkula", href: "/project/panchkula-4bhk" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/40 text-sm hover:text-white/80 transition-colors font-light"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="text-[11px] font-medium tracking-[0.25em] uppercase mb-6 text-gold-400">
              Reach Us
            </h4>
            <div className="space-y-5 text-sm">
              <a href="tel:+919653593919" className="flex items-center gap-3 text-white/50 hover:text-white/80 transition-colors group">
                <svg className="w-4 h-4 text-gold-500/50 group-hover:text-gold-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>
                  <span className="text-white/70 font-medium">Gaurav Goyal</span>
                  <span className="text-white/30 mx-2">&mdash;</span>
                  +91 96535-93919
                </span>
              </a>
              <a href="tel:+919803249177" className="flex items-center gap-3 text-white/50 hover:text-white/80 transition-colors group">
                <svg className="w-4 h-4 text-gold-500/50 group-hover:text-gold-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>
                  <span className="text-white/70 font-medium">Jagdeep Bansal</span>
                  <span className="text-white/30 mx-2">&mdash;</span>
                  +91 98032-49177
                </span>
              </a>

              <div className="pt-3">
                <div className="flex items-start gap-3 text-white/30 text-[12px] leading-[1.8]">
                  <svg className="w-4 h-4 mt-0.5 text-gold-500/30 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    Plot No. 576P, MDC Sector-6,<br />
                    Panchkula, Near I.T. Park Chandigarh, 134114
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-14 pt-8 text-center text-white/20 text-[11px] tracking-wide">
          &copy; {new Date().getFullYear()} Varindit Upkram Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

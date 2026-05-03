import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";

export const metadata: Metadata = {
  title:
    "4 BHK Ultra-Luxurious Floors, Panchkula | Varindit Upkram Pvt Ltd",
  description:
    "Explore our sold-out 4 BHK ultra-luxurious floors at MDC Sector-6, Panchkula. 2680 sqft, Italian Marble, Grohe fittings, Kone lift, VRV AC systems.",
};

const floorPlanData = [
  { room: "Bedroom 1", size: "12'-7½\" x 13'-6\"" },
  { room: "Bedroom 2", size: "14'-6\" x 12'-0\"" },
  { room: "Bedroom 3", size: "13'-6\" x 13'-0\"" },
  { room: "Bedroom 4", size: "13'-6\" x 13'-0\"" },
  { room: "Kitchen", size: "10'-6\" x 13'-0\"" },
  { room: "Dining", size: "14'-0\" x 10'-10½\"" },
  { room: "Lobby", size: "19'-4½\" x 15'-6\"" },
  { room: "Drawing Room", size: "18'-4½\" x 13'-1½\"" },
  { room: "Toilet 1", size: "6'-6\" x 9'-4½\"" },
  { room: "Dress", size: "6'-6\" x 6'-0\"" },
  { room: "Toilet 2", size: "5'-3\" x 5'-0\"" },
  { room: "Toilet 3 / Dress", size: "18'-4½\" x 13'-1½\"" },
  { room: "Toilet 4", size: "9'-0\" x 6'-3\"" },
  { room: "Balcony (Back)", size: "—" },
  { room: "Balcony (Front)", size: "5' wide" },
  { room: "Mandir", size: "—" },
];

const specifications = [
  {
    category: "Structure & Foundation",
    items: [
      {
        title: "Steel",
        detail:
          "Kamdhenu Steel 550 used throughout — from foundations to top floor — ensuring zero compromise on quality or quantity.",
      },
      {
        title: "Cement",
        detail: "ACC cement used for all civil work in the building.",
      },
      {
        title: "Bricks",
        detail:
          "Special red bricks from exclusive vendor to prevent future efflorescence — the white fungal layer that damages paintwork.",
      },
      {
        title: "Drainage",
        detail:
          "Supreme Industries pipes designed to withstand 6kgf pressure, with matching fittings.",
      },
    ],
  },
  {
    category: "Bathroom & Plumbing",
    items: [
      {
        title: "Sanitary Fittings — KITEC",
        detail:
          "All bathrooms equipped with KITEC (aluminium-based composite fitting) extending lifespan to ~50 years. 50-60% more expensive than standard CPVC fittings.",
      },
      {
        title: "Faucets & Taps — GROHE",
        detail:
          "All washrooms fitted with GROHE faucets, taps, sinks, and concealed tanks — a premium German-imported brand offering a truly luxurious experience.",
      },
    ],
  },
  {
    category: "Electrical Systems",
    items: [
      {
        title: "Wiring — LAPP (German)",
        detail:
          "Complete FRLSH electrical wiring with 99.9% fire-retardant cables from LAPP.",
      },
      {
        title: "Module Boxes — HAVELLS",
        detail: "Havells module boxes installed throughout the building.",
      },
      {
        title: "MCBs & Mainboards — SCHNEIDER ELECTRIC",
        detail:
          "All MCBs and mainboards from the renowned Schneider Electric brand.",
      },
      {
        title: "Conduit Pipes — DIPLAST",
        detail: "Heavy-duty electrical conduit pipes from Diplast.",
      },
    ],
  },
  {
    category: "Water & Waterproofing",
    items: [
      {
        title: "Water Tank — NEROPURE",
        detail:
          "Steel water tanks (1500L) with 316L (Ti) specification. Nearly 10x more expensive than standard tanks, ensuring completely hygienic and safe water.",
      },
      {
        title: "Waterproofing — ULTRATECH",
        detail:
          "Every floor thoroughly waterproofed end-to-end with UltraTech's specialized rubber layer chemical.",
      },
    ],
  },
  {
    category: "Climate & Lift",
    items: [
      {
        title: "Air Conditioning — VRV System",
        detail:
          "Latest VRV AC systems in key areas (lobby, dining). Total copper piping with specially sized 5/8-inch pipes installed by dedicated on-site technician.",
      },
      {
        title: "Lift — KONE",
        detail: "6-person lift from the top global brand KONE.",
      },
    ],
  },
  {
    category: "Tiles & Flooring",
    items: [
      {
        title: "Floors — Italian Marble",
        detail:
          "All living floors laid with complete Italian Marble sourced directly from Rajasthan, bypassing local vendors.",
      },
      {
        title: "Basement",
        detail:
          "6x8 vitrified tiles in crème beige, laid with UltraTech Tilefixo adhesive.",
      },
      {
        title: "Stilt",
        detail:
          "Granite marble flooring for tough resistance against heavy vehicles.",
      },
      {
        title: "Staircase & Terrace",
        detail:
          "High quality granite on staircase; tile flooring on terrace.",
      },
    ],
  },
];

export default function ProjectPage() {
  return (
    <>
      <Navbar />

      {/* Project Hero */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/building-exterior.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 pt-32">
          {/* Sold Out Badge */}
          <div className="inline-block bg-crimson-600 text-white px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-4 shadow-lg">
            Sold Out
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            4 BHK Ultra-Luxurious
            <br />
            <span className="text-gold-300">Floors</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              MDC Sector-6, Panchkula
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m0 8v2a2 2 0 01-2 2h-2" />
              </svg>
              2680 sqft
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
              </svg>
              West Facing
            </span>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="bg-white py-10 border-b border-sage-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Bedrooms", value: "4" },
              { label: "Bathrooms", value: "4" },
              { label: "Built-up Area", value: "2680 sqft" },
              { label: "Facing", value: "West" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-sage-800">
                  {item.value}
                </p>
                <p className="text-sage-500 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plan */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-crimson-600 text-sm tracking-[0.3em] uppercase mb-3">
                Layout
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-8">
                Floor Plan
              </h2>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-sage-800 text-white">
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Room
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Dimensions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {floorPlanData.map((item, i) => (
                      <tr
                        key={item.room}
                        className={
                          i % 2 === 0 ? "bg-white" : "bg-sage-50"
                        }
                      >
                        <td className="px-4 py-2.5 text-sm text-sage-800 font-medium">
                          {item.room}
                        </td>
                        <td className="px-4 py-2.5 text-sm text-sage-600">
                          {item.size}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex gap-4 text-sm">
                <div className="bg-white rounded-lg px-4 py-3 shadow-sm flex-1 text-center">
                  <p className="text-sage-500">Facing</p>
                  <p className="font-bold text-sage-800">West</p>
                </div>
                <div className="bg-white rounded-lg px-4 py-3 shadow-sm flex-1 text-center">
                  <p className="text-sage-500">Built-up</p>
                  <p className="font-bold text-sage-800">2680 sqft</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/page-02.png"
                alt="Floor Plan - 4 BHK Ultra-Luxurious Floors"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-crimson-600 text-sm tracking-[0.3em] uppercase mb-3">
              Premium Quality
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4">
              What Makes Us Special
            </h2>
            <p className="text-sage-600 max-w-2xl mx-auto">
              Every detail has been carefully chosen. From the foundation to the
              finishing, only the best materials and brands have been used.
            </p>
          </div>

          <div className="space-y-12">
            {specifications.map((section) => (
              <div key={section.category}>
                <h3 className="text-xl font-bold text-sage-800 mb-6 flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-crimson-500" />
                  {section.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="bg-sage-50 rounded-xl p-6 hover:bg-sage-100 transition-colors border border-sage-100"
                    >
                      <h4 className="font-semibold text-sage-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sage-600 text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-crimson-600 text-sm tracking-[0.3em] uppercase mb-3">
              Visual Tour
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4">
              Gallery
            </h2>
            <p className="text-sage-600 max-w-xl mx-auto">
              Explore the finished interiors of our ultra-luxurious floors.
            </p>
          </div>

          <ImageGallery />
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-crimson-600 text-sm tracking-[0.3em] uppercase mb-3">
              Trusted Partners
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-sage-900">
              Top Brands Used in Our Construction
            </h2>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/page-11.png"
              alt="Top brands used - ACC, Grohe, Kitec, Kone, Kamdhenu Steel, Supreme, UltraTech, Schneider Electric, Havells, LAPP, Neropure, Tenax"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-crimson-600 text-sm tracking-[0.3em] uppercase mb-3">
                Prime Location
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-6">
                Location
              </h2>
              <div className="space-y-4 text-sage-600">
                <p className="text-lg font-medium text-sage-800">
                  Plot No. 576P, MDC Sector-6, Panchkula
                </p>
                <p>Near I.T. Park Chandigarh, 134114</p>
                <div className="pt-4 space-y-3">
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sage-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Close proximity to I.T. Park Chandigarh
                  </p>
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sage-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Well-connected to Chandigarh city centre
                  </p>
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sage-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Near DLF City Centre Mall
                  </p>
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sage-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Near The Lalit Chandigarh
                  </p>
                </div>
              </div>

              {/* Contact info */}
              <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-sage-100">
                <h3 className="font-semibold text-sage-800 mb-4">
                  Reach Us At
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+919653593919"
                    className="flex items-center gap-3 text-sage-700 hover:text-crimson-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>
                      <span className="font-medium">Gaurav Goyal</span> — +91
                      96535-93919
                    </span>
                  </a>
                  <a
                    href="tel:+919803249177"
                    className="flex items-center gap-3 text-sage-700 hover:text-crimson-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>
                      <span className="font-medium">Jagdeep Bansal</span> — +91
                      98032-49177
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/location-map.png"
                alt="Location map - MDC Sector-6, Panchkula near IT Park Chandigarh"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Back to Projects CTA */}
      <section className="py-12 bg-sage-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gold-400 text-sm tracking-wider uppercase">
              Next Project Coming Soon
            </p>
            <p className="text-sage-200 text-sm mt-1">
              Be the first to know about our upcoming luxury development.
            </p>
          </div>
          <a
            href="tel:+919653593919"
            className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 text-sm tracking-wider uppercase font-medium transition-all hover:shadow-lg rounded shrink-0"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

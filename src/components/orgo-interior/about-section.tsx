import React from "react";
import Image from "next/image";

export function AboutSection() {
  const diningImage =
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=1200&auto=format&fit=crop";
  const nookImage =
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop";

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Subtle Architectural Line */}
      <div className="absolute right-10 bottom-0 top-0 w-px bg-[#E5E7E9]/60 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Architectural Dining Space with clean framing */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">
            
            {/* Architectural Frame Container */}
            <div
              data-animate="arch-reveal"
              className="relative w-full aspect-[3.8/5] rounded overflow-hidden border border-[#E5E7E9] shadow-sm group bg-[#F7F8F6]"
            >
              <Image
                src={diningImage}
                alt="ORGO Interiors Architecture Dining Atmosphere"
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Corner Architectural Stamp */}
              <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded border border-[#E5E7E9] text-[10px] font-sans font-medium uppercase tracking-widest text-[#111111]">
                Spatial Balance — 01
              </div>
            </div>

          </div>

          {/* Right Column: About Content, Secondary Image & Atelier Manifesto */}
          <div data-animate="fade-up" className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tag / Kicker */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="h-px w-6 sm:w-7 bg-[#1C6BAE]" />
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.22em] text-[#1C6BAE] font-semibold">
                About ORGO Interiors
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] leading-[1.14] text-[#111111] font-medium tracking-[-0.015em] mb-4 sm:mb-6">
              Architecture of Restraint. <br className="hidden sm:inline" />
              Spaces for Living.
            </h2>

            {/* Paragraph Description */}
            <p className="font-sans text-[#5F6368] leading-[1.68] text-xs sm:text-sm lg:text-base mb-6 sm:mb-8 max-w-xl font-normal">
              At ORGO Interiors, we believe great design is rooted in structural clarity, tactile honesty, and timeless proportions. Guided by an architectural sensibility, our studio curates residential and commercial environments that feel tranquil, enduring, and deeply personal.
            </p>

            {/* Atelier Manifesto Statement */}
            <div className="mb-6 sm:mb-8 pl-4 border-l-2 border-[#1C6BAE]">
              <p className="font-display italic text-sm sm:text-base text-[#111111] leading-relaxed">
                “True luxury is quiet proportion, authentic materials, and enduring craftsmanship.”
              </p>
              <span className="block text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-[#1C6BAE] font-semibold mt-1.5">
                ORGO Design Atelier · Chennai Studio
              </span>
            </div>

            {/* Lower Composition: Secondary Image + Architectural Credentials */}
            <div data-animate="fade-up" className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-6 border-t border-[#E5E7E9]">
              
              {/* Secondary Detail Image */}
              <div className="sm:col-span-5 relative aspect-[4/3.8] max-w-[220px] sm:max-w-none rounded overflow-hidden border border-[#E5E7E9] shadow-none group bg-[#F7F8F6]">
                <Image
                  src={nookImage}
                  alt="ORGO Interiors Tactile Materials & Natural Lighting"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 220px, 240px"
                />
              </div>

              {/* Architectural Credentials Strip */}
              <div className="sm:col-span-7 flex flex-col space-y-4 pl-0 sm:pl-3">
                <div className="border-b border-[#E5E7E9] pb-3.5">
                  <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-[#1C6BAE] font-semibold block mb-1">
                    Bespoke Craftsmanship
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#5F6368] leading-relaxed font-normal">
                    Custom architectural millwork, hand-selected natural stone, and precision joinery.
                  </p>
                </div>

                <div className="pt-0.5">
                  <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-[#111111] font-semibold block mb-1">
                    Turnkey Execution
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#5F6368] leading-relaxed font-normal">
                    Rigorous project scheduling, single-source accountability, and spotless handover.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

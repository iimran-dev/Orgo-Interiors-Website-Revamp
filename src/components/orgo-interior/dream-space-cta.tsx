"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

interface DreamSpaceCTAProps {
  onOpenConsultation: () => void;
}

export function DreamSpaceCTA({ onOpenConsultation }: DreamSpaceCTAProps) {
  const leftFoliage =
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600&auto=format&fit=crop";
  const rightFoliage =
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop";

  return (
    <section className="relative bg-[#0B2A43] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-white/10">
      
      {/* Decorative Left Foliage Mask with Deep Navy Tint */}
      <div
        data-animate="parallax"
        className="absolute top-0 bottom-0 left-0 w-1/4 sm:w-1/5 pointer-events-none opacity-20 sm:opacity-25 overflow-hidden"
      >
        <div className="relative w-full h-[120%] -top-[10%]">
          <Image
            src={leftFoliage}
            alt="Interior Architectural Foliage"
            fill
            className="object-cover object-left"
            sizes="300px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0B2A43]/80 to-[#0B2A43]" />
        </div>
      </div>

      {/* Decorative Right Foliage Mask with Deep Navy Tint */}
      <div
        data-animate="parallax"
        className="absolute top-0 bottom-0 right-0 w-1/4 sm:w-1/5 pointer-events-none opacity-20 sm:opacity-25 overflow-hidden"
      >
        <div className="relative w-full h-[120%] -top-[10%]">
          <Image
            src={rightFoliage}
            alt="Interior Architectural Foliage"
            fill
            className="object-cover object-right"
            sizes="300px"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0B2A43]/80 to-[#0B2A43]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center justify-between">
          
          {/* Left: Headline & Description */}
          <div data-animate="fade-up" className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#1C6BAE]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.24em] text-[#1C6BAE] font-semibold">
                Start Your Project
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-5">
              Let&apos;s Design Your <br />
              Next Architectural Space.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#D9E3EA] font-normal max-w-xl leading-relaxed">
              Whether you are planning a luxury private residence or an executive commercial atelier, schedule a consultation with our principal design team.
            </p>
          </div>

          {/* Right: CTA Button & Phone Call Link */}
          <div data-animate="fade-up" className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-4 sm:gap-5">
            <button
              onClick={onOpenConsultation}
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded bg-[#1C6BAE] hover:bg-[#124B78] text-white text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 shadow-md active:scale-[0.98] w-full sm:w-auto overflow-hidden"
            >
              <span>Schedule Atelier Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="tel:+919585544446"
              className="inline-flex items-center justify-center gap-3 text-sm sm:text-base text-white hover:text-[#1C6BAE] transition-colors py-1 group"
            >
              <div className="w-10 h-10 rounded border border-white/20 flex items-center justify-center bg-white/5 group-hover:border-[#1C6BAE] group-hover:bg-[#1C6BAE]/15 transition-all duration-300 flex-shrink-0">
                <Phone className="w-4 h-4 text-[#1C6BAE]" />
              </div>
              <span className="font-sans font-medium tracking-wide">
                +91 95855 44446
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

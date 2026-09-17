"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "./data";

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-14 sm:py-20 lg:py-24 bg-[#F7F8F6] border-t border-[#E5E7E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-animate="fade-up" className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="h-px w-6 sm:w-7 bg-[#1C6BAE]" />
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.22em] text-[#1C6BAE] font-semibold">
              Our Disciplines
            </span>
            <span className="h-px w-6 sm:w-7 bg-[#1C6BAE]" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[40px] xl:text-[42px] leading-[1.14] text-[#111111] font-medium tracking-[-0.015em]">
            Complete Interior Architecture <br className="hidden sm:inline" />
            & Turnkey Execution.
          </h2>
        </div>

        {/* 4 Cards Grid - Aligned & Responsive (2-col on mobile, 4-col on desktop) */}
        <div
          data-animate="stagger-group"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-7"
        >
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              data-animate="stagger-item"
              onClick={() => onSelectService?.(service.title)}
              className="group relative flex flex-col justify-between bg-white rounded p-2.5 sm:p-3.5 border border-[#E5E7E9] hover:border-[#1C6BAE] shadow-xs hover:shadow-md transition-all duration-400 hover:-translate-y-1 overflow-hidden cursor-pointer"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] w-full rounded overflow-hidden mb-2.5 sm:mb-4 bg-[#F7F8F6]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Architectural Discipline Counter Badge */}
                <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-10">
                  <div className="px-2 py-0.5 rounded bg-white/95 backdrop-blur-md border border-black/5 text-[9px] sm:text-[10px] font-sans font-semibold tracking-wider text-[#111111] uppercase shadow-xs">
                    0{index + 1}
                  </div>
                </div>
              </div>

              {/* Card Footer: Aligned Titles, Subtitles & Button */}
              <div className="px-1 sm:px-1.5 pb-1 flex items-center justify-between gap-1.5 sm:gap-3 min-h-[48px] sm:min-h-[58px]">
                <div className="flex-1">
                  <h3 className="font-display text-xs sm:text-base lg:text-lg font-medium text-[#111111] group-hover:text-[#1C6BAE] transition-colors leading-snug line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="font-sans text-[10px] sm:text-xs text-[#5F6368] font-normal mt-0.5 sm:mt-1 leading-normal line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Action Button with moderate radius */}
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded border border-[#E5E7E9] bg-[#F7F8F6] flex items-center justify-center text-[#111111] group-hover:border-[#1C6BAE] group-hover:bg-[#1C6BAE] group-hover:text-white transition-all duration-300 flex-shrink-0"
                  aria-hidden="true"
                >
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:rotate-[-45deg]" />
                </div>
              </div>

              {/* Bottom blue accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1C6BAE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

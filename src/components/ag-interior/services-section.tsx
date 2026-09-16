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
    <section id="services" className="py-16 sm:py-24 lg:py-28 bg-[#F7F8F6] border-t border-[#E5E7E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-animate="fade-up" className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#1C6BAE]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.24em] text-[#1C6BAE] font-semibold">
              Our Disciplines
            </span>
            <span className="h-px w-6 bg-[#1C6BAE]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#111111] font-medium tracking-tight">
            Complete Interior Architecture <br className="hidden sm:inline" />
            & Turnkey Execution.
          </h2>
        </div>

        {/* 4 Cards Grid - Aligned & Responsive */}
        <div
          data-animate="stagger-group"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7"
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              data-animate="stagger-item"
              className="group relative flex flex-col justify-between bg-white rounded p-3 sm:p-3.5 border border-[#E5E7E9] hover:border-[#1C6BAE] shadow-none hover:shadow-md transition-all duration-400 hover:-translate-y-1 overflow-hidden"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden mb-4 bg-[#F7F8F6]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Footer: Aligned Titles, Subtitles & Button */}
              <div className="px-2 pb-2 flex items-center justify-between gap-3 min-h-[58px]">
                <div className="flex-1">
                  <h3 className="font-display text-base sm:text-lg font-medium text-[#111111] group-hover:text-[#1C6BAE] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-[#5F6368] font-normal mt-1 leading-snug line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Action Button with moderate radius */}
                <button
                  onClick={() => onSelectService?.(service.title)}
                  className="w-9 h-9 rounded border border-[#E5E7E9] bg-white flex items-center justify-center text-[#111111] group-hover:border-[#1C6BAE] group-hover:bg-[#1C6BAE] group-hover:text-white transition-all duration-300 flex-shrink-0"
                  aria-label={`View details for ${service.title}`}
                >
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-[-45deg]" />
                </button>
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

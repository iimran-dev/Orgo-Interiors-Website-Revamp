import React from "react";
import { ArrowRight } from "lucide-react";
import { PROCESS_STEPS } from "./data";

export function ProcessSection() {
  return (
    <section id="process" className="py-14 sm:py-20 lg:py-24 bg-[#0B2A43] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div data-animate="fade-up" className="max-w-2xl mb-10 sm:mb-14 lg:mb-16">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="h-px w-6 sm:w-7 bg-[#1C6BAE]" />
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.22em] text-[#1C6BAE] font-semibold">
              The ORGO Methodology
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-[40px] xl:text-[42px] leading-[1.14] text-white font-medium tracking-tight">
            From Spatial Audit to Handover. <br className="hidden sm:inline" />
            Architectural Precision at Every Stage.
          </h2>
        </div>

        {/* 5-Step Responsive Flow */}
        <div
          data-animate="stagger-group"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 lg:gap-5 relative"
        >
          {PROCESS_STEPS.map((item, index) => (
            <div
              key={item.step}
              data-animate="stagger-item"
              className={`flex flex-col relative group bg-white/5 lg:bg-transparent p-3.5 sm:p-5 lg:p-0 rounded lg:rounded-none border border-white/10 lg:border-none shadow-none hover:-translate-y-1 transition-transform duration-300 ${
                index === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              {/* Top Row: Step Number & Connector Arrow */}
              <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C6BAE] group-hover:scale-105 transition-all duration-300 tracking-tight">
                  {item.step}
                </span>

                {/* Thin architectural line connector for desktop */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:flex items-center flex-1 mx-3">
                    <span className="h-px flex-1 bg-white/20" />
                    <ArrowRight className="w-3.5 h-3.5 text-[#1C6BAE] ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-sm sm:text-base lg:text-lg font-medium text-white group-hover:text-[#1C6BAE] transition-colors mb-1 sm:mb-2 tracking-normal leading-snug">
                {item.title}
              </h3>
              <p className="font-sans text-[11px] sm:text-xs lg:text-[13px] text-[#D9E3EA] font-normal leading-relaxed line-clamp-3 sm:line-clamp-none">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

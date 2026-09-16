import React from "react";
import { ArrowRight } from "lucide-react";
import { PROCESS_STEPS } from "./data";

export function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-24 lg:py-28 bg-[#FDFBF7] border-t border-[#DAD6CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div data-animate="fade-up" className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#EDB21F]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.24em] text-[#EDB21F] font-semibold">
              Our Process
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#0E0F0A] font-medium tracking-tight">
            From Vision to Reality. <br />
            A Seamless Journey.
          </h2>
        </div>

        {/* 5-Step Responsive Flow */}
        <div
          data-animate="stagger-group"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-4 relative"
        >
          {PROCESS_STEPS.map((item, index) => (
            <div
              key={item.step}
              data-animate="stagger-item"
              className="flex flex-col relative group bg-white/50 lg:bg-transparent p-5 lg:p-0 rounded-xl lg:rounded-none border border-[#DAD6CB] lg:border-none shadow-sm lg:shadow-none hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Top Row: Step Number & Connector Arrow */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="font-display text-3xl sm:text-4xl font-semibold text-[#EDB21F] group-hover:scale-110 group-hover:text-[#C89212] transition-all duration-300">
                  {item.step}
                </span>

                {/* Arrow connector for desktop */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:flex items-center flex-1 mx-3">
                    <span className="h-px flex-1 bg-gradient-to-r from-[#EDB21F]/70 to-[#EDB21F]/20" />
                    <ArrowRight className="w-3.5 h-3.5 text-[#EDB21F]/80 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-base sm:text-lg font-medium text-[#0E0F0A] group-hover:text-[#EDB21F] transition-colors mb-1.5">
                {item.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#77766F] font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

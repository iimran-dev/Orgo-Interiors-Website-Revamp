"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "./data";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-white border-t border-[#E5E7E9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Tag & Architectural Navigation Controls */}
          <div data-animate="fade-up" className="lg:col-span-4 xl:col-span-4">
            
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#1C6BAE]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.24em] text-[#1C6BAE] font-semibold">
                Client Perspectives
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#111111] font-medium tracking-tight mb-6 sm:mb-8">
              Spaces Designed. <br />
              Lives Enriched.
            </h2>

            {/* Prev / Next Controls with moderate architectural radius */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded border border-[#E5E7E9] bg-white flex items-center justify-center text-[#111111] hover:border-[#1C6BAE] hover:bg-[#1C6BAE] hover:text-white transition-all duration-300 active:scale-95 shadow-none"
                aria-label="Previous client testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded border border-[#E5E7E9] bg-white flex items-center justify-center text-[#111111] hover:border-[#1C6BAE] hover:bg-[#1C6BAE] hover:text-white transition-all duration-300 active:scale-95 shadow-none"
                aria-label="Next client testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Testimonial Card + Atmospheric Interior Photo */}
          <div data-animate="fade-up" className="lg:col-span-8 xl:col-span-8 grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
            
            {/* Testimonial Quote Card */}
            <div className="sm:col-span-7 bg-[#F7F8F6] rounded p-6 sm:p-8 border border-[#E5E7E9] shadow-none relative flex flex-col justify-between min-h-[260px] overflow-hidden">
              
              {/* Top Quote Mark Icon */}
              <div className="text-4xl sm:text-5xl font-display text-[#1C6BAE] leading-none select-none">
                “
              </div>

              {/* Animated Quote and Author */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col justify-between flex-1"
                >
                  {/* Quote text */}
                  <p className="font-sans text-sm sm:text-base text-[#111111] font-normal leading-relaxed my-4 min-h-[72px]">
                    {current.quote}
                  </p>

                  {/* Author & Location */}
                  <div className="flex items-center gap-3 pt-3 border-t border-[#E5E7E9]">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E5E7E9] flex-shrink-0">
                      <Image
                        src={current.avatar}
                        alt={current.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-[#111111]">
                        {current.name}
                      </h4>
                      <p className="font-sans text-xs text-[#5F6368] font-normal">
                        {current.location}
                      </p>
                    </div>

                    {/* Closing quote mark in bottom right */}
                    <div className="ml-auto text-3xl font-display text-[#1C6BAE]/40 leading-none select-none">
                      ”
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Beside: Atmospheric Warm Dining Interior Photo with smooth image cross-fade */}
            <div className="sm:col-span-5 relative aspect-[4/3] sm:aspect-auto sm:min-h-[260px] rounded overflow-hidden border border-[#E5E7E9] shadow-none group bg-[#F7F8F6]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={current.interiorImage}
                    alt="Client Residence Interior"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { getAssetUrl } from "@/lib/utils";

export function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const beforeImage = getAssetUrl("/images/transformation-before-aligned.png");
  const afterImage = getAssetUrl("/images/transformation-after.png");

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 3) percentage = 3;
    if (percentage > 97) percentage = 97;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      updatePosition(e.clientX);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#0B2A43] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle & Badge */}
          <div data-animate="fade-up" className="lg:col-span-4 xl:col-span-4">
            
            {/* Kicker */}
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="h-px w-7 bg-[#1C6BAE]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.24em] text-[#1C6BAE] font-semibold">
                Spatial Transformation
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.16] font-medium tracking-tight mb-4 sm:mb-5 text-white">
              See the Transformation <br />
              Before It Happens.
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-[#D9E3EA] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
              Slide horizontally to witness how architectural planning and bespoke craftsmanship transform bare structures into serene living environments.
            </p>

            {/* Architectural Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-sans tracking-widest text-white uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1C6BAE] animate-pulse" />
              <span>Interactive 3D Study</span>
            </div>

          </div>

          {/* Right Column: Interactive Slider Container */}
          <div data-animate="fade-up" className="lg:col-span-8 xl:col-span-8 relative">
            
            {/* Subtitle Accent */}
            <div className="flex justify-end mb-3 sm:mb-4 pr-2 select-none pointer-events-none">
              <span className="text-xs font-sans uppercase tracking-[0.24em] text-[#1C6BAE] font-medium">
                Concept to Execution — Interactive Comparison
              </span>
            </div>

            {/* Interactive Image Container */}
            <div
              ref={containerRef}
              onMouseDown={(e) => {
                isDragging.current = true;
                updatePosition(e.clientX);
              }}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/6.5] rounded overflow-hidden shadow-2xl select-none cursor-ew-resize border border-white/15 bg-[#111111]"
              style={{ touchAction: "none" }}
            >
              {/* "AFTER" Image (Full background layer) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={afterImage}
                  alt="After: Luxury Furnished Interior"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 850px"
                  priority
                />
                {/* AFTER Pill Label */}
                <div className="absolute bottom-4 sm:bottom-5 right-4 sm:right-5 z-10 px-3 py-1 rounded bg-[#111111]/90 backdrop-blur-md border border-white/20 text-[10px] font-sans font-semibold tracking-widest text-[#1C6BAE] uppercase">
                  AFTER — ORGO RESIDENCE
                </div>
              </div>

              {/* "BEFORE" Image (Clipped overlay layer with identical dimensions) */}
              <div
                className="absolute inset-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative w-full h-full min-w-full">
                  <Image
                    src={beforeImage}
                    alt="Before: Unfinished Raw Space"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 850px"
                  />
                  {/* BEFORE Pill Label */}
                  <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 z-10 px-3 py-1 rounded bg-[#111111]/90 backdrop-blur-md border border-white/20 text-[10px] font-sans font-semibold tracking-widest text-[#D9E3EA] uppercase">
                    BEFORE — RAW SITE
                  </div>
                </div>
              </div>

              {/* Draggable Divider Line & Circular Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.6)] cursor-ew-resize z-20 flex items-center justify-center -ml-0.5"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center Circle Button with Left/Right Arrows */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#111111] shadow-2xl flex items-center justify-center border-2 border-[#1C6BAE] transform transition-transform hover:scale-110 active:scale-95">
                  <svg
                    className="w-4 h-4 text-[#111111]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                    <polyline points="9 18 3 12 9 6" />
                    <polyline points="15 6 21 12 15 18" />
                  </svg>
                </div>
              </div>

            </div>

            {/* Bottom cue for touch devices */}
            <div className="mt-3 flex items-center justify-between text-[11px] font-sans text-[#D9E3EA]">
              <span>← Drag divider horizontally to compare spatial states →</span>
              <span className="text-[#1C6BAE] font-medium">{Math.round(sliderPosition)}% Transformed</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

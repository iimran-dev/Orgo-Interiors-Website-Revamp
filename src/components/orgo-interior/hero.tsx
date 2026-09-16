"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getAssetUrl } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenVideo: () => void;
}

export function Hero({ onOpenConsultation, onOpenVideo }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial" | "turnkey">("residential");
  const [activeStep, setActiveStep] = useState("01");

  const heroRef = useRef<HTMLElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const archRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const wallTextRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  const HERO_IMAGES = {
    residential: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1600&auto=format&fit=crop",
    commercial: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=85&w=1600&auto=format&fit=crop",
    turnkey: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1600&auto=format&fit=crop",
  };

  const currentHeroImage = HERO_IMAGES[activeTab];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(kickerRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(headlineRef.current, { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.3")
        .fromTo(paraRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
        .fromTo(buttonsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .fromTo(archRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1.1, ease: "power2.out" }, "-=0.9")
        .fromTo(wallTextRef.current, { opacity: 0, x: 25 }, { opacity: 1, x: 0, duration: 0.8 }, "-=0.6")
        .fromTo(pillRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");

      // Subtle scroll parallax on the living room photo
      if (imageRef.current && heroRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[85vh] sm:min-h-screen pt-20 sm:pt-24 lg:pt-0 bg-[#F7F8F6] text-[#111111] overflow-hidden flex flex-row items-stretch"
    >
      {/* ================= LEFT EDITORIAL COLUMN ================= */}
      <div className="w-[52%] sm:w-[50%] lg:w-[53%] flex flex-col justify-between pt-4 sm:pt-16 lg:pt-32 pb-4 sm:pb-12 lg:pb-16 pl-3 sm:pl-8 lg:pl-16 xl:pl-20 pr-2 sm:pr-6 lg:pr-10 z-10">
        
        {/* Top spacer for navbar on desktop */}
        <div className="hidden lg:block h-6" />

        {/* Content Body */}
        <div className="max-w-xl my-auto lg:my-0">
          {/* Kicker / Subhead */}
          <div ref={kickerRef} className="flex items-center gap-1.5 sm:gap-2.5 mb-2 sm:mb-5">
            <span className="h-[1.5px] w-4 sm:w-7 bg-[#1C6BAE] flex-shrink-0" />
            <span className="text-[9px] sm:text-xs font-sans uppercase tracking-[0.16em] sm:tracking-[0.24em] text-[#1C6BAE] font-semibold truncate">
              Architectural Interiors
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 ref={headlineRef} className="font-display text-xl sm:text-3xl md:text-4xl lg:text-[50px] xl:text-[58px] leading-[1.1] text-[#111111] font-medium tracking-[-0.02em] mb-2 sm:mb-6">
            Design Beyond Spaces. <br />
            <span className="italic font-normal text-[#1C6BAE]">
              Architecture for Living.
            </span>
          </h1>

          {/* Subtitle Description */}
          <p ref={paraRef} className="font-sans text-[11px] sm:text-sm lg:text-[15px] text-[#5F6368] leading-[1.65] mb-3 sm:mb-8 font-normal line-clamp-3 sm:line-clamp-none max-w-lg">
            Thoughtfully engineered residential and commercial environments blending architectural rigor, timeless materiality, and bespoke craftsmanship.
          </p>

          {/* CTA Buttons Row: Architectural Moderate Radius */}
          <div ref={buttonsRef} className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-8">
            {/* Primary CTA */}
            <Link
              href="#projects"
              className="group relative inline-flex items-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-6 py-2 sm:py-3.5 rounded bg-[#1C6BAE] hover:bg-[#124B78] text-white text-[10px] sm:text-xs font-sans font-medium tracking-[0.14em] uppercase shadow-sm transition-all duration-300 active:scale-[0.98]"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Secondary CTA (Watch Story) */}
            <button
              onClick={onOpenVideo}
              className="group inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-3 rounded border border-[#111111] bg-transparent text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300 text-[10px] sm:text-xs font-sans font-medium uppercase tracking-[0.12em]"
              aria-label="Watch Story Video"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center bg-[#1C6BAE] text-white group-hover:bg-white group-hover:text-[#111111] transition-colors">
                <Play className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current ml-0.5" />
              </div>
              <span className="hidden xs:inline sm:inline">Atelier Story</span>
            </button>
          </div>
        </div>

        {/* Bottom Rail: Pagination Indicators & Scroll Cue */}
        <div className="pt-2 sm:pt-6 border-t border-[#E5E7E9] flex items-center justify-between">
          {/* Step numbers: 01, 02, 03 */}
          <div className="flex items-center gap-2 sm:gap-5 text-[10px] sm:text-xs font-sans tracking-[0.2em] text-[#5F6368]">
            {["01", "02", "03"].map((step) => (
              <button
                key={step}
                onClick={() => setActiveStep(step)}
                className={`transition-all duration-300 ${
                  activeStep === step
                    ? "text-[#1C6BAE] font-bold scale-110"
                    : "hover:text-[#111111]"
                }`}
              >
                {step}
              </button>
            ))}
            <span className="w-1.5 h-1.5 rounded-full bg-[#1C6BAE] inline-block" />
          </div>

          {/* Scroll Cue */}
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.22em] text-[#5F6368]">
            <span className="font-semibold text-[#111111]">SCROLL</span>
            <span className="text-[#1C6BAE] lowercase tracking-normal">to explore</span>
            <div className="h-4 w-[1.5px] bg-[#1C6BAE] animate-pulse ml-0.5" />
          </div>
        </div>

      </div>

      {/* ================= RIGHT ARCHITECTURAL LIVING ROOM COLUMN ================= */}
      <div className="w-[48%] sm:w-[50%] lg:w-[47%] relative flex flex-col justify-stretch items-stretch min-h-[340px] sm:min-h-[460px] lg:min-h-full p-2 sm:p-4 lg:p-8 lg:pl-0">
        
        {/* Modern Clean Architectural Frame */}
        <div
          ref={archRef}
          className="relative w-full h-full min-h-[340px] sm:min-h-[460px] lg:min-h-full aspect-[3/4] sm:aspect-auto rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden border border-[#E5E7E9] shadow-lg bg-[#F7F8F6]"
        >
          
          {/* Parallax Image Wrapper */}
          <div ref={imageRef} className="absolute inset-0 w-full h-full min-h-full">
            <Image
              src={currentHeroImage}
              alt="ORGO Interiors Luxury Architectural Showcase"
              fill
              priority
              className="object-cover object-center transition-all duration-700 ease-out"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 800px"
            />
          </div>

          {/* Clean High-Contrast Corner Badge */}
          <div
            ref={wallTextRef}
            className="absolute top-2 sm:top-5 left-2 sm:left-5 z-20"
          >
            <div className="bg-white/95 backdrop-blur-md px-2 sm:px-3.5 py-1 sm:py-1.5 rounded shadow-sm border border-black/5 inline-flex items-center gap-1 sm:gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1C6BAE] animate-pulse" />
              <span className="text-[8px] sm:text-[11px] font-sans font-semibold tracking-wider sm:tracking-widest text-[#111111] uppercase">
                {activeTab === "residential"
                  ? "Residence · Poes Garden"
                  : activeTab === "commercial"
                  ? "Atelier · OMR"
                  : "Turnkey Architecture"}
              </span>
            </div>
          </div>

          {/* Interactive Discipline Selector Pill (Bottom-Right) */}
          <div ref={pillRef} className="absolute bottom-2 sm:bottom-6 right-2 sm:right-6 z-20">
            <div className="bg-[#111111]/95 backdrop-blur-md text-white px-2.5 sm:px-4 py-1 sm:py-2 rounded border border-white/20 shadow-xl flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-sans uppercase tracking-[0.12em]">
              <button
                onClick={() => setActiveTab("residential")}
                className={`transition-colors duration-200 ${
                  activeTab === "residential"
                    ? "text-[#1C6BAE] font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Residential
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => setActiveTab("commercial")}
                className={`transition-colors duration-200 ${
                  activeTab === "commercial"
                    ? "text-[#1C6BAE] font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Commercial
              </button>
              <span className="text-white/20 hidden sm:inline">|</span>
              <button
                onClick={() => setActiveTab("turnkey")}
                className={`hidden sm:inline transition-colors duration-200 ${
                  activeTab === "turnkey"
                    ? "text-[#1C6BAE] font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Turnkey
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

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
      className="relative min-h-screen pt-24 lg:pt-0 bg-[#F7F8F6] text-[#111111] overflow-hidden flex flex-col lg:flex-row items-stretch"
    >
      {/* ================= LEFT EDITORIAL COLUMN ================= */}
      <div className="w-full lg:w-[53%] flex flex-col justify-between pt-12 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 px-6 sm:px-10 lg:pl-12 lg:pr-6 xl:pl-20 xl:pr-10 z-10">
        
        {/* Top spacer for navbar on desktop */}
        <div className="hidden lg:block h-6" />

        {/* Content Body */}
        <div className="max-w-xl">
          {/* Kicker / Subhead */}
          <div ref={kickerRef} className="flex items-center gap-2.5 mb-5">
            <span className="h-[1.5px] w-7 bg-[#1C6BAE]" />
            <span className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.24em] text-[#1C6BAE] font-semibold">
              Architectural Interiors & Design
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 ref={headlineRef} className="font-display text-4xl sm:text-5xl lg:text-[56px] xl:text-[66px] leading-[1.08] text-[#111111] font-medium tracking-tight mb-6">
            Design <br />
            Beyond Spaces. <br />
            <span className="italic font-normal text-[#1C6BAE]">
              Architecture for Living.
            </span>
          </h1>

          {/* Subtitle Description */}
          <p ref={paraRef} className="font-sans text-sm sm:text-base lg:text-[17px] text-[#5F6368] leading-relaxed mb-8 sm:mb-10 font-normal max-w-lg">
            Thoughtfully engineered residential and commercial environments blending architectural rigor, timeless materiality, and bespoke craftsmanship.
          </p>

          {/* CTA Buttons Row: Architectural Moderate Radius */}
          <div ref={buttonsRef} className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
            {/* Primary CTA: Background #1C6BAE, Text #FFFFFF, Hover #124B78 */}
            <Link
              href="#projects"
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded bg-[#1C6BAE] hover:bg-[#124B78] text-white text-xs sm:text-sm font-medium tracking-wider uppercase shadow-sm transition-all duration-300 active:scale-[0.98] overflow-hidden"
            >
              <span>Explore Our Portfolio</span>
              <ArrowRight className="w-4 h-4 ml-0.5 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Secondary CTA: 1px solid #111111 */}
            <button
              onClick={onOpenVideo}
              className="group inline-flex items-center gap-3 px-5 py-3 rounded border border-[#111111] bg-transparent text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300 text-xs sm:text-sm font-sans font-medium"
              aria-label="Watch ORGO Interiors Atelier Story Video"
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#1C6BAE] text-white group-hover:bg-white group-hover:text-[#111111] transition-colors">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>Watch Atelier Story</span>
            </button>
          </div>
        </div>

        {/* Bottom Rail: Pagination Indicators & Scroll Cue */}
        <div className="pt-6 border-t border-[#E5E7E9] flex items-center justify-between max-w-xl">
          {/* Step numbers: 01, 02, 03 */}
          <div className="flex items-center gap-5 text-xs font-sans tracking-widest text-[#5F6368]">
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
          <div className="flex items-center gap-2.5 text-[10px] font-sans uppercase tracking-[0.22em] text-[#5F6368]">
            <span className="font-semibold text-[#111111]">SCROLL</span>
            <span className="text-[#1C6BAE] lowercase tracking-normal">to explore</span>
            <div className="h-5 w-[1.5px] bg-[#1C6BAE] animate-pulse ml-0.5" />
          </div>
        </div>

      </div>

      {/* ================= RIGHT ARCHITECTURAL LIVING ROOM COLUMN ================= */}
      <div className="w-full lg:w-[47%] relative min-h-[480px] sm:min-h-[580px] lg:min-h-full flex items-stretch p-4 sm:p-6 lg:p-8 lg:pl-0">
        
        {/* Modern Clean Architectural Frame */}
        <div
          ref={archRef}
          className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden border border-[#E5E7E9] shadow-xl bg-white"
        >
          
          {/* Parallax Image Wrapper */}
          <div ref={imageRef} className="absolute -top-10 -bottom-10 inset-x-0 w-full h-[115%]">
            <Image
              src={currentHeroImage}
              alt="ORGO Interiors Luxury Architectural Showcase"
              fill
              priority
              className="object-cover object-center transition-all duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Clean High-Contrast Corner Badge */}
          <div
            ref={wallTextRef}
            className="absolute top-5 left-5 z-20"
          >
            <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded shadow-sm border border-black/5 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1C6BAE] animate-pulse" />
              <span className="text-[11px] font-sans font-semibold tracking-widest text-[#111111] uppercase">
                {activeTab === "residential"
                  ? "Bespoke Residence · Poes Garden"
                  : activeTab === "commercial"
                  ? "Executive Atelier · OMR"
                  : "Turnkey Architecture · South India"}
              </span>
            </div>
          </div>

          {/* Interactive Discipline Selector Pill (Bottom-Right) */}
          <div ref={pillRef} className="absolute bottom-5 sm:bottom-6 right-5 sm:right-6 z-20">
            <div className="bg-[#111111]/95 backdrop-blur-md text-white px-4 py-2 rounded border border-white/20 shadow-2xl flex items-center gap-3 text-xs font-sans tracking-wide">
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
              <span className="text-white/20">|</span>
              <button
                onClick={() => setActiveTab("turnkey")}
                className={`transition-colors duration-200 ${
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

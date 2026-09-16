"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "./data";

interface FeaturedProjectsProps {
  onOpenConsultation: () => void;
}

const CATEGORIES = ["All", "Residential", "Commercial", "Kitchens", "Living", "Bedrooms"] as const;

export function FeaturedProjects({ onOpenConsultation }: FeaturedProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  // Main featured card
  const heroProject = filtered[0] || PROJECTS[0];
  // Supporting cards
  const gridProjects = filtered.length > 1 ? filtered.slice(1) : PROJECTS.filter((p) => p.id !== heroProject.id).slice(0, 4);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 bg-white border-t border-[#E5E7E9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row */}
        <div data-animate="fade-up" className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-14">
          
          {/* Left: Kicker, Title, Subtitle & View All Button */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#1C6BAE]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.24em] text-[#1C6BAE] font-semibold">
                Portfolio of Works
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#111111] font-medium tracking-tight mb-3 sm:mb-4">
              Spaces That Inspire
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#5F6368] max-w-md font-normal mb-6">
              A curated selection of private residences, bespoke penthouses, and executive commercial ateliers.
            </p>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#1C6BAE] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#124B78] transition-colors shadow-sm active:scale-95"
            >
              <span>Inquire About A Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right: Filter Tabs & Tagline */}
          <div className="lg:col-span-6 flex flex-col items-start lg:items-end justify-between h-full pt-4 lg:pt-0">
            
            {/* Tagline */}
            <div className="hidden lg:block mb-6 text-right">
              <span className="font-display italic text-lg sm:text-xl text-[#1C6BAE]">
                Architecture for Timeless Living
              </span>
            </div>

            {/* Filter Tabs with architectural geometry */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`relative text-xs font-sans tracking-wider py-1.5 px-3.5 rounded transition-colors duration-200 z-10 ${
                      isActive ? "text-white font-medium" : "text-[#5F6368] hover:text-[#111111]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 bg-[#111111] rounded -z-10 shadow-sm"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute inset-0 bg-[#F7F8F6] border border-[#E5E7E9] rounded -z-20 hover:border-[#1C6BAE] transition-colors" />
                    )}
                    <span>{category}</span>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

        {/* Bento Grid with Framer Motion fluid layout */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Card */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={heroProject.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="lg:col-span-6 group relative aspect-[4/3.2] sm:aspect-[4/3] lg:aspect-auto min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] rounded overflow-hidden shadow-sm border border-[#E5E7E9] bg-[#F7F8F6]"
            >
              <Image
                src={heroProject.image}
                alt={heroProject.title}
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
              />
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Content Bottom Bar */}
              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 flex items-end justify-between z-10">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-[#1C6BAE] font-semibold block mb-1">
                    {heroProject.category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-white font-medium">
                    {heroProject.title}
                  </h3>
                  {heroProject.location && (
                    <p className="font-sans text-xs sm:text-sm text-[#D9E3EA] font-normal mt-1">
                      {heroProject.location}
                    </p>
                  )}
                </div>

                {/* Arrow Action Button */}
                <button
                  onClick={onOpenConsultation}
                  className="w-10 h-10 rounded bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#1C6BAE] group-hover:border-[#1C6BAE] transition-all duration-300 flex-shrink-0 ml-3"
                  aria-label={`Explore ${heroProject.title}`}
                >
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 2x2 Grid Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
            <AnimatePresence mode="popLayout">
              {gridProjects.slice(0, 4).map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative aspect-[4/3] sm:aspect-[4/3.1] rounded overflow-hidden shadow-none border border-[#E5E7E9] bg-[#F7F8F6]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
                    <div>
                      <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-[#1C6BAE] font-semibold block mb-0.5">
                        {project.category}
                      </span>
                      <h4 className="font-display text-base sm:text-lg text-white font-medium">
                        {project.title}
                      </h4>
                      {project.location && (
                        <p className="font-sans text-[11px] text-[#D9E3EA] font-normal mt-0.5">
                          {project.location}
                        </p>
                      )}
                    </div>

                    <span className="w-8 h-8 rounded bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#1C6BAE] transition-colors duration-300 flex-shrink-0 ml-2">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

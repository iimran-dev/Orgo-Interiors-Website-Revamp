"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, ProjectItem } from "./data";

interface FeaturedProjectsProps {
  onOpenConsultation: () => void;
}

const CATEGORIES = [
  "All",
  "Residential",
  "Living",
  "Kitchens",
  "Bedrooms",
  "Commercial",
] as const;

export function FeaturedProjects({ onOpenConsultation }: FeaturedProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  const getCategoryCount = (category: string) => {
    if (category === "All") return PROJECTS.length;
    return PROJECTS.filter((p) => p.category === category).length;
  };

  return (
    <section id="projects" className="py-10 sm:py-16 lg:py-24 bg-white border-t border-[#E5E7E9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div data-animate="fade-up" className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-end mb-6 sm:mb-10 lg:mb-14">
          
          {/* Left: Kicker, Title & Description */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="h-px w-6 sm:w-7 bg-[#1C6BAE]" />
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.24em] text-[#1C6BAE] font-semibold">
                Portfolio of Works
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-[42px] leading-[1.15] text-[#111111] font-medium tracking-tight mb-2 sm:mb-3">
              Spaces That Inspire. <br />
              <span className="italic font-normal text-[#1C6BAE]">
                Crafted for Living.
              </span>
            </h2>

            <p className="font-sans text-xs sm:text-sm lg:text-base text-[#5F6368] max-w-xl font-normal leading-relaxed">
              Explore our portfolio of private residences, bespoke culinary studios, and executive ateliers defined by proportion, materiality, and bespoke joinery.
            </p>
          </div>

          {/* Right: Inquire CTA & Studio Location */}
          <div className="lg:col-span-5 flex flex-row items-center justify-between sm:justify-start lg:flex-col lg:items-end gap-3 pt-1 sm:pt-0">
            <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.18em] text-[#5F6368] font-medium">
              Chennai Studio · South India
            </span>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded bg-[#1C6BAE] text-white text-[11px] sm:text-xs font-sans font-medium tracking-[0.14em] uppercase hover:bg-[#124B78] transition-colors shadow-sm active:scale-95 shrink-0"
            >
              <span>Inquire About A Project</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>

        </div>

        {/* ================= CATEGORY FILTER TABS ================= */}
        <div className="flex overflow-x-auto scrollbar-none flex-nowrap sm:flex-wrap items-center gap-1.5 sm:gap-2 mb-5 sm:mb-8 lg:mb-10 pb-2.5 sm:pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-[#E5E7E9]">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            const count = getCategoryCount(category);
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative text-[10px] sm:text-[11px] font-sans uppercase font-medium tracking-[0.16em] py-1.5 px-3 sm:py-2 sm:px-4 rounded transition-all duration-200 z-10 flex items-center gap-1.5 sm:gap-2 shrink-0 ${
                  isActive
                    ? "text-white font-semibold shadow-sm"
                    : "text-[#5F6368] hover:text-[#111111]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-[#111111] rounded -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute inset-0 bg-[#F7F8F6] border border-[#E5E7E9] rounded -z-20 hover:border-[#1C6BAE] transition-colors" />
                )}
                <span>{category}</span>
                <span
                  className={`text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#E5E7E9] text-[#5F6368]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ================= EDITORIAL PROJECTS SHOWCASE ================= */}
        {activeCategory === "All" ? (
          <>
            {/* Mobile & Tablet View: High-Density Compact 2-Column Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:hidden">
              {filtered.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  aspect="aspect-[4/3] sm:aspect-[16/10]"
                  priority={idx < 2}
                  onOpenConsultation={onOpenConsultation}
                />
              ))}
            </div>

            {/* Desktop View: Architectural Editorial Bento */}
            <div className="hidden lg:block space-y-8">
              
              {/* Row 1: Split Feature (7 cols landscape + 5 cols portrait) */}
              <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">
                <div className="col-span-7">
                  <ProjectCard
                    project={filtered[0]}
                    aspect="aspect-[16/10]"
                    priority
                    onOpenConsultation={onOpenConsultation}
                  />
                </div>
                <div className="col-span-5">
                  <ProjectCard
                    project={filtered[1]}
                    aspect="aspect-[4/3.8]"
                    onOpenConsultation={onOpenConsultation}
                  />
                </div>
              </div>

              {/* Row 2: 3-Column Balanced Editorial Grid */}
              <div className="grid grid-cols-3 gap-6 lg:gap-8">
                {filtered.slice(2, 5).map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    aspect="aspect-[16/11]"
                    onOpenConsultation={onOpenConsultation}
                  />
                ))}
              </div>

              {/* Row 3: Split Feature (5 cols + 7 cols) */}
              <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start pt-2">
                <div className="col-span-5">
                  <ProjectCard
                    project={filtered[5]}
                    aspect="aspect-[4/3.8]"
                    onOpenConsultation={onOpenConsultation}
                  />
                </div>
                <div className="col-span-7">
                  <ProjectCard
                    project={filtered[6]}
                    aspect="aspect-[16/10]"
                    onOpenConsultation={onOpenConsultation}
                  />
                </div>
              </div>

              {/* Row 4: Remaining 3-Column Balanced Cards */}
              {filtered.length > 7 && (
                <div className="grid grid-cols-3 gap-6 lg:gap-8">
                  {filtered.slice(7).map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      aspect="aspect-[16/11]"
                      onOpenConsultation={onOpenConsultation}
                    />
                  ))}
                </div>
              )}

            </div>
          </>
        ) : (
          /* Filtered Category View: Clean, Compact 2-Column Grid on all viewports */
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2.5 sm:gap-6 lg:gap-8"
            >
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <ProjectCard
                    project={project}
                    aspect="aspect-[4/3] sm:aspect-[16/10]"
                    onOpenConsultation={onOpenConsultation}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

      </div>
    </section>
  );
}

{/* ================= REUSABLE ARCHITECTURAL PROJECT CARD ================= */}
interface ProjectCardProps {
  project: ProjectItem;
  aspect: string;
  priority?: boolean;
  onOpenConsultation: () => void;
}

function ProjectCard({ project, aspect, priority, onOpenConsultation }: ProjectCardProps) {
  if (!project) return null;

  return (
    <article
      onClick={onOpenConsultation}
      className="group cursor-pointer flex flex-col h-full bg-white transition-all duration-300"
    >
      {/* Pristine Photography Container */}
      <div
        className={`relative w-full ${aspect} rounded overflow-hidden bg-[#F7F8F6] border border-[#E5E7E9] shadow-xs group-hover:border-[#1C6BAE]/40 group-hover:shadow-md transition-all duration-500`}
      >
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category} Architectural Interior`}
          fill
          priority={priority}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 700px"
        />

        {/* High-Contrast Frosted Corner Category Pill */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-white/95 backdrop-blur-md border border-black/5 shadow-xs text-[8px] sm:text-[10px] font-sans font-semibold tracking-wider sm:tracking-widest text-[#111111] uppercase">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#1C6BAE]" />
            <span>{project.category}</span>
          </div>
        </div>

        {/* Top-right Hover Action Indicator (desktop only) */}
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex">
          <div className="w-7 h-7 rounded bg-[#111111]/90 backdrop-blur-md text-white flex items-center justify-center shadow-md">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </div>

      {/* Typography & Metadata */}
      <div className="pt-2 sm:pt-3.5 pb-1 flex flex-col flex-1">
        
        {/* Metadata Strip: Location & Area */}
        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-sans text-[#5F6368] font-normal mb-1">
          <span className="text-[#1C6BAE] font-semibold tracking-[0.16em] uppercase text-[9px] sm:text-[10px] truncate">
            {project.location || "Chennai Atelier"}
          </span>
          {project.area && (
            <>
              <span className="text-[#D9E3EA] hidden xs:inline">•</span>
              <span className="hidden xs:inline truncate text-[10px] sm:text-[11px] text-[#5F6368]">{project.area}</span>
            </>
          )}
        </div>

        {/* Project Title */}
        <h3 className="font-display text-xs sm:text-lg lg:text-xl text-[#111111] font-medium tracking-tight group-hover:text-[#1C6BAE] transition-colors leading-snug line-clamp-1">
          {project.title}
        </h3>

        {/* Scope / Spatial Description */}
        {project.scope && (
          <p className="font-sans text-[11px] sm:text-xs text-[#5F6368] leading-relaxed mt-0.5 sm:mt-1 font-normal line-clamp-1 sm:line-clamp-2">
            {project.scope}
          </p>
        )}

        {/* Bottom Interactive Link */}
        <div className="mt-1.5 pt-1.5 sm:mt-2.5 sm:pt-2.5 border-t border-[#E5E7E9]/60 flex items-center justify-between text-[10px] sm:text-xs font-sans font-medium text-[#111111] group-hover:text-[#1C6BAE] transition-colors">
          <span className="uppercase tracking-[0.16em] text-[9px] sm:text-[10px]">
            <span className="sm:hidden">View Study</span>
            <span className="hidden sm:inline">Explore Project Study</span>
          </span>
          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>

      </div>
    </article>
  );
}

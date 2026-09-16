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
    <section id="projects" className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#E5E7E9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div data-animate="fade-up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          
          {/* Left: Kicker, Title & Description */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="h-px w-7 bg-[#1C6BAE]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.24em] text-[#1C6BAE] font-semibold">
                Portfolio of Works
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] text-[#111111] font-medium tracking-tight mb-4">
              Spaces That Inspire. <br />
              <span className="italic font-normal text-[#1C6BAE]">
                Crafted for Living.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#5F6368] max-w-xl font-normal leading-relaxed">
              Explore our portfolio of private residences, bespoke culinary studios, and executive ateliers defined by proportion, materiality, and bespoke joinery.
            </p>
          </div>

          {/* Right: Inquire CTA & Studio Location */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#5F6368] font-medium">
              Chennai Studio · South India
            </span>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#1C6BAE] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#124B78] transition-colors shadow-sm active:scale-95"
            >
              <span>Inquire About A Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* ================= CATEGORY FILTER TABS ================= */}
        <div className="flex flex-wrap items-center gap-2 mb-10 sm:mb-12 pb-2 border-b border-[#E5E7E9]">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            const count = getCategoryCount(category);
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative text-xs font-sans tracking-wider py-2 px-4 rounded transition-all duration-200 z-10 flex items-center gap-2 ${
                  isActive
                    ? "text-white font-medium shadow-sm"
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
                  className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
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
          /* "All" View: Dynamic Asymmetric Editorial Bento */
          <div className="space-y-10">
            
            {/* Row 1: Split Feature (7 cols landscape + 5 cols portrait) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Card 1 (Major 7-col showcase) */}
              <div className="lg:col-span-7">
                <ProjectCard
                  project={filtered[0]}
                  aspect="aspect-[16/10]"
                  priority
                  onOpenConsultation={onOpenConsultation}
                />
              </div>

              {/* Card 2 (5-col portrait showcase) */}
              <div className="lg:col-span-5">
                <ProjectCard
                  project={filtered[1]}
                  aspect="aspect-[4/3.8]"
                  onOpenConsultation={onOpenConsultation}
                />
              </div>

            </div>

            {/* Row 2: 3-Column Balanced Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
              
              <div className="lg:col-span-5">
                <ProjectCard
                  project={filtered[5]}
                  aspect="aspect-[4/3.8]"
                  onOpenConsultation={onOpenConsultation}
                />
              </div>

              <div className="lg:col-span-7">
                <ProjectCard
                  project={filtered[6]}
                  aspect="aspect-[16/10]"
                  onOpenConsultation={onOpenConsultation}
                />
              </div>

            </div>

            {/* Row 4: Remaining 3-Column Balanced Cards */}
            {filtered.length > 7 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        ) : (
          /* Filtered Category View: Clean, Spacious 2-Column Grid */
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
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
                    aspect="aspect-[16/10]"
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
      {/* Pristine Photography Container with Zero Muddy Gradients */}
      <div
        className={`relative w-full ${aspect} rounded overflow-hidden bg-[#F7F8F6] border border-[#E5E7E9] shadow-sm group-hover:border-[#1C6BAE]/40 group-hover:shadow-md transition-all duration-500`}
      >
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category} Architectural Interior`}
          fill
          priority={priority}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
        />

        {/* High-Contrast Frosted Corner Category Pill */}
        <div className="absolute top-4 left-4 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/95 backdrop-blur-md border border-black/5 shadow-sm text-[10px] font-sans font-semibold tracking-widest text-[#111111] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1C6BAE]" />
            <span>{project.category}</span>
          </div>
        </div>

        {/* Top-right Hover Action Indicator */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 rounded bg-[#111111]/90 backdrop-blur-md text-white flex items-center justify-center shadow-md">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Typography & Metadata: 100% High Contrast Placed Cleanly Below Image */}
      <div className="pt-4 pb-1 flex flex-col flex-1">
        
        {/* Metadata Strip: Location & Area */}
        <div className="flex items-center gap-2 text-xs font-sans text-[#5F6368] font-normal mb-1.5">
          <span className="text-[#1C6BAE] font-semibold tracking-wider uppercase text-[11px]">
            {project.location || "Chennai Atelier"}
          </span>
          {project.area && (
            <>
              <span className="text-[#D9E3EA]">•</span>
              <span>{project.area}</span>
            </>
          )}
        </div>

        {/* Project Title: Large, Elegant, High-Contrast Typography */}
        <h3 className="font-display text-xl sm:text-2xl text-[#111111] font-medium tracking-tight group-hover:text-[#1C6BAE] transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Scope / Spatial Description */}
        {project.scope && (
          <p className="font-sans text-xs sm:text-sm text-[#5F6368] leading-relaxed mt-1.5 font-normal line-clamp-2">
            {project.scope}
          </p>
        )}

        {/* Bottom Interactive Link */}
        <div className="mt-3 pt-3 border-t border-[#E5E7E9]/70 flex items-center justify-between text-xs font-sans font-medium text-[#111111] group-hover:text-[#1C6BAE] transition-colors">
          <span className="uppercase tracking-wider text-[11px]">
            Explore Project Study
          </span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>

      </div>
    </article>
  );
}

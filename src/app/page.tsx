"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/orgo-interior/navbar";
import { Hero } from "@/components/orgo-interior/hero";
import { StatsBar } from "@/components/orgo-interior/stats-bar";
import { AboutSection } from "@/components/orgo-interior/about-section";
import { ServicesSection } from "@/components/orgo-interior/services-section";
import { BeforeAfterSection } from "@/components/orgo-interior/before-after-section";
import { FeaturedProjects } from "@/components/orgo-interior/featured-projects";
import { ProcessSection } from "@/components/orgo-interior/process-section";
import { TestimonialsSection } from "@/components/orgo-interior/testimonials-section";
import { DreamSpaceCTA } from "@/components/orgo-interior/dream-space-cta";
import { Footer } from "@/components/orgo-interior/footer";
import { MotionWrapper } from "@/components/orgo-interior/motion-wrapper";
import { ConsultationModal } from "@/components/orgo-interior/consultation-modal";
import { VideoModal } from "@/components/orgo-interior/video-modal";

export default function Home() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const handleOpenConsultation = () => setConsultationOpen(true);
  const handleCloseConsultation = () => setConsultationOpen(false);

  const handleOpenVideo = () => setVideoOpen(true);
  const handleCloseVideo = () => setVideoOpen(false);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111111] antialiased selection:bg-[#1C6BAE] selection:text-white overflow-x-hidden w-full">
      {/* 1. Header & Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <MotionWrapper>
        <main className="flex-1">
          {/* 2. Hero Section with Architectural Living Showcase */}
          <Hero
            onOpenConsultation={handleOpenConsultation}
            onOpenVideo={handleOpenVideo}
          />

          {/* 3. 4-Column Architectural Trust Stats Bar */}
          <StatsBar />

          {/* 4. About ORGO Interiors with Architectural Dining Atelier */}
          <AboutSection />

          {/* 5. Complete Interior Solutions (4 Service Cards) */}
          <ServicesSection onSelectService={() => handleOpenConsultation()} />

          {/* 6. Interactive Before & After Transformation Slider */}
          <BeforeAfterSection />

          {/* 7. Featured Projects Bento Grid with Category Filter Tabs */}
          <FeaturedProjects onOpenConsultation={handleOpenConsultation} />

          {/* 8. 5-Step Process Roadmap */}
          <ProcessSection />

          {/* 9. Client Testimonial & Atmosphere */}
          <TestimonialsSection />

          {/* 10. Let's Design Your Dream Space (Framed Greenery CTA) */}
          <DreamSpaceCTA onOpenConsultation={handleOpenConsultation} />
        </main>

        {/* 11. Luxury Arched Footer */}
        <Footer />
      </MotionWrapper>

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={handleCloseConsultation}
      />
      <VideoModal
        isOpen={videoOpen}
        onClose={handleCloseVideo}
      />
    </div>
  );
}

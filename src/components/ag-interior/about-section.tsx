import React from "react";
import Image from "next/image";

export function AboutSection() {
  const diningImage =
    "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=85&w=1200&auto=format&fit=crop";
  const nookImage =
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop";

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute right-4 bottom-10 select-none pointer-events-none opacity-5 hidden sm:block">
        <span className="font-display text-[260px] font-bold text-[#0E0F0A]">HC</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Arched Dining Room Image with "Thoughtful Living" cursive tag */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">
            
            {/* Floating Cursive Script Accent - Positioned safely within bounds */}
            <div className="absolute -top-6 left-2 sm:-left-4 z-20 pointer-events-none select-none transition-transform duration-500 hover:scale-105">
              <div className="transform -rotate-6">
                <span className="font-script text-3xl sm:text-5xl text-[#EDB21F] drop-shadow-sm block leading-none">
                  Thoughtful
                </span>
                <span className="font-script text-2xl sm:text-4xl text-[#0E0F0A] -mt-1 ml-4 block leading-none">
                  Living
                </span>
              </div>
            </div>

            {/* Arched Image Container */}
            <div
              data-animate="arch-reveal"
              className="relative w-full aspect-[3.6/5] rounded-t-[160px] sm:rounded-t-[200px] rounded-b-2xl overflow-hidden border border-[#DAD6CB] shadow-xl group bg-[#F3EFE7]"
            >
              <Image
                src={diningImage}
                alt="Honey Craft Interior Dining Space Architecture"
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>

          {/* Right Column: About Content, Secondary Image & Badges */}
          <div data-animate="fade-up" className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tag / Kicker */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#EDB21F]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.24em] text-[#EDB21F] font-semibold">
                About Honey Craft Interior
              </span>
              <span className="h-px w-6 bg-[#EDB21F]" />
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.18] text-[#0E0F0A] font-medium tracking-tight mb-5 sm:mb-6">
              Creating Environments <br className="hidden sm:inline" />
              for a Better Everyday.
            </h2>

            {/* Paragraph Description */}
            <p className="font-sans text-[#77766F] leading-relaxed text-sm sm:text-base mb-6 sm:mb-8 max-w-xl font-light">
              At Honey Craft Interior, we believe great design goes beyond beauty. It&apos;s about creating spaces that inspire, comfort, and elevate your everyday life. With a focus on quality, functionality, and timeless aesthetics, we bring your vision to life with precision and passion.
            </p>

            {/* Handwritten Signature */}
            <div className="mb-8 sm:mb-10">
              <span className="font-script text-4xl sm:text-5xl text-[#0E0F0A]/85 block leading-tight">
                Honey Craft
              </span>
              <span className="block text-[10px] sm:text-[11px] font-sans tracking-[0.2em] uppercase text-[#77766F] mt-1">
                Founder & Lead Architect
              </span>
            </div>

            {/* Lower Composition: Secondary Image + Badges */}
            <div data-animate="fade-up" className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-6 border-t border-[#DAD6CB]">
              
              {/* Secondary Armchair Image */}
              <div className="sm:col-span-5 relative aspect-[4/4.8] max-w-[220px] sm:max-w-none rounded-xl overflow-hidden border border-[#DAD6CB] shadow-md group bg-[#F3EFE7]">
                <Image
                  src={nookImage}
                  alt="Honey Craft Interior Reading Nook & Lighting"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 220px, 240px"
                />
              </div>

              {/* Badges & Credo */}
              <div className="sm:col-span-7 flex items-center gap-6 sm:gap-8">
                
                {/* Circular Badge: SPACES PEOPLE LOVE DELIVER */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#DAD6CB] p-1 flex items-center justify-center bg-white/90 shadow-sm flex-shrink-0 group hover:rotate-12 transition-transform duration-700">
                  <div className="w-full h-full rounded-full border border-dashed border-[#EDB21F]/60 flex flex-col items-center justify-center p-2 text-center">
                    <span className="text-[7.5px] sm:text-[8px] font-sans uppercase tracking-[0.2em] text-[#77766F] font-semibold leading-tight">
                      SPACES
                    </span>
                    <span className="text-[8.5px] sm:text-[9px] font-sans uppercase tracking-[0.2em] text-[#EDB21F] font-bold leading-tight my-0.5">
                      PEOPLE
                    </span>
                    <span className="text-[7.5px] sm:text-[8px] font-sans uppercase tracking-[0.2em] text-[#77766F] font-semibold leading-tight">
                      LOVE DELIVER
                    </span>
                  </div>
                </div>

                {/* Stacked Vertical Accent: DESIGN PLAN EXECUTE DELIVER */}
                <div className="flex flex-col space-y-1.5 border-l border-[#DAD6CB] pl-4 sm:pl-5">
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#EDB21F] font-semibold">
                    DESIGN
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#77766F] font-medium">
                    PLAN
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#77766F] font-medium">
                    EXECUTE
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#EDB21F] font-semibold">
                    DELIVER
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

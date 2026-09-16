import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "./logo";
import { MapPin, Phone, Mail, Instagram, MessageCircle, Facebook } from "lucide-react";

export function Footer() {
  const archImage =
    "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=600&auto=format&fit=crop";

  return (
    <footer id="contact" className="bg-[#0B2A43] text-white pt-16 sm:pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Columns */}
        <div data-animate="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-10 lg:gap-8 mb-12 sm:mb-14">
          
          {/* Col 1: Brand & Slogan (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start">
            {/* Official Logo mounted on a clean architectural off-white panel */}
            <div className="bg-[#F7F8F6] px-3.5 py-2 rounded border border-white/20 inline-flex items-center mb-4 shadow-sm">
              <Logo size="md" className="!items-start" />
            </div>
            <p className="font-display italic text-sm text-[#D9E3EA] mt-1 max-w-xs leading-relaxed">
              Thoughtful Spaces <br />
              for Architectural Living.
            </p>
            <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-[#1C6BAE] font-semibold mt-4">
              Chennai Studio & Atelier
            </span>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-semibold text-white uppercase tracking-[0.2em] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-[#D9E3EA]">
              <li>
                <Link href="#hero" className="hover:text-[#1C6BAE] transition-colors inline-block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#1C6BAE] transition-colors inline-block py-0.5">
                  About Atelier
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#1C6BAE] transition-colors inline-block py-0.5">
                  Disciplines
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-[#1C6BAE] transition-colors inline-block py-0.5">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-[#1C6BAE] transition-colors inline-block py-0.5">
                  Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Disciplines (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-semibold text-white uppercase tracking-[0.2em] mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-[#D9E3EA]">
              <li>
                <Link href="#services" className="hover:text-[#1C6BAE] transition-colors inline-block py-0.5">
                  Residential Architecture
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#1C6BAE] transition-colors inline-block py-0.5">
                  Architectural Kitchens
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#1C6BAE] transition-colors inline-block py-0.5">
                  Bespoke Wardrobes
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#1C6BAE] transition-colors inline-block py-0.5">
                  Ceilings & Illumination
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#1C6BAE] transition-colors inline-block py-0.5">
                  Commercial Ateliers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-semibold text-white uppercase tracking-[0.2em] mb-4">
              Studio & Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-sans text-[#D9E3EA]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1C6BAE] flex-shrink-0 mt-0.5" />
                <span>
                  Jonas The Downs Avenue, <br />
                  Chennai, Tamil Nadu 600127
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1C6BAE] flex-shrink-0" />
                <a
                  href="tel:+919585544446"
                  className="hover:text-[#1C6BAE] transition-colors"
                >
                  +91 95855 44446
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1C6BAE] flex-shrink-0" />
                <a
                  href="mailto:contact@orgointeriors.com"
                  className="hover:text-[#1C6BAE] transition-colors"
                >
                  contact@orgointeriors.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded border border-white/20 flex items-center justify-center text-[#D9E3EA] hover:border-[#1C6BAE] hover:text-[#1C6BAE] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919585544446"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded border border-white/20 flex items-center justify-center text-[#D9E3EA] hover:border-[#1C6BAE] hover:text-[#1C6BAE] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded border border-white/20 flex items-center justify-center text-[#D9E3EA] hover:border-[#1C6BAE] hover:text-[#1C6BAE] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>


        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-[#D9E3EA] gap-3 text-center sm:text-left">
          <p>© 2025 ORGO Interiors. All rights reserved.</p>
          <p className="font-display italic text-[#1C6BAE]">
            Architecture for Timeless Living.
          </p>
        </div>

      </div>
    </footer>
  );
}

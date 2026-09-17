"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle2, Phone, Calendar, ArrowRight, X } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Residential",
    city: "Chennai",
    date: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleReset()}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto bg-white border border-[#E5E7E9] text-[#111111] p-0 shadow-2xl rounded">
        <div className="relative p-5 sm:p-8">
          {/* Header */}
          <DialogHeader className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-6 bg-[#1C6BAE]" />
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.22em] text-[#1C6BAE] font-semibold">
                ORGO Interiors Experience
              </span>
            </div>
            <DialogTitle className="font-display text-2xl sm:text-3xl text-[#111111] font-medium tracking-[-0.015em]">
              Book an Atelier Consultation
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-[#5F6368] font-sans mt-1 leading-relaxed">
              Discuss your spatial vision, architectural requirements, and material preferences with our principal design team.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded bg-[#EAF3F9] text-[#1C6BAE] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-display text-2xl font-medium text-[#111111]">
                Thank You, {formData.name || "Valued Client"}!
              </h3>
              <p className="text-sm text-[#5F6368] max-w-sm mx-auto">
                Our principal design team will connect with you within 2 hours to confirm your consultation schedule and discuss initial concepts.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:+919585544446"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#1C6BAE] text-white text-xs tracking-wider uppercase font-medium hover:bg-[#124B78] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-white" />
                  Direct Studio: +91 95855 44446
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded border border-[#E5E7E9] text-xs font-medium text-[#111111] hover:bg-[#F7F8F6] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.16em] font-semibold text-[#111111] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Karthik Rajan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-[#E5E7E9] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#1C6BAE] focus:ring-1 focus:ring-[#1C6BAE] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.16em] font-semibold text-[#111111] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-[#E5E7E9] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#1C6BAE] focus:ring-1 focus:ring-[#1C6BAE] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.16em] font-semibold text-[#111111] mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-[#E5E7E9] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#1C6BAE] focus:ring-1 focus:ring-[#1C6BAE] transition-colors"
                  >
                    <option value="Residential">Residential Architecture</option>
                    <option value="Modular Kitchen">Architectural Kitchen</option>
                    <option value="Wardrobes">Bespoke Wardrobes</option>
                    <option value="Commercial">Commercial Atelier / Studio</option>
                    <option value="Turnkey">Turnkey Architectural Handover</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.16em] font-semibold text-[#111111] mb-1.5">
                    Location / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Chennai, Coimbatore, etc."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-[#E5E7E9] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#1C6BAE] focus:ring-1 focus:ring-[#1C6BAE] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.16em] font-semibold text-[#111111] mb-1.5">
                  Brief Requirements / Spatial Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="3BHK residence, architectural lighting and custom joinery requirement..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded border border-[#E5E7E9] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#1C6BAE] focus:ring-1 focus:ring-[#1C6BAE] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 sm:py-3.5 px-6 rounded bg-[#1C6BAE] hover:bg-[#124B78] text-white font-sans font-medium text-xs tracking-[0.14em] uppercase flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-[0.99]"
                >
                  Confirm Atelier Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center pt-2">
                <span className="text-xs text-[#5F6368]">
                  Or speak directly with our studio at{" "}
                  <a
                    href="tel:+919585544446"
                    className="font-semibold text-[#111111] hover:text-[#1C6BAE] transition-colors"
                  >
                    +91 95855 44446
                  </a>
                </span>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

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
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto bg-[#FDFBF7] border-[#DAD6CB] text-[#0E0F0A] p-0 shadow-2xl rounded-2xl">
        <div className="relative p-5 sm:p-8">
          {/* Header */}
          <DialogHeader className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-6 bg-[#EDB21F]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#EDB21F] font-semibold">
                Honey Craft Interior Experience
              </span>
            </div>
            <DialogTitle className="font-display text-2xl sm:text-3xl text-[#0E0F0A] font-medium tracking-tight">
              Book a Free Consultation
            </DialogTitle>
            <DialogDescription className="text-sm text-[#77766F] font-sans mt-1">
              Discuss your space, requirements, and budget with our senior design architects.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EDB21F]/15 text-[#EDB21F] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-display text-2xl font-medium text-[#0E0F0A]">
                Thank You, {formData.name || "Valued Client"}!
              </h3>
              <p className="text-sm text-[#77766F] max-w-sm mx-auto">
                Our design specialist will connect with you within 2 hours to confirm your consultation slot and share custom layout concepts.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:+919585544446"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0E0F0A] text-[#FDFBF7] text-xs tracking-wider uppercase font-medium hover:bg-[#1C1E14] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EDB21F]" />
                  Call Directly: +91 95855 44446
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-full border border-[#DAD6CB] text-xs font-medium text-[#0E0F0A] hover:bg-[#F3EFE7] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-[#0E0F0A] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Karthik Rajan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DAD6CB] bg-white text-sm focus:outline-none focus:border-[#EDB21F] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0E0F0A] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DAD6CB] bg-white text-sm focus:outline-none focus:border-[#EDB21F] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-[#0E0F0A] mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DAD6CB] bg-white text-sm focus:outline-none focus:border-[#EDB21F] transition-colors"
                  >
                    <option value="Residential">Residential Interior</option>
                    <option value="Modular Kitchen">Modular Kitchen</option>
                    <option value="Wardrobes">Wardrobes & Storage</option>
                    <option value="Commercial">Commercial / Office</option>
                    <option value="Turnkey">Complete Turnkey Interior</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0E0F0A] mb-1">
                    Location / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Chennai, Coimbatore, etc."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DAD6CB] bg-white text-sm focus:outline-none focus:border-[#EDB21F] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#0E0F0A] mb-1">
                  Brief Requirements / Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="3BHK interior, false ceiling and modular kitchen requirement..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#DAD6CB] bg-white text-sm focus:outline-none focus:border-[#EDB21F] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-full bg-[#EDB21F] hover:bg-[#C89212] text-[#0E0F0A] font-medium text-sm flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg active:scale-[0.99]"
                >
                  Confirm Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center pt-2">
                <span className="text-xs text-[#77766F]">
                  Or call directly at{" "}
                  <a
                    href="tel:+919585544446"
                    className="font-semibold text-[#0E0F0A] hover:text-[#EDB21F] transition-colors"
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

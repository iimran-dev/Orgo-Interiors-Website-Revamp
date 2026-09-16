"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl bg-[#0B2A43] border border-white/20 text-white p-3 sm:p-5 overflow-hidden shadow-2xl rounded">
        <DialogHeader className="p-2">
          <DialogTitle className="font-display text-lg font-medium text-white">
            ORGO Interiors — Crafting Timeless Architecture
          </DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video w-full rounded overflow-hidden bg-black/90 border border-white/10">
          <iframe
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=1&rel=0"
            title="ORGO Interiors Brand Story"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

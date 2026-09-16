import React from "react";
import Link from "next/link";
import Image from "next/image";

import { getAssetUrl } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "gold" | "dark" | "white";
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const dimensions = {
    sm: { width: 44, height: 44, imgClass: "h-10 w-10 sm:h-11 sm:w-11" },
    md: { width: 56, height: 56, imgClass: "h-12 w-12 sm:h-14 sm:w-14" },
    lg: { width: 72, height: 72, imgClass: "h-16 w-16 sm:h-18 sm:w-18" },
    xl: { width: 96, height: 96, imgClass: "h-20 w-20 sm:h-24 sm:w-24" },
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center justify-center group select-none ${className}`}
      aria-label="Honey Craft Interior Home"
    >
      <div className="relative transition-transform duration-300 group-hover:scale-105">
        <Image
          src={getAssetUrl("/images/logo.webp")}
          alt="Honey Craft Interior Official Logo"
          width={dimensions.width}
          height={dimensions.height}
          priority
          className={`${dimensions.imgClass} object-contain rounded-full`}
        />
      </div>
    </Link>
  );
}

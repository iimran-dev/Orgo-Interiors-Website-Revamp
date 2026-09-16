import React from "react";
import Link from "next/link";
import Image from "next/image";

import { getAssetUrl } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "gold" | "dark" | "white";
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({
  className = "",
  size = "md",
  variant = "dark",
}: LogoProps) {
  const dimensions = {
    sm: { width: 106, height: 45, imgClass: "h-8 sm:h-9 w-auto" },
    md: { width: 141, height: 60, imgClass: "h-10 sm:h-12 w-auto" },
    lg: { width: 176, height: 75, imgClass: "h-14 sm:h-16 w-auto" },
    xl: { width: 220, height: 94, imgClass: "h-18 sm:h-20 w-auto" },
  }[size];

  const variantClass =
    variant === "white"
      ? "brightness-0 invert"
      : variant === "gold"
      ? "brightness-110 sepia hue-rotate-15"
      : "";

  return (
    <Link
      href="/"
      className={`inline-flex items-center justify-center group select-none ${className}`}
      aria-label="Orgo Interiors Home"
    >
      <div className="relative transition-transform duration-300 group-hover:scale-105">
        <Image
          src={getAssetUrl("/images/logo.png")}
          alt="Orgo Interiors Official Logo"
          width={dimensions.width}
          height={dimensions.height}
          priority
          className={`${dimensions.imgClass} ${variantClass} object-contain`}
        />
      </div>
    </Link>
  );
}

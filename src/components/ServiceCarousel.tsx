"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { getWhatsAppServiceUrl } from "@/data/company";
import { WhatsAppIcon } from "@/components/SocialIcons";

export interface CarouselService {
  id: string;
  name: string;
  image: string;
  category: string;
}

// Exactly the 8 authentic services with real operational photography
export const carouselServices: CarouselService[] = [
  {
    id: "home-deep-cleaning",
    name: "Home Deep Cleaning",
    image: "/images/services/home-deep-cleaning.jpg",
    category: "Residential",
  },
  {
    id: "sofa-cleaning",
    name: "Sofa Cleaning & Shampooing",
    image: "/images/services/sofa-cleaning.jpg",
    category: "Upholstery",
  },
  {
    id: "carpet-cleaning",
    name: "Carpet Cleaning",
    image: "/images/services/carpet-cleaning.jpg",
    category: "Floor Care",
  },
  {
    id: "floor-cleaning",
    name: "Floor Cleaning & Scrubbing",
    image: "/images/services/floor-cleaning.jpg",
    category: "Restoration",
  },
  {
    id: "furniture-polishing",
    name: "Furniture Polishing",
    image: "/images/services/furniture-polishing.jpg",
    category: "Wood Care",
  },
  {
    id: "water-tank-cleaning",
    name: "Water Tank Cleaning",
    image: "/images/services/water-tank-cleaning.jpg",
    category: "Hygiene",
  },
  {
    id: "roof-cleaning",
    name: "Roof Cleaning",
    image: "/images/services/roof-cleaning.jpg",
    category: "Exterior",
  },
  {
    id: "interlock-cleaning",
    name: "Interlock Cleaning & Washing",
    image: "/images/services/interlock-cleaning.jpg",
    category: "Pavement",
  },
];

export default function ServiceCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate for seamless infinite loop with zero jumps
  const infiniteCards = [...carouselServices, ...carouselServices];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Minimal Typography */}
        <div className="lg:col-span-4 space-y-6">
          <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#666D75] block">
            CLEANING SERVICES IN ALAKODE & KANNUR
          </span>

          <h2 className="text-[38px] sm:text-[48px] lg:text-[54px] font-light tracking-tight text-[#087EB5] leading-[1.12]">
            Browse Our <br />
            <span className="text-[#17191C]">Cleaning Services</span>
          </h2>

          <p className="text-[16px] text-[#666D75] leading-relaxed max-w-sm">
            Professional solutions thoughtfully delivered with dedicated equipment. Hover over any service to pause and enquire.
          </p>

          <div className="pt-2 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBFBF0] text-[#128C7E] border border-[#25D366]/30 text-[12px] font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Ultra-Smooth Continuous Loop</span>
            </span>
          </div>

          <div className="pt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#087EB5] hover:text-[#065A82] transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Ultra Smooth Hardware-Accelerated Marquee */}
        <div
          className="lg:col-span-8 overflow-hidden relative group/marquee py-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle Side Fade Edges for Luxury Depth */}
          <div className="absolute left-0 top-0 bottom-0 w-8 z-20 bg-gradient-to-r from-white to-transparent pointer-events-none hidden sm:block" />
          <div className="absolute right-0 top-0 bottom-0 w-12 z-20 bg-gradient-to-l from-white to-transparent pointer-events-none hidden sm:block" />

          {/* Continuous Hardware-Accelerated Loop Track */}
          <div
            className="animate-marquee-ultra flex gap-6"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {infiniteCards.map((service, idx) => {
              const whatsappUrl = getWhatsAppServiceUrl(service.name);

              return (
                <div
                  key={`${service.id}-${idx}`}
                  className="flex-shrink-0 w-[285px] sm:w-[315px] h-[450px] sm:h-[480px] relative rounded-[28px] overflow-hidden shadow-[0_14px_45px_rgb(0,0,0,0.12)] group snap-start border border-[#E8EDF1] bg-neutral-900 select-none transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* Full Bleed Authentic Photo */}
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 640px) 285px, 315px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority={idx < 4}
                  />

                  {/* Gradient Overlay for Crisp Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5 pointer-events-none" />

                  {/* Bottom Content: Pill + WhatsApp Theme Button */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 space-y-3 z-10 flex flex-col items-center">
                    {/* Service Name Pill (Glass Badge matching reference screenshot) */}
                    <div className="w-full py-2.5 px-4 rounded-full border border-white/40 bg-black/50 backdrop-blur-md text-center shadow-sm">
                      <span className="text-[15px] font-medium text-white tracking-wide block truncate">
                        {service.name}
                      </span>
                    </div>

                    {/* WhatsApp Enquiry Button */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] active:scale-[0.98] text-white text-[14px] font-semibold flex items-center justify-center gap-2.5 shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.5)] border border-[#1ebd5d] transition-all"
                    >
                      <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                      <span>WhatsApp Enquiry</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

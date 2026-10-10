"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { getWhatsAppServiceUrl } from "@/data/company";
import { WhatsAppIcon } from "@/components/SocialIcons";

export interface FeaturedService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export const featuredServicesList: FeaturedService[] = [
  {
    id: "home-deep-cleaning",
    name: "Home Deep Cleaning",
    tagline: "Comprehensive Residential Hygiene",
    description:
      "Thorough cleaning for every room, corner, and surface. We restore living spaces to a fresh, healthy, and spotless condition.",
    image: "/images/services/home-deep-cleaning.jpg",
    features: [
      "Floor, window, and corner detailing",
      "Kitchen and bathroom sanitization",
      "Safe, eco-friendly cleaning agents",
    ],
  },
  {
    id: "sofa-cleaning",
    name: "Sofa Cleaning & Shampooing",
    tagline: "Upholstery & Fabric Care",
    description:
      "Specialized foam shampooing and extraction to remove embedded dust, stains, and odors from fabric and leather furniture.",
    image: "/images/services/sofa-cleaning.jpg",
    features: [
      "Fabric inspection and spot treatment",
      "Deep extraction without fabric damage",
      "Quick drying with restored freshness",
    ],
  },
  {
    id: "floor-cleaning",
    name: "Floor Cleaning & Scrubbing",
    tagline: "Machine Scrubbed Surface Restoration",
    description:
      "Mechanical rotary scrubbing for tile, granite, and marble floors, lifting deeply set grout dirt and daily residue.",
    image: "/images/services/floor-cleaning.jpg",
    features: [
      "Deep grout line and tile scrubbing",
      "Surface-specific non-abrasive pads",
      "Streak-free neutral pH shine finish",
    ],
  },
  {
    id: "furniture-polishing",
    name: "Furniture Polishing",
    tagline: "Wood & Surface Refinement",
    description:
      "Gentle cleaning and buffing for wooden tables, cabinets, and decorative furniture to enhance grain and protect wood longevity.",
    image: "/images/services/furniture-polishing.jpg",
    features: [
      "Surface prep for teak and hardwoods",
      "Protective polish application",
      "Guards against dust and moisture",
    ],
  },
  {
    id: "water-tank-cleaning",
    name: "Water Tank Cleaning",
    tagline: "Disinfected Water Storage",
    description:
      "Multi-stage cleaning and sanitization for overhead and underground tanks, clearing sediment sludge and bacterial buildup.",
    image: "/images/services/water-tank-cleaning.jpg",
    features: [
      "Sludge and sediment extraction",
      "High-pressure mechanical wash",
      "Safe anti-bacterial disinfection",
    ],
  },
  {
    id: "carpet-cleaning",
    name: "Carpet & Rug Cleaning",
    tagline: "Deep Fiber Care",
    description:
      "Deep extraction cleaning for living area rugs and runners, lifting trapped dust mites and restoring soft texture.",
    image: "/images/services/carpet-cleaning.jpg",
    features: [
      "Deep dust and allergen extraction",
      "High-traffic pre-conditioning",
      "Gentle fiber wash and restoration",
    ],
  },
  {
    id: "roof-cleaning",
    name: "Roof & Terrace Cleaning",
    tagline: "High-Pressure Exterior Care",
    description:
      "High-pressure jet washing for outdoor terraces and roofs, removing stubborn moss, algae, and weather stains.",
    image: "/images/services/roof-cleaning.jpg",
    features: [
      "Pressure wash for tiles and concrete",
      "Removes slippery moss and black algae",
      "Rainwater gutter clearance",
    ],
  },
  {
    id: "interlock-cleaning",
    name: "Interlock Cleaning & Washing",
    tagline: "Courtyard & Driveway Restoration",
    description:
      "Surface washing for exterior interlock pavers and driveways, lifting weed accumulation, grime, and oil stains.",
    image: "/images/services/interlock-cleaning.jpg",
    features: [
      "Uniform paver surface cleaning",
      "Removes moss between interlock joints",
      "Clean curb appeal for homes and entries",
    ],
  },
];

export default function AlternatingServices() {
  return (
    <section id="services" className="py-20 md:py-24 border-b border-[#E8EDF1]/60 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6 space-y-16 sm:space-y-20">
        {/* Section Header - Clean, Light Typography */}
        <div className="max-w-xl space-y-2">
          <p className="text-[12px] font-normal uppercase tracking-wider text-[#087EB5]">
            Our Offerings
          </p>
          <h2 className="text-[32px] sm:text-[42px] font-light tracking-tight text-[#17191C]">
            Services
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#666D75] font-light">
            Professional cleaning and housekeeping solutions delivered across Kannur.
          </p>
        </div>

        {/* Alternating Service Rows - Clean & Minimal, No Card Boxes */}
        <div className="space-y-16 sm:space-y-20">
          {featuredServicesList.map((service, index) => {
            const isReverse = index % 2 === 1;
            const whatsappUrl = getWhatsAppServiceUrl(service.name);

            return (
              <div
                key={service.id}
                className={`flex flex-col ${
                  isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8 lg:gap-14 pt-8 ${
                  index !== 0 ? "border-t border-[#E8EDF1]/60" : ""
                }`}
              >
                {/* Text Information Column */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#087EB5] font-light block mb-1">
                      {service.tagline}
                    </span>
                    <h3 className="text-[24px] sm:text-[28px] font-normal text-[#17191C] leading-snug">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-[15px] text-[#666D75] font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Clean Feature List */}
                  <ul className="space-y-2 pt-1 text-[13px] sm:text-[14px] text-[#4A5056] font-light">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#087EB5] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Minimal Action Links */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBFBF0] text-[#128C7E] hover:bg-[#25D366] hover:text-white border border-[#25D366]/30 text-[13px] font-medium transition-all group shadow-2xs"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white transition-colors" />
                      <span>WhatsApp Enquiry</span>
                    </a>

                    <Link
                      href={`/contact?service=${encodeURIComponent(service.name)}`}
                      className="inline-flex items-center gap-1 text-[13px] font-light text-[#666D75] hover:text-[#17191C] transition-colors"
                    >
                      <span>Get a Free Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Image Column - Minimal clean frame, no heavy shadow */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#E8EDF1]">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

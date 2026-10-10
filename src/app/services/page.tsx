"use client";

import { useState } from "react";
import Link from "next/link";
import { servicesData, ServiceCategory } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import { companyDetails, getWhatsAppContractUrl } from "@/data/company";
import { ArrowRight, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories: Array<"All" | ServiceCategory> = [
    "All",
    "Residential",
    "Commercial",
    "Specialized",
  ];

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((svc) => svc.category === selectedCategory);

  return (
    <div className="bg-white text-[#17191C]">
      {/* Header Banner */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[#E8EDF1]/60 bg-[#F7FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-[38px] sm:text-[50px] lg:text-[56px] font-light tracking-tight text-[#087EB5] leading-[1.15]">
              Our Services
            </h1>
            <p className="text-[20px] sm:text-[24px] font-normal text-[#17191C] leading-[1.3]">
              Complete Cleaning Solutions.
            </p>
            <p className="text-[17px] sm:text-[18px] text-[#666D75] leading-relaxed">
              Thoughtfully delivered cleaning services for homes, offices, and
              commercial spaces in Alakode and across Kannur, Kerala. Every
              service includes dedicated WhatsApp enquiry support.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-10">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? servicesData.length
                  : servicesData.filter((s) => s.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-normal transition-all cursor-pointer flex items-center gap-2 ${
                    selectedCategory === cat
                      ? "bg-[#17191C] text-white shadow-sm"
                      : "bg-white text-[#666D75] hover:text-[#17191C] border border-[#E8EDF1]"
                  }`}
                >
                  <span>{cat === "All" ? "All Services" : `${cat} Cleaning`}</span>
                  <span
                    className={`text-[12px] px-1.5 py-0.2 rounded-full ${
                      selectedCategory === cat
                        ? "bg-white/20 text-white"
                        : "bg-[#F7FAFC] text-[#666D75]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Maintenance Contracts Callout */}
          <div className="mt-20 p-10 rounded-2xl bg-[#F7FAFC] border border-[#E8EDF1] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-2">
              <span className="text-[11px] font-medium uppercase tracking-wider text-[#087EB5]">
                Recurring Care
              </span>
              <h3 className="text-[24px] font-normal text-[#17191C]">
                Need ongoing monthly or annual cleaning arrangements?
              </h3>
              <p className="text-[15px] text-[#666D75] leading-relaxed max-w-2xl">
                We design tailored general maintenance contracts for commercial
                workspaces, shopping malls, guest houses, and private residences.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
              <a
                href={getWhatsAppContractUrl("General Maintenance Contract")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full text-[14px] font-medium text-[#128C7E] bg-[#EBFBF0] hover:bg-[#25D366] hover:text-white border border-[#25D366]/30 text-center transition-all flex items-center justify-center gap-2 group shadow-2xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                <span>WhatsApp Enquiry (Maintenance)</span>
              </a>
              <Link
                href="/contact"
                className="w-full py-3.5 px-6 rounded-full text-[14px] font-medium text-[#17191C] bg-white border border-[#E8EDF1] hover:bg-[#F7FAFC] text-center transition-colors"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

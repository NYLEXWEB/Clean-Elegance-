"use client";

import { useSearchParams } from "next/navigation";
import { companyDetails } from "@/data/company";
import ContactForm from "@/components/ContactForm";
import { Phone, MapPin, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { Suspense } from "react";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service") || "";

  return (
    <div className="bg-white text-[#17191C]">
      {/* Header */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[#E8EDF1]/60 bg-[#F7FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-[38px] sm:text-[50px] lg:text-[56px] font-light tracking-tight text-[#087EB5] leading-[1.15]">
              Contact Us
            </h1>
            <p className="text-[20px] sm:text-[24px] font-normal text-[#17191C] leading-[1.3]">
              Let's Make Your Space Feel Better.
            </p>
            <p className="text-[17px] sm:text-[18px] text-[#666D75] leading-relaxed">
              Tell us what needs cleaning, and we'll help you find a suitable
              service for your space in Alakode, Kannur, and surrounding regions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section id="quote" className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact Info & Address */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-[26px] font-normal text-[#17191C] mb-2">
                  Direct Contact Details
                </h2>
                <p className="text-[15px] text-[#666D75]">
                  Reach out directly by phone, WhatsApp, or visit our office in Alakode.
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone Card */}
                <div className="p-6 rounded-2xl bg-white border border-[#E8EDF1] space-y-2 hover:border-[#087EB5]/30 transition-colors">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#087EB5] block">
                    Phone Inquiries
                  </span>
                  <a
                    href={companyDetails.phoneTel}
                    className="text-[20px] font-medium text-[#17191C] hover:text-[#087EB5] flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#087EB5]" />
                    <span>{companyDetails.phone}</span>
                  </a>
                  <p className="text-[13px] text-[#666D75]">
                    Click to call for immediate bookings and consultations.
                  </p>
                </div>

                {/* WhatsApp Card */}
                <div className="p-6 rounded-2xl bg-[#EBFBF0]/60 border border-[#25D366]/30 space-y-2">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#128C7E] block">
                    WhatsApp Enquiry
                  </span>
                  <a
                    href={companyDetails.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[17px] font-medium text-[#128C7E] hover:text-[#0b534b] flex items-center gap-2 transition-colors"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                    <span>WhatsApp Enquiry (+91 75588 50413)</span>
                  </a>
                  <p className="text-[13px] text-[#666D75]">
                    Send photos or specifications to receive a tailored estimate.
                  </p>
                </div>

                {/* Address Card */}
                <div className="p-6 rounded-2xl bg-white border border-[#E8EDF1] space-y-3">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#666D75] block">
                    Office Address
                  </span>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#087EB5] mt-0.5 flex-shrink-0" />
                    <div className="text-[15px] text-[#17191C] leading-snug">
                      <p className="font-medium">{companyDetails.address.building}</p>
                      <p>{companyDetails.address.locality}, {companyDetails.address.city}</p>
                      <p>{companyDetails.address.district}, {companyDetails.address.state} - {companyDetails.address.pincode}</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#E8EDF1]">
                    <a
                      href={companyDetails.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#087EB5] hover:underline"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Service Hours */}
                <div className="p-6 rounded-2xl bg-[#F7FAFC] border border-[#E8EDF1] space-y-2">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#666D75] block">
                    Operating Schedule
                  </span>
                  <div className="flex items-center gap-2 text-[15px] font-medium text-[#17191C]">
                    <Clock className="w-4 h-4 text-[#087EB5]" />
                    <span>Continuous Booking & Flexible Execution</span>
                  </div>
                  <p className="text-[13px] text-[#666D75]">
                    Cleaning appointments are scheduled to match your convenience, including early morning or weekend slots.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm initialService={requestedService} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ContactPageContent />
    </Suspense>
  );
}

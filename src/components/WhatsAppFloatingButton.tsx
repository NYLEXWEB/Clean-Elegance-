"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { companyDetails } from "@/data/company";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export default function WhatsAppFloatingButton() {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const defaultMessage = encodeURIComponent(
    "Hello Clean Elegance, I would like to enquire about your cleaning services in Alakode/Kannur."
  );
  const whatsappUrl = `https://wa.me/${companyDetails.whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-end gap-3 pointer-events-none">
      {/* Tooltip for WhatsApp (Desktop) */}
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md text-[#17191C] px-3.5 py-2 rounded-full shadow-lg border border-[#E8EDF1] text-[13px] font-normal mb-1.5 pointer-events-auto animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            Need cleaning assistance? Chat with us
          </span>
          <button
            onClick={() => setTooltipVisible(false)}
            aria-label="Close tooltip"
            className="text-[#666D75] hover:text-[#17191C] p-0.5 transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Column: Facebook, Instagram, WhatsApp */}
      <div className="flex flex-col items-center gap-2.5 pointer-events-auto">
        {/* Facebook Floating Icon */}
        <a
          href={companyDetails.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Clean Elegance on Facebook"
          title="Visit Facebook"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md text-[#1877F2] hover:bg-[#1877F2] hover:text-white border border-[#E8EDF1] shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#1877F2]/40"
        >
          <FacebookIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform group-hover:scale-105" />
          <span className="sr-only">Facebook</span>
        </a>

        {/* Instagram Floating Icon */}
        <a
          href={companyDetails.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Clean Elegance on Instagram"
          title="Visit Instagram"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md text-[#E1306C] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white border border-[#E8EDF1] shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#E1306C]/40"
        >
          <InstagramIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform group-hover:scale-105" />
          <span className="sr-only">Instagram</span>
        </a>

        {/* WhatsApp Floating Button (Primary) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Clean Elegance on WhatsApp"
          title="WhatsApp Enquiry"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-108 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        >
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-105" />
          <span className="sr-only">WhatsApp Enquiry</span>
        </a>
      </div>
    </div>
  );
}

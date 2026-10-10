"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  question: string;
  answer: string;
}

export const whyChooseItems: AccordionItem[] = [
  {
    question: "Why choose Clean Elegance for your space?",
    answer:
      "Clean Elegance delivers comprehensive, detail-oriented cleaning solutions across Alakode and Kannur. From detailed deep cleaning to routine maintenance, our focus is on punctuality, surface-appropriate care, and reliable standards without generic shortcuts.",
  },
  {
    question: "Do you handle both residential and commercial properties?",
    answer:
      "Yes. We serve family residences, private villas, apartments, corporate offices, guest houses, and large commercial spaces such as shopping malls with tailored cleaning protocols suited to each environment.",
  },
  {
    question: "What specialized cleaning options do you provide?",
    answer:
      "We provide specialized care including sofa cleaning and shampooing, carpet extraction, interlock paver washing, water tank cleaning, roof clearing, and hard-to-reach fixture degreasing.",
  },
  {
    question: "Do you offer professional housekeeping and ongoing maintenance contracts?",
    answer:
      "Yes. We offer flexible ongoing arrangements including monthly maintenance plans and annual cleaning contracts for businesses and residences requiring consistent, scheduled care.",
  },
  {
    question: "How do I get an estimate and schedule a service?",
    answer:
      "You can contact us directly by calling +91 75588 50413 or clicking our WhatsApp button to share your space details or photos for a clear, no-obligation quotation.",
  },
];

export default function WhyChooseAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto divide-y divide-[#E8EDF1] border-y border-[#E8EDF1]">
      {whyChooseItems.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="transition-colors hover:bg-[#F7FAFC]/50">
            <button
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              className="w-full py-6 flex items-center justify-between text-left gap-6 cursor-pointer focus:outline-none"
            >
              <span className="text-[17px] sm:text-[19px] font-normal text-[#17191C] leading-snug">
                {item.question}
              </span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 text-[#087EB5] bg-[#DFF4FF] ${
                  isOpen ? "rotate-180 bg-[#087EB5] text-white" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </span>
            </button>

            {isOpen && (
              <div className="pb-6 pr-10 animate-in fade-in duration-200">
                <p className="text-[15px] sm:text-[16px] font-normal text-[#666D75] leading-[1.8]">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

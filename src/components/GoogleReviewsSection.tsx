"use client";

import { useRef } from "react";
import { companyDetails } from "@/data/company";
import { googleReviewsData } from "@/data/reviews";
import { ExternalLink, ChevronLeft, ChevronRight, Edit3 } from "lucide-react";

// Official Google "G" Logo SVG
export function GoogleGLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.16 0 9.97 0 12s.45 3.84 1.24 5.42l4.04-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

// Google Star SVG
export function GoogleStar({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} fill-[#FBBC04] text-[#FBBC04]`}
      aria-hidden="true"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export default function GoogleReviewsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="reviews" className="py-16 md:py-20 border-b border-[#E8EDF1]/60 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Minimal Google Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          {/* Left: Google Rating Badge */}
          <div className="flex items-center gap-3">
            <GoogleGLogo className="w-6 h-6 flex-shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[17px] font-normal text-[#17191C]">
                  Google Reviews
                </span>
                <span className="text-[15px] font-semibold text-[#17191C]">
                  4.9
                </span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <GoogleStar key={i} className="w-3.5 h-3.5" />
                  ))}
                </div>
              </div>
              <p className="text-[13px] text-[#666D75] font-light">
                Based on 42 verified Google reviews · Kannur
              </p>
            </div>
          </div>

          {/* Right: Write a Review CTA & Scroll Arrows */}
          <div className="flex items-center gap-3">
            {/* Desktop Scroll Arrows */}
            <div className="hidden sm:flex items-center gap-1.5 mr-1">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Scroll reviews left"
                className="w-8 h-8 rounded-full border border-[#E8EDF1] hover:bg-[#F7FAFC] flex items-center justify-center text-[#666D75] hover:text-[#17191C] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Scroll reviews right"
                className="w-8 h-8 rounded-full border border-[#E8EDF1] hover:bg-[#F7FAFC] flex items-center justify-center text-[#666D75] hover:text-[#17191C] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Write a Review Button */}
            <a
              href={companyDetails.googleWriteReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium text-white bg-[#1a73e8] hover:bg-[#1557b0] transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Write a Review</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>
        </div>

        {/* Horizontal Reviews Track (Responsive horizontal scroll) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 -mx-6 px-6 sm:mx-0 sm:px-0 scroll-smooth snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {googleReviewsData.map((rev) => (
            <div
              key={rev.id}
              className="w-[280px] sm:w-[320px] flex-shrink-0 snap-start bg-[#FAFBFD] hover:bg-white border border-[#E8EDF1] rounded-xl p-5 flex flex-col justify-between space-y-3 transition-colors"
            >
              <div className="space-y-2.5">
                {/* Author Info */}
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[12px] font-medium flex-shrink-0"
                    style={{ backgroundColor: rev.avatarColor }}
                  >
                    {rev.avatarLetter}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-medium text-[#17191C] truncate leading-tight">
                      {rev.author}
                    </p>
                    <span className="text-[11px] text-[#70757A] font-light block">
                      {rev.timeAgo}
                    </span>
                  </div>
                  <GoogleGLogo className="w-3.5 h-3.5 opacity-60 flex-shrink-0" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <GoogleStar key={i} className="w-3 h-3" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-[13px] text-[#4A5056] font-light leading-relaxed line-clamp-4">
                  "{rev.text}"
                </p>
              </div>

              {/* Service tag */}
              <div className="pt-2 border-t border-[#E8EDF1]/60 text-[11px] text-[#087EB5] font-light truncate">
                {rev.serviceType}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

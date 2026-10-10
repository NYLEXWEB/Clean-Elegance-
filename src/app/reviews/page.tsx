import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Google Customer Reviews | Clean Elegance Alakode, Kannur",
  description:
    "Read real Google customer reviews for Clean Elegance. Top-rated deep cleaning and housekeeping services in Alakode, Kannur, Kerala.",
};

export default function ReviewsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Top breadcrumb / navigation bar */}
      <div className="bg-[#F8F9FA] border-b border-[#DADCE0] py-4">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#1A73E8] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <span className="text-[13px] text-[#70757A]">
            Clean Elegance · Google Business Profile
          </span>
        </div>
      </div>

      <GoogleReviewsSection />
    </div>
  );
}

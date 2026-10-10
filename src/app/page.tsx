import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Phone, Star, Sparkles } from "lucide-react";
import { companyDetails, getWhatsAppContractUrl } from "@/data/company";
import { WhatsAppIcon } from "@/components/SocialIcons";
import AlternatingServices from "@/components/AlternatingServices";
import ContactForm from "@/components/ContactForm";
import GalleryGrid from "@/components/GalleryModal";
import WhyChooseAccordion from "@/components/WhyChooseAccordion";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";

export default function Home() {
  return (
    <div className="bg-white text-[#17191C]">
      {/* ==================================================
          1. HERO SECTION WITH SEAMLESS BLENDED VIDEO
          ================================================== */}
      <section id="hero" className="relative overflow-hidden bg-white border-b border-[#E8EDF1]/60 min-h-screen lg:min-h-[700px] flex items-center pt-20 lg:pt-0">
        {/* Background Video Layer with Seamless White Fog Blend */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] h-full pointer-events-none overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-[75%_center] lg:object-center"
          >
            <source src="/vidos/6195521-uhd_2160_3840_25fps.mp4" type="video/mp4" />
          </video>

          {/* White Foggy Gradient Overlays for Seamless Dissolve */}
          {/* 1. Left-to-right fade so video melts into the white page while remaining clearly visible on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 via-50% sm:via-40% to-white/10 lg:from-white lg:via-white/80 lg:via-30% lg:to-transparent pointer-events-none" />

          {/* 2. Top soft white fog transition */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/70 to-transparent pointer-events-none" />

          {/* 3. Bottom soft white fog transition */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />

          {/* 4. Soft atmospheric veil */}
          <div className="absolute inset-0 bg-white/10 pointer-events-none" />
        </div>

        {/* Content Container - Left Aligned, Slim Typography */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 py-8 sm:py-16 lg:py-24 w-full">
          <div className="max-w-xl text-left space-y-4 sm:space-y-6">

            {/* Headline: Slim, Elegant Typography */}
            <h1 className="text-[32px] sm:text-[46px] lg:text-[60px] font-light tracking-[-0.03em] leading-[1.12] text-[#17191C]">
              A Cleaner Space. <br />
              <span className="text-[#087EB5] font-normal">A Better Feeling.</span>
            </h1>

            {/* Description: Light & Crisp */}
            <p className="text-[14px] sm:text-[16px] lg:text-[17px] font-light text-[#555B62] leading-[1.65] max-w-lg">
              From homes and offices to commercial spaces, Clean Elegance
              delivers thoughtful cleaning solutions designed to restore calm,
              freshness, and order.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              <Link
                href="/contact#quote"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-[14px] font-normal text-white bg-[#087EB5] hover:bg-[#066a9a] transition-all shadow-2xs hover:shadow-xs active:translate-y-0.5 cursor-pointer text-center"
              >
                Get a Free Quote
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full text-[14px] font-light text-[#17191C] bg-white/85 hover:bg-white border border-[#E8EDF1] transition-all cursor-pointer backdrop-blur-xs text-center"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#666D75]" />
              </Link>
            </div>

            {/* Trust Indicators in clean horizontal row */}
            <div className="pt-4 sm:pt-6 border-t border-[#E8EDF1]/60 flex flex-wrap items-center gap-4 sm:gap-6 text-[12px] sm:text-[13px] font-light text-[#666D75]">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#087EB5]" />
                <span>Residential</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#087EB5]" />
                <span>Commercial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#087EB5]" />
                <span>Housekeeping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          2. ABOUT US SECTION
          ================================================== */}
      <section id="about" className="py-20 md:py-24 border-b border-[#E8EDF1]/60 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E8EDF1]">
                <Image
                  src="/images/office.jpg"
                  alt="Clean Elegance commercial and residential care"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1">
                <span className="text-[12px] font-normal uppercase tracking-wider text-[#087EB5]">
                  About Us
                </span>
                <h2 className="text-[30px] sm:text-[38px] font-light tracking-tight text-[#17191C]">
                  Clean Spaces. Thoughtfully Maintained.
                </h2>
              </div>

              <p className="text-[15px] sm:text-[16px] text-[#666D75] font-light leading-relaxed">
                Clean Elegance provides dependable cleaning and housekeeping
                services in Alakode and Kannur district. Rather than generic shortcuts,
                our work emphasizes thoroughness, punctuality, and respectful conduct.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#087EB5] hover:text-[#065A82] transition-colors"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          3. SERVICES SECTION (After About section)
          ================================================== */}
      <AlternatingServices />

      {/* ==================================================
          4. WHY CHOOSE CLEAN ELEGANCE (After Services)
          ================================================== */}
      {/* ==================================================
          4. WHY CHOOSE CLEAN ELEGANCE
          ================================================== */}
      <section id="why-choose-us" className="py-20 md:py-24 border-b border-[#E8EDF1]/60 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-xl mb-12 space-y-2">
            <p className="text-[12px] font-normal uppercase tracking-wider text-[#087EB5]">
              Core Principles
            </p>
            <h2 className="text-[32px] sm:text-[42px] font-light tracking-tight text-[#17191C]">
              Why Choose Us
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#666D75] font-light">
              Built on reliability, punctuality, and respectful service.
            </p>
          </div>

          <WhyChooseAccordion />
        </div>
      </section>

      {/* ==================================================
          5. GALLERY
          ================================================== */}
      <section id="gallery" className="py-20 md:py-24 border-b border-[#E8EDF1]/60 scroll-mt-20">
        <div id="work" className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-xl mb-12 space-y-2">
            <p className="text-[12px] font-normal uppercase tracking-wider text-[#087EB5]">
              Real Results
            </p>
            <h2 className="text-[32px] sm:text-[42px] font-light tracking-tight text-[#17191C]">
              Gallery
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#666D75] font-light">
              Our cleaning and restoration work across Kannur.
            </p>
          </div>

          <GalleryGrid />
        </div>
      </section>

      {/* ==================================================
          6. GENERAL MAINTENANCE CONTRACTS (Minimal, No Card Style)
          ================================================== */}
      <section id="contracts" className="py-20 md:py-24 border-b border-[#E8EDF1]/60 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-xl mb-12 space-y-2">
            <p className="text-[12px] font-normal uppercase tracking-wider text-[#087EB5]">
              Ongoing Care
            </p>
            <h2 className="text-[32px] sm:text-[42px] font-light tracking-tight text-[#17191C]">
              Maintenance Contracts
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#666D75] font-light">
              Scheduled monthly and annual cleaning arrangements tailored to your facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 pt-4 border-t border-[#E8EDF1]/60">
            {/* Monthly Maintenance - Card free */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-wider text-[#087EB5] font-light block">
                Regular Maintenance
              </span>
              <h3 className="text-[22px] sm:text-[24px] font-normal text-[#17191C]">
                Monthly Maintenance
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#666D75] font-light leading-relaxed">
                For offices, guest houses, and residences requiring regular cleaning routines and scheduled visits.
              </p>
              <ul className="space-y-2 text-[13px] sm:text-[14px] text-[#4A5056] font-light pt-1">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#087EB5] flex-shrink-0" />
                  <span>Customizable weekly or bi-weekly visit schedule</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#087EB5] flex-shrink-0" />
                  <span>Floor scrubbing, surface care, and trash clearance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#087EB5] flex-shrink-0" />
                  <span>Dedicated cleaner assignment upon availability</span>
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href={getWhatsAppContractUrl("Monthly Maintenance Plan")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBFBF0] text-[#128C7E] hover:bg-[#25D366] hover:text-white border border-[#25D366]/30 text-[13px] font-medium transition-all group shadow-2xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white transition-colors" />
                  <span>WhatsApp Enquiry (Monthly Plan)</span>
                </a>
              </div>
            </div>

            {/* Annual Cleaning Contract - Card free */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-wider text-[#087EB5] font-light block">
                Long-Term Routine
              </span>
              <h3 className="text-[22px] sm:text-[24px] font-normal text-[#17191C]">
                Annual Cleaning Contract
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#666D75] font-light leading-relaxed">
                Longer-term cleaning arrangements with comprehensive periodic deep cleans and emergency care.
              </p>
              <ul className="space-y-2 text-[13px] sm:text-[14px] text-[#4A5056] font-light pt-1">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#087EB5] flex-shrink-0" />
                  <span>Year-round scheduled deep cleaning cycles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#087EB5] flex-shrink-0" />
                  <span>Includes specialized sofa, water tank, or glass care</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#087EB5] flex-shrink-0" />
                  <span>Tailored quotation based on property dimensions</span>
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href={getWhatsAppContractUrl("Annual Cleaning Contract")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBFBF0] text-[#128C7E] hover:bg-[#25D366] hover:text-white border border-[#25D366]/30 text-[13px] font-medium transition-all group shadow-2xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white transition-colors" />
                  <span>WhatsApp Enquiry (Annual Plan)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          7. GOOGLE REVIEWS SECTION (Minimal Horizontal Google Row)
          ================================================== */}
      <GoogleReviewsSection />

      {/* ==================================================
          8. CONTACT SECTION (Minimal, Card-free)
          ================================================== */}
      <section id="contact" className="py-20 md:py-24 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Contact Info - Clean, Minimal without cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <p className="text-[12px] font-normal uppercase tracking-wider text-[#087EB5]">
                  Get In Touch
                </p>
                <h2 className="text-[32px] sm:text-[42px] font-light tracking-tight text-[#17191C]">
                  Contact Us
                </h2>
                <p className="text-[15px] sm:text-[16px] text-[#666D75] font-light">
                  Tell us what needs cleaning, and we will share a quick estimate.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#E8EDF1]/60 text-[14px]">
                {/* Phone */}
                <div className="space-y-1">
                  <span className="text-[12px] text-[#666D75] font-light">
                    Direct Phone Support
                  </span>
                  <div>
                    <a
                      href={companyDetails.phoneTel}
                      className="text-[16px] font-normal text-[#087EB5] hover:text-[#065A82] flex items-center gap-2 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#087EB5]" />
                      <span>{companyDetails.phone}</span>
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-1 pt-2 border-t border-[#E8EDF1]/40">
                  <span className="text-[12px] text-[#666D75] font-light">
                    Office Location
                  </span>
                  <p className="text-[14px] text-[#17191C] font-normal leading-snug">
                    {companyDetails.address.full}
                  </p>
                  <a
                    href={companyDetails.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[#087EB5] hover:underline inline-block pt-0.5"
                  >
                    View on Google Maps →
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="space-y-1 pt-2 border-t border-[#E8EDF1]/40">
                  <span className="text-[12px] text-[#666D75] font-light">
                    WhatsApp Enquiry
                  </span>
                  <div>
                    <a
                      href={companyDetails.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBFBF0] text-[#128C7E] hover:bg-[#25D366] hover:text-white border border-[#25D366]/30 text-[13px] font-medium transition-all group shadow-2xs"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                      <span>WhatsApp Enquiry (+91 75588 50413)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

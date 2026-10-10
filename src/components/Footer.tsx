import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Star, ArrowUpRight } from "lucide-react";
import { companyDetails } from "@/data/company";
import { GoogleGLogo } from "@/components/GoogleReviewsSection";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F7FAFC] border-t border-[#E8EDF1] text-[#17191C]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Col: 4 cols */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/images/logo-transparent.png"
                  alt="Clean Elegance"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-[18px] font-medium tracking-tight text-[#17191C]">
                {companyDetails.name}
              </span>
            </Link>

            <p className="text-[14px] text-[#666D75] leading-relaxed max-w-sm">
              Professional cleaning and housekeeping solutions in Alakode,
              Kannur, Kerala. Thoughtfully delivered care for residential and
              commercial spaces.
            </p>

            {/* Google Business Badge */}
            <div className="pt-1">
              <a
                href="#reviews"
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-[#E8EDF1] hover:border-[#1A73E8] text-[13px] text-[#17191C] shadow-2xs transition-all hover:shadow-xs group"
              >
                <GoogleGLogo className="w-4 h-4 flex-shrink-0" />
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
                <span className="font-medium text-[#202124]">{companyDetails.googleReviewsCount} Google Reviews</span>
                <ArrowUpRight className="w-3 h-3 text-[#666D75] group-hover:text-[#1A73E8] transition-colors" />
              </a>
            </div>
          </div>

          {/* Nav Links: 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[12px] font-semibold text-[#17191C] uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#666D75]">
              <li>
                <Link href="/" className="hover:text-[#17191C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#17191C] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#17191C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#work" className="hover:text-[#17191C] transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-[#17191C] transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#17191C] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Categories: 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[12px] font-semibold text-[#17191C] uppercase tracking-wide">
              Service Solutions
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#666D75]">
              <li>
                <Link href="/services?cat=Residential" className="hover:text-[#17191C] transition-colors">
                  Home Deep Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services?cat=Residential" className="hover:text-[#17191C] transition-colors">
                  Sofa & Carpet Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services?cat=Commercial" className="hover:text-[#17191C] transition-colors">
                  Office & Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services?cat=Commercial" className="hover:text-[#17191C] transition-colors">
                  Mall & Guest House Housekeeping
                </Link>
              </li>
              <li>
                <Link href="/services?cat=Specialized" className="hover:text-[#17191C] transition-colors">
                  Interlock & Roof Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details: 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[12px] font-semibold text-[#17191C] uppercase tracking-wide">
              Alakode Office
            </h4>
            <div className="space-y-3 text-[14px] text-[#666D75]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#087EB5] mt-0.5 flex-shrink-0" />
                <span className="leading-snug">{companyDetails.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#087EB5] flex-shrink-0" />
                <a
                  href={companyDetails.phoneTel}
                  className="hover:text-[#17191C] transition-colors"
                >
                  {companyDetails.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href={companyDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] text-[#128C7E] font-medium transition-colors"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#E8EDF1] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#666D75]">
          <p>© {currentYear} {companyDetails.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 pr-2 sm:border-r border-[#E8EDF1]">
              <a
                href={companyDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Clean Elegance on WhatsApp"
                title="WhatsApp Enquiry"
                className="text-[#666D75] hover:text-[#25D366] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={companyDetails.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Clean Elegance on Instagram"
                title="Instagram"
                className="text-[#666D75] hover:text-[#E1306C] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={companyDetails.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Clean Elegance on Facebook"
                title="Facebook"
                className="text-[#666D75] hover:text-[#1877F2] transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href={companyDetails.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#17191C] transition-colors flex items-center gap-1"
            >
              <span>Google Maps Directions</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <Link href="/contact" className="hover:text-[#17191C] transition-colors">
              Book Cleaning
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

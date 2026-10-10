"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { companyDetails } from "@/data/company";
import { WhatsAppIcon } from "@/components/SocialIcons";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      // Transparent only at the very top of hero section
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar is transparent ONLY in the hero section on the homepage
  const isTransparent = isHomePage && !isScrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isTransparent
          ? "bg-transparent border-b border-transparent shadow-none"
          : "bg-white/95 backdrop-blur-md border-b border-[#E8EDF1] shadow-xs"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Brand Identity with Uploaded Logo */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group transition-opacity hover:opacity-90"
        >
          <div className="relative w-11 h-11 flex-shrink-0">
            <Image
              src="/images/logo-transparent.png"
              alt="Clean Elegance Logo"
              width={44}
              height={44}
              priority
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[17px] font-medium tracking-tight text-[#17191C] leading-none">
              {companyDetails.name}
            </span>
            <span className="text-[11px] font-normal text-[#666D75] tracking-wide mt-1">
              Alakode, Kannur
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[15px] font-normal text-[#17191C]">
          <Link
            href="/"
            className="text-[#17191C] hover:text-[#087EB5] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-[#666D75] hover:text-[#17191C] transition-colors"
          >
            About
          </Link>
          <Link
            href="/#services"
            className="text-[#666D75] hover:text-[#17191C] transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#gallery"
            className="text-[#666D75] hover:text-[#17191C] transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/#contact"
            className="text-[#666D75] hover:text-[#17191C] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right: Phone & CTA Button */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={companyDetails.phoneTel}
            className="flex items-center gap-2 text-[14px] text-[#666D75] hover:text-[#17191C] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#087EB5]" />
            <span>{companyDetails.phone}</span>
          </a>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[14px] font-medium text-white bg-[#087EB5] hover:bg-[#066a9a] transition-all duration-200 shadow-sm"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={companyDetails.phoneTel}
            aria-label="Call Clean Elegance"
            className="p-2 rounded-full text-[#087EB5] bg-[#DFF4FF]"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#17191C] hover:text-[#087EB5] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8EDF1] bg-white px-6 pt-5 pb-8 space-y-4 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3.5 text-[16px]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-[#17191C] font-medium border-b border-[#E8EDF1]/60"
            >
              Home
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-[#666D75] hover:text-[#17191C] border-b border-[#E8EDF1]/60"
            >
              About
            </Link>
            <Link
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-[#666D75] hover:text-[#17191C] border-b border-[#E8EDF1]/60"
            >
              Services
            </Link>
            <Link
              href="/#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-[#666D75] hover:text-[#17191C] border-b border-[#E8EDF1]/60"
            >
              Gallery
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-[#666D75] hover:text-[#17191C]"
            >
              Contact
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full text-[15px] font-medium text-white bg-[#087EB5]"
            >
              Get a Free Quote
            </Link>
            <a
              href={companyDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-full text-[15px] font-medium text-[#128C7E] bg-[#EBFBF0] hover:bg-[#25D366] hover:text-white border border-[#25D366]/30 flex items-center justify-center gap-2 transition-all group"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

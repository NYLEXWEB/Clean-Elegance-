import Image from "next/image";
import Link from "next/link";
import { companyDetails } from "@/data/company";
import { Check, ShieldCheck, MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Clean Elegance Alakode, Kannur",
  description:
    "Learn about Clean Elegance, our service principles, and our professional deep cleaning and housekeeping solutions in Alakode, Kannur, Kerala.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-[#17191C]">
      {/* Header */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[#E8EDF1]/60 bg-[#F7FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-[38px] sm:text-[50px] lg:text-[56px] font-light tracking-tight text-[#087EB5] leading-[1.15]">
              About Us
            </h1>
            <p className="text-[20px] sm:text-[24px] font-normal text-[#17191C] leading-[1.3]">
              Clean Spaces. Thoughtfully Maintained.
            </p>
            <p className="text-[17px] sm:text-[18px] text-[#666D75] leading-relaxed">
              A professional cleaning and housekeeping practice dedicated to
              restoring calm, freshness, and order to living and working
              environments in Alakode and Kannur district.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative with Editorial Image */}
      <section className="py-24 md:py-32 border-b border-[#E8EDF1]/60">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E8EDF1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] bg-[#F7FAFC]">
                <Image
                  src="/images/office.jpg"
                  alt="Clean Elegance commercial and residential cleaning standards"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-[32px] sm:text-[42px] font-light tracking-tight text-[#087EB5] leading-[1.18]">
                  Our Commitment
                </h2>
                <p className="text-[18px] sm:text-[20px] font-normal text-[#17191C] mt-2">
                  Professional Care Built on Consistency & Trust.
                </p>
              </div>

              <p className="text-[16px] text-[#666D75] leading-[1.8]">
                Clean Elegance provides cleaning and housekeeping services in
                Alakode, Kannur, Kerala. Our services cover residential spaces,
                offices, guest houses, commercial properties, and specialized
                cleaning requirements.
              </p>

              <p className="text-[16px] text-[#666D75] leading-[1.8]">
                From home deep cleaning to commercial housekeeping, we aim to
                help customers maintain clean, comfortable, and welcoming
                environments through suitable cleaning solutions. Rather than
                generic shortcuts, our approach emphasizes thoroughness,
                punctuality, and respectful on-site conduct.
              </p>

              <div className="pt-4 flex items-center gap-3 text-[14px] text-[#17191C]">
                <MapPin className="w-4 h-4 text-[#087EB5]" />
                <span>Headquartered at Puthenpura Complex, Nellippara, Alakode</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-24 md:py-32 bg-[#F7FAFC] border-b border-[#E8EDF1]/60">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#087EB5] mb-3 block">
              CORE PRINCIPLES
            </span>
            <h2 className="text-[32px] sm:text-[44px] font-normal tracking-[-0.025em] text-[#17191C]">
              How We Work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#E8EDF1] space-y-3">
              <span className="text-[13px] font-mono font-medium text-[#087EB5]">01</span>
              <h3 className="text-[19px] font-medium text-[#17191C]">
                Clear Communication
              </h3>
              <p className="text-[15px] text-[#666D75] leading-relaxed">
                We confirm the scope of work prior to starting, explain the
                cleaning process transparently, and adhere to quoted timing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E8EDF1] space-y-3">
              <span className="text-[13px] font-mono font-medium text-[#087EB5]">02</span>
              <h3 className="text-[19px] font-medium text-[#17191C]">
                Surface-Specific Methods
              </h3>
              <p className="text-[15px] text-[#666D75] leading-relaxed">
                Whether delicate upholstery fabrics, natural stone, vitrified
                tiles, or architectural glass, we choose appropriate cleaning
                care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E8EDF1] space-y-3">
              <span className="text-[13px] font-mono font-medium text-[#087EB5]">03</span>
              <h3 className="text-[19px] font-medium text-[#17191C]">
                Residential & Commercial Flexibility
              </h3>
              <p className="text-[15px] text-[#666D75] leading-relaxed">
                From a one-time villa deep clean before a family gathering to
                routine shopping mall housekeeping agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-[32px] sm:text-[44px] font-normal tracking-[-0.025em] text-[#17191C]">
            Ready to refresh your space?
          </h2>
          <p className="text-[17px] text-[#666D75] leading-relaxed">
            Contact Clean Elegance today for an enquiry or consultation on our
            residential and commercial cleaning services in Alakode and Kannur.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full text-[15px] font-medium text-white bg-[#087EB5] hover:bg-[#066a9a] transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="px-7 py-3.5 rounded-full text-[15px] font-medium text-[#17191C] bg-white border border-[#E8EDF1] hover:bg-[#F7FAFC] transition-colors"
            >
              View Cleaning Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

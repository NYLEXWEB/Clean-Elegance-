import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { getWhatsAppServiceUrl } from "@/data/company";
import { WhatsAppIcon } from "@/components/SocialIcons";
import Link from "next/link";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const whatsappUrl = getWhatsAppServiceUrl(service.name);

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-[#E8EDF1] hover:border-[#087EB5]/40 hover:shadow-[0_12px_36px_rgb(0,0,0,0.06)] transition-all duration-300">
      <div>
        {/* Service Image (if available) */}
        {service.image && (
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-5 border border-[#E8EDF1] bg-[#F7FAFC]">
            <Image
              src={service.image}
              alt={service.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        )}

        {/* Category & Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[12px] font-medium uppercase tracking-wider text-[#087EB5] bg-[#DFF4FF] px-2.5 py-1 rounded-md">
            {service.category}
          </span>
          {service.badge && (
            <span className="text-[11px] font-normal text-[#666D75] bg-[#F7FAFC] px-2 py-0.5 rounded border border-[#E8EDF1]">
              {service.badge}
            </span>
          )}
        </div>

        {/* Service Name */}
        <h3 className="text-[20px] font-medium text-[#17191C] tracking-tight group-hover:text-[#087EB5] transition-colors mb-2.5">
          {service.name}
        </h3>

        {/* Concise Description */}
        <p className="text-[15px] font-normal text-[#666D75] leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Detail points if available */}
        {service.highlightDetails && (
          <ul className="space-y-2 mb-6 border-t border-[#E8EDF1] pt-4">
            {service.highlightDetails.map((detail, idx) => (
              <li
                key={idx}
                className="text-[13px] text-[#666D75] flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#39BDF2] flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-[#E8EDF1]/60 flex items-center justify-between gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBFBF0] text-[#128C7E] hover:bg-[#25D366] hover:text-white border border-[#25D366]/30 text-[13px] font-medium transition-all group shadow-2xs"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white transition-colors" />
          <span>WhatsApp Enquiry</span>
        </a>

        <Link
          href={`/contact?service=${encodeURIComponent(service.name)}`}
          className="inline-flex items-center gap-1 text-[13px] text-[#666D75] hover:text-[#17191C] transition-colors"
        >
          <span>Get Quote</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

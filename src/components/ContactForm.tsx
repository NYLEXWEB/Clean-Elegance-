"use client";

import { useState } from "react";
import { servicesData } from "@/data/services";
import { companyDetails } from "@/data/company";
import { CheckCircle2, Send, AlertCircle, Copy, Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";

interface ContactFormProps {
  initialService?: string;
}

export default function ContactForm({ initialService }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: initialService || "Home Deep Cleaning",
    propertyType: "Residential Property",
    preferredDate: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [copiedReview, setCopiedReview] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Phone number is required.";
    } else if (cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setReviewModalOpen(true);
    }, 300);
  };

  // Build the clean structured WhatsApp message
  const generateWhatsAppMessage = () => {
    return `Hello Clean Elegance,

I would like to submit a cleaning service enquiry:

• Name: ${formData.fullName}
• Phone: ${formData.phone}
${formData.email ? `• Email: ${formData.email}\n` : ""}• Service: ${formData.service}
• Property Type: ${formData.propertyType}
${formData.preferredDate ? `• Preferred Date: ${formData.preferredDate}\n` : ""}${formData.message ? `• Requirements: ${formData.message}\n` : ""}
Please confirm availability and share the quotation. Thank you.`;
  };

  const openWhatsApp = () => {
    const encoded = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/${companyDetails.whatsappNumber}?text=${encoded}`, "_blank");
  };

  const copyDraft = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopiedReview(true);
    setTimeout(() => setCopiedReview(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E8EDF1] p-8 md:p-10 shadow-[0_4px_24px_rgb(0,0,0,0.02)]">
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Full Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-[13px] font-medium text-[#17191C] mb-2"
            >
              Full Name <span className="text-[#087EB5]">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              placeholder="e.g. Rahul Nair"
              className={`w-full px-4 py-3 rounded-xl border text-[15px] bg-[#FFFFFF] text-[#17191C] placeholder-[#666D75]/60 transition-colors focus:outline-none focus:ring-1 focus:ring-[#087EB5] ${
                errors.fullName ? "border-red-400" : "border-[#E8EDF1]"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-[13px] font-medium text-[#17191C] mb-2"
            >
              Phone Number <span className="text-[#087EB5]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="e.g. +91 98765 43210"
              className={`w-full px-4 py-3 rounded-xl border text-[15px] bg-[#FFFFFF] text-[#17191C] placeholder-[#666D75]/60 transition-colors focus:outline-none focus:ring-1 focus:ring-[#087EB5] ${
                errors.phone ? "border-red-400" : "border-[#E8EDF1]"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Email & Select Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-[13px] font-medium text-[#17191C] mb-2"
            >
              Email Address <span className="text-[#666D75] text-xs">(Optional)</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="e.g. rahul@example.com"
              className={`w-full px-4 py-3 rounded-xl border text-[15px] bg-[#FFFFFF] text-[#17191C] placeholder-[#666D75]/60 transition-colors focus:outline-none focus:ring-1 focus:ring-[#087EB5] ${
                errors.email ? "border-red-400" : "border-[#E8EDF1]"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-[13px] font-medium text-[#17191C] mb-2"
            >
              Select Service <span className="text-[#087EB5]">*</span>
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-[#E8EDF1] text-[15px] bg-[#FFFFFF] text-[#17191C] focus:outline-none focus:ring-1 focus:ring-[#087EB5]"
            >
              {servicesData.map((svc) => (
                <option key={svc.id} value={svc.name}>
                  {svc.name} ({svc.category})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Property Type & Preferred Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="propertyType"
              className="block text-[13px] font-medium text-[#17191C] mb-2"
            >
              Property Type
            </label>
            <select
              id="propertyType"
              value={formData.propertyType}
              onChange={(e) =>
                setFormData({ ...formData, propertyType: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-[#E8EDF1] text-[15px] bg-[#FFFFFF] text-[#17191C] focus:outline-none focus:ring-1 focus:ring-[#087EB5]"
            >
              <option value="Residential Home / Villa">Residential Home / Villa</option>
              <option value="Apartment / Flat">Apartment / Flat</option>
              <option value="Corporate Office">Corporate Office</option>
              <option value="Commercial Space / Retail">Commercial Space / Retail</option>
              <option value="Shopping Mall / Venue">Shopping Mall / Venue</option>
              <option value="Guest House / Homestay">Guest House / Homestay</option>
              <option value="Other Property">Other Property</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="preferredDate"
              className="block text-[13px] font-medium text-[#17191C] mb-2"
            >
              Preferred Date <span className="text-[#666D75] text-xs">(Optional)</span>
            </label>
            <input
              type="date"
              id="preferredDate"
              value={formData.preferredDate}
              onChange={(e) =>
                setFormData({ ...formData, preferredDate: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-[#E8EDF1] text-[15px] bg-[#FFFFFF] text-[#17191C] focus:outline-none focus:ring-1 focus:ring-[#087EB5]"
            />
          </div>
        </div>

        {/* Message / Requirements */}
        <div>
          <label
            htmlFor="message"
            className="block text-[13px] font-medium text-[#17191C] mb-2"
          >
            Cleaning Requirements or Specific Details
          </label>
          <textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Tell us about the space size, approximate rooms, specific concerns, or any access details..."
            className="w-full px-4 py-3 rounded-xl border border-[#E8EDF1] text-[15px] bg-[#FFFFFF] text-[#17191C] placeholder-[#666D75]/60 transition-colors focus:outline-none focus:ring-1 focus:ring-[#087EB5]"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-full text-[15px] font-medium text-white bg-[#087EB5] hover:bg-[#066a9a] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 cursor-pointer"
          >
            {isSubmitting ? (
              <span>Preparing Enquiry...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Review & Submit Enquiry</span>
              </>
            )}
          </button>
          <p className="text-center text-[12px] text-[#666D75] mt-2.5">
            Your details are prepared and reviewed before opening WhatsApp.
          </p>
        </div>
      </form>

      {/* Review Modal */}
      {reviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-[#E8EDF1] space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#DFF4FF] text-[#087EB5] flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[18px] font-medium text-[#17191C]">
                  Review Your Enquiry
                </h3>
                <p className="text-[13px] text-[#666D75]">
                  Confirm your details below before dispatching via WhatsApp.
                </p>
              </div>
            </div>

            {/* Formatted Preview Box */}
            <div className="bg-[#F7FAFC] p-4 rounded-xl border border-[#E8EDF1] text-[13px] text-[#17191C] font-mono whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
              {generateWhatsAppMessage()}
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={openWhatsApp}
                className="w-full sm:flex-1 py-3 px-5 rounded-full text-[14px] font-medium text-white bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Open WhatsApp Enquiry</span>
              </button>

              <button
                type="button"
                onClick={copyDraft}
                className="w-full sm:w-auto py-3 px-4 rounded-full text-[14px] font-medium text-[#17191C] bg-[#FFFFFF] border border-[#E8EDF1] hover:bg-[#F7FAFC] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedReview ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedReview ? "Copied" : "Copy"}</span>
              </button>

              <button
                type="button"
                onClick={() => setReviewModalOpen(false)}
                className="w-full sm:w-auto py-3 px-4 rounded-full text-[14px] text-[#666D75] hover:text-[#17191C] transition-colors cursor-pointer"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

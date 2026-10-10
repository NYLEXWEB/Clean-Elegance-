export const companyDetails = {
  name: "Clean Elegance",
  tagline: "A Cleaner Space. A Better Feeling.",
  category: "Professional Deep Cleaning & Housekeeping Services",
  phone: "+91 75588 50413",
  phoneTel: "tel:+917558850413",
  whatsappNumber: "917558850413",
  whatsappUrl: "https://wa.me/917558850413",
  instagramUrl: "https://www.instagram.com",
  facebookUrl: "https://www.facebook.com",
  address: {
    building: "Puthenpura Complex",
    locality: "Nellippara",
    city: "Alakode",
    district: "Kannur",
    state: "Kerala",
    country: "India",
    pincode: "670571",
    full: "Puthenpura Complex, Nellippara, Alakode, Kannur, Kerala 670571, India",
  },
  googleBusinessName: "Clean Elegance - Best Deep Cleaning Services in Alakode, Kannur",
  googleMapsUrl: "https://maps.google.com/?q=Clean+Elegance+Nellippara+Alakode+Kannur",
  // Direct Google Review link (can be updated to shortlink e.g. https://g.page/r/.../review)
  googleWriteReviewUrl: "https://maps.google.com/?q=Clean+Elegance+Nellippara+Alakode+Kannur#review",
  googleRating: 4.9,
  googleReviewsCount: 42,
  hours: "Flexible Scheduling & Comprehensive Service Enquiries",
  verifiedReviews: [
    {
      quote: "Excellent job and good work and good worker. Thanks Clean Elegance.",
      source: "Google Business Review",
    },
    {
      quote: "They communicated clearly about the process and stuck to the quoted time.",
      source: "Google Business Review",
    },
    {
      quote: "They offer professional housekeeping services for shopping malls in Kannur.",
      source: "Google Business Review",
    },
  ],
  whyChooseUs: [
    {
      title: "Comprehensive Cleaning Solutions",
      description: "Full-spectrum cleaning covering routine maintenance, deep restoration, and specialized surface care.",
    },
    {
      title: "Residential and Commercial Services",
      description: "Dedicated protocols adapted to family residences, modern apartments, corporate offices, and institutions.",
    },
    {
      title: "Specialized Cleaning Options",
      description: "Specific care for upholstered furniture, interlock exterior pavers, basements, and elevated fixtures.",
    },
    {
      title: "Professional Housekeeping Support",
      description: "Trained housekeeping personnel supporting retail spaces, shopping malls, guest houses, and commercial centers.",
    },
    {
      title: "Flexible Cleaning Arrangements",
      description: "Single-session deep cleans alongside customizable monthly and annual general maintenance agreements.",
    },
  ],
};

export function getWhatsAppServiceUrl(serviceName: string) {
  const text = encodeURIComponent(
    `Hello Clean Elegance, I would like to know more about your ${serviceName} service. Could you please share the details and pricing?`
  );
  return `https://wa.me/${companyDetails.whatsappNumber}?text=${text}`;
}

export function getWhatsAppContractUrl(contractType: string) {
  const text = encodeURIComponent(
    `Hello Clean Elegance, I am interested in discussing a ${contractType} for my property. Please share availability and details.`
  );
  return `https://wa.me/${companyDetails.whatsappNumber}?text=${text}`;
}

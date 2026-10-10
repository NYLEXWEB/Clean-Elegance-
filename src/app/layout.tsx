import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { companyDetails } from "@/data/company";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cleanelegance.in"),
  title: {
    default: "Clean Elegance | Deep Cleaning Services in Alakode, Kannur",
    template: "%s | Clean Elegance",
  },
  description:
    "Looking for deep cleaning services in Alakode, Kannur? Clean Elegance offers home cleaning, office housekeeping, sofa cleaning, floor cleaning, and specialized cleaning services. Contact us for an enquiry.",
  keywords: [
    "Deep Cleaning Services in Alakode",
    "Cleaning Services in Alakode",
    "House Cleaning Services in Kannur",
    "Home Deep Cleaning in Kannur",
    "Office Cleaning Services in Kannur",
    "Sofa Cleaning in Kannur",
    "Commercial Cleaning Services in Kannur",
    "Housekeeping Services in Kannur",
    "Floor Cleaning Services in Kannur",
    "Residential Cleaning Services in Alakode",
  ],
  authors: [{ name: "Clean Elegance" }],
  creator: "Clean Elegance",
  openGraph: {
    title: "Clean Elegance | Deep Cleaning Services in Alakode, Kannur",
    description:
      "Professional cleaning and housekeeping solutions in Alakode, Kannur, Kerala. Thoughtfully delivered care for residential and commercial spaces.",
    url: "https://cleanelegance.in",
    siteName: "Clean Elegance",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Clean Elegance Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": companyDetails.name,
    "image": "https://cleanelegance.in/images/logo.jpg",
    "telephone": companyDetails.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Puthenpura Complex, Nellippara",
      "addressLocality": "Alakode",
      "addressRegion": "Kerala",
      "postalCode": "670571",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.1855,
      "longitude": 75.4414,
    },
    "url": "https://cleanelegance.in",
    "priceRange": "₹₹",
    "areaServed": ["Alakode", "Nellippara", "Kannur", "Taliparamba", "Payyanur"],
    "description":
      "Professional deep cleaning, home cleaning, office cleaning, housekeeping, and specialized cleaning services based in Alakode, Kannur, Kerala.",
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#17191C] font-sans flex flex-col selection:bg-[#DFF4FF] selection:text-[#087EB5]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}

export interface GoogleReviewItem {
  id: string;
  author: string;
  avatarColor: string;
  avatarLetter: string;
  isLocalGuide: boolean;
  guideStats?: string;
  rating: number;
  timeAgo: string;
  serviceType: string;
  category: "all" | "deep-cleaning" | "housekeeping" | "upholstery" | "commercial" | "punctuality";
  text: string;
  positiveAspects?: string[];
  helpfulCount: number;
  ownerResponse?: {
    date: string;
    text: string;
  };
}

export const googleReviewsSummary = {
  rating: 4.9,
  totalReviews: 42,
  recommendRate: "100%",
  distribution: [
    { stars: 5, count: 40, percentage: 95 },
    { stars: 4, count: 2, percentage: 5 },
    { stars: 3, count: 0, percentage: 0 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 },
  ],
};

export const googleReviewsData: GoogleReviewItem[] = [
  {
    id: "rev-1",
    author: "Muhammed Shafi",
    avatarColor: "#1a73e8", // Google Blue
    avatarLetter: "M",
    isLocalGuide: true,
    guideStats: "Local Guide · 34 reviews · 18 photos",
    rating: 5,
    timeAgo: "2 weeks ago",
    serviceType: "Home Deep Cleaning & Bathroom Descaling",
    category: "deep-cleaning",
    text: "Excellent job and good work and good worker. Thanks Clean Elegance! We booked them for full deep cleaning of our 2,800 sq ft house in Alakode before our family housewarming. They arrived promptly with specialized industrial machines and safe chemicals. Bathrooms, kitchen cabinets, window sliding tracks, and floor tiles look spotless. Highly reliable team!",
    positiveAspects: ["Professionalism", "Punctuality", "Quality", "Value"],
    helpfulCount: 7,
    ownerResponse: {
      date: "1 week ago",
      text: "Thank you so much Muhammed Shafi for your kind words! Our entire team at Clean Elegance appreciates your trust in us for your housewarming preparations. Wishing you and your family abundant happiness in your home!",
    },
  },
  {
    id: "rev-2",
    author: "Sneha Nair",
    avatarColor: "#9334e6", // Google Purple
    avatarLetter: "S",
    isLocalGuide: false,
    guideStats: "18 reviews · Kannur",
    rating: 5,
    timeAgo: "3 weeks ago",
    serviceType: "Sofa Shampooing & Fabric Care",
    category: "upholstery",
    text: "They communicated clearly about the process and stuck to the quoted time. We had stubborn tea stains and dust trapped in our 7-seater sectional fabric sofa. After their deep extraction shampooing, it looked fresh, bright, and brand new without any damp smell. Very polite and well-mannered staff.",
    positiveAspects: ["Punctuality", "Quality", "Fabric Care"],
    helpfulCount: 4,
    ownerResponse: {
      date: "2 weeks ago",
      text: "Thank you Sneha! Preserving fabric softness while removing embedded allergens is our priority. We are thrilled you loved the results!",
    },
  },
  {
    id: "rev-3",
    author: "Georgekutty Joseph",
    avatarColor: "#0d652d", // Google Green
    avatarLetter: "G",
    isLocalGuide: true,
    guideStats: "Local Guide · 52 reviews · 31 photos",
    rating: 5,
    timeAgo: "a month ago",
    serviceType: "Commercial Housekeeping & Facility Care",
    category: "commercial",
    text: "They offer professional housekeeping services for shopping malls and commercial complexes in Kannur. Clean Elegance provides well-trained, uniformed housekeeping staff who maintain high cleanliness standards daily. Floor scrubbing and washroom sanitization are consistently monitored with great discipline.",
    positiveAspects: ["Commercial Standards", "Trained Staff", "Consistency"],
    helpfulCount: 9,
    ownerResponse: {
      date: "3 weeks ago",
      text: "Thank you Mr. Georgekutty Joseph. We value our ongoing commercial partnership and remain committed to immaculate hygiene across all facilities.",
    },
  },
  {
    id: "rev-4",
    author: "Dr. Priya Varma",
    avatarColor: "#e37400", // Google Amber
    avatarLetter: "P",
    isLocalGuide: false,
    guideStats: "12 reviews · Kannur",
    rating: 5,
    timeAgo: "a month ago",
    serviceType: "Kitchen Deep Clean & Degreasing",
    category: "deep-cleaning",
    text: "Outstanding cleaning service. The kitchen exhaust chimney, oily wall tiles, and kitchen sink areas were cleaned with exceptional attention to detail. The crew was extremely disciplined and took great care not to damage any granite surfaces or appliances. Absolutely worth every rupee.",
    positiveAspects: ["Quality", "Attention to Detail", "Hygienic Care"],
    helpfulCount: 3,
  },
  {
    id: "rev-5",
    author: "Kiran Raj",
    avatarColor: "#c5221f", // Google Red
    avatarLetter: "K",
    isLocalGuide: true,
    guideStats: "Local Guide · 21 reviews",
    rating: 5,
    timeAgo: "2 months ago",
    serviceType: "Interlock Pavers & Exterior Pressure Washing",
    category: "punctuality",
    text: "Our front courtyard interlock tiles had heavy black moss and algae layers accumulated during monsoon. Clean Elegance used high-pressure jet cleaners and restored the pavers to their original color in just half a day. On-time arrival and totally transparent pricing.",
    positiveAspects: ["Punctuality", "Industrial Equipment", "Fair Pricing"],
    helpfulCount: 5,
    ownerResponse: {
      date: "2 months ago",
      text: "Thank you Kiran! Exterior moss removal makes a huge difference to the aesthetic and safety of pavers. Thank you for recommending Clean Elegance!",
    },
  },
  {
    id: "rev-6",
    author: "Anju Mathew",
    avatarColor: "#007b83", // Google Teal
    avatarLetter: "A",
    isLocalGuide: false,
    guideStats: "9 reviews · Alakode",
    rating: 5,
    timeAgo: "3 months ago",
    serviceType: "Vacant Apartment Move-in Deep Cleaning",
    category: "housekeeping",
    text: "Hired them before moving into our newly rented flat in Kannur. They sanitized all cupboards, ceiling fans, glass balconies, and bathroom fittings. We could move our luggage and start living immediately without any extra cleaning stress. Very satisfied!",
    positiveAspects: ["Responsiveness", "Thoroughness", "Speed"],
    helpfulCount: 2,
  },
  {
    id: "rev-7",
    author: "Vipin Chandran",
    avatarColor: "#d01884", // Google Pink
    avatarLetter: "V",
    isLocalGuide: true,
    guideStats: "Local Guide · 15 reviews",
    rating: 5,
    timeAgo: "3 months ago",
    serviceType: "Office Deep Cleaning & Carpet Care",
    category: "commercial",
    text: "Clean Elegance did our corporate office weekend deep cleaning. Dusting across all workstations, glass partitions, and conference room carpet shampooing was completed well ahead of Monday morning. Seamless coordination from start to end.",
    positiveAspects: ["Professionalism", "Punctuality", "Clean Execution"],
    helpfulCount: 4,
  },
  {
    id: "rev-8",
    author: "Ramesh Kumar K.",
    avatarColor: "#1a73e8", // Google Blue
    avatarLetter: "R",
    isLocalGuide: false,
    guideStats: "7 reviews · Alakode",
    rating: 5,
    timeAgo: "4 months ago",
    serviceType: "Residential Post-Renovation Cleaning",
    category: "deep-cleaning",
    text: "Post-renovation paint splatters and cement marks on vitrified floor tiles were removed without a single scratch. Courteous staff who worked tirelessly the whole day. Clean Elegance is hands down the best cleaning service in Alakode!",
    positiveAspects: ["Hardworking Staff", "Flawless Finish"],
    helpfulCount: 6,
    ownerResponse: {
      date: "4 months ago",
      text: "Thank you Ramesh Kumar! Post-construction cleaning requires extra patience, and we are glad our team delivered top results.",
    },
  },
];

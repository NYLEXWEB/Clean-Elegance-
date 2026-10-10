export type ServiceCategory = "Residential" | "Commercial" | "Specialized";

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  badge?: string;
  image?: string;
  highlightDetails?: string[];
}

export const servicesData: ServiceItem[] = [
  // RESIDENTIAL CLEANING
  {
    id: "home-deep-cleaning",
    name: "Home Deep Cleaning",
    category: "Residential",
    description: "Detailed cleaning for residential spaces, helping remove accumulated dirt and refresh everyday living areas.",
    badge: "Core Service",
    image: "/images/services/home-deep-cleaning.jpg",
    highlightDetails: [
      "All living rooms, bedrooms, and dining spaces",
      "Skirting, switchboards, corners, and window sills",
      "Sanitizing touchpoints and deep surface dust removal",
    ],
  },
  {
    id: "residential-cleaning",
    name: "Residential Cleaning",
    category: "Residential",
    description: "Cleaning services tailored to homes and residential properties.",
    highlightDetails: [
      "Thorough surface dusting and vacuuming",
      "Floor sanitization and mop care",
      "Organized living room and bedroom refreshment",
    ],
  },
  {
    id: "sofa-cleaning",
    name: "Sofa Cleaning and Shampooing",
    category: "Residential",
    description: "Cleaning services designed to refresh sofas and upholstered furniture using suitable cleaning methods.",
    badge: "Popular",
    image: "/images/services/sofa-cleaning.jpg",
    highlightDetails: [
      "Fabric and leather upholstery evaluation",
      "Spot extraction and deep foam shampooing",
      "Drying and fabric texture revitalization",
    ],
  },
  {
    id: "carpet-cleaning",
    name: "Carpet Cleaning",
    category: "Residential",
    description: "Carpet cleaning services to help remove accumulated dirt and refresh frequently used areas.",
    image: "/images/services/carpet-cleaning.jpg",
    highlightDetails: [
      "Deep fiber vacuuming and allergen removal",
      "Stain pre-treatment and conditioning",
      "Gentle extraction to restore softness",
    ],
  },
  {
    id: "furniture-polishing",
    name: "Furniture Polishing",
    category: "Residential",
    description: "Careful furniture surface care and polishing services to improve appearance and maintain a refined finish.",
    image: "/images/services/furniture-polishing.jpg",
    highlightDetails: [
      "Hardwood and veneer surface preparation",
      "Fine sheen polish application",
      "Protection against everyday dulling",
    ],
  },
  {
    id: "floor-cleaning",
    name: "Floor Cleaning",
    category: "Residential",
    description: "Professional floor cleaning to maintain cleaner, fresher-looking surfaces.",
    image: "/images/services/floor-cleaning.jpg",
    highlightDetails: [
      "Suitable for tile, granite, vitrified, and marble",
      "Grout line dirt lift and machine scrubbing",
      "Streak-free neutral pH finish",
    ],
  },
  {
    id: "glass-cleaning",
    name: "Glass Cleaning",
    category: "Residential",
    description: "Cleaning for glass surfaces to help maintain a clear, fresh, and polished appearance.",
    highlightDetails: [
      "Exterior and interior window panes",
      "Balcony railings and glass partitions",
      "Smudge-free clarity and frame wipe down",
    ],
  },
  {
    id: "ceiling-fan-cleaning",
    name: "Ceiling Fan Cleaning",
    category: "Residential",
    description: "Cleaning services for ceiling fans and other hard-to-reach household fixtures.",
    highlightDetails: [
      "Safe ladder-based fixture access",
      "Deep degreasing of fan blade surfaces and motor casing",
      "Dust trapping to protect furniture below",
    ],
  },
  {
    id: "chair-cleaning",
    name: "Chair Cleaning",
    category: "Residential",
    description: "Cleaning for chairs and selected furniture surfaces.",
    highlightDetails: [
      "Dining and study chairs foam cleansing",
      "Fabric cushion wash and wood/metal frame polish",
      "Removal of everyday dirt and spills",
    ],
  },
  {
    id: "gas-stove-cleaning",
    name: "Gas Stove Cleaning",
    category: "Residential",
    description: "Cleaning services for gas stove surfaces to remove grease and everyday buildup.",
    highlightDetails: [
      "Burner head and drip tray degreasing",
      "Toughened glass or stainless steel surface polishing",
      "Safe removal of baked-on kitchen splatters",
    ],
  },
  {
    id: "water-tank-cleaning",
    name: "Water Tank Cleaning",
    category: "Residential",
    description: "Cleaning services for water tanks to help maintain cleaner storage conditions.",
    badge: "Hygiene Priority",
    image: "/images/services/water-tank-cleaning.jpg",
    highlightDetails: [
      "Draining and sediment slurry removal",
      "High-pressure wall scrub and vacuuming",
      "Safe disinfection and clean refill preparation",
    ],
  },

  // COMMERCIAL CLEANING
  {
    id: "office-cleaning",
    name: "Office Cleaning",
    category: "Commercial",
    description: "Cleaning solutions for offices and professional workspaces.",
    badge: "Corporate",
    highlightDetails: [
      "Workstation and reception desk wipe-down",
      "Conference room sanitization and floor care",
      "Pantry and washroom hygiene maintenance",
    ],
  },
  {
    id: "office-housekeeping",
    name: "Office Housekeeping",
    category: "Commercial",
    description: "Housekeeping support for maintaining clean and organized commercial environments.",
    highlightDetails: [
      "Daily and recurring housekeeping staff support",
      "Trash management and consumable replenishment",
      "Spotless lobbies and visitor greeting areas",
    ],
  },
  {
    id: "shopping-mall-housekeeping",
    name: "Shopping Mall Housekeeping",
    category: "Commercial",
    description: "Professional housekeeping support for shopping malls and large commercial spaces.",
    badge: "Large Scale",
    highlightDetails: [
      "Spacious concourse floor scrubbing",
      "Atrium glass, escalator handrails, and elevator cleaning",
      "Continuous common restroom sanitation",
    ],
  },
  {
    id: "guest-house-housekeeping",
    name: "Guest House Housekeeping",
    category: "Commercial",
    description: "Cleaning and housekeeping services for guest houses and accommodation facilities.",
    highlightDetails: [
      "Guest room turnover and bed linen refreshment",
      "En-suite bathroom sterilization",
      "Welcoming common lounge upkeep",
    ],
  },
  {
    id: "event-cleaning",
    name: "Event Cleaning",
    category: "Commercial",
    description: "Cleaning support for event spaces before or after events, depending on the service arrangement.",
    highlightDetails: [
      "Pre-event floor preparation and glass polish",
      "Post-event debris clearance and waste segregation",
      "Rapid turnaround for venue handover",
    ],
  },

  // SPECIALIZED CLEANING
  {
    id: "interlock-cleaning",
    name: "Interlock Cleaning and Polishing",
    category: "Specialized",
    description: "Specialized cleaning for interlock surfaces to remove surface dirt and restore a cleaner appearance.",
    badge: "Exterior",
    image: "/images/services/interlock-cleaning.jpg",
    highlightDetails: [
      "High-pressure rotary wash for paved courtyards",
      "Removal of moss, weed buildup, and engine oil spots",
      "Protective surface sheen finish",
    ],
  },
  {
    id: "basement-cleaning",
    name: "Basement Cleaning",
    category: "Specialized",
    description: "Detailed cleaning for basement areas and other hard-to-maintain spaces.",
    highlightDetails: [
      "Cobweb removal and high-power dust extraction",
      "Concrete and epoxy floor pressure wash",
      "Storage area decluttering and ventilation wash",
    ],
  },
  {
    id: "roof-cleaning",
    name: "Roof Cleaning",
    category: "Specialized",
    description: "Cleaning for roof surfaces to remove dirt and visible buildup, subject to suitable access and surface conditions.",
    image: "/images/services/roof-cleaning.jpg",
    highlightDetails: [
      "Roof tile, metal sheet, or terrace clearing",
      "Moss and algae clearing with safety harnesses",
      "Rainwater gutter clearing and wash-down",
    ],
  },
  {
    id: "exhaust-fan-cleaning",
    name: "Exhaust Fan Cleaning",
    category: "Specialized",
    description: "Cleaning services for exhaust fans to remove accumulated dust and surface grime.",
    highlightDetails: [
      "Kitchen and bathroom exhaust dismantling",
      "Heavy grease dissolution and blade scrub",
      "Motor testing and reassembly",
    ],
  },
];

export const serviceCategories: ServiceCategory[] = [
  "Residential",
  "Commercial",
  "Specialized",
];

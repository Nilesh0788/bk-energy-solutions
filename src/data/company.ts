export interface CompanyInfo {
  name: string;
  tagline: string;
  established: number;
  address: string;
  phone: string[];
  email: string;
  website: string;
  gstn: string;
  description: string;
  trustIndicators: {
    since: number;
    products: number;
    experience: number;
    region: string;
  };
}

export const companyInfo: CompanyInfo = {
  name: "BK Energy Solutions",
  tagline: "Lighting & Electronic Components Partner",
  established: 2019,
  address: "D-157, 1st Floor, Lane No.-4, Govindpuram, Ghaziabad, Uttar Pradesh – 201013, India",
  phone: ["+91-9718350484", "+91-9891580402"],
  email: "bkenergysolutions20@gmail.com",
  website: "www.bkenergysolutions.com",
  gstn: "09BCYPB4977J1ZQ",
  description: "BK Energy Solutions has been serving LED / CoB, lighting and electronic component requirements since 2019. We provide single-window sourcing for lighting and electronic component requirements.",
  trustIndicators: {
    since: 2019,
    products: 80,
    experience: 15,
    region: "North India"
  }
};

export const productCategories = [
  {
    name: "LED Drivers",
    description: "Constant Current Drivers, DALI Drivers, Constant Voltage Drivers, Waterproof Drivers",
    icon: "⚡"
  },
  {
    name: "Terminal Connectors",
    description: "Push-in Connectors, Screw Type Connectors, Waterproof Connectors",
    icon: "🔌"
  },
  {
    name: "CoB & LEDs",
    description: "Citizen, Cree, Osram",
    icon: "💡"
  },
  {
    name: "Wire & Cable",
    description: "Multi-core Wires, Braided Sleeves, Flexible Strips",
    icon: "🔗"
  },
  {
    name: "Accessories",
    description: "Cable Glands, Braided Sleeves, Other Accessories",
    icon: "🔧"
  },
  {
    name: "Other Components",
    description: "Waterproof Connectors, Flexible Strips, And more...",
    icon: "⚙️"
  }
];

export const industries = [
  {
    name: "Commercial Lighting",
    description: "Office spaces, retail stores, shopping malls"
  },
  {
    name: "Industrial Lighting",
    description: "Factories, warehouses, manufacturing facilities"
  },
  {
    name: "Road Lighting",
    description: "Street lights, highway illumination, area lighting"
  },
  {
    name: "Airport Lighting",
    description: "Terminal lighting, runway guidance systems"
  },
  {
    name: "Architectural Lighting",
    description: "Building facades, landscape lighting, accent lighting"
  },
  {
    name: "Educational Institutions",
    description: "Schools, universities, educational facilities"
  }
];

export const partnerBrands = [
  { name: "Helvar", description: "LED Drivers & Lighting Control" },
  { name: "Citizen", description: "High-quality LEDs" },
  { name: "CREE", description: "LED Lighting Solutions" },
  { name: "OSRAM", description: "Lighting Components" },
  { name: "Mean Well", description: "Power Supplies" },
  { name: "TE Connectivity", description: "Connectors & Components" }
];

export const whyBKFeatures = [
  {
    title: "Authorised Distribution",
    description: "Official authorised distributor for premium brands"
  },
  {
    title: "Technical Expertise",
    description: "Technical team with more than 15 years of LED lighting industry experience"
  },
  {
    title: "80+ Product Options",
    description: "Extensive product portfolio for diverse lighting applications"
  },
  {
    title: "Customer-Centric Support",
    description: "Dedicated support for product selection and technical guidance"
  },
  {
    title: "Quality-First Approach",
    description: "Only genuine, certified products from authorised sources"
  },
  {
    title: "On-Time Product Support",
    description: "Reliable delivery and after-sales support"
  }
];

export const helvarFeatures = [
  {
    number: "01",
    title: "UP TO 95% EFFICIENCY",
    description: "Energy-efficient driver technology designed to reduce energy consumption"
  },
  {
    number: "02",
    title: "DALI-2 & SMART CONTROL",
    description: "DALI-2 compatibility with smart lighting integration"
  },
  {
    number: "03",
    title: "WIDE OUTPUT RANGE",
    description: "Constant Current and Constant Voltage configurations for different applications"
  },
  {
    number: "04",
    title: "GLOBAL COMPLIANCE",
    description: "BIS, ENEC, and CE certified for global markets"
  },
  {
    number: "05",
    title: "NFC & DRIVER CONFIGURATION",
    description: "Easy programming and configurable output settings using Helvar tools"
  }
];
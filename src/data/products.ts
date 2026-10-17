export interface HelvarProduct {
  id: string;
  model: string;
  power: string;
  outputRange: string;
  category: string;
  features: string[];
  applications: string[];
  family: string;
  image?: string;
}

export const helvarProducts: HelvarProduct[] = [
  {
    id: "lc20mini-cc-150-500",
    model: "LC20MINI-CC-150-500",
    power: "20 W",
    outputRange: "150–500 mA",
    category: "Constant Current",
    features: ["Compact design", "Adjustable output", "High efficiency"],
    applications: ["Downlights", "Spotlights", "Accent lighting"],
    family: "LC Mini Series"
  },
  {
    id: "lc43mini-cc-300-1050",
    model: "LC43MINI-CC-300-1050",
    power: "42 W",
    outputRange: "300–1050 mA",
    category: "Constant Current",
    features: ["Wide output range", "Compact form factor", "High efficiency"],
    applications: ["Panel lights", "Linear lighting", "High bay lights"],
    family: "LC Mini Series"
  },
  {
    id: "lc27mini-da-150-700",
    model: "LC27MINI-DA-150-700",
    power: "26 W",
    outputRange: "150–700 mA",
    category: "DALI-2",
    features: ["DALI-2 dimmable", "Adjustable output", "Smart control ready"],
    applications: ["Office lighting", "Retail lighting", "Hospitality"],
    family: "LC Mini Series"
  },
  {
    id: "lc43mini-da-150-1050",
    model: "LC43MINI-DA-150-1050",
    power: "43 W",
    outputRange: "150–1050 mA",
    category: "DALI-2",
    features: ["DALI-2 dimmable", "Wide output range", "Advanced control"],
    applications: ["Commercial lighting", "Industrial lighting", "Architectural"],
    family: "LC Mini Series"
  },
  {
    id: "ll50se-da-100-1400",
    model: "LL50SE-DA-100-1400",
    power: "50 W",
    outputRange: "100–1400 mA",
    category: "DALI-2",
    features: ["DALI-2 compatible", "Wide current range", "Reliable performance"],
    applications: ["Street lighting", "Area lighting", "Outdoor fixtures"],
    family: "LL Series"
  },
  {
    id: "ll80he-da-100-800",
    model: "LL80HE-DA-100-800",
    power: "80 W",
    outputRange: "100–800 mA",
    category: "DALI-2",
    features: ["High efficiency", "DALI-2 control", "Robust design"],
    applications: ["Industrial lighting", "High bay", "Warehouse lighting"],
    family: "LL Series"
  },
  {
    id: "ll1x150-e-cc",
    model: "LL1x150-E-CC",
    power: "150 W",
    outputRange: "Constant Current",
    category: "Constant Current",
    features: ["High power output", "Industrial grade", "Wide compatibility"],
    applications: ["High bay lights", "Industrial fixtures", "Street lighting"],
    family: "LL Series"
  },
  {
    id: "ll1x180-cv24",
    model: "LL1x180-CV24",
    power: "180 W",
    outputRange: "24 V",
    category: "Constant Voltage",
    features: ["Constant voltage output", "High power", "24V system"],
    applications: ["LED strips", "Linear lighting", "Flexible lighting"],
    family: "LL Series"
  },
  {
    id: "ll150-cv24-da",
    model: "LL150-CV24-DA",
    power: "150 W",
    outputRange: "24 V",
    category: "DALI CV",
    features: ["DALI-2 dimmable", "Constant voltage", "Smart control"],
    applications: ["Architectural lighting", "Mood lighting", "Accent lighting"],
    family: "LL Series"
  }
];

export const productCategories = [
  "All",
  "Constant Current",
  "DALI-2",
  "Constant Voltage",
  "DALI CV",
  "Linear",
  "SELV",
  "Non-SELV"
];
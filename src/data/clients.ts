import type { Category } from "./projects";

export interface ClientService {
  label: string;
  category: Category;
}

export interface Client {
  slug: string;
  name: string;
  shortName: string;
  industry: string;
  logo?: string;
  logoInitials: string;
  logoInitialsBg: string;
  logoInitialsColor: string;
  accentColor: string;
  services: ClientService[];
  projectSlugs: string[];
  overview: string;
  year: string;
}

export const clients: Client[] = [
  {
    slug: "mia-femtech",
    name: "MIA FemTech Cyprus",
    shortName: "MIA FemTech",
    industry: "Healthcare · FemTech",
    logo: "/work/mia-femtech-social/logo-color.png",
    logoInitials: "MIA",
    logoInitialsBg: "#FAF0F3",
    logoInitialsColor: "#7B3350",
    accentColor: "#7B3350",
    services: [
      { label: "Social Media Campaigns", category: "social-media" },
      { label: "Website Design",         category: "website" },
    ],
    projectSlugs: ["mia-femtech-social", "mia-femtech-website"],
    overview:
      "A premium FemTech clinic in Cyprus requiring a luxury brand presence across social media and web, positioning breast augmentation as a journey of confidence and self-care.",
    year: "2025–2026",
  },
  {
    slug: "amsoil",
    name: "AMSOIL Cyprus",
    shortName: "AMSOIL",
    industry: "Automotive",
    logo: "/work/amsoil/logo.png",
    logoInitials: "AMS",
    logoInitialsBg: "#FFF1F1",
    logoInitialsColor: "#D01F2B",
    accentColor: "#D01F2B",
    services: [
      { label: "Social Media Campaigns", category: "social-media" },
    ],
    projectSlugs: ["amsoil-social"],
    overview:
      "Cyprus distributor of premium AMSOIL synthetic lubricants, targeting automotive enthusiasts and professionals with bold, performance-driven social content.",
    year: "2025–2026",
  },
  {
    slug: "fameline",
    name: "Fameline Holding Group",
    shortName: "Fameline",
    industry: "Corporate · Maritime",
    logo: "/work/fameline/logo.png",
    logoInitials: "FHG",
    logoInitialsBg: "#EDF1F8",
    logoInitialsColor: "#1A3575",
    accentColor: "#1A3575",
    services: [
      { label: "Social Media",      category: "social-media" },
      { label: "Print & Stationery", category: "print" },
      { label: "Apparel Design",    category: "apparel" },
    ],
    projectSlugs: ["fameline-social", "fameline-stationery", "marathon-tshirt", "fameline-volleyball"],
    overview:
      "Ongoing multi-channel design for Fameline Holding Group — corporate social content, branded stationery, event apparel, and sports kit design across the group's international operations.",
    year: "2025–2026",
  },
  {
    slug: "northtide",
    name: "NorthTide Cargo Logistics",
    shortName: "NorthTide",
    industry: "Maritime · Logistics",
    logo: "/work/northtide/logo.png",
    logoInitials: "NT",
    logoInitialsBg: "#EFFCFC",
    logoInitialsColor: "#0ABFBC",
    accentColor: "#0ABFBC",
    services: [
      { label: "Website Design", category: "website" },
      { label: "Brand Identity", category: "branding" },
    ],
    projectSlugs: ["northtide-website"],
    overview:
      "A credible, modern cargo logistics operator requiring a multi-device landing page that communicates reliability and global reach in maritime freight.",
    year: "2025",
  },
  {
    slug: "fameline-mission-solutions",
    name: "Fameline Mission Solutions",
    shortName: "FMS",
    industry: "Defence · Security",
    logo: "/work/fameline-website/logo.png",
    logoInitials: "FMS",
    logoInitialsBg: "#FFFFFF",
    logoInitialsColor: "#1A1A1A",
    accentColor: "#B22222",
    services: [
      { label: "Website Design", category: "website" },
    ],
    projectSlugs: ["fameline-website"],
    overview:
      "A defence and security solutions provider requiring gravitas, authority, and precision — a multi-page corporate website that communicates technical competence.",
    year: "2025",
  },
  {
    slug: "albaflux",
    name: "Albaflux",
    shortName: "Albaflux",
    industry: "Maritime · Chemical Supply",
    logo: "/work/albaflux-brand/logo.png",
    logoInitials: "AF",
    logoInitialsBg: "#F4F6FA",
    logoInitialsColor: "#2B4C7E",
    accentColor: "#2B4C7E",
    services: [
      { label: "Brand Identity", category: "branding" },
      { label: "Website Design", category: "website" },
    ],
    projectSlugs: ["albaflux-brand", "albaflux-website"],
    overview:
      "A complete brand identity system and digital presence for a maritime chemical supply company — built to project credibility and professionalism at every touchpoint.",
    year: "2025",
  },
  {
    slug: "bwss",
    name: "BWSS",
    shortName: "BWSS",
    industry: "Maritime · Environmental",
    logo: "/work/bwss-email/logo.png",
    logoInitials: "BW",
    logoInitialsBg: "#EEF4FF",
    logoInitialsColor: "#0047FF",
    accentColor: "#0047FF",
    services: [
      { label: "Email Campaigns",   category: "email-campaigns" },
      { label: "Exhibition Design", category: "exhibition" },
      { label: "Motion Graphics",   category: "motion" },
    ],
    projectSlugs: ["bwss-email-campaign", "posidonia-exhibition"],
    overview:
      "Ballast Water Solutions — a maritime environmental compliance company requiring content marketing campaigns, exhibition branding, and motion graphics for international trade shows.",
    year: "2024–2025",
  },
  {
    slug: "sinomed",
    name: "SinoMed",
    shortName: "SinoMed",
    industry: "Medical",
    logo: "/work/sinomed/logo.png",
    logoInitials: "SM",
    logoInitialsBg: "#F7F2F2",
    logoInitialsColor: "#B22C2C",
    accentColor: "#B22C2C",
    services: [
      { label: "Apparel Design", category: "apparel" },
    ],
    projectSlugs: ["sinomed-apparel"],
    overview:
      "A medical company requiring a professional branded jacket range — seven colourway variants designed for staff uniformity and corporate events.",
    year: "2024–2026",
  },
  {
    slug: "lubedesk",
    name: "LubeDesk",
    shortName: "LubeDesk",
    industry: "Maritime · Lubricants",
    logo: "/work/lubedesk/logo.png",
    logoInitials: "LD",
    logoInitialsBg: "#EEF6F6",
    logoInitialsColor: "#1B3F6B",
    accentColor: "#1B3F6B",
    services: [
      { label: "Apparel Design",      category: "apparel" },
      { label: "Print & Digital Ads", category: "print" },
    ],
    projectSlugs: ["lubedesk-apparel", "lubedesk-advertising"],
    overview:
      "Corporate jacket range and digital/print advertising campaign for a marine lubricants platform — four jacket colourways plus full-format digital and OOH ads.",
    year: "2024–2026",
  },
  {
    slug: "navichem",
    name: "Navichem Marine Chemicals",
    shortName: "Navichem",
    industry: "Maritime · Chemical Supply",
    logo: "/work/navichem/logo.png",
    logoInitials: "NC",
    logoInitialsBg: "#EEF4FB",
    logoInitialsColor: "#1B6BB5",
    accentColor: "#1B6BB5",
    services: [
      { label: "Brand Identity",       category: "branding" },
      { label: "Print & Stationery",   category: "print" },
      { label: "Website Design",       category: "website" },
    ],
    projectSlugs: ["navichem-brand"],
    overview:
      "A complete multi-brand identity system for Navichem Marine Chemicals — five brands (Navichem, V.Chem, Unichem, MBLChem, Shipchem), full stationery suite, and website design across the group.",
    year: "2025–2026",
  },
  {
    slug: "armonia",
    name: "Armonia Trading & Commercial Applications",
    shortName: "Armonia",
    industry: "Maritime · Corporate",
    logo: "/work/armonia/logo.png",
    logoInitials: "AR",
    logoInitialsBg: "#EEF4F0",
    logoInitialsColor: "#1E6B3A",
    accentColor: "#1E6B3A",
    services: [
      { label: "Social Media", category: "social-media" },
    ],
    projectSlugs: ["armonia-social"],
    overview:
      "Social media campaign for Armonia's participation in the 56th Career Day in Piraeus — event promotion targeting maritime professionals.",
    year: "2026",
  },
  {
    slug: "mie-group",
    name: "MIE Group",
    shortName: "MIE",
    industry: "Corporate",
    logo: "/work/mie-group/logo.png",
    logoInitials: "MIE",
    logoInitialsBg: "#FFFFFF",
    logoInitialsColor: "#1A3260",
    accentColor: "#1A3260",
    services: [
      { label: "Apparel Design", category: "apparel" },
    ],
    projectSlugs: ["mie-football"],
    overview:
      "A corporate group requiring a branded football kit for internal sporting events — jersey design with full kit mockup presentation.",
    year: "2025",
  },
];

export const serviceFilters = [
  { id: "all",             label: "All Services" },
  { id: "social-media",   label: "Social Media" },
  { id: "website",        label: "Website Design" },
  { id: "branding",       label: "Brand Identity" },
  { id: "email-campaigns",label: "Email Campaigns" },
  { id: "apparel",        label: "Apparel & Kits" },
  { id: "print",          label: "Print & Stationery" },
  { id: "exhibition",     label: "Exhibition" },
  { id: "motion",         label: "Motion Graphics" },
] as const;

export const sectionLabels: Record<string, string> = {
  "social-media":    "Social Media",
  "website":         "Website Design",
  "branding":        "Brand Identity",
  "email-campaigns": "Email Campaigns",
  "apparel":         "Apparel & Kits",
  "print":           "Print & Stationery",
  "exhibition":      "Exhibition Design",
  "motion":          "Motion Graphics",
};

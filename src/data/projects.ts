export type Category =
  | "featured"
  | "social-media"
  | "website"
  | "branding"
  | "marketing"
  | "print"
  | "motion"
  | "apparel";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: Category[];
  tags: string[];
  year: string;
  cover: string;
  images: string[];
  summary: string;
  description: string;
  deliverables: string[];
  featured: boolean;
}

export const projects: Project[] = [
  // ─── FEATURED ───────────────────────────────────────────────────────────────

  {
    slug: "mia-femtech-social",
    title: "MIA FemTech — Social Media Campaign",
    client: "MIA FemTech Cyprus",
    category: ["featured", "social-media"],
    tags: ["Social Media", "Brand Identity", "Campaign", "Healthcare", "Luxury"],
    year: "2025–2026",
    cover: "/work/mia-femtech/post-01.jpg",
    images: [
      "/work/mia-femtech/post-01.jpg",
      "/work/mia-femtech/post-02.jpg",
      "/work/mia-femtech/post-03.jpg",
      "/work/mia-femtech/post-04.jpg",
      "/work/mia-femtech/post-05.jpg",
      "/work/mia-femtech/post-06.jpg",
      "/work/mia-femtech/post-08.jpg",
    ],
    summary:
      "A premium content strategy and full social media campaign for Cyprus's leading FemTech clinic, positioning breast augmentation as a journey of confidence and self-care.",
    description:
      "MIA FemTech approached me to build a consistent, luxury social media identity across Instagram from scratch. The challenge was balancing clinical credibility with emotional resonance — making women feel seen, safe, and inspired. Every post was designed around 'The Experience Series' narrative, guiding the audience through awareness, education, and decision-making. The visual language uses soft tones, editorial typography, and intentional whitespace to create a premium, trustworthy aesthetic consistent with the brand's positioning.",
    deliverables: [
      "Monthly social media calendars (Dec 2025 – Apr 2026)",
      "Instagram carousels, single posts, and stories",
      "Google Ads display creatives",
      "Video social content",
      "Brand tone-of-voice guidelines",
    ],
    featured: true,
  },

  {
    slug: "amsoil-social",
    title: "AMSOIL — Social Media Campaign",
    client: "AMSOIL Cyprus Distributor",
    category: ["featured", "social-media", "marketing"],
    tags: ["Social Media", "Automotive", "Campaign", "Product Design", "Performance"],
    year: "2025–2026",
    cover: "/work/amsoil/post-01.jpg",
    images: [
      "/work/amsoil/post-01.jpg",
      "/work/amsoil/post-02.jpg",
      "/work/amsoil/post-03.jpg",
      "/work/amsoil/extra-10.jpg",
      "/work/amsoil/extra-9.jpg",
    ],
    summary:
      "A bold, performance-driven social media campaign for AMSOIL's Cyprus distributor — communicating premium motor oil quality to an automotive enthusiast audience.",
    description:
      "AMSOIL needed a social media presence that spoke directly to car enthusiasts and professional mechanics in Cyprus. The design approach centers on power and precision — dark backgrounds, bold typography, and cinematic product photography that positions AMSOIL as the premium choice in synthetic lubricants. Monthly content calendars cover product spotlights, technical blog features, and influencer partnerships, each designed to educate and convert a niche, high-intent audience.",
    deliverables: [
      "Monthly social media calendars (ongoing)",
      "Instagram and Facebook post series",
      "Carousel educational posts",
      "Influencer collaboration creatives",
      "Story formats and highlights covers",
    ],
    featured: true,
  },

  {
    slug: "mia-femtech-website",
    title: "MIA FemTech — Website Design",
    client: "MIA FemTech Cyprus",
    category: ["featured", "website"],
    tags: ["Web Design", "UI/UX", "Landing Page", "Healthcare", "Mobile-First"],
    year: "2025",
    cover: "/work/mia-femtech/post-04.jpg",
    images: ["/work/mia-femtech/post-04.jpg", "/work/mia-femtech/post-05.jpg"],
    summary:
      "A responsive multi-device website design for MIA FemTech — crafted to convert visitors into consultation bookings through trust, luxury, and clear information hierarchy.",
    description:
      "The MIA FemTech website design required a careful balance: premium aesthetic that commands trust, paired with clear navigation to guide patients toward booking a consultation. I designed the full landing page at desktop, tablet, and mobile breakpoints — ensuring the experience felt intentional across all devices. The typography hierarchy and imagery selections were guided by the brand's luxury healthcare positioning.",
    deliverables: [
      "Desktop landing page design",
      "Tablet responsive layout",
      "Mobile responsive layout",
      "Component design system",
      "Typography and spacing guidelines",
    ],
    featured: true,
  },

  // ─── WEBSITE DESIGN ─────────────────────────────────────────────────────────

  {
    slug: "northtide-website",
    title: "NorthTide — Landing Page Design",
    client: "NorthTide Cargo Logistics",
    category: ["website", "branding"],
    tags: ["Web Design", "UI/UX", "Maritime", "Corporate", "Responsive"],
    year: "2025",
    cover: "/work/posidonia/event-01.jpg",
    images: ["/work/posidonia/event-01.jpg", "/work/posidonia/event-02.jpg"],
    summary:
      "A corporate landing page for NorthTide Cargo Logistics designed across desktop, tablet, and mobile — communicating reliability and global reach in maritime freight.",
    description:
      "NorthTide required a landing page that positioned them as a credible, modern player in the cargo logistics industry. The design prioritises clarity and trust signals, with a structured layout that communicates key services at a glance. The responsive design system ensures consistent brand presentation from widescreen monitors to mobile devices.",
    deliverables: [
      "Desktop landing page",
      "Tablet breakpoint design",
      "Mobile phone layout",
      "Brand colour and typography system",
    ],
    featured: false,
  },

  {
    slug: "fameline-website",
    title: "Fameline Mission Solutions — Website Design",
    client: "Fameline Mission Solutions",
    category: ["website", "branding"],
    tags: ["Web Design", "Corporate", "Defence", "UI/UX", "Multi-page"],
    year: "2025",
    cover: "/work/posidonia/event-02.jpg",
    images: ["/work/posidonia/event-02.jpg", "/work/posidonia/event-03.jpg"],
    summary:
      "A premium corporate website design for Fameline Mission Solutions — a defence and security solutions provider requiring gravitas, authority, and precision in every pixel.",
    description:
      "Fameline Mission Solutions operates in the defence and security sector — an industry where visual communication must project authority and technical competence. The website design uses deep navy tones, precise grid layouts, and structured information hierarchy to communicate expertise. Designed across landing page and services page, both with desktop and mobile variants.",
    deliverables: [
      "Landing page (desktop + mobile)",
      "Services page (desktop + mobile)",
      "Brand application guidelines",
    ],
    featured: false,
  },

  {
    slug: "albaflux-website",
    title: "Albaflux — Landing Page",
    client: "Albaflux",
    category: ["website", "branding"],
    tags: ["Web Design", "Landing Page", "Maritime", "Brand Identity"],
    year: "2025",
    cover: "/work/posidonia/event-03.jpg",
    images: ["/work/posidonia/event-03.jpg"],
    summary:
      "A clean, conversion-focused landing page for Albaflux, complementing the brand's comprehensive identity system.",
    description:
      "Designed in conjunction with the Albaflux brand guidelines, this landing page translates the brand system into a digital experience. The design uses the established colour palette and typography to create a cohesive online presence that extends the brand's credibility.",
    deliverables: ["Single-page landing design", "Brand system integration"],
    featured: false,
  },

  // ─── BRANDING & IDENTITY ────────────────────────────────────────────────────

  {
    slug: "albaflux-brand",
    title: "Albaflux — Brand Identity System",
    client: "Albaflux",
    category: ["branding"],
    tags: ["Brand Identity", "Brand Guidelines", "Maritime", "Corporate Identity"],
    year: "2025",
    cover: "/work/bwss/campaign-0.jpg",
    images: [
      "/work/bwss/campaign-0.jpg",
      "/work/bwss/campaign-1.jpg",
      "/work/bwss/campaign-2.jpg",
    ],
    summary:
      "A complete brand identity system for Albaflux — including logo design, colour palette, typography standards, and a comprehensive brand guidelines document.",
    description:
      "The Albaflux brand identity was built to position the company as a credible, professional operator in the maritime and chemical supply sector. The guidelines document covers every touchpoint: logo usage rules, colour systems, typographic hierarchy, email signatures, and application examples. The result is a coherent identity that can scale confidently across print, digital, and corporate communications.",
    deliverables: [
      "Logo design (all variants)",
      "Brand guidelines PDF",
      "Colour and typography system",
      "Email signature design",
      "Corporate stationery",
    ],
    featured: false,
  },

  // ─── MARKETING & EMAIL CAMPAIGNS ────────────────────────────────────────────

  {
    slug: "bwss-email-campaign",
    title: "BWSS — Email Marketing Campaign",
    client: "BWSS (Ballast Water Solutions)",
    category: ["marketing"],
    tags: ["Email Marketing", "Campaign", "Maritime", "LinkedIn", "B2B"],
    year: "2025",
    cover: "/work/bwss/campaign-3.jpg",
    images: [
      "/work/bwss/campaign-3.jpg",
      "/work/bwss/campaign-4.jpg",
      "/work/bwss/campaign-5.jpg",
      "/work/bwss/campaign-0.jpg",
      "/work/bwss/campaign-1.jpg",
    ],
    summary:
      "A five-campaign email and LinkedIn marketing series for BWSS — educating maritime operators on ballast water management regulations and BWSS's solution portfolio.",
    description:
      "BWSS needed a professional content marketing campaign to reach maritime operators and decision-makers across five critical compliance topics. Each campaign includes a header visual and LinkedIn post — designed to capture attention in crowded inboxes and feeds. The visual approach uses authority signals: clean layouts, bold headlines, and industry-specific photography to position BWSS as the expert voice in ballast water treatment.",
    deliverables: [
      "5 email campaign headers",
      "5 LinkedIn post designs",
      "Campaign copywriting and visual direction",
      "Case study creative assets",
    ],
    featured: false,
  },

  // ─── MOTION & EXHIBITIONS ───────────────────────────────────────────────────

  {
    slug: "posidonia-exhibition",
    title: "Posidonia 2024 — Exhibition Motion & Branding",
    client: "BWSS / Euploia / Armonia",
    category: ["motion", "marketing"],
    tags: ["Motion Graphics", "After Effects", "Exhibition", "Maritime", "Event Branding"],
    year: "2024",
    cover: "/work/posidonia/event-01.jpg",
    images: [
      "/work/posidonia/event-01.jpg",
      "/work/posidonia/event-02.jpg",
      "/work/posidonia/event-03.jpg",
    ],
    summary:
      "Full exhibition branding and motion graphics for three maritime companies at Posidonia 2024 — one of the world's largest shipping trade shows — including LED wall videos, teaser campaigns, and save-the-date animations.",
    description:
      "Posidonia is the world's largest maritime exhibition. For 2024, I created complete exhibition identities for three Fameline Group companies: BWSS (Ballast Water Solutions), Euploia, and Armonia. The scope included animated teaser videos distributed on social media before the event, save-the-date motion pieces, and full-resolution LED wall content displayed live at the exhibition stands in Athens. Each brand's motion language was distinct while maintaining the professional standards expected at an international trade event.",
    deliverables: [
      "LED wall video content (looping, event-ready)",
      "Social media teaser videos (MP4)",
      "Save-the-date animated videos",
      "After Effects source projects",
      "Exhibition booth branding assets",
    ],
    featured: false,
  },

  // ─── APPAREL & MERCHANDISE ──────────────────────────────────────────────────

  {
    slug: "apparel-design",
    title: "Corporate Apparel Design",
    client: "Multiple Clients",
    category: ["print", "apparel"],
    tags: ["Apparel Design", "Merchandise", "Corporate Branding", "Mockup", "Print"],
    year: "2024–2026",
    cover: "/work/clothing/sinomed-jacket.jpg",
    images: [
      "/work/clothing/sinomed-jacket.jpg",
      "/work/clothing/sinomed-grey.jpg",
      "/work/clothing/lubedesk-jacket.jpg",
      "/work/clothing/marathon-front.jpg",
    ],
    summary:
      "Branded apparel and merchandise design for four corporate clients — translating each brand identity into wearable assets including jackets, sports kits, and event t-shirts.",
    description:
      "Corporate apparel design requires understanding how a logo and brand system behaves on fabric and three-dimensional surfaces. Across four client projects — SinoMed, LubeDesk, MIE Group, and Fameline Holding Group — I designed branded jackets, sports kits, and event t-shirts. Each design was optimised for both on-screen presentation and print-ready production, including colour variants, logo placement options, and size specifications.",
    deliverables: [
      "SinoMed branded jackets (multiple colourways)",
      "LubeDesk corporate jackets",
      "MIE Group football kit",
      "Fameline Marathon t-shirt (front + back, print-ready)",
      "Print specification files",
    ],
    featured: false,
  },
];

export const categories = [
  { id: "all",          label: "All Work" },
  { id: "featured",    label: "Featured" },
  { id: "social-media",label: "Social Media" },
  { id: "website",     label: "Website Design" },
  { id: "branding",    label: "Branding" },
  { id: "marketing",   label: "Marketing" },
  { id: "motion",      label: "Motion" },
  { id: "print",       label: "Print & Apparel" },
] as const;

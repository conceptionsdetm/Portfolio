export type Category =
  | "featured"
  | "social-media"
  | "website"
  | "branding"
  | "email-campaigns"
  | "print"
  | "motion"
  | "apparel"
  | "exhibition";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: Category[];
  tags: string[];
  year: string;
  cover: string;
  images: string[];
  pdf?: string;
  pdfTablet?: string;
  pdfMobile?: string;
  previewImg?: string;
  previewImgTablet?: string;
  previewImgMobile?: string;
  url?: string;
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
      "/work/mia-femtech/dec-01-experience.jpg",
      "/work/mia-femtech/dec-03-confidence.jpg",
      "/work/mia-femtech/dec-05-checklist.jpg",
      "/work/mia-femtech/dec-07-soft-luxury.jpg",
      "/work/mia-femtech/dec-xmas.jpg",
      "/work/mia-femtech/dec-newyear.jpg",
      "/work/mia-femtech/apr-01-01.jpg",
      "/work/mia-femtech/apr-01-02.jpg",
      "/work/mia-femtech/apr-01-03.jpg",
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
    category: ["featured", "social-media"],
    tags: ["Social Media", "Automotive", "Campaign", "Product Design", "Performance"],
    year: "2025–2026",
    cover: "/work/amsoil/post-01.jpg",
    images: [
      "/work/amsoil/post-01.jpg",
      "/work/amsoil/post-02.jpg",
      "/work/amsoil/post-03.jpg",
      "/work/amsoil/extra-10.jpg",
      "/work/amsoil/extra-9.jpg",
      "/work/amsoil/apr-carousel-01.jpg",
      "/work/amsoil/apr-carousel-02.jpg",
      "/work/amsoil/apr-carousel-03.jpg",
      "/work/amsoil/apr-carousel-04.jpg",
      "/work/amsoil/apr-carousel-05.jpg",
      "/work/amsoil/apr-carousel-06.jpg",
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
    cover: "/work/mia-femtech/website-cover.jpg",
    images: ["/work/mia-femtech/website-cover.jpg"],
    previewImg: "/work/mia-femtech/preview-desktop.jpg",
    previewImgTablet: "/work/mia-femtech/preview-tablet.jpg",
    previewImgMobile: "/work/mia-femtech/preview-mobile.jpg",
    url: "https://mia-femtech.medisera.eu/",
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

  // ─── SOCIAL MEDIA ───────────────────────────────────────────────────────────

  {
    slug: "fameline-social",
    title: "Fameline Holding Group — Corporate Social Media",
    client: "Fameline Holding Group",
    category: ["social-media"],
    tags: ["Social Media", "Corporate", "Campaign", "Event", "B2B"],
    year: "2025–2026",
    cover: "/work/fameline-social/impa.jpg",
    images: [
      "/work/fameline-social/impa.jpg",
      "/work/fameline-social/meet-buyer-1.jpg",
      "/work/fameline-social/meet-buyer-2.jpg",
      "/work/fameline-social/meet-buyer-3.jpg",
      "/work/fameline-social/save-the-date.jpg",
      "/work/fameline-social/blood-donation.jpg",
      "/work/fameline-social/hearts-of-gold.jpg",
      "/work/fameline-social/charity.jpg",
      "/work/fameline-social/movember.jpg",
      "/work/fameline-social/xmas.jpg",
      "/work/fameline-social/marathon.jpg",
      "/work/fameline-social/tsikno.jpg",
    ],
    summary:
      "Ongoing corporate social media content for Fameline Holding Group — spanning international trade events, corporate campaigns, charity initiatives, and internal culture posts.",
    description:
      "Fameline Holding Group required a consistent, professional social media presence across a wide variety of content types: international trade event promotions (IMPA London 2025), internal 'Meet the Buyer' team spotlights, CSR initiatives (Blood Donation, International Day of Charity), cultural events (Movember, Christmas), and group-wide communications. Each post maintains brand consistency while adapting tone to the content's purpose — from authoritative to celebratory.",
    deliverables: [
      "Trade event social posts (IMPA London 2025)",
      "Meet the Buyer series — team member spotlights",
      "CSR campaign posts (charity, blood donation)",
      "Cultural and seasonal event posts",
      "Internal communications graphics",
    ],
    featured: false,
  },

  // ─── WEBSITE DESIGN ─────────────────────────────────────────────────────────

  {
    slug: "northtide-website",
    title: "NorthTide — Landing Page Design",
    client: "NorthTide Cargo Logistics",
    category: ["website", "branding"],
    tags: ["Web Design", "UI/UX", "Maritime", "Corporate", "Responsive"],
    year: "2025",
    cover: "/work/northtide/cover.jpg",
    images: ["/work/northtide/cover.jpg", "/work/northtide/hero.jpg", "/work/northtide/full-page.jpg"],
    previewImg: "/work/northtide/preview-desktop.jpg",
    previewImgTablet: "/work/northtide/preview-tablet.jpg",
    previewImgMobile: "/work/northtide/preview-mobile.jpg",
    url: "https://northtide.global/",
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
    pdf: "/pdfs/fameline-web-desktop.pdf",
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
    pdf: "/pdfs/albaflux-web.pdf",
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

  {
    slug: "fameline-stationery",
    title: "Fameline Holding Group — Corporate Stationery",
    client: "Fameline Holding Group",
    category: ["branding", "print"],
    tags: ["Print Design", "Stationery", "Brand Identity", "Corporate", "Mockup"],
    year: "2025–2026",
    cover: "/work/fameline-stationery/envelope-dl.jpg",
    images: [
      "/work/fameline-stationery/envelope-dl.jpg",
      "/work/fameline-stationery/envelope-a4.png",
      "/work/fameline-stationery/notepad.png",
    ],
    summary:
      "Branded corporate stationery for Fameline Holding Group — DL envelope, A4 envelope, and notepad, each carrying the group's identity with precision and refinement.",
    description:
      "Corporate stationery is where brand identity meets daily professional life. For Fameline Holding Group, I designed a cohesive suite of printed materials — DL and A4 envelopes and a branded notepad — ensuring that every piece of correspondence carries the group's visual identity consistently. The designs were produced as print-ready files with mockup presentations for stakeholder approval.",
    deliverables: [
      "DL envelope design (print-ready)",
      "A4 envelope design (print-ready)",
      "Corporate notepad design",
      "Mockup presentations",
    ],
    featured: false,
  },

  // ─── EMAIL CAMPAIGNS ────────────────────────────────────────────────────────

  {
    slug: "bwss-email-campaign",
    title: "BWSS — Email Marketing Campaign",
    client: "BWSS (Ballast Water Solutions)",
    category: ["email-campaigns"],
    tags: ["Email Marketing", "Campaign", "Maritime", "LinkedIn", "B2B"],
    year: "2025",
    cover: "/work/bwss-email/header-01.jpg",
    images: [
      "/work/bwss-email/header-00.jpg",
      "/work/bwss-email/header-01.jpg",
      "/work/bwss-email/linkedin-01.jpg",
      "/work/bwss-email/header-02.jpg",
      "/work/bwss-email/linkedin-02.jpg",
      "/work/bwss-email/header-03.jpg",
      "/work/bwss-email/linkedin-03.jpg",
      "/work/bwss-email/header-04.jpg",
      "/work/bwss-email/linkedin-04.jpg",
      "/work/bwss-email/header-05.jpg",
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

  // ─── EXHIBITIONS ────────────────────────────────────────────────────────────

  {
    slug: "posidonia-exhibition",
    title: "Posidonia 2024 — Exhibition Motion & Branding",
    client: "BWSS / Euploia / Armonia",
    category: ["motion", "exhibition"],
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

  // ─── APPAREL & KITS ─────────────────────────────────────────────────────────

  {
    slug: "sinomed-apparel",
    title: "SinoMed — Corporate Jacket Range",
    client: "SinoMed",
    category: ["apparel"],
    tags: ["Apparel Design", "Corporate Branding", "Jacket", "Mockup", "Colourways"],
    year: "2024–2026",
    cover: "/work/sinomed/jacket-06.jpg",
    images: [
      "/work/sinomed/jacket-06.jpg",
      "/work/sinomed/jacket-07.jpg",
      "/work/sinomed/jacket-01.jpg",
      "/work/sinomed/jacket-02.jpg",
      "/work/sinomed/jacket-03.jpg",
      "/work/sinomed/jacket-04.jpg",
      "/work/sinomed/jacket-05.jpg",
    ],
    summary:
      "A full range of branded corporate jackets for SinoMed — seven colourway variants designed to give the brand a strong, consistent presence across staff and corporate events.",
    description:
      "SinoMed required a professional jacket range that could serve both frontline staff and corporate occasions. I developed seven distinct colourway combinations — black, blue, and grey base jackets each paired with white, blue, grey, or red-white logo treatments — giving SinoMed full flexibility for different contexts. Each design was produced as a photo-realistic mockup for client approval before going to print production.",
    deliverables: [
      "7 jacket colourway designs",
      "Logo placement and sizing specifications",
      "Photo-realistic mockup presentations",
      "Print-ready artwork files",
    ],
    featured: false,
  },

  {
    slug: "lubedesk-apparel",
    title: "LubeDesk — Corporate Jacket Range",
    client: "LubeDesk",
    category: ["apparel"],
    tags: ["Apparel Design", "Corporate Branding", "Jacket", "Mockup", "Maritime"],
    year: "2024–2026",
    cover: "/work/lubedesk/jacket-03.jpg",
    images: [
      "/work/lubedesk/jacket-03.jpg",
      "/work/lubedesk/jacket-04.jpg",
      "/work/lubedesk/jacket-01.jpg",
      "/work/lubedesk/jacket-02.jpg",
    ],
    summary:
      "Four branded jacket variants for LubeDesk — black and blue colourways with complementary logo treatments, designed for professional maritime industry use.",
    description:
      "LubeDesk needed corporate apparel that would represent the brand consistently across maritime industry settings. I designed four jacket variants across two base colours (black and blue) with white, grey, and blue logo treatments, offering versatility for different environments and occasions. Each design was presented as a detailed mockup and produced as print-ready artwork.",
    deliverables: [
      "4 jacket colourway designs",
      "Logo placement specifications",
      "Mockup presentations",
      "Print-ready artwork",
    ],
    featured: false,
  },

  {
    slug: "mie-football",
    title: "MIE Group — Football Kit Design",
    client: "MIE Group",
    category: ["apparel"],
    tags: ["Apparel Design", "Sports Kit", "Football", "Corporate", "Mockup"],
    year: "2025",
    cover: "/work/mie-football/full-kit.jpg",
    images: [
      "/work/mie-football/full-kit.jpg",
      "/work/mie-football/front.jpg",
      "/work/mie-football/back.jpg",
    ],
    summary:
      "A complete branded football kit for MIE Group — jersey front and back with full kit mockup, designed for corporate sporting events and team identity.",
    description:
      "MIE Group commissioned a branded football kit for corporate team events. The design translates the brand's identity onto sportswear — balancing visibility of the logo on dynamic sportswear with a clean, athletic aesthetic. The kit was presented as a full set mockup showing front jersey, back jersey with name/number area, and the complete outfit.",
    deliverables: [
      "Football jersey design (front + back)",
      "Full kit mockup presentation",
      "Print-ready artwork files",
    ],
    featured: false,
  },

  {
    slug: "marathon-tshirt",
    title: "Fameline Group — Marathon T-Shirt 2026",
    client: "Fameline Holding Group",
    category: ["apparel", "print"],
    tags: ["Apparel Design", "Event", "T-Shirt", "Marathon", "Print"],
    year: "2026",
    cover: "/work/marathon/front.jpg",
    images: [
      "/work/marathon/front.jpg",
      "/work/marathon/back.jpg",
    ],
    summary:
      "Official event t-shirt design for the Fameline Holding Group team at the Limassol Marathon 2026 — front and back, print-ready for the event.",
    description:
      "Fameline Holding Group entered a team in the Limassol Marathon 2026 and required a branded event t-shirt for all participants. The design was created for the Fameline identity, optimised for on-body legibility and comfort during a running event. Both front and back were designed and delivered as print-ready files in time for the event.",
    deliverables: [
      "T-shirt front design (print-ready)",
      "T-shirt back design (print-ready)",
      "Mockup presentation for approvals",
    ],
    featured: false,
  },

  {
    slug: "fameline-volleyball",
    title: "Famelions — Volleyball Kit Design",
    client: "Fameline Holding Group",
    category: ["apparel"],
    tags: ["Apparel Design", "Sports Kit", "Volleyball", "Corporate", "Mockup"],
    year: "2025",
    cover: "/work/fameline-volley/tank-front.jpg",
    images: [
      "/work/fameline-volley/tank-front.jpg",
      "/work/fameline-volley/tank-back.jpg",
      "/work/fameline-volley/shorts.jpg",
      "/work/fameline-volley/good-luck.jpg",
    ],
    summary:
      "Complete volleyball kit design for the Famelions — Fameline Holding Group's internal sports team — including tank top, shorts, and a campaign-style 'Good Luck' social post.",
    description:
      "The Famelions needed a full volleyball kit that unified the team's identity for their 2025 season. I designed the complete kit: tank top (front and back) and shorts, all carrying the Famelions brand. Alongside the kit, I produced a social media 'Good Luck Team' post to mark the season launch — demonstrating how apparel design and social communications reinforce each other.",
    deliverables: [
      "Volleyball tank top (front + back)",
      "Shorts design",
      "Full kit mockup",
      "Good Luck social media post",
    ],
    featured: false,
  },
];

export const categories = [
  { id: "all",             label: "All Work" },
  { id: "featured",       label: "Featured" },
  { id: "social-media",   label: "Social Media" },
  { id: "website",        label: "Website Design" },
  { id: "branding",       label: "Brand Identity" },
  { id: "email-campaigns",label: "Email Campaigns" },
  { id: "apparel",        label: "Apparel & Kits" },
  { id: "print",          label: "Print & Stationery" },
  { id: "exhibition",     label: "Exhibitions" },
  { id: "motion",         label: "Motion" },
] as const;

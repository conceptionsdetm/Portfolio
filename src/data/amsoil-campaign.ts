export interface CampaignPost {
  id: string;
  title: string;
  /** Instagram carousel slides */
  images?: string[];
  /** Instagram story */
  story?: string;
  /** Video file path (in public/) — only if small enough to host */
  video?: string;
  /** Post is video content but file is too large to self-host */
  videoPlaceholder?: boolean;
}

export interface CampaignMonth {
  label: string;
  posts: CampaignPost[];
}

const B = "/work/amsoil/campaign";

export const amsoilCampaign: CampaignMonth[] = [
  {
    label: "April 2026",
    posts: [
      {
        id: "apr-p1",
        title: "Product Spotlight — Signature Series 5W-30",
        images: [`${B}/apr-p1/1.jpg`, `${B}/apr-p1/2.jpg`, `${B}/apr-p1/3.jpg`, `${B}/apr-p1/4.jpg`, `${B}/apr-p1/5.jpg`, `${B}/apr-p1/6.jpg`],
        story: `${B}/apr-p1/story.jpg`,
      },
      {
        id: "apr-p2",
        title: "Blog Feature — Head Gaskets",
        images: [`${B}/apr-p2/1.jpg`, `${B}/apr-p2/2.jpg`, `${B}/apr-p2/3.jpg`, `${B}/apr-p2/4.jpg`, `${B}/apr-p2/5.jpg`, `${B}/apr-p2/6.jpg`, `${B}/apr-p2/7.jpg`],
        story: `${B}/apr-p2/story.jpg`,
      },
      {
        id: "apr-p3",
        title: "Severe Gear. Serious Protection",
        images: [`${B}/apr-p3/1.jpg`, `${B}/apr-p3/2.jpg`, `${B}/apr-p3/3.jpg`, `${B}/apr-p3/4.jpg`, `${B}/apr-p3/5.jpg`, `${B}/apr-p3/6.jpg`],
        story: `${B}/apr-p3/story.jpg`,
      },
      {
        id: "apr-p4",
        title: "Understanding Oil Viscosity",
        videoPlaceholder: true,
      },
      {
        id: "apr-p5",
        title: "Trusted by Cyprus Workshops",
        images: [`${B}/apr-p5/1.jpg`, `${B}/apr-p5/2.jpg`, `${B}/apr-p5/3.jpg`, `${B}/apr-p5/4.jpg`, `${B}/apr-p5/5.jpg`, `${B}/apr-p5/6.jpg`],
        story: `${B}/apr-p5/story.jpg`,
      },
      {
        id: "apr-p6",
        title: "Γιατί Συνθετικό Λάδι",
        images: [`${B}/apr-p6/1.jpg`, `${B}/apr-p6/2.jpg`, `${B}/apr-p6/3.jpg`, `${B}/apr-p6/4.jpg`, `${B}/apr-p6/5.jpg`],
        story: `${B}/apr-p6/story.jpg`,
      },
      {
        id: "apr-p7",
        title: "All-Season Diesel Protection in One Bottle",
        images: [`${B}/apr-p7/1.jpg`, `${B}/apr-p7/2.jpg`, `${B}/apr-p7/3.jpg`, `${B}/apr-p7/4.jpg`, `${B}/apr-p7/5.jpg`, `${B}/apr-p7/6.jpg`, `${B}/apr-p7/7.jpg`, `${B}/apr-p7/8.jpg`, `${B}/apr-p7/9.jpg`],
        story: `${B}/apr-p7/story.jpg`,
      },
      {
        id: "apr-p8",
        title: "Every Part, Protected",
        videoPlaceholder: true,
      },
    ],
  },
  {
    label: "May 2026",
    posts: [
      {
        id: "may-p1",
        title: "Built for Extreme Heat",
        images: [`${B}/may-p1/1.jpg`, `${B}/may-p1/2.jpg`, `${B}/may-p1/3.jpg`, `${B}/may-p1/4.jpg`, `${B}/may-p1/5.jpg`, `${B}/may-p1/6.jpg`, `${B}/may-p1/7.jpg`],
        story: `${B}/may-p1/story.jpg`,
      },
      {
        id: "may-p2",
        title: "Protection Beyond the Shore",
        images: [`${B}/may-p2/1.jpg`, `${B}/may-p2/2.jpg`, `${B}/may-p2/3.jpg`, `${B}/may-p2/4.jpg`, `${B}/may-p2/5.jpg`, `${B}/may-p2/6.jpg`, `${B}/may-p2/7.jpg`],
        story: `${B}/may-p2/story.jpg`,
      },
      {
        id: "may-p3",
        title: "Is Your Car Ready for Cyprus Summer?",
        images: [`${B}/may-p3/1.jpg`, `${B}/may-p3/2.jpg`, `${B}/may-p3/3.jpg`, `${B}/may-p3/4.jpg`, `${B}/may-p3/5.jpg`, `${B}/may-p3/6.jpg`, `${B}/may-p3/7.jpg`],
        story: `${B}/may-p3/story.jpg`,
      },
      {
        id: "may-p4",
        title: "European Precision. American Engineering",
        images: [`${B}/may-p4/1.jpg`, `${B}/may-p4/2.jpg`, `${B}/may-p4/3.jpg`, `${B}/may-p4/4.jpg`, `${B}/may-p4/5.jpg`, `${B}/may-p4/6.jpg`],
        story: `${B}/may-p4/story.jpg`,
      },
      {
        id: "may-p5",
        title: "Performance. Trust. AMSOIL — Moisis Ajami",
        images: [`${B}/may-p5/1.jpg`, `${B}/may-p5/2.jpg`, `${B}/may-p5/3.jpg`, `${B}/may-p5/4.jpg`, `${B}/may-p5/5.jpg`, `${B}/may-p5/6.jpg`, `${B}/may-p5/7.jpg`],
        story: `${B}/may-p5/story.jpg`,
      },
      {
        id: "may-p6",
        title: "Protection at Sea",
        videoPlaceholder: true,
      },
      {
        id: "may-p7",
        title: "Prepare Your Engine",
        images: [`${B}/may-p7/1.jpg`, `${B}/may-p7/2.jpg`, `${B}/may-p7/3.jpg`, `${B}/may-p7/4.jpg`, `${B}/may-p7/5.jpg`, `${B}/may-p7/6.jpg`, `${B}/may-p7/7.jpg`],
        story: `${B}/may-p7/story.jpg`,
      },
      {
        id: "may-p8",
        title: "Built for Dirt",
        videoPlaceholder: true,
      },
      {
        id: "may-p9",
        title: "Performance. Trust. AMSOIL — C. Evripidou",
        images: [`${B}/may-p9/1.jpg`, `${B}/may-p9/2.jpg`, `${B}/may-p9/3.jpg`, `${B}/may-p9/4.jpg`, `${B}/may-p9/5.jpg`, `${B}/may-p9/6.jpg`, `${B}/may-p9/7.jpg`],
        story: `${B}/may-p9/story.jpg`,
      },
    ],
  },
  {
    label: "June 2026",
    posts: [
      {
        id: "jun-p1",
        title: "0W-20 Spotlight",
        images: [`${B}/jun-p1/1.jpg`, `${B}/jun-p1/2.jpg`, `${B}/jun-p1/3.jpg`, `${B}/jun-p1/4.jpg`, `${B}/jun-p1/5.jpg`, `${B}/jun-p1/6.jpg`],
        story: `${B}/jun-p1/story.jpg`,
      },
    ],
  },
  {
    label: "Classic Car Festival 2026",
    posts: [
      {
        id: "ccf-inv",
        title: "Invitation — Classic Car Festival Larnaca",
        images: [`${B}/ccf-inv/1.jpg`],
        story: `${B}/ccf-inv/story.jpg`,
      },
      {
        id: "ccf-post",
        title: "AMSOIL at Classic Car Festival Larnaca",
        images: [`${B}/ccf-post/1.jpg`, `${B}/ccf-post/2.jpg`],
        story: `${B}/ccf-post/story.jpg`,
      },
    ],
  },
];

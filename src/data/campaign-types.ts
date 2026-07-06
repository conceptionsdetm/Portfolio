export interface CampaignPost {
  id: string;
  title: string;
  /** Carousel/single slides */
  images?: string[];
  /** Single story image */
  story?: string;
  /** Multiple story slides (for posts with story carousels) */
  stories?: string[];
  /** Hosted video file */
  video?: string;
}

export interface CampaignMonth {
  label: string;
  posts: CampaignPost[];
}

export interface CampaignConfig {
  campaign: CampaignMonth[];
  accentColor: string;
  igUrl?: string;
  webUrl?: string;
  igLabel?: string;
  webLabel?: string;
}

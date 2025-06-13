// app/lib/types.ts

export interface ACFFields {
  icon?: string;
  content?: string;
  [key: string]: any;
}

export interface FeaturedMedia {
  source_url: string;
  alt_text?: string;
}

export interface Post {
  id: number;
  title: { rendered: string };
  slug: string;
  content?: { rendered: string };
  date?: string;
  acf?: ACFFields;
  featured_media?: number;
  _embedded?: {
    'wp:featuredmedia'?: FeaturedMedia[];
  };
}


export interface Tour {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number | 'Custom Quote';
  originalPrice?: number;
  discount?: string;
  image: string;
  category: string;
  rating: number;
  reviewsCount: number;
  highlights: string[];
  itinerary?: { time: string; activity: string }[];
  isMostBooked?: boolean;
  pickup?: 'Available' | 'N/A';
  tags?: string[];
}

export interface GuidePackage {
  id: string;
  name: string;
  price: string;
  color: string;
  features: string[];
  icon: string;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  toursCount: number;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

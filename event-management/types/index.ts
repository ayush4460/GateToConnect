export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface HowItWorksItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  category: 'ORGANIZER' | 'VOLUNTEER' | 'BOTH';
}

export interface Opportunity {
  id: number;
  category: string;
  title: string;
  location: string;
  pay: string;
  image: string;
}

export interface Volunteer {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  expertise: string;
  tags: string[];
  location: string;
  price: string;
  image: string;
}
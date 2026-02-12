
export interface GameCardProps {
  title: string;
  imageUrl: string;
  isComingSoon?: boolean;
}

export interface PricingPlan {
  title: string;
  hour: string;
  half: string;
  icon?: string;
}

export interface Reward {
  game: string;
  amount: number;
}

export interface ContactDetails {
  phone: string;
  email: string;
  address: string;
  instagram: string;
  whatsapp: string;
}

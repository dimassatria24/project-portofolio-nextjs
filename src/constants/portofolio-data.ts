// constants/portfolioData.ts

export type PortofolioItem = {
  id: string;
  imageUrl: string;
  title: string;
  features: string[];
};

export const portofolioData: PortofolioItem[] = [
  {
    id: '1',
    imageUrl: '/images/latestproject1.png',
    title: 'Vacation Landing Page',
    features: ['React', 'Tailwind', 'Responsive'],
  },
  {
    id: '2',
    imageUrl: '/images/latestproject2.png',
    title: 'Digital Wallet',
    features: ['React', 'Tailwind', 'Responsive'],
  },
  {
    id: '3',
    imageUrl: '/images/latestproject3.png',
    title: 'Visual Poetry',
    features: ['React', 'Tailwind', 'Responsive'],
  },
  {
    id: '4',
    imageUrl: '/images/latestproject2.png',
    title: 'Photography Center',
    features: ['React', 'Tailwind', 'Responsive'],
  },
];

export type SocialMedia = {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const socialMediaData: SocialMedia[] = [
  {
    href: 'https://www.linkedin.com/in/dimas-satria-45a343386/',
    alt: 'LinkedIn',
    src: '/icons/companyLogo/IconLinkedin.svg',
    width: 24,
    height: 24,
  },

  {
    href: 'https://www.instagram.com/dimas240595/',
    alt: 'Instagram',
    src: '/icons/companyLogo/Iconinstagram.svg',
    width: 24,
    height: 24,
  },

  {
    href: 'https://www.facebook.com/DmsDayzukeLARCENCIEL/',
    alt: 'Facebook',
    src: '/icons/companyLogo/facebook-icon.svg',
    width: 30,
    height: 30,
  },
];

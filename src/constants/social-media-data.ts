export type SocialMedia = {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const socialMediaData: SocialMedia[] = [
  {
    href: 'https://dribbble.com/',
    alt: 'Dribbble',
    src: '/icons/companyLogo/Icondribble.svg',
    width: 24,
    height: 24,
  },
  {
    href: 'https://instagram.com/',
    alt: 'Instagram',
    src: '/icons/companyLogo/Iconinstagram.svg',
    width: 24,
    height: 24,
  },
  {
    href: 'https://linkedin.com/',
    alt: 'LinkedIn',
    src: '/icons/companyLogo/IconLinkedin.svg', // ✅ Pastikan tidak typo!
    width: 24,
    height: 24,
  },
];

export type Testimonial = {
  logoCompany: string;
  icon: string;
  avatar: string;
  impression: string;
  name: string;
  jobtitle: string;
};

export const testimonialsData: Testimonial[] = [
  {
    logoCompany: '/icons/companyLogo/Company=Adobe.svg',
    icon: '/icons/iconComa.svg',
    impression:
      'They tailored their solutions to our specific needs and goals.',
    avatar: '/images/client1.png',
    name: 'Jack Grealish',
    jobtitle: 'CEO, Adobe',
  },
  {
    logoCompany: '/icons/companyLogo/Company=Airbnb.svg',
    icon: '/icons/iconComa.svg',
    impression: 'Their organization and internal management were outstanding.',
    avatar: '/images/client2.png',
    name: 'Kevin De Bruyne',
    jobtitle: 'Project Manager, Airbnb',
  },
  {
    logoCompany: '/icons/companyLogo/Company=Loom.svg',
    icon: '/icons/iconComa.svg',
    impression: 'Working with them was a great experience.',
    avatar: '/images/client3.png',
    name: 'Jeremy Doku',
    jobtitle: 'Senior Developer, Loom',
  },
  {
    logoCompany: '/icons/companyLogo/Company=Amazon.svg',
    icon: '/icons/iconComa.svg',
    impression: 'Their custom solutions significantly boosted our performance.',
    avatar: '/images/client3.png',
    name: 'Justin Biebe',
    jobtitle: 'CEO, Amazon',
  },
  {
    logoCompany: '/icons/companyLogo/Company=Asana.svg',
    icon: '/icons/iconComa.svg',
    impression: 'They provided outstanding support throughout the project.',
    avatar: '/images/client2.png',
    name: 'Misscal',
    jobtitle: 'IT Specialist, Asana',
  },
  {
    logoCompany: '/icons/companyLogo/Company=Discord.svg',
    icon: '/icons/iconComa.svg',
    impression: 'Communication and delivery exceeded expectations.',
    avatar: '/images/client1.png',
    name: 'Atune',
    jobtitle: 'Project Manager, Discord',
  },
  {
    logoCompany: '/icons/companyLogo/Company=Dropbox.svg',
    icon: '/icons/iconComa.svg',
    impression: 'The team delivered high-quality work on time.',
    avatar: '/images/client3.png',
    name: 'Ferguso',
    jobtitle: 'Senior Developer, Dropbox',
  },
  {
    logoCompany: '/icons/companyLogo/Company=Figma.svg',
    icon: '/icons/iconComa.svg',
    impression: 'Their design thinking really impressed our stakeholders.',
    avatar: '/images/client1.png',
    name: 'Udin',
    jobtitle: 'CEO, Figma',
  },
];

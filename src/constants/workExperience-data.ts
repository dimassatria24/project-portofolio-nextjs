export type WorkExperience = {
  id: number;
  year: string;
  jobTitle: string;
  logoCompany: string; // ganti dari StaticImageData
  company: string;
  jobDescription: string;
};

export const workExperienceData: WorkExperience[] = [
  {
    id: 1,
    year: '2021 - 2024',
    jobTitle: 'Frontend Developer',
    logoCompany: '/icons/Slack.svg',
    company: 'Slack',
    jobDescription:
      'Led a team of developers to build advanced web applications, resulting in a 30% increase in customer retention.',
  },
  {
    id: 2,
    year: '2021 - 2024',
    jobTitle: 'Frontend Developer',
    logoCompany: '/icons/Telegram.svg',
    company: 'Telegram',
    jobDescription:
      'Developed scalable front-end features and improved performance, enhancing user experience significantly.',
  },
  {
    id: 3,
    year: '2021 - 2024',
    jobTitle: 'Frontend Developer',
    logoCompany: 'icons/Line.svg',
    company: 'Line',
    jobDescription:
      'Collaborated with design teams to implement pixel-perfect UI and ensured cross-browser compatibility.',
  },
  {
    id: 4,
    year: '2021 - 2024',
    jobTitle: 'Frontend Developer',
    logoCompany: '/icons/Skype.svg',
    company: 'Skype',
    jobDescription:
      'Optimized application speed and implemented responsive design, reducing bounce rate by 25%.',
  },
];

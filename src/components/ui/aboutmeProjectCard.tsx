import { Icon } from '@iconify/react';

type AboutmeProjectCard = {
  iconName: string;
  iconBgClass: string;
  title: string;
  description: string;
};

export const aboutmeProjectCardData: AboutmeProjectCard[] = [
  {
    iconName: 'lucide:monitor',
    iconBgClass: 'bg-accent-Blue',
    title: 'Landing Page',
    description: '5 Project',
  },
  {
    iconName: 'mingcute:layout-4-line',
    iconBgClass: 'bg-primary-200',
    title: 'Dashboard Saas',
    description: '7 Project',
  },
  {
    iconName: 'streamline:baggage',
    iconBgClass: 'bg-accent-pink pb-5',
    title: 'Company Profile',
    description: '12 Project',
  },
];

export const AboutmeProjectCards: React.FC<AboutmeProjectCard> = ({
  iconName,
  iconBgClass,
  title,
  description,
}) => {
  return (
    <div className='bg-base-white flex rounded-xl p-4 md:rounded-2xl md:p-6'>
      <div
        className={`${iconBgClass} flex-center relative size-12 rounded-full p-3 md:size-16 [&>*]:h-auto [&>*]:w-full`}
      >
        <Icon icon={iconName} width='24' height='24' />
      </div>
      <div className='ml-4 flex-1 items-center justify-center'>
        <h3 className='text-md-semibold md:text-lg-semibold text-neutral-950'>
          {title}
        </h3>
        <p className='md:text-md-regular text-sm-regular mt-0.5 text-neutral-500 md:mt-1'>
          {description}
        </p>
      </div>
    </div>
  );
};

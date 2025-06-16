'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

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

// Animasi masuk saat komponen muncul di viewport
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

type Props = AboutmeProjectCard & {
  index: number;
};

export const AboutmeProjectCardItem: React.FC<Props> = ({
  iconName,
  iconBgClass,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      custom={index}
      variants={fadeUpVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.4 }}
      className='bg-base-white flex rounded-xl p-4 md:rounded-2xl md:p-6'
    >
      {/* Icon */}
      <div
        className={`${iconBgClass} flex-center relative size-12 rounded-full p-3 md:size-16 [&>*]:h-auto [&>*]:w-full`}
      >
        <Icon icon={iconName} width={24} height={24} />
      </div>

      {/* Text */}
      <div className='ml-4 flex flex-1 flex-col justify-center'>
        <h3 className='text-md-semibold md:text-lg-semibold text-neutral-950'>
          {title}
        </h3>
        <p className='text-sm-regular md:text-md-regular mt-0.5 text-neutral-500 md:mt-1'>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

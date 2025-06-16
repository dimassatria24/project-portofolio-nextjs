'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { Section } from '@/components/layouts/section';

import { workExperienceData } from '@/constants/workExperience-data';

export type WorkExperience = {
  id: number;
  year: string;
  jobTitle: string;
  logoCompany: string;
  company: string;
  jobDescription: string;
};

export const WorkexperienceCards = () => {
  return (
    <Section title='WORK EXPERIENCE' subtitle='Professional Career'>
      <div className='space-y-4'>
        {workExperienceData.map((item, index) => (
          <WorkExperienceCard key={item.id} data={item} index={index} />
        ))}
      </div>
    </Section>
  );
};

const WorkExperienceCard = ({
  data,
  index,
}: {
  data: WorkExperience;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-20% 0px -20% 0px',
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.1, // ⏱ delay bertahap per kartu
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial='hidden'
      animate={controls}
      className='overflow-hidden rounded-xl border border-neutral-300 md:relative md:flex'
    >
      {/* Year Label */}
      <p className='from-gra-blue to-gra-purple text-sm-semibold text-neutral-25 md:text-md-semibold z-10 inline-flex shrink-0 items-center justify-center rounded-r-full bg-linear-to-l p-4 md:px-6'>
        {data.year}
      </p>

      {/* Middle Gradient Accent */}
      <div className='from-gra-blue to-gra-purple absolute top-1/2 hidden size-70 -translate-x-1/2 -translate-y-1/2 rounded-r-full bg-linear-to-l md:block' />

      {/* Main Content */}
      <div className='flex flex-col px-4 md:flex-row md:items-center md:py-6 md:pr-12 md:pl-6'>
        {/* Job Info */}
        <div className='flex-1'>
          <div className='text-lg-semibold md:text-xl-semibold max-w-full overflow-x-auto pt-2 pb-3 whitespace-nowrap text-neutral-950'>
            {data.jobTitle}
          </div>
          <div className='flex items-center gap-2'>
            <Image
              src={data.logoCompany}
              alt={data.company}
              loading='lazy'
              width={32}
              height={32}
              className='pointer-events-none mb-1.5'
            />
            <p className='text-md-medium md:text-lg-medium text-neutral-950'>
              {data.company}
            </p>
          </div>
        </div>

        {/* Job Description */}
        <div className='pt-3 md:pt-0 md:pl-6'>
          <p className='text-sm-regular md:text-md-regular pb-4 text-neutral-800'>
            {data.jobDescription}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

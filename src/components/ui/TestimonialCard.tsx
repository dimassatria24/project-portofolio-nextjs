'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { FC, useRef } from 'react';

interface TestimonialCardProps {
  logoCompany: string;
  icon: string;
  impression: string;
  avatar: string;
  name: string;
  jobtitle: string;
  index: number;
}

export const TestimonialCard: FC<TestimonialCardProps> = ({
  logoCompany,
  icon,
  impression,
  avatar,
  name,
  jobtitle,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: '0px 0px -100px 0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
      className='group from-gra-blue to-gra-purple bg-neutral-25 rounded-2xl border border-neutral-300 p-4 md:p-6 md:hover:bg-linear-to-l'
    >
      {/* Logo */}
      <Image
        src={logoCompany}
        alt={`${name}'s Company Logo`}
        width={66}
        height={24}
        loading='lazy'
        className='pointer-events-none md:h-12 md:w-33 md:group-hover:brightness-0 md:group-hover:invert'
      />

      {/* Icon */}
      <Image
        src={icon}
        alt='Quote icon'
        width={32}
        height={32}
        loading='lazy'
        className='pointer-events-none mt-8 md:mt-12 md:size-12 md:group-hover:brightness-0 md:group-hover:invert'
      />

      {/* Impression */}
      <h3 className='text-xl-medium md:display-sm-medium md:group-hover:text-neutral-25 py-8 text-neutral-950 md:py-12'>
        {impression}
      </h3>

      {/* Avatar */}
      <div className='flex items-center gap-4'>
        <Image
          src={avatar}
          alt={`${name}'s Avatar`}
          width={60}
          height={60}
          loading='lazy'
          className='pointer-events-none rounded-full'
        />
        <div>
          <h3 className='text-sm-semibold md:text-md-semibold md:group-hover:text-neutral-25 text-neutral-950'>
            {name}
          </h3>
          <p className='text-sm-regular md:text-md-regular md:group-hover:text-neutral-25 text-neutral-500'>
            {jobtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

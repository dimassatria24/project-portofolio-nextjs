'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';

import { Section } from '@/components/layouts/section';

import { ComparasionDataSkills } from '@/constants/comparasion-data';

type ComparisonCardProps = {
  title: string;
  imageSrc: string;
  alt: string;
  points: string[];
  icon: React.ReactNode;
  bgClass: string;
  textColor: string;
  animationDelay?: number;
};

const cardVariants = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
});

const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ComparisonCard = ({
  title,
  imageSrc,
  alt,
  points,
  icon,
  bgClass,
  textColor,
  animationDelay = 0,
}: ComparisonCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20;
    const y = ((e.clientY - top) / height - 0.5) * -20;

    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg) scale(1.03)`;
  };

  const resetTilt = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants(animationDelay)}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className={`relative w-full overflow-hidden rounded-xs transition-transform duration-300 md:w-1/2 md:rounded-sm ${bgClass} group shadow-lg`}
    >
      {/* Hover glow effect */}
      <div className='pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
        <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 blur-2xl' />
      </div>

      <div className='relative z-20 flex flex-col items-center'>
        <h1 className={`text-lg-semibold p-6 md:pt-8 ${textColor}`}>{title}</h1>
        <div className='flex size-20 items-end justify-center overflow-hidden rounded-full bg-neutral-200 md:size-25'>
          <Image
            src={imageSrc}
            alt={alt}
            loading='lazy'
            width={150}
            height={150}
            className='pointer-events-none size-17 md:size-22'
          />
        </div>
      </div>

      <motion.ul
        variants={listContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.4 }}
        className='z-20 flex flex-col items-center justify-center space-y-5 p-6 md:space-y-6 md:p-8'
      >
        {points.map((point, index) => (
          <motion.li
            key={`${title}-${index}`}
            variants={listItem}
            className={`text-md-medium md:text-lg-medium flex items-start gap-3 ${textColor}`}
          >
            <span className='mt-1 h-5 w-5'>{icon}</span>
            <span>{point}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const Comparison = () => {
  const withMePoints = ComparasionDataSkills.map((item) => item.withMe);
  const anotherPoints = ComparasionDataSkills.map((item) => item.another);

  return (
    <Section
      id=''
      title='COMPARISON'
      subtitle='Why I Stand Out'
      className='bg-gradient-to-t from-[#F3EBFF]'
    >
      <div className='from-neutral-15 flex flex-col items-center justify-center gap-6 bg-gradient-to-b md:flex-row'>
        <ComparisonCard
          title='With Me'
          imageSrc='/images/Casual.png'
          alt='With Me Illustration'
          points={withMePoints}
          icon={<Check className='text-base-white' size={16} />}
          bgClass='bg-linear-to-l from-gra-blue to-gra-purple'
          textColor='text-neutral-25'
          animationDelay={0.1}
        />
        <ComparisonCard
          title='Another Talent'
          imageSrc='/images/another.png'
          alt='Another Talent Illustration'
          points={anotherPoints}
          icon={<X className='text-accent-red' size={16} />}
          bgClass='bg-base-white border border-neutral-300'
          textColor='text-neutral-950'
          animationDelay={0.3}
        />
      </div>
    </Section>
  );
};

export default Comparison;

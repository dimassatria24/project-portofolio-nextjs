'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import CircleProgress from '@/components/ui/CircleProgress';

import { skillsData } from '@/constants/skills-data';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

const Cardskills = () => {
  const isMdUp = useMediaQuery('(min-width: 768px)');
  const itemsPerPage = isMdUp ? 6 : 3;

  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(skillsData.length / itemsPerPage);

  // Reset halaman saat jumlah item per halaman berubah
  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const handlePaginate = (direction: 'left' | 'right') => {
    setPage((prev) => {
      if (direction === 'left') return Math.max(prev - 1, 0);
      if (direction === 'right') return Math.min(prev + 1, totalPages - 1);
      return prev;
    });
  };

  const currentItems = skillsData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <Section id='skills' title='SKILL' subtitle='Skillset'>
      {/* Skill Cards Grid */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {currentItems.map((skill, index) => (
          <motion.div
            key={skill.id}
            custom={index}
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            className='bg-base-white flex items-start gap-4 rounded-xl border border-neutral-300 p-4 md:p-6'
          >
            {/* Skill Progress */}
            <div className='flex size-[113px] shrink-0 items-center justify-center md:size-[132px]'>
              <CircleProgress value={skill.skillvalue ?? 0} size={100} />
            </div>

            {/* Skill Content */}
            <div className='my-auto space-y-2'>
              <div className='flex items-center gap-2'>
                <div className='flex size-8 items-center justify-center rounded-full bg-neutral-100 p-1'>
                  <Image
                    src={skill.src}
                    alt={skill.alt}
                    width={24}
                    height={24}
                    loading='lazy'
                    className='pointer-events-none h-full w-auto'
                  />
                </div>
                <h3 className='text-md-semibold md:text-lg-semibold text-neutral-950'>
                  {skill.skilltitle}
                </h3>
              </div>
              <p className='text-sm-regular md:text-md-regular text-neutral-800'>
                {skill.skilldescription}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className='flex-center gap-3 pt-8 md:gap-4'>
        <Button
          variant='outline'
          size='icon'
          className='text-neutral-950 md:size-16'
          onClick={() => handlePaginate('left')}
          disabled={page === 0}
          aria-label='Previous page'
        >
          <ArrowLeft size={16} />
        </Button>
        <span className='text-sm text-neutral-700'>
          {page + 1} / {totalPages}
        </span>
        <Button
          variant='outline'
          size='icon'
          className='text-neutral-950 md:size-16'
          onClick={() => handlePaginate('right')}
          disabled={page >= totalPages - 1}
          aria-label='Next page'
        >
          <ArrowRight size={16} />
        </Button>
      </div>
    </Section>
  );
};

export default Cardskills;

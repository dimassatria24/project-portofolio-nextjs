'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import { PortofolioCard } from '@/components/ui/portofolio-card';

import { portofolioData } from '@/constants/portofolio-data';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import Cardskills from './cardskills';

export const PortofolioX = () => {
  const isMdUp = useMediaQuery('(min-width: 768px)');
  const itemsPerPage = isMdUp ? 2 : 2;

  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(portofolioData.length / itemsPerPage);

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

  const currentItems = portofolioData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <Section id='projects' title='PORTOFOLIO' subtitle='Latest Project'>
      {/* Skill Cards Grid */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {currentItems.map((item, index) => (
          <PortofolioCard key={item.id} item={item} index={index} />
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

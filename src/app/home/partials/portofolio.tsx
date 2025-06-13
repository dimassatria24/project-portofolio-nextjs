'use client';

import { ArrowLeft, ArrowRight, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

type PortofolioData = {
  id: string;
  imageUrl: string;
  title: string;
  features: string[];
};

export function Portofolios({ className }: { className?: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -width : width,
        behavior: 'smooth',
      });
    }
  };

  const items: PortofolioData[] = [
    {
      id: '1',
      imageUrl: '/images/latestproject1.png',
      title: 'Vacation Landing Page',
      features: ['React', 'Tailwind', 'Responsive'],
    },
    {
      id: '2',
      imageUrl: '/images/latestproject2.png',
      title: 'Digital Wallet',
      features: ['React', 'Tailwind', 'Responsive'],
    },
    {
      id: '3',
      imageUrl: '/images/latestproject3.png',
      title: 'Visual Poetry',
      features: ['React', 'Tailwind', 'Responsive'],
    },
    {
      id: '4',
      imageUrl: '/images/latestproject2.png',
      title: 'Photography Center',
      features: ['React', 'Tailwind', 'Responsive'],
    },
  ];

  const groupedItems: PortofolioData[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    groupedItems.push(items.slice(i, i + 2));
  }

  return (
    <Section title='PORTOFOLIO' subtitle='Latest Project'>
      <div className={cn('relative w-full', className)}>
        <div
          ref={containerRef}
          className='no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth'
        >
          {groupedItems.map((group, idx) => (
            <div
              key={`slide-${idx}`}
              className='flex min-w-full snap-start flex-col gap-4 md:flex-row'
            >
              {group.map((item) => (
                <div
                  key={item.id}
                  className='group relative flex-1 overflow-hidden rounded-lg shadow'
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={580}
                    height={441}
                    loading='lazy'
                    className='block h-auto w-full rounded-xl object-cover md:rounded-2xl'
                  />

                  <div className='from-base-black/60 absolute inset-0 rounded-xl bg-gradient-to-t from-1% to-80% group-hover:cursor-pointer group-hover:opacity-100 hover:to-transparent md:rounded-2xl md:opacity-0' />

                  <div className='absolute bottom-4 left-4 flex-col rounded-b-lg group-hover:opacity-100 md:left-8 md:opacity-0'>
                    <div className='md:text-xl-semibold text-lg-semibold flex font-semibold tracking-wider'>
                      {item.title}
                    </div>

                    <ul className='flex gap-2 pt-3 md:pt-4'>
                      {item.features.map((feature, index) => (
                        <li
                          key={index}
                          className='bg-neutral-25 text-xs-regular md:text-sm-regular rounded-full px-2 text-neutral-950'
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='bg-base-white absolute right-4 bottom-4 hidden size-16 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-950 opacity-0 group-hover:opacity-100 hover:cursor-pointer md:right-8 md:bottom-8 md:flex'>
                    <MoveUpRight />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className='flex-center gap-3 pt-8 md:gap-4'>
          <Button
            variant='outline'
            size='icon'
            className='text-neutral-950 md:size-16'
            onClick={() => scrollBy('left')}
            aria-label='Scroll left'
          >
            <ArrowLeft size={16} />
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='text-neutral-950 md:size-16'
            onClick={() => scrollBy('right')}
            aria-label='Scroll right'
          >
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </Section>
  );
}

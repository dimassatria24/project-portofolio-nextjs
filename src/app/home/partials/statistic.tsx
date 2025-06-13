import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel';

import { aboutmeData } from '@/constants/aboutme-data';

const Statistic = () => {
  return (
    <Section
      title='What Our Clients Say'
      subtitle='Real stories from businesses that have transformed with our IT solutions.'
      id='testimonial'
    >
      <Carousel>
        <CarouselContent>
          {aboutmeData.map((statistic, index) => (
            <CarouselItem key={index}>
              <StatisticCard
                key={index}
                rating={statistic.rating}
                description={statistic.description}
                profileSrc={statistic.profileSrc}
                profileName={statistic.profileName}
                profileOccupation={statistic.profileOccupation}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </Section>
  );
};

export default Statistic;

type StatisticCardProps = {
  rating: number;
  description: string;
  profileSrc: string;
  profileName: string;
  profileOccupation: string;
};

const StatisticCard: React.FC<StatisticCardProps> = ({
  rating,
  description,
  profileSrc,
  profileName,
  profileOccupation,
}) => {
  return (
    <div className='bg-base-background rounded-2xl border border-neutral-900 p-4 md:rounded-3xl md:p-6'>
      {/* stars */}
      <div className='flex gap-1'>
        {new Array(rating).fill(null).map((_, index) => (
          <Icon
            key={index}
            icon='line-md:star-filled'
            className='text-2xl text-yellow-500'
          />
        ))}
      </div>

      <p className='text-sm-regular md:text-md-regular text-neutral-25 mt-4 line-clamp-5 h-35 md:h-37.5'>
        {description}
      </p>

      {/* profile */}
      <div className='flex-start mt-4 gap-4 md:mt-6'>
        <Image
          src={profileSrc}
          alt={profileName}
          loading='lazy'
          className='size-12 rounded-full'
        />
        <div>
          <p className='text-sm-bold md:text-md-semibold text-neutral-200'>
            {profileName}
          </p>
          <p className='text-sm-regular md:text-md-regular text-neutral-400'>
            {profileOccupation}
          </p>
        </div>
      </div>
    </div>
  );
};

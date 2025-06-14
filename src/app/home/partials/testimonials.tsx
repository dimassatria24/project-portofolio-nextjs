// File: Testimonials.tsx
import Image from 'next/image';
import React, { FC } from 'react';

import { Section } from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel';

import { testimonialsData } from '@/constants/testimonials-data';

const Testimonials = () => {
  return (
    <Section
      title='TESTIMONIALS'
      subtitle='What Our Clients Say'
      id='testimonials'
    >
      <Carousel>
        <CarouselContent>
          {testimonialsData.map((testimonial, index) => (
            <CarouselItem key={index}>
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </Section>
  );
};

export default Testimonials;

interface TestimonialCardProps {
  logoCompany: string;
  icon: string;
  impression: string;
  avatar: string;
  name: string;
  jobtitle: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  logoCompany,
  icon,
  impression,
  avatar,
  name,
  jobtitle,
}) => {
  return (
    <div className='group from-gra-blue to-gra-purple bg-neutral-25 rounded-2xl border border-neutral-300 p-4 md:p-6 md:hover:bg-linear-to-l'>
      {/* Company Logo */}
      <Image
        src={logoCompany}
        alt={`${name}'s Company Logo`}
        loading='lazy'
        width={66}
        height={24}
        className='md:h-12 md:w-33 md:group-hover:brightness-0 md:group-hover:invert'
      />

      {/* Quote Icon */}
      <Image
        src={icon}
        alt='Quote icon'
        loading='lazy'
        width={32}
        height={32}
        className='mt-8 md:mt-12 md:size-12 md:group-hover:brightness-0 md:group-hover:invert'
      />

      {/* Impression */}
      <h3 className='md:display-sm-medium text-xl-medium md:group-hover:text-neutral-25 py-8 text-neutral-950 md:py-12'>
        {impression}
      </h3>

      {/* Avatar & Info */}
      <div className='flex items-center gap-4'>
        <Image
          src={avatar}
          alt={`${name}'s Avatar`}
          loading='lazy'
          width={60}
          height={60}
          className='rounded-full'
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
    </div>
  );
};

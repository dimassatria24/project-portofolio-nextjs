'use client';

import { Section } from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel';
import { TestimonialCard } from '@/components/ui/TestimonialCard';

import { testimonialsData } from '@/constants/testimonials-data';

const Testimonials = () => (
  <Section
    title='TESTIMONIALS'
    subtitle='What Our Clients Say'
    id='testimonials'
  >
    <Carousel>
      <CarouselContent>
        {testimonialsData.map((testimonial, index) => (
          <CarouselItem key={index}>
            <TestimonialCard {...testimonial} index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNavigation />
    </Carousel>
  </Section>
);

export default Testimonials;

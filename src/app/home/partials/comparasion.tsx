import { Check, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';

import { ComparasionDataSkills } from '@/constants/comparasion-data';

const Comparison = () => {
  return (
    <Section
      title='COMPARISON'
      subtitle='Why I Stand Out'
      className='bg-gradient-to-t from-[#F3EBFF]'
    >
      <div className='from-neutral-15 flex flex-col items-center justify-center gap-6 bg-gradient-to-b md:flex-row'>
        {/* With Me */}
        <div className='from-gra-blue to-gra-purple w-full rounded-xs bg-linear-to-l md:w-1/2 md:rounded-sm'>
          <div className='flex flex-col items-center'>
            <h1 className='text-neutral-25 text-lg-semibold p-6 md:pt-8'>
              With Me
            </h1>
            <div className='bg-base-white flex size-20 items-end justify-center overflow-hidden rounded-full md:size-25'>
              <Image
                src='/images/Casual.png'
                alt='With Me Illustration'
                loading='lazy'
                width={89}
                height={89}
                className='size-17 md:size-22'
              />
            </div>
          </div>
          <ul className='flex flex-col items-center justify-center space-y-2 p-6 md:p-8'>
            {ComparasionDataSkills.map((data, index) => (
              <li
                key={`with-${index}`}
                className='text-md-medium md:text-lg-medium text-neutral-25 flex items-start gap-3'
              >
                <Check className='text-base-white mt-1 h-5 w-5' />
                <span>{data.withMe}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Another Talent */}
        <div className='bg-base-white w-full rounded-xs border border-neutral-300 md:w-1/2 md:rounded-sm'>
          <div className='flex flex-col items-center'>
            <h1 className='text-lg-semibold p-6 text-neutral-950 md:pt-8'>
              Another Talent
            </h1>
            <div className='flex-center size-20 rounded-full bg-neutral-300 md:size-25'>
              <Image
                src='/images/another.png'
                alt='Another Talent Illustration'
                loading='lazy'
                width={150}
                height={150}
                className='size-15 md:size-18'
              />
            </div>
          </div>
          <ul className='flex flex-col items-center justify-center space-y-2 p-6 md:p-8'>
            {ComparasionDataSkills.map((data, index) => (
              <li
                key={`another-${index}`}
                className='text-md-medium md:text-lg-medium flex items-start gap-3 text-neutral-950'
              >
                <X className='text-accent-red mt-1 h-5 w-5' />
                <span>{data.another}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Comparison;

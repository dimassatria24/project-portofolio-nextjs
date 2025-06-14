import Image, { StaticImageData } from 'next/image';

import { Section } from '@/components/layouts/section';

import { workExperienceData } from '@/constants/workExperience-data';

export type WorkExperience = {
  id: number;
  year: string;
  jobTitle: string;
  logoCompany: StaticImageData;
  company: string;
  jobDescription: string;
};

export const WorkexperienceCards = () => {
  return (
    <Section title='WORK EXPERIENCE' subtitle='Professional Career'>
      <div className='space-y-4'>
        {workExperienceData.map((item) => (
          <div
            key={item.id}
            className='overflow-hidden rounded-xl border border-neutral-300 md:relative md:flex'
          >
            {/* Tahun */}
            <p className='from-gra-blue to-gra-purple text-sm-semibold text-neutral-25 md:text-md-semibold z-10 inline-flex shrink-0 items-center justify-center rounded-r-full bg-linear-to-l p-4 md:px-6'>
              {item.year}
            </p>

            {/* Garis Gradient Tengah */}
            <div className='from-gra-blue to-gra-purple absolute top-1/2 hidden size-70 -translate-x-1/2 -translate-y-1/2 rounded-r-full bg-linear-to-l md:block' />

            {/* Konten */}
            <div className='flex flex-col px-4 md:flex-row md:items-center md:py-6 md:pr-12 md:pl-6'>
              <div className='flex-1'>
                <h3 className='text-lg-semibold md:text-xl-semibold pt-2 pb-3 text-neutral-950'>
                  {item.jobTitle}
                </h3>
                <div className='flex items-center gap-2'>
                  <Image
                    src={item.logoCompany}
                    alt={item.company}
                    loading='lazy'
                    width={32}
                    height={32}
                    className='pointer-events-none mb-1.5'
                  />
                  <p className='text-md-medium md:text-lg-medium text-neutral-950'>
                    {item.company}
                  </p>
                </div>
              </div>
              <div className='pt-3 md:pt-0 md:pl-6'>
                <p className='text-sm-regular md:text-md-regular pb-4 text-neutral-800'>
                  {item.jobDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

import Image from 'next/image';
import React from 'react';

import {
  aboutmeProjectCardData,
  AboutmeProjectCards,
} from '@/components/ui/aboutmeProjectCard';

const AboutMe = () => {
  return (
    <div
      id='about'
      className='custom-container relative z-50 mt-5 flex flex-wrap items-center gap-10 md:gap-16'
    >
      {/* ProjectCard */}
      <div className='bg-primary-100 flex-[1.8] basis-85 gap-3 space-y-4 rounded-2xl p-4 max-sm:mt-10 md:rounded-3xl'>
        {aboutmeProjectCardData.map((card) => (
          <AboutmeProjectCards
            key={card.title}
            iconName={card.iconName}
            iconBgClass={card.iconBgClass}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      {/* text & statistic */}

      <div className='flex-[8.2] basis-130 md:mt-20'>
        <div className='bg-base-white inline-block rounded-2xl border border-neutral-300 px-4'>
          <p className='md:text-sm-regular text-xs-regular text-neutral-700'>
            ABOUT ME
          </p>
        </div>
        <h1 className='md:display-2xl-bold display-md-bold mt-3 mb-6 text-neutral-950 md:mt-2'>
          What Do I Help?
        </h1>
        <p className='text-sm-regular md:text-md-regular text-neutral-800'>
          I am a Frontend Developer dedicated to solving problems and creating
          impactful digital experiences. By combining process-driven design and
          modern development practices, I build intuitive and responsive digital
          products that not only enhance user satisfaction but also drive
          business success. Let’s collaborate to bring your vision to life and
          elevate your digital presence
        </p>
        <Statistics />
      </div>
    </div>
  );
};

export default AboutMe;

type Statistic = {
  data: string;
  info: string;
  type: 'project' | 'client';
};

const contributors = [
  { avatarUrl: '/images/client1.png' },
  { avatarUrl: '/images/client2.png' },
  { avatarUrl: '/images/client3.png' },
  { avatarUrl: '/images/client4.png' },
];

const statistics: Statistic[] = [
  {
    data: '200++',
    info: 'Project Completed',
    type: 'project',
  },
  {
    data: '50+',
    info: 'Happy Clients',
    type: 'client',
  },
];

export const Statistics = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-6 py-10 md:justify-evenly lg:justify-between'>
      {statistics.map((statistic) => (
        <div
          key={statistic.data}
          className='flex items-center justify-center gap-6'
        >
          {/* Gantikan berdasarkan type */}
          {statistic.type === 'project' && (
            <div className='flex justify-center max-sm:h-26 max-sm:w-47'>
              <Image
                src='/images/folder.png'
                alt='iconProject'
                loading='lazy'
                width={92}
                height={104}
                className='max-sm:ml-6'
              />
            </div>
          )}
          {statistic.type === 'client' && (
            <div className='mt-3 flex -space-x-3 overflow-hidden'>
              {contributors.map((user, index) => (
                <Image
                  key={index}
                  className='inline-block h-12 w-12'
                  src={user.avatarUrl}
                  alt='avatar'
                  loading='lazy'
                  width={48}
                  height={48}
                />
              ))}
            </div>
          )}

          <div className='flex-1'>
            <p className='display-md-bold md:display-lg-bold text-neutral-950'>
              {statistic.data}
            </p>
            <p className='text-sm-regular md:text-md-regular text-neutral-800'>
              {statistic.info}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

import Image from 'next/image';
import React from 'react';

import {
  aboutmeProjectCardData,
  AboutmeProjectCards,
} from '@/components/ui/aboutmeProjectCard';
import CountUp from '@/components/ui/CountUp';

const AboutMe = () => {
  return (
    <div
      id='about'
      className='custom-container relative z-50 mt-5 flex flex-wrap items-center gap-10'
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
    <div className='flex-center flex-col space-y-6 py-10 md:flex-row md:space-x-6'>
      <div className='flex-1'>
        <div className='md:flex-center flex items-center md:gap-6'>
          <div className='mx-18 md:mx-0'>
            <Image
              src='/images/folder.png'
              alt='iconProject'
              loading='lazy'
              width={82}
              height={94}
              className='pointer-events-none'
            />
          </div>

          <div className='flex flex-col items-start py-4 pl-6 text-left md:pl-0'>
            <CountUp
              end={200}
              duration={1000}
              suffix='+'
              className='display-md-bold min-[1024px]:display-lg-bold text-neutral-950'
            />
            <p className='text-sm-regular min-[1024px]:text-md-regular whitespace-nowrap text-neutral-800'>
              Project Completed
            </p>
          </div>
        </div>
      </div>
      <div className='flex-[1.7] shrink-0'>
        <div className='flex items-center'>
          {statistics.map((statistic) => (
            <div
              key={statistic.data}
              className='flex items-center justify-center md:py-6'
            >
              {statistic.type === 'client' && (
                <div className='flex -space-x-3 overflow-hidden'>
                  {contributors.map((user, index) => (
                    <Image
                      key={index}
                      className='pointer-events-none inline-block'
                      src={user.avatarUrl}
                      alt='avatar'
                      loading='lazy'
                      width={47}
                      height={47}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className='flex flex-col items-start pl-6 text-left'>
            <CountUp
              end={50}
              duration={1000}
              suffix='+'
              className='display-md-bold md:display-lg-bold text-neutral-950'
            />
            <p className='text-sm-regular md:text-md-regular whitespace-nowrap text-neutral-800'>
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

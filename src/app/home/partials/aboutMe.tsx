'use client';

import Image from 'next/image';
import React from 'react';

import {
  aboutmeProjectCardData,
  AboutmeProjectCardItem,
} from '@/components/ui/aboutmeProjectCard';
import CountUp from '@/components/ui/CountUp';

// Type
type Statistic = {
  data: number;
  suffix: string;
  info: string;
  type: 'project' | 'client';
};

// Dummy contributors (clients)
const contributors = [
  '/images/client1.png',
  '/images/client2.png',
  '/images/client3.png',
  '/images/client4.png',
];

// Statistic data
const statistics: Statistic[] = [
  {
    data: 200,
    suffix: '++',
    info: 'Project Completed',
    type: 'project',
  },
  {
    data: 50,
    suffix: '+',
    info: 'Happy Clients',
    type: 'client',
  },
];

const AboutMe = () => {
  return (
    <div
      id='about'
      className='custom-container relative z-50 mt-5 flex flex-wrap items-center gap-10'
    >
      {/* Project Cards */}
      <div className='bg-primary-100 flex-[1.8] basis-85 space-y-4 rounded-2xl p-4 max-sm:mt-10 md:rounded-3xl'>
        {aboutmeProjectCardData.map((item, index) => (
          <AboutmeProjectCardItem key={index} index={index} {...item} />
        ))}
      </div>

      {/* Text & Statistic */}
      <div className='flex-[8.2] basis-130 md:mt-20'>
        {/* Section Title */}
        <div className='bg-base-white inline-block rounded-2xl border border-neutral-300 px-4'>
          <p className='text-xs-regular md:text-sm-regular text-neutral-700'>
            ABOUT ME
          </p>
        </div>

        <h1 className='display-md-bold md:display-2xl-bold mt-3 mb-6 text-neutral-950 md:mt-2'>
          What Do I Help?
        </h1>

        <p className='text-sm-regular md:text-md-regular text-neutral-800'>
          I am a Frontend Developer dedicated to solving problems and creating
          impactful digital experiences. By combining process-driven design and
          modern development practices, I build intuitive and responsive digital
          products that not only enhance user satisfaction but also drive
          business success. Let’s collaborate to bring your vision to life and
          elevate your digital presence.
        </p>

        {/* Statistic Section */}
        <Statistics />
      </div>
    </div>
  );
};

export default AboutMe;

// === STATISTICS ===

const Statistics = () => {
  return (
    <div className='flex-center flex-col space-y-6 py-10 md:flex-row md:space-x-6'>
      {statistics.map((stat, index) => (
        <StatisticItem key={index} {...stat} />
      ))}
    </div>
  );
};

// const StatisticItem: React.FC<Statistic> = ({ data, suffix, info, type }) => {
//   return (
//     <div className='flex items-center space-x-4'>
//       {/* Icon or Avatars */}
//       {type === 'project' ? (
//         <Image
//           src='/images/folder.png'
//           alt='Project Icon'
//           loading='lazy'
//           width={82}
//           height={94}
//           className='pointer-events-none'
//         />
//       ) : (
//         <div className='flex -space-x-3 overflow-hidden'>
//           {contributors.map((src, i) => (
//             <Image
//               key={i}
//               src={src}
//               alt='Client Avatar'
//               width={47}
//               height={47}
//               className='pointer-events-none inline-block'
//               loading='lazy'
//             />
//           ))}
//         </div>
//       )}

//       {/* Count & Info */}
//       <div className='flex flex-col items-start text-left'>
//         <CountUp
//           end={data}
//           suffix={suffix}
//           duration={1000}
//           className='display-md-bold md:display-lg-bold text-neutral-950'
//         />
//         <p className='text-sm-regular md:text-md-regular whitespace-nowrap text-neutral-800'>
//           {info}
//         </p>
//       </div>
//     </div>
//   );
// };

const StatisticItem: React.FC<Statistic> = ({ data, suffix, info, type }) => {
  return (
    <div className='flex items-center space-x-6'>
      {/* Icon atau Avatars */}
      <div className='flex-shrink-0'>
        {type === 'project' ? (
          <div className='relative h-25 w-25'>
            <Image
              src='/images/folder.png'
              alt='Project Icon'
              loading='lazy'
              fill
              className='pointer-events-none object-contain'
            />
          </div>
        ) : (
          <div className='flex -space-x-3 overflow-hidden'>
            {contributors.map((src, i) => (
              <div key={i} className='relative h-12 w-12 md:h-13 md:w-13'>
                <Image
                  src={src}
                  alt='Client Avatar'
                  fill
                  className='pointer-events-none rounded-full object-cover'
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Count & Info */}
      <div className='flex flex-col items-start text-left'>
        <CountUp
          end={data}
          suffix={suffix}
          duration={1000}
          className='display-md-bold md:display-lg-bold text-neutral-950'
        />
        <p className='text-sm-regular md:text-md-regular whitespace-nowrap text-neutral-800'>
          {info}
        </p>
      </div>
    </div>
  );
};

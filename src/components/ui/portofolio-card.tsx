'use client';

import { motion } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';

type PortofolioItem = {
  id: string;
  imageUrl: string;
  title: string;
  features: string[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

export const PortofolioCard = ({
  item,
  index,
}: {
  item: PortofolioItem;
  index: number;
}) => (
  <motion.div
    key={item.id}
    custom={index}
    variants={fadeUp}
    initial='hidden'
    whileInView='visible'
    viewport={{ once: false, amount: 0.3 }}
    className='bg-base-white flex items-start gap-4 rounded-xl border border-neutral-300 p-4 md:p-6'
  >
    <div className='group relative flex-1 overflow-hidden rounded-lg shadow'>
      <Image
        src={item.imageUrl}
        alt={item.title}
        width={580}
        height={441}
        loading='lazy'
        className='block h-auto w-full rounded-xl object-cover md:rounded-2xl'
      />

      <div className='from-base-black/60 absolute inset-0 rounded-xl bg-gradient-to-t via-transparent to-transparent group-hover:opacity-100 md:rounded-2xl md:opacity-0' />

      <div className='absolute bottom-4 left-4 flex-col group-hover:opacity-100 md:left-8 md:opacity-0'>
        <h3 className='text-lg font-semibold md:text-xl'>{item.title}</h3>
        <ul className='flex gap-2 pt-3 md:pt-4'>
          {item.features.map((feature, i) => (
            <li
              key={i}
              className='bg-neutral-25 rounded-full px-2 text-xs text-neutral-950 md:text-sm'
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className='bg-base-white absolute right-4 bottom-4 hidden size-16 items-center justify-center rounded-full border border-neutral-300 text-neutral-950 opacity-0 group-hover:opacity-100 md:right-8 md:bottom-8 md:flex'>
        <MoveUpRight />
      </div>
    </div>
  </motion.div>
);

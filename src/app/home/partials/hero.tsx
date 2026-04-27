'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import { socialMediaData } from '@/constants/social-media-data';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Hero = () => {
  return (
    <header id='home' className='bg-base-black md:custom-container w-full'>
      <div className='relative mx-auto h-185 md:h-315'>
        {/* Background Images */}
        <>
          <Image
            src='/images/bgherogra.png'
            alt='Background Graphic'
            width={1440}
            height={1024}
            priority
            sizes='(max-width: 1280px) 100vw, 50vw'
            className='pointer-events-none absolute bottom-0 left-1/2 min-h-106 w-full -translate-x-1/2 object-cover'
          />
          <Image
            src='/images/Line.png'
            alt='Line Graphic'
            width={1440}
            height={865}
            priority
            sizes='(max-width: 1280px) 100vw, 50vw'
            className='pointer-events-none absolute bottom-0 left-1/2 w-full -translate-x-1/2 object-cover'
          />
          <Image
            src='/images/myprofile.png'
            alt='Profile Picture'
            width={754}
            height={754}
            priority
            className='pointer-events-none absolute bottom-0 left-1/2 min-h-98 -translate-x-1/2 object-cover'
          />
          <Image
            src='/images/Subtracthero.png'
            alt='Subtract Graphic'
            width={1440}
            height={17}
            priority
            sizes='(max-width: 1280px) 100vw, 50vw'
            className='pointer-events-none absolute top-180 z-50 w-full md:top-295'
          />
        </>

        {/* Hero Content */}
        <div className='custom-container flex w-full flex-wrap pt-34 md:pt-36'>
          <motion.h1
            className='text-neutral-25 display-md-extrabold md:display-3xl-extrabold text-left min-md:w-170'
            variants={fadeUpVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            custom={0}
          >
            Hey There,
            <br />
            I’m Dimas Satria
          </motion.h1>

          <motion.p
            className='text-sm-regular md:text-lg-regular flex-[3.1] basis-80 text-neutral-300 sm:text-right'
            variants={fadeUpVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            custom={1}
          >
            Front-End Developer with a passion for clean code and intuitive
            design. Turning ideas into functional beauty
          </motion.p>
        </div>

        {/* Social Icons & Scroll Button */}
        <motion.div
          className='custom-container flex-between absolute right-0 bottom-10 left-0 z-40 w-full cursor-pointer md:bottom-40'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={2}
        >
          <div className='flex gap-4'>
            {socialMediaData.map((icon, index) => (
              <motion.div
                key={icon.alt}
                variants={fadeUpVariant}
                custom={2.2 + index * 0.1}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, amount: 0.3 }}
              >
                <Link
                  href={icon.href}
                  target='_blank'
                  className='flex-center size-12 rounded-full bg-neutral-950/50 p-3 md:size-15'
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                    loading='lazy'
                    className='pointer-events-none h-full w-auto'
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUpVariant}
            custom={3}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
          >
            <Button
              variant='outline'
              size='icon'
              asChild
              className='flex-center animate-bounce rounded-full bg-neutral-950/50 p-3 sm:size-12 md:w-41'
            >
              <Link href='#contact' className='flex items-center gap-2'>
                <span className='hidden md:inline'>Scroll Down</span>
                <ArrowDown size={20} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;

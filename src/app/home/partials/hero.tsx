'use client';

import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import { socialMediaData } from '@/constants/social-media-data';

const Hero = () => {
  return (
    <header id='home' className='bg-base-black md:custom-container w-full'>
      <div className='relative mx-auto h-185 md:h-315'>
        <Image
          src='/images/bgherogra.png'
          alt='logo'
          width={1440}
          height={1024}
          sizes='(max-width: 1280px) 100vw, 50vw'
          priority
          className='pointer-events-none absolute bottom-0 left-1/2 min-h-106 w-full -translate-x-1/2 object-cover'
        />
        <Image
          src='/images/Line.png'
          alt='logo'
          priority
          width={1440}
          height={865}
          sizes='(max-width: 1280px) 100vw, 50vw'
          className='pointer-events-none absolute bottom-0 left-1/2 w-full -translate-x-1/2 object-cover'
        />
        <Image
          src='/images/profile.png'
          alt='logo'
          priority
          width={754}
          height={754}
          className='pointer-events-none absolute bottom-0 left-1/2 min-h-98 -translate-x-1/2 object-cover'
        />
        <Image
          src='/images/Subtracthero.png'
          alt='logo'
          priority
          width={1440}
          height={17}
          sizes='(max-width: 1280px) 100vw, 50vw'
          className='pointer-events-none absolute top-180 z-50 w-full md:top-295'
        />
        <div className='custom-container flex w-full flex-wrap pt-34 md:pt-36'>
          <h1 className='md:display-3xl-extrabold display-md-extrabold text-neutral-25 text-left min-md:w-170'>
            Hey There,
            <br />
            I’m Edwin Anderson
          </h1>
          <p className='md:text-lg-regular text-sm-regular flex-[3.1] basis-80 text-neutral-300 sm:text-right'>
            Front-End Developer with a passion for clean code and intuitive
            design. Turning ideas into functional beauty
          </p>
        </div>
        <div className='custom-container flex-between pointer-events-auto absolute right-0 bottom-10 left-0 z-40 w-full md:bottom-40'>
          <div className='flex gap-4'>
            {socialMediaData.map((icon) => (
              <Link
                key={icon.alt}
                href={icon.href}
                className='flex-center md-size-15 pointer-events-none size-12 rounded-full bg-neutral-950/50 p-3'
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  property='lazy'
                  width={icon.width}
                  height={icon.height}
                  className='pointer-events-none h-full w-auto'
                  priority={false}
                />
              </Link>
            ))}
          </div>
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
        </div>
      </div>
    </header>
  );
};

export default Hero;

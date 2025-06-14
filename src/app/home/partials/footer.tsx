'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { socialMediaData } from '@/constants/social-media-data';

const Footer = () => {
  return (
    <footer id='footer' className='md:custom-container -mt-140 overflow-hidden'>
      {/* Decorative Patterns */}
      <div className='flex-center w-full'>
        <Image
          src='/images/Pattern.png'
          alt='Pattern 1'
          width={441}
          height={426}
          className='object-cover'
          priority
        />
        <Image
          src='/images/Pattern.png'
          alt='Pattern 2'
          width={441}
          height={426}
          className='object-cover'
        />
      </div>

      {/* Subtract Divider */}
      <Image
        src='/images/Subtract.png'
        alt='Divider'
        loading='lazy'
        width={1440}
        height={52}
        sizes='(max-width: 1280px) 100vw, 50vw'
        className='-mt-35 w-full md:-mt-45'
      />

      {/* Footer Main Content */}
      <div className='relative -mt-3 h-125 w-full bg-neutral-950 object-cover'>
        {/* Background Images */}
        <Image
          src='/images/Line.png'
          alt='Line Background'
          loading='lazy'
          width={1440}
          height={865}
          sizes='(max-width: 1280px) 100vw, 50vw'
          className='pointer-events-none absolute bottom-0 left-1/2 w-full -translate-x-1/2 object-cover'
        />
        <Image
          src='/images/bgherogra.png'
          alt='Hero Background'
          loading='lazy'
          sizes='(max-width: 1280px) 100vw, 50vw'
          fill
          className='pointer-events-none object-cover'
        />

        {/* Footer Info */}
        <div className='pointer-events-none absolute top-50 left-1/2 grid w-full -translate-x-1/2 grid-cols-1 place-items-center object-cover min-md:top-20 md:space-y-10'>
          <Image
            src='/icons/Logo.svg'
            alt='Logo'
            loading='lazy'
            width={138}
            height={32}
            className='h-30 w-35 md:h-12 md:w-52'
          />

          <p className='custom-container md:text-md-regular text-neutral-25 text-sm-regular mb-8 text-center'>
            Front-End Developer with a passion for clean code and intuitive
            design. Turning ideas into functional beauty
          </p>

          {/* Social Media Icons */}
          <div className='flex-start gap-4'>
            {socialMediaData.map((icon) => (
              <Link
                key={icon.alt}
                href={icon.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={icon.alt}
                className='flex-center md-size-15 size-12 rounded-full bg-neutral-950/50 p-3'
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  loading='lazy'
                  width={icon.width}
                  height={icon.height}
                  className='h-full w-auto'
                  priority={false}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

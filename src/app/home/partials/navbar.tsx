'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12,13,13,0)', 'rgba(12,13,13,0.5)']
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationData
        .map((item) => {
          const el = document.querySelector(item.href);
          if (el) {
            const rect = el.getBoundingClientRect();
            return { id: item.href, offset: rect.top };
          }
          return null;
        })
        .filter(Boolean) as { id: string; offset: number }[];

      const threshold = 150;
      const current = sections.find(
        (section) => section.offset >= 0 && section.offset <= threshold
      );
      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      style={{ background, backdropFilter }}
      className='fixed top-0 z-50 w-full transition-all duration-500'
    >
      <div className='flex-between custom-container h-20 w-full md:h-21.5'>
        <Link href='#home'>
          <Image
            src='/icons/Logo.svg'
            alt='logo'
            width={141}
            height={32}
            priority
            className='cursor-pointer'
          />
        </Link>

        <nav className='hidden lg:block'>
          <ul className='flex gap-3'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  href={data.href}
                  className={`text-md-regular p-4 transition duration-300 ${
                    activeSection === data.href
                      ? 'font-semibold text-purple-400'
                      : 'hover:text-purple-400'
                  }`}
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          asChild
          className='text-sm-medium hidden gap-2 transition hover:-translate-y-1 hover:scale-110 lg:flex'
        >
          <Link href='#contact'>
            <Mail size={18} />
            Hire Me
          </Link>
        </Button>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Menu className='cursor-pointer lg:hidden' />
          </SheetTrigger>
          <SheetContent side='right'>
            <SheetHeader>
              <Link href='#home'>
                <Image
                  src='/icons/Logoblack.png'
                  alt='logo'
                  width={141}
                  height={32}
                  loading='lazy'
                  className='py-6'
                />
              </Link>
              <SheetTitle />
              <nav>
                <ul className='flex flex-col gap-4'>
                  {navigationData.map((data) => (
                    <li key={data.label}>
                      <SheetClose asChild>
                        <Link
                          href={data.href}
                          className='text-md-regular py-4 text-neutral-950 transition hover:text-purple-400'
                        >
                          {data.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button
                asChild
                className='text-sm-medium mt-4 w-full gap-2 transition hover:-translate-y-1 hover:scale-101'
              >
                <SheetClose asChild>
                  <Link href='#contact'>
                    <Mail /> Hire Me
                  </Link>
                </SheetClose>
              </Button>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;

import React from 'react';

import { cn } from '@/lib/utils';

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  id?: string;
  description?: string;
  className?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('custom-container py-10 md:py-10', className)}
      {...props}
    >
      {/* heading */}
      <div className='text-center'>
        <div className='flex items-center justify-center'>
          <h2 className='bg-base-white md:text-sm-regular text-xs-regular rounded-4xl border border-neutral-300 pt-1 pr-4 pb-1 pl-4 text-neutral-700'>
            {title}
          </h2>
        </div>
        <p className='md:display-2xl-bold display-md-bold mt-3 text-neutral-950 md:mt-4'>
          {subtitle}
        </p>
      </div>
      {/* content */}
      <div className='mt-6 md:mt-12'> {children}</div>
    </div>
  );
};

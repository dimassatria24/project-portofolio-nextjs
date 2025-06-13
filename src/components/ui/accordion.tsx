'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { PlusIcon, MinusIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn(
        'data-[state=open]:border-primary-200 mb-4 rounded-xl border border-l-10 border-neutral-300 bg-neutral-50 p-4 last:mb-0 md:mb-8 md:p-6',
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          '!text-md-semibold md:text-xl-semibold hover:text-primary-300 data-[state=open]:text-primary-300 group/trigger flex flex-1 cursor-pointer items-start justify-between gap-4 text-left text-neutral-950 transition-all',
          className
        )}
        {...props}
      >
        <div className='flex-1 text-left'>{children}</div>
        <div className='shrink-0'>
          <PlusIcon
            color='#0a0d12'
            className='size-5 rounded-full border border-neutral-300 group-data-[state=open]/trigger:hidden md:size-8'
          />
          <MinusIcon
            color='#0a0d12'
            className='size-5 rounded-full border border-neutral-300 group-data-[state=closed]/trigger:hidden md:size-8'
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-sm-regular overflow-hidden'
      {...props}
    >
      <div className={cn('text-sm-regular mt-4 text-neutral-950', className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

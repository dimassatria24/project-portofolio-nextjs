import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex justify-center items-center shrink-0 disabled:pointer-event-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'text-neutral-950 bg-gradient-purple-blue text-md-medium hover:cursor-pointer rounded-full hover:shadow-[0_0_20px_rgba(135,70,235,0.70)]',
        outline:
          'border border-neutral-800 rounded-full hover:border-gra-purple cursor-pointer',
      },
      size: {
        default: 'h-12 px-12',
        icon: 'size-12 md:size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'text-sm-regular md:text-md-regular bg-neutral-25 h-12 w-full rounded-xl px-3 py-2 outline-1 outline-neutral-300 md:h-14 md:px-4 md:py-2.25',
        'text-neutral-950 focus:ring-[1px] focus:ring-neutral-950',
        className
      )}
      {...props}
    />
  );
}

export { Input };

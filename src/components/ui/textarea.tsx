import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'text-sm-regular md:text-md-regular bg-neutral-25 h-45 max-w-134 resize-none rounded-xl px-4 py-2 outline-1 outline-neutral-300',
        'text-neutral-950 focus:ring-[1px] focus:ring-neutral-500',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

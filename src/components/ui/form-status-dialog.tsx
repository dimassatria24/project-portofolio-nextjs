import Image from 'next/image';
import React from 'react';

import { Button } from './button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
  loading?: boolean;
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader className='relative z-50'>
          <Image
            src={
              variant === 'success'
                ? '/images/iconsend.png'
                : '/images/iconnotsend.png'
            }
            alt={variant === 'success' ? 'success' : 'error'}
            loading='lazy'
            width={160}
            height={160}
            className='absolute top-1/2 left-1/2 size-30 -translate-x-1/2 -translate-y-1/2 md:size-40'
          />
        </DialogHeader>
        <DialogBody>
          <DialogTitle>
            {variant === 'success'
              ? 'Message Sent Successfully!'
              : 'Oops! Something went wrong.'}
          </DialogTitle>
          <DialogDescription>
            {variant === 'success'
              ? 'Thank you for reaching out. I’ll get back to you as soon as possible'
              : `We couldn't send your message. Please try again later or contact us directly.`}
          </DialogDescription>
          <DialogClose asChild>
            <Button className='max-104 mx-auto mt-6'>
              {loading ? 'Loading...' : 'Back to Home'}
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;

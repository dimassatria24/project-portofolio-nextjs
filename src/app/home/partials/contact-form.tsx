'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, useInView } from 'framer-motion';
import { Send } from 'lucide-react';
import React, { useState, useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { z } from 'zod';

import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import FormStatusDialog from '@/components/ui/form-status-dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// ====================
// Schema
// ====================
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Enter a valid email'),
  message: z
    .string()
    .min(20, 'Message must be at least 20 characters')
    .max(500),
});

// ====================
// Reusable Field
// ====================
type FieldProps = {
  name: 'name' | 'email' | 'message';
  label: string;
  placeholder: string;
  as?: 'input' | 'textarea';
  disabled: boolean;
  control: any;
};

const Field = ({
  name,
  label,
  placeholder,
  as = 'input',
  disabled,
  control,
}: FieldProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        {as === 'textarea' ? (
          <Textarea {...field} disabled={disabled} placeholder={placeholder} />
        ) : (
          <Input {...field} disabled={disabled} placeholder={placeholder} />
        )}
        <FormMessage />
      </FormItem>
    )}
  />
);

// ====================
// Main Component
// ====================
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState({
    open: false,
    variant: 'success' as 'success' | 'error',
  });

  const defaultValues = useMemo(
    () => ({ name: '', email: '', message: '' }),
    []
  );

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      form.reset();
      setDialog({ open: true, variant: 'success' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setDialog({ open: true, variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  // ====================
  // Animation Setup
  // ====================
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: '0px 0px -100px 0px',
  });

  const animationProps = {
    initial: { opacity: 0, y: 40 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  return (
    <Section
      title='CONTACT'
      subtitle='Get in Touch'
      id='contact'
      className='relative z-10'
    >
      <motion.div ref={ref} {...animationProps}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='bg-neutral-25 mx-auto flex max-w-150 flex-col space-y-4 rounded-xl border p-8 md:rounded-2xl'
          >
            <Field
              name='name'
              label='Name'
              placeholder='Input your name'
              disabled={loading}
              control={form.control}
            />
            <Field
              name='email'
              label='Email'
              placeholder='Input your email'
              disabled={loading}
              control={form.control}
            />
            <Field
              name='message'
              label='Message'
              placeholder='Input your message'
              as='textarea'
              disabled={loading}
              control={form.control}
            />

            <Button
              disabled={loading}
              className='text-sm-medium md:text-md-medium w-full md:mt-4'
            >
              <Send size={16} className='mx-2' />
              {loading ? <ClipLoader size={20} color='#fff' /> : 'Submit'}
            </Button>
          </form>
        </Form>
      </motion.div>

      <FormStatusDialog
        open={dialog.open}
        variant={dialog.variant}
        loading={loading}
        onOpenChange={(open) => setDialog((prev) => ({ ...prev, open }))}
      />
    </Section>
  );
};

export default ContactForm;

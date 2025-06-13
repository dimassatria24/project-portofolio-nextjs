import React from 'react';

import { Section } from '@/components/layouts/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { QNAData } from '@/constants/qna-data';

const QNA = () => {
  return (
    <Section title='QNA' subtitle='Your Questions, Answered' id='QNA'>
      <Accordion type='single' collapsible className='mx-auto max-w-full'>
        {QNAData.filter((item) => item.question && item.answer).map((item) => (
          <AccordionItem key={item.id} value={item.id.toString()}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default QNA;

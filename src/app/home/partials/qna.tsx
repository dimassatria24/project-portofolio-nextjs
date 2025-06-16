// import React from 'react';

// import { Section } from '@/components/layouts/section';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '@/components/ui/accordion';

// import { QNAData } from '@/constants/qna-data';

// const QNA = () => {
//   return (
//     <Section title='QNA' subtitle='Your Questions, Answered' id='QNA'>
//       <Accordion type='single' collapsible className='mx-auto max-w-full'>
//         {QNAData.map((item, index) => (
//           <AccordionItem key={index} value={index.toString()}>
//             <AccordionTrigger>{item.question}</AccordionTrigger>
//             <AccordionContent>{item.answer}</AccordionContent>
//           </AccordionItem>
//         ))}
//       </Accordion>
//     </Section>
//   );
// };

// export default QNA;

'use client';

import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import { Section } from '@/components/layouts/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { QNAData } from '@/constants/qna-data';

const QNA = () => {
  const filteredQNA = QNAData.filter((item) => item.question && item.answer);

  return (
    <Section title='QNA' subtitle='Your Questions, Answered' id='faq'>
      <Accordion
        type='single'
        collapsible
        className='mx-auto max-w-full space-y-6'
      >
        {filteredQNA.map((item, index) => (
          <QNAItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            index={index}
          />
        ))}
      </Accordion>
    </Section>
  );
};

type QNAItemProps = {
  id: number;
  question: string;
  answer: string;
  index: number;
};

const QNAItem = ({ id, question, answer, index }: QNAItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '0px 0px -80px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
    >
      <AccordionItem value={id.toString()}>
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </AccordionItem>
    </motion.div>
  );
};

export default QNA;

'use client';

import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end?: number;
  duration?: number; // dalam milidetik
  suffix?: string;
  className?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  end = 100,
  duration = 2000,
  suffix = '%',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const animateCount = () => {
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * end);
      setCount(value);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      }
    };

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          animateCount();
        } else {
          setVisible(false);
          setCount(0); // reset jika keluar viewport
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [end, duration]);

  return (
    <div
      ref={ref}
      className={clsx(
        'text-center text-4xl font-bold text-blue-600 transition-all duration-700 ease-out',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className
      )}
    >
      {count}
      {suffix}
    </div>
  );
};

export default CountUp;

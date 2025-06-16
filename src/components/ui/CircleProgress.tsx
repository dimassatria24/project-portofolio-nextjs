'use client';

import { useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface CircleProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  duration?: number;
}

const CircleProgress = ({
  value,
  size = 100,
  strokeWidth = 12,
  duration = 1000,
}: CircleProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frameId: number;
    const startTime = performance.now();

    const step = (timestamp: number) => {
      const progressRatio = Math.min(1, (timestamp - startTime) / duration);
      setProgress(Math.floor(progressRatio * value));
      if (progressRatio < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, duration]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      ref={ref}
      className='relative flex h-full w-full items-center justify-center'
    >
      <svg
        width='100%'
        height='100%'
        viewBox={`0 0 ${size} ${size}`}
        className='rotate-[360deg]'
      >
        {/* GRADIENT DEFINISI */}
        <defs>
          <linearGradient id='gradient' x1='1' y1='0' x2='0' y2='1'>
            <stop offset='100%' stopColor='#9747FF' /> {/* purple */}
            <stop offset='100%' stopColor='#1179FC' /> {/* blue */}
          </linearGradient>
        </defs>

        {/* Lingkaran latar belakang */}
        <circle
          stroke='#d5d7da'
          fill='transparent'
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        {/* Lingkaran progress */}
        <circle
          stroke='url(#gradient)' // Gradient digunakan di sini
          fill='transparent'
          strokeWidth={strokeWidth}
          strokeLinecap='round'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ transition: 'stroke-dashoffset 0.3s ease-out' }}
        />
      </svg>

      {/* Teks Horizontal di Tengah */}
      <span className='display-xs-medium absolute text-neutral-900'>
        {progress}%
      </span>
    </div>
  );
};

export default CircleProgress;

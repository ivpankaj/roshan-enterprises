'use client';

import React from 'react';

interface WavyBackgroundProps {
  variant?: 'light' | 'dark' | 'gold-subtle';
  className?: string;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  variant = 'gold-subtle',
  className = ''
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
      <svg
        className={`absolute inset-0 w-full h-full object-cover ${isDark ? 'opacity-75' : 'opacity-65'}`}
        preserveAspectRatio="none"
        viewBox="0 0 1440 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`wavy-gold-1-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D99A16" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F0B323" stopOpacity="1" />
            <stop offset="100%" stopColor="#D99A16" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id={`wavy-gold-2-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F0B323" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#D99A16" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F0B323" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id={`wavy-fill-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F0B323" stopOpacity={isDark ? "0.08" : "0.05"} />
            <stop offset="100%" stopColor="#D99A16" stopOpacity="0.01" />
          </linearGradient>
        </defs>

        <path
          d="M0,100 C360,240 720,30 1080,200 C1260,280 1440,120 1440,120 L1440,500 L0,500 Z"
          fill={`url(#wavy-fill-${variant})`}
        />

        <path
          d="M0,100 C360,240 720,30 1080,200 C1260,280 1440,120 1440,120"
          stroke={`url(#wavy-gold-1-${variant})`}
          strokeWidth="3.5"
          fill="none"
        />

        <path
          d="M0,260 C400,80 800,320 1200,90 C1320,30 1440,180 1440,180"
          stroke={`url(#wavy-gold-2-${variant})`}
          strokeWidth="2.5"
          strokeDasharray="12 6"
          fill="none"
        />
      </svg>

      <div className={`absolute bottom-0 right-1/4 w-96 h-96 blur-3xl rounded-full ${
        isDark ? 'bg-gold-primary/20' : 'bg-gold-primary/10'
      }`}></div>
    </div>
  );
};

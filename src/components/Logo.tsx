'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  showTagline = true
}) => {
  const isLight = variant === 'light';

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Visual Icon Mark */}
      <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white border border-gold-primary p-0.5 shadow-md group-hover:border-gold-bright transition-colors rounded-full overflow-hidden">
        <img
          src="/logo.png"
          alt="Roshan Enterprises Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Typography Brand Title */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className={`font-black tracking-wider text-xl sm:text-2xl leading-none uppercase ${
            isLight ? 'text-white' : 'text-navy-primary'
          }`}>
            ROSHAN
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="h-[2px] w-2 bg-gold-primary"></span>
          <span className={`font-bold tracking-widest text-[10px] sm:text-[11px] uppercase ${
            isLight ? 'text-gold-bright' : 'text-gold-primary'
          }`}>
            ENTERPRISES
          </span>
          <span className="h-[2px] w-2 bg-gold-primary"></span>
        </div>
        {showTagline && (
          <span className={`text-[8px] sm:text-[9px] font-semibold tracking-tight uppercase mt-0.5 ${
            isLight ? 'text-slate-300' : 'text-navy-dark/75'
          }`}>
            Painting | Flooring | Civil Works
          </span>
        )}
      </div>
    </Link>
  );
};

'use client';

import React from 'react';
import { COMPANY_INFO } from '@/lib/data';
import { ShieldCheck, Award, Clock, FileCheck, Layers } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-navy-primary text-white py-6 border-b border-gold-primary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-5 h-5 text-gold-primary mb-1" />
            <span className="font-extrabold text-xs sm:text-sm text-white">100+ Houses Decorated</span>
            <span className="text-[10px] text-slate-300">Noida & Greater Noida</span>
          </div>

          <div className="flex flex-col items-center">
            <Award className="w-5 h-5 text-gold-primary mb-1" />
            <span className="font-extrabold text-xs sm:text-sm text-white">Certified Materials</span>
            <span className="text-[10px] text-slate-300">Asian Paints & Berger</span>
          </div>

          <div className="flex flex-col items-center">
            <Clock className="w-5 h-5 text-gold-primary mb-1" />
            <span className="font-extrabold text-xs sm:text-sm text-white">On-Time Execution</span>
            <span className="text-[10px] text-slate-300">Target Handover Date</span>
          </div>

          <div className="flex flex-col items-center">
            <FileCheck className="w-5 h-5 text-gold-primary mb-1" />
            <span className="font-extrabold text-xs sm:text-sm text-white">Transparent BOQ</span>
            <span className="text-[10px] text-slate-300">Zero Hidden Charges</span>
          </div>

          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <Layers className="w-5 h-5 text-gold-primary mb-1" />
            <span className="font-extrabold text-xs sm:text-sm text-white">Experienced Engineers</span>
            <span className="text-[10px] text-slate-300">Site Management</span>
          </div>
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/lib/data';
import { CurvyLine } from './CurvyLine';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-navy-primary text-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Our 4-Step Execution Process
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            From initial site laser measurement to final quality inspection and warranty handover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((ps, idx) => (
            <div
              key={idx}
              className="bg-navy-dark border-2 border-gold-primary/30 hover:border-gold-primary p-8 rounded-3xl transition-all space-y-4 shadow-xl relative"
            >
              <div className="text-4xl font-black text-gold-bright font-mono opacity-90">
                {ps.step}
              </div>
              <h3 className="text-xl font-extrabold text-white">{ps.title}</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {ps.description}
              </p>
              <CurvyLine variant="gold" strokeWidth={1.5} height={6} className="w-full opacity-40 mt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

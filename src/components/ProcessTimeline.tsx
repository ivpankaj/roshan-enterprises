import React from 'react';
import { PROCESS_STEPS } from '@/lib/data';
import { WavyBackground } from './WavyBackground';
import { CurvyLine } from './CurvyLine';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Top Curvy Border */}
      <CurvyLine variant="slate" strokeWidth={2} height={12} className="absolute top-0 left-0 right-0 w-full z-20 pointer-events-none" />

      {/* Golden Wavy Background */}
      <WavyBackground variant="gold-subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-navy-primary">
            Our 4-Step Project Delivery Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            From initial blueprints to final site handover—engineered for transparency and zero delays.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Curvy Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-6 z-0 pointer-events-none">
            <CurvyLine variant="gold-bright" pattern="wave" strokeWidth={3} height={20} />
          </div>

          {PROCESS_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="relative z-10 bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-lg hover:shadow-xl hover:border-gold-primary transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-navy-primary text-gold-bright font-black text-lg flex items-center justify-center mb-4 group-hover:bg-gold-primary group-hover:text-navy-dark transition-colors shadow-md border border-gold-primary/30">
                  {item.step}
                </div>

                <h3 className="text-xl font-extrabold text-navy-primary group-hover:text-gold-primary transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-2 flex flex-col space-y-2">
                <CurvyLine variant="slate" strokeWidth={1} height={6} className="w-full" />
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <span>Phase {item.step}</span>
                  <span className="text-gold-primary">RE Protocol</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Curvy Border */}
      <CurvyLine variant="slate" strokeWidth={2} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
    </section>
  );
};

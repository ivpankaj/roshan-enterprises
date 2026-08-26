import React from 'react';
import Link from 'next/link';
import { Factory, Building, Home, GraduationCap, Hospital, ArrowUpRight } from 'lucide-react';
import { INDUSTRIES_DATA } from '@/lib/data';
import { CurvyLine } from './CurvyLine';

export const IndustryGrid: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Factory':
        return Factory;
      case 'Building':
        return Building;
      case 'Home':
        return Home;
      case 'GraduationCap':
        return GraduationCap;
      case 'Hospital':
      default:
        return Hospital;
    }
  };

  return (
    <section className="py-20 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200">
      {/* Golden Wavy Curved Lines Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          preserveAspectRatio="none"
          viewBox="0 0 1440 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ind-gold-wave-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D99A16" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#F0B323" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D99A16" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="ind-gold-wave-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F0B323" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#D99A16" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F0B323" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="ind-gold-wave-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D99A16" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#F0B323" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Golden Wave Filled Backdrop */}
          <path
            d="M0,150 C380,300 760,40 1140,280 C1300,380 1440,180 1440,180 L1440,500 L0,500 Z"
            fill="url(#ind-gold-wave-fill)"
          />

          {/* Primary Golden Wave Curve */}
          <path
            d="M0,150 C380,300 760,40 1140,280 C1300,380 1440,180 1440,180"
            stroke="url(#ind-gold-wave-1)"
            strokeWidth="3.5"
            fill="none"
          />

          {/* Secondary Intersecting Wave Curve */}
          <path
            d="M0,320 C400,100 800,420 1200,120 C1320,30 1440,220 1440,220"
            stroke="url(#ind-gold-wave-2)"
            strokeWidth="2.5"
            strokeDasharray="12 6"
            fill="none"
          />
        </svg>

        {/* Ambient Golden Glow Orbs */}
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold-primary/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-bright/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-navy-primary">
            Serving Various Sectors Across PAN India
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Customized painting, VDF/epoxy flooring, and civil solutions engineered for specialized sector compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = getIcon(ind.iconName);
            return (
              <div
                key={ind.id}
                className="group relative bg-slate-50 border-2 border-slate-200 hover:border-gold-primary rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-md"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-navy-primary text-gold-bright group-hover:bg-gold-primary group-hover:text-navy-dark transition-colors flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-navy-primary group-hover:text-gold-primary transition-colors mb-2">
                    {ind.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {ind.shortDesc}
                  </p>
                </div>

                <div className="pt-2 flex flex-col space-y-2">
                  <CurvyLine variant="slate" strokeWidth={1} height={6} className="w-full" />
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-medium">
                      {ind.keyServicesProvided[0]}
                    </span>
                    <Link
                      href={`/industries#${ind.slug}`}
                      className="p-2 rounded-full bg-navy-primary text-gold-bright hover:bg-gold-primary hover:text-navy-dark transition-colors border border-gold-primary/30"
                      aria-label={`Learn more about ${ind.title} solutions`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

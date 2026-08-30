'use client';

import React from 'react';
import { ShieldCheck, Users, Clock, FileCheck, Layers, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/lib/data';
import { CurvyLine } from './CurvyLine';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Users':
        return Users;
      case 'Clock':
        return Clock;
      case 'FileCheck':
        return FileCheck;
      case 'Layers':
        return Layers;
      case 'MapPin':
      default:
        return MapPin;
    }
  };

  return (
    <section className="py-20 bg-slate-50 text-slate-800 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-navy-primary">
            Why Choose Roshan Enterprises?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Built on quality materials, experienced civil engineers, transparent pricing, and guaranteed delivery timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = getIcon(item.iconName);
            return (
              <div
                key={idx}
                className="bg-white border-2 border-slate-200 hover:border-gold-primary rounded-3xl p-8 transition-all duration-300 shadow-md hover:shadow-xl group"
              >
                <div className="w-14 h-14 bg-navy-primary text-gold-bright border border-gold-primary/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold-primary group-hover:text-navy-dark transition-colors shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-extrabold text-navy-primary mb-2 group-hover:text-gold-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <CurvyLine variant="gold" strokeWidth={1.5} height={6} className="w-full opacity-60" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

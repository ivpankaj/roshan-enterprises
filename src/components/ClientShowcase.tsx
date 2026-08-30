'use client';

import React from 'react';
import Link from 'next/link';
import { CLIENT_REFERENCES } from '@/lib/data';
import { CurvyLine } from './CurvyLine';
import { Building2, ArrowRight } from 'lucide-react';

export const ClientShowcase: React.FC = () => {
  return (
    <section className="py-14 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-primary/10 text-navy-primary border border-gold-primary/30 rounded-full text-xs font-extrabold uppercase tracking-wider mb-2">
            <Building2 className="w-3.5 h-3.5 text-gold-primary" /> Corporate Trust & Reputation
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy-primary">
            Trusted by Leading Corporate & Industrial Brands
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {CLIENT_REFERENCES.map((ref, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center space-y-1 hover:border-gold-primary transition-all shadow-sm"
            >
              <h3 className="font-extrabold text-navy-primary text-xs sm:text-sm">{ref.name}</h3>
              <span className="text-[10px] text-slate-500 font-semibold">{ref.category}</span>
              <span className="text-[9px] text-gold-primary font-bold">{ref.location}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-extrabold text-navy-primary hover:text-gold-primary uppercase tracking-wider transition-colors"
          >
            <span>View Verified Client Case Studies & Project Details</span>
            <ArrowRight className="w-4 h-4 text-gold-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
};

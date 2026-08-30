'use client';

import React from 'react';
import { PhoneCall, Phone, ArrowRight, Building2, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { WavyBackground } from './WavyBackground';

interface CTASectionProps {
  onOpenQuoteModal?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenQuoteModal }) => {
  const handleQuoteClick = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <section className="py-16 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200">
      <WavyBackground variant="light" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-light/50 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 border-2 border-gold-primary/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-navy-primary">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black text-navy-primary leading-tight">
                Have a Project in Mind? <br />
                <span className="text-gold-primary">Let's Build Something Great Together.</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
                Tell us about your project requirements and our engineering team will provide a detailed line-item technical quote within <strong className="text-navy-primary">2 to 4 hours</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-slate-500">
                <span className="flex items-center gap-1.5 text-navy-primary font-bold">
                  <MapPin className="w-4 h-4 text-gold-primary" /> Serving Noida, Greater Noida & Delhi NCR
                </span>
                <span>•</span>
                <span className="text-navy-primary font-bold">Direct Field Execution</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3">
              <button
                onClick={handleQuoteClick}
                className="w-full px-6 py-4 bg-gold-primary text-navy-dark font-black text-sm rounded-full hover:bg-gold-bright transition-all shadow-xl hover:shadow-gold-primary/30 flex items-center justify-center gap-2 uppercase tracking-wider group border-2 border-gold-bright"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full px-6 py-4 bg-white border-2 border-navy-primary text-navy-primary hover:bg-navy-primary hover:text-white font-black text-sm rounded-full transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4 text-gold-primary" />
                <span>Call: {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

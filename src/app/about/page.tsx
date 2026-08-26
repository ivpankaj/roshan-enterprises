'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { WavyBackground } from '@/components/WavyBackground';
import { CurvyLine } from '@/components/CurvyLine';
import { WHY_CHOOSE_US } from '@/lib/data';
import { ShieldCheck, Award, Building2 } from 'lucide-react';

export default function AboutPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        {/* About Hero */}
        <section className="bg-slate-50 text-navy-primary py-16 relative overflow-hidden border-b border-slate-200">
          <WavyBackground variant="gold-subtle" />
          <div className="absolute inset-0 pattern-grid-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <h1 className="text-4xl sm:text-6xl font-black text-navy-primary mt-3">
              About Roshan Enterprises
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              Leading Pan-India Contractor for Professional Painting, High-Load VDF/Epoxy Flooring, and Structural Civil Construction. Headquartered in Greater Noida, UP.
            </p>
          </div>
          <CurvyLine variant="gold" strokeWidth={2.5} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        {/* Detailed Story & Mission */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-gold-primary font-bold text-xs uppercase tracking-widest">
                  <Building2 className="w-4 h-4" /> Established & Certified Construction Firm
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-navy-primary">
                  Engineering Excellence & Trust Across PAN India
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Founded with a vision to deliver uncompromised structural quality, <strong>Roshan Enterprises</strong> has grown into a premier contracting partner for industrial conglomerates, commercial developers, and residential projects across India.
                </p>

                <div className="p-6 bg-slate-50 border-l-4 border-gold-primary space-y-2 rounded-2xl shadow-sm">
                  <h4 className="font-extrabold text-navy-primary text-sm">Our Core Mission</h4>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    To deliver zero-defect surface finishes, high-durability VDF/Epoxy floors, and civil construction with complete BOQ transparency and safety compliance.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="relative border-4 border-slate-100 shadow-2xl rounded-3xl overflow-hidden">
                  <img
                    src="/images/civil_masonry.jpg"
                    alt="Roshan Enterprises On-site Civil Construction Project Execution"
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-navy-primary/95 p-6 border border-gold-primary/30 text-white rounded-2xl backdrop-blur-md">
                    <div className="text-gold-bright font-black text-2xl">PAN India</div>
                    <div className="text-xs text-slate-300 font-semibold uppercase mt-1">Mobilization & Site Readiness</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <CurvyLine variant="slate" strokeWidth={2} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        {/* Strategic Pillars */}
        <section className="py-20 bg-navy-primary text-white relative overflow-hidden">
          <WavyBackground variant="dark" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                What Sets Roshan Enterprises Apart
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2">
                Our organizational values guide every project we take on.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {WHY_CHOOSE_US.slice(0, 6).map((item, idx) => (
                <div key={idx} className="bg-navy-dark p-8 border-2 border-gold-primary/30 hover:border-gold-primary transition-all rounded-3xl shadow-xl">
                  <div className="w-12 h-12 bg-navy-primary text-gold-bright flex items-center justify-center mb-4 border border-gold-primary/40 rounded-2xl">
                    <ShieldCheck className="w-6 h-6 text-gold-primary" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      </main>

      <Footer onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      <QuickQuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { WavyBackground } from '@/components/WavyBackground';
import { CurvyLine } from '@/components/CurvyLine';
import { SERVICES_DATA } from '@/lib/data';
import { Building2, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CivilWorksServicePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const civilService = SERVICES_DATA.find((s) => s.id === 'civil-works')!;

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        {/* Detail Hero */}
        <section className="bg-slate-50 text-navy-primary py-16 relative overflow-hidden border-b border-slate-200">
          <WavyBackground variant="gold-subtle" />
          <div className="absolute inset-0 pattern-grid-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <h1 className="text-4xl sm:text-6xl font-black text-navy-primary mt-3">
              Civil Works & RCC Structural Contracting
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              RCC structural frameworks, AAC block masonry, high-grade plastering, false ceilings, and custom civil modifications executed under strict engineering supervision.
            </p>
          </div>
          <CurvyLine variant="gold" strokeWidth={2.5} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        {/* Detailed Breakdown */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              <div className="lg:col-span-8 space-y-10">
                <div>
                  <h2 className="text-3xl font-black text-navy-primary mb-4">
                    Reliable Civil Construction & Finishing Solutions
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {civilService.fullDesc}
                  </p>
                </div>

                {/* Sub-services Grid */}
                <div>
                  <h3 className="text-2xl font-extrabold text-navy-primary mb-6">
                    Civil Specializations
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {civilService.subServices.map((sub, idx) => (
                      <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-gold-primary transition-colors">
                        <div className="flex items-center gap-2 text-gold-primary font-bold mb-2">
                          <CheckCircle2 className="w-5 h-5 shrink-0" />
                          <h4 className="text-navy-primary font-extrabold text-base">{sub.title}</h4>
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{sub.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs Table */}
                <div className="bg-slate-900 text-white p-8 rounded-2xl border border-gold-primary/30">
                  <h3 className="text-xl font-extrabold text-gold-bright mb-4">
                    Structural Standards & Engineering Protocols
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {civilService.technicalSpecs?.map((spec, idx) => (
                      <div key={idx} className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                        <div className="text-xs text-slate-400 font-bold uppercase">{spec.label}</div>
                        <div className="text-sm font-black text-white mt-1">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 bg-navy-primary text-white rounded-2xl border border-gold-primary/30 shadow-xl space-y-4">
                  <h3 className="text-xl font-extrabold text-gold-bright">Request Civil Work Quote</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Submit structural blueprints or site parameters for detailed line-item BOQ estimates.
                  </p>
                  <button
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full py-3.5 bg-gold-primary text-navy-dark font-extrabold text-xs rounded-xl hover:bg-gold-bright transition-colors uppercase tracking-wider shadow-md"
                  >
                    Get Civil Work Estimate
                  </button>
                  <a href="tel:+917048976431" className="block text-center text-xs font-bold text-slate-300 hover:text-white">
                    📞 Direct Call: +91 70489 76431
                  </a>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <h4 className="font-extrabold text-navy-primary text-sm uppercase tracking-wider">
                    Execution Guarantees
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600 font-semibold">
                    {civilService.keyBenefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
          <CurvyLine variant="slate" strokeWidth={2} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        <CTASection onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      </main>

      <Footer onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      <QuickQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService="Civil Works"
      />
    </div>
  );
}

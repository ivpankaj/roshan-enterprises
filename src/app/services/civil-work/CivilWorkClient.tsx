'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { WavyBackground } from '@/components/WavyBackground';
import { CurvyLine } from '@/components/CurvyLine';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SERVICES_DATA } from '@/lib/data';
import { CheckCircle2, ShieldCheck, ArrowRight, Building2 } from 'lucide-react';

export function CivilWorkClient() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const civilService = SERVICES_DATA.find((s) => s.id === 'civil-works')!;

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        <Breadcrumbs
          items={[
            { name: 'Services', href: '/services' },
            { name: 'Civil Work', href: '/services/civil-work' },
          ]}
        />

        {/* Detail Hero */}
        <section className="bg-slate-50 text-navy-primary py-16 relative overflow-hidden border-b border-slate-200">
          <WavyBackground variant="gold-subtle" />
          <div className="absolute inset-0 pattern-grid-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <h1 className="text-4xl sm:text-6xl font-black text-navy-primary mt-3">
              Civil Work & Construction Services in Noida & Greater Noida
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              Reliable civil construction, RCC structural framing, brickwork block masonry, tile laying, and structural repair works across Noida, Greater Noida, and Delhi NCR.
            </p>
          </div>
          <CurvyLine variant="gold" strokeWidth={2.5} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        {/* Detailed Breakdown */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Main Content Column */}
              <div className="lg:col-span-8 space-y-10">
                
                <div>
                  <h2 className="text-3xl font-black text-navy-primary mb-4">
                    Structural Integrity & Quality Execution
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {civilService.fullDesc}
                  </p>
                </div>

                {/* Sub-services Links */}
                <div>
                  <h3 className="text-2xl font-extrabold text-navy-primary mb-6">
                    Specialized Civil Work Categories
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Link
                      href="/services/civil-work/residential-civil-work"
                      className="p-6 bg-white border-2 border-slate-200 hover:border-gold-primary transition-all rounded-2xl group shadow-sm"
                    >
                      <h4 className="text-navy-primary font-black text-base group-hover:text-gold-primary transition-colors flex items-center justify-between">
                        <span>Residential Civil Work</span>
                        <ArrowRight className="w-4 h-4 text-gold-primary group-hover:translate-x-1 transition-transform" />
                      </h4>
                      <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                        Home extensions, brick masonry, plastering, vitrified tile & marble laying.
                      </p>
                    </Link>

                    <Link
                      href="/services/civil-work/commercial-civil-work"
                      className="p-6 bg-white border-2 border-slate-200 hover:border-gold-primary transition-all rounded-2xl group shadow-sm"
                    >
                      <h4 className="text-navy-primary font-black text-base group-hover:text-gold-primary transition-colors flex items-center justify-between">
                        <span>Commercial Civil Work</span>
                        <ArrowRight className="w-4 h-4 text-gold-primary group-hover:translate-x-1 transition-transform" />
                      </h4>
                      <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                        RCC structures, machine foundations, drywall partitions, acoustic ceilings.
                      </p>
                    </Link>

                    <Link
                      href="/services/civil-work/repair-work"
                      className="p-6 bg-white border-2 border-slate-200 hover:border-gold-primary transition-all rounded-2xl group shadow-sm"
                    >
                      <h4 className="text-navy-primary font-black text-base group-hover:text-gold-primary transition-colors flex items-center justify-between">
                        <span>Civil Repair Work</span>
                        <ArrowRight className="w-4 h-4 text-gold-primary group-hover:translate-x-1 transition-transform" />
                      </h4>
                      <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                        Structural crack filling, plaster rehabilitation, waterproofing & trenching.
                      </p>
                    </Link>
                  </div>
                </div>

                {/* Sub-services Breakdown Grid */}
                <div>
                  <h3 className="text-2xl font-extrabold text-navy-primary mb-6">
                    Our Civil Engineering Scope
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {civilService.subServices.map((sub, idx) => (
                      <div key={idx} className="p-6 bg-white border-2 border-slate-200 hover:border-gold-primary transition-colors rounded-2xl shadow-sm">
                        <div className="flex items-center gap-2 text-gold-primary font-bold mb-2">
                          <CheckCircle2 className="w-5 h-5 shrink-0" />
                          <h4 className="text-navy-primary font-extrabold text-base">{sub.title}</h4>
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{sub.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications Table */}
                <div className="bg-slate-900 text-white p-8 border-2 border-gold-primary/30 rounded-3xl">
                  <h3 className="text-xl font-extrabold text-gold-bright mb-4">
                    Civil Code Compliance & Materials
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {civilService.technicalSpecs?.map((spec, idx) => (
                      <div key={idx} className="p-4 bg-slate-800/80 border border-slate-700 rounded-2xl">
                        <div className="text-xs text-slate-400 font-bold uppercase">{spec.label}</div>
                        <div className="text-sm font-black text-white mt-1">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 bg-navy-primary text-white border border-gold-primary/30 shadow-xl space-y-4 rounded-3xl">
                  <h3 className="text-xl font-extrabold text-gold-bright">Need a Civil Contractor?</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Contact our civil engineers in Greater Noida for a fast site evaluation and BOQ estimation.
                  </p>
                  <button
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full py-3.5 bg-gold-primary text-navy-dark font-extrabold text-xs hover:bg-gold-bright transition-colors uppercase tracking-wider shadow-md rounded-full border-2 border-gold-bright"
                  >
                    Request Civil BOQ Quote
                  </button>
                  <a
                    href="tel:+917048976431"
                    className="block text-center text-xs font-bold text-slate-300 hover:text-white"
                  >
                    📞 Call directly: +91 70489 76431
                  </a>
                </div>

                {/* Local Area Links */}
                <div className="p-6 bg-white border border-slate-200 space-y-3 rounded-2xl">
                  <h4 className="font-extrabold text-navy-primary text-sm uppercase tracking-wider">
                    Civil Work Locations
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600 font-semibold">
                    <li>
                      <Link href="/civil-work/noida" className="hover:text-gold-primary flex items-center gap-1.5">
                        <ArrowRight className="w-3.5 h-3.5 text-gold-primary" /> Civil Work Contractor in Noida
                      </Link>
                    </li>
                    <li>
                      <Link href="/civil-work/greater-noida" className="hover:text-gold-primary flex items-center gap-1.5">
                        <ArrowRight className="w-3.5 h-3.5 text-gold-primary" /> Civil Work Contractor in Greater Noida
                      </Link>
                    </li>
                    <li>
                      <Link href="/location/delhi-ncr" className="hover:text-gold-primary flex items-center gap-1.5">
                        <ArrowRight className="w-3.5 h-3.5 text-gold-primary" /> Civil Work in Delhi NCR
                      </Link>
                    </li>
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

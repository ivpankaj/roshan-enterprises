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
import { CheckCircle2, ShieldCheck, ArrowRight, Paintbrush } from 'lucide-react';

export function PaintingClient() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const paintingService = SERVICES_DATA.find((s) => s.id === 'painting')!;

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        <Breadcrumbs
          items={[
            { name: 'Services', href: '/services' },
            { name: 'Painting Services', href: '/services/painting' },
          ]}
        />

        {/* Detail Hero */}
        <section className="bg-slate-50 text-navy-primary py-16 relative overflow-hidden border-b border-slate-200">
          <WavyBackground variant="gold-subtle" />
          <div className="absolute inset-0 pattern-grid-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <h1 className="text-4xl sm:text-6xl font-black text-navy-primary mt-3">
              Professional Painting Services in Noida & Greater Noida
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              Transforming and protecting commercial towers, industrial facilities, and residential apartments across Noida, Greater Noida, and Delhi NCR with premium elastomeric, texture, enamel, and waterproof coatings.
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
                    Complete Interior & Exterior Painting Solutions
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {paintingService.fullDesc}
                  </p>
                </div>

                {/* Sub-services Links */}
                <div>
                  <h3 className="text-2xl font-extrabold text-navy-primary mb-6">
                    Specialized Painting Services
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link
                      href="/services/painting/residential-painting"
                      className="p-6 bg-white border-2 border-slate-200 hover:border-gold-primary transition-all rounded-2xl group shadow-sm"
                    >
                      <h4 className="text-navy-primary font-black text-lg group-hover:text-gold-primary transition-colors flex items-center justify-between">
                        <span>Residential Painting</span>
                        <ArrowRight className="w-5 h-5 text-gold-primary group-hover:translate-x-1 transition-transform" />
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                        Interior velvet emulsion, wall putty polish, texture wall accents, and home waterproofing for apartments & villas.
                      </p>
                    </Link>

                    <Link
                      href="/services/painting/commercial-painting"
                      className="p-6 bg-white border-2 border-slate-200 hover:border-gold-primary transition-all rounded-2xl group shadow-sm"
                    >
                      <h4 className="text-navy-primary font-black text-lg group-hover:text-gold-primary transition-colors flex items-center justify-between">
                        <span>Commercial Painting</span>
                        <ArrowRight className="w-5 h-5 text-gold-primary group-hover:translate-x-1 transition-transform" />
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                        Offices, corporate hubs, IT parks, retail stores, and heavy-duty enamel coatings for commercial structures.
                      </p>
                    </Link>

                    <Link
                      href="/services/painting/interior-painting"
                      className="p-6 bg-white border-2 border-slate-200 hover:border-gold-primary transition-all rounded-2xl group shadow-sm"
                    >
                      <h4 className="text-navy-primary font-black text-lg group-hover:text-gold-primary transition-colors flex items-center justify-between">
                        <span>Interior Painting</span>
                        <ArrowRight className="w-5 h-5 text-gold-primary group-hover:translate-x-1 transition-transform" />
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                        Flawless surface smoothing, dust-free sanding, acrylic emulsion, stencil patterns, and wood/metal polish.
                      </p>
                    </Link>

                    <Link
                      href="/services/painting/exterior-painting"
                      className="p-6 bg-white border-2 border-slate-200 hover:border-gold-primary transition-all rounded-2xl group shadow-sm"
                    >
                      <h4 className="text-navy-primary font-black text-lg group-hover:text-gold-primary transition-colors flex items-center justify-between">
                        <span>Exterior Painting</span>
                        <ArrowRight className="w-5 h-5 text-gold-primary group-hover:translate-x-1 transition-transform" />
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                        Weather-proof elastomeric paints, UV-resistant exterior coatings, crack filling, and damp protection.
                      </p>
                    </Link>
                  </div>
                </div>

                {/* Sub-services Breakdown Grid */}
                <div>
                  <h3 className="text-2xl font-extrabold text-navy-primary mb-6">
                    Our Core Application Methods
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {paintingService.subServices.map((sub, idx) => (
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
                    Technical Specifications & Material Grades
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {paintingService.technicalSpecs?.map((spec, idx) => (
                      <div key={idx} className="p-4 bg-slate-800/80 border border-slate-700 rounded-2xl">
                        <div className="text-xs text-slate-400 font-bold uppercase">{spec.label}</div>
                        <div className="text-sm font-black text-white mt-1">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process Steps */}
                <div>
                  <h3 className="text-2xl font-extrabold text-navy-primary mb-4">
                    Execution Methodology
                  </h3>
                  <div className="space-y-3">
                    {paintingService.processSteps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl">
                        <span className="w-8 h-8 bg-navy-primary text-gold-bright font-black text-xs flex items-center justify-center shrink-0 border border-gold-primary/30 rounded-xl">
                          0{idx + 1}
                        </span>
                        <span className="text-slate-700 text-sm font-semibold">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 bg-navy-primary text-white border border-gold-primary/30 shadow-xl space-y-4 rounded-3xl">
                  <h3 className="text-xl font-extrabold text-gold-bright">Need a Painting Quote?</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Contact our site engineers in Noida & Greater Noida for a fast site evaluation and color consultation.
                  </p>
                  <button
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full py-3.5 bg-gold-primary text-navy-dark font-extrabold text-xs hover:bg-gold-bright transition-colors uppercase tracking-wider shadow-md rounded-full border-2 border-gold-bright"
                  >
                    Request Painting Estimate
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
                    Service Locations
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600 font-semibold">
                    <li>
                      <Link href="/painting-services/noida" className="hover:text-gold-primary flex items-center gap-1.5">
                        <ArrowRight className="w-3.5 h-3.5 text-gold-primary" /> Painting Services in Noida
                      </Link>
                    </li>
                    <li>
                      <Link href="/painting-services/greater-noida" className="hover:text-gold-primary flex items-center gap-1.5">
                        <ArrowRight className="w-3.5 h-3.5 text-gold-primary" /> Painting Services in Greater Noida
                      </Link>
                    </li>
                    <li>
                      <Link href="/location/delhi-ncr" className="hover:text-gold-primary flex items-center gap-1.5">
                        <ArrowRight className="w-3.5 h-3.5 text-gold-primary" /> Painting Services in Delhi NCR
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
        defaultService="Painting Services"
      />
    </div>
  );
}

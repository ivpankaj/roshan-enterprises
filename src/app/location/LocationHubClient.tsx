'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { WavyBackground } from '@/components/WavyBackground';
import { CurvyLine } from '@/components/CurvyLine';
import { MapPin, ArrowRight, Paintbrush, Building2, ShieldCheck, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

export function LocationHubClient() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const breadcrumbs = [{ name: 'Locations', href: '/location' }];

  const locations = [
    {
      slug: 'noida',
      name: 'Noida (All Sectors)',
      desc: 'Residential house painting, commercial interior/exterior painting, and civil repair works across Sectors 15, 18, 50, 62, 75, 137, Expressway.',
      paintingLink: '/painting-services/noida',
      civilLink: '/civil-work/noida',
      overviewLink: '/location/noida',
      highlights: ['Expressway Towers', 'Commercial Hubs', 'Residential Societies'],
    },
    {
      slug: 'greater-noida',
      name: 'Greater Noida & Knowledge Park',
      desc: 'Industrial plant VDF/epoxy flooring, institutional building maintenance, commercial civil construction in Knowledge Park, Pari Chowk, Tech Zone.',
      paintingLink: '/painting-services/greater-noida',
      civilLink: '/civil-work/greater-noida',
      overviewLink: '/location/greater-noida',
      highlights: ['Industrial Plants', 'Educational Campuses', 'Commercial Malls'],
    },
    {
      slug: 'delhi-ncr',
      name: 'Delhi NCR Region',
      desc: 'Turnkey structural civil works, multi-floor corporate exterior painting, hospital hygienic coatings across Delhi, Ghaziabad, and Gurgaon.',
      paintingLink: '/location/delhi-ncr',
      civilLink: '/location/delhi-ncr',
      overviewLink: '/location/delhi-ncr',
      highlights: ['Hospital Infrastructure', 'Corporate Facades', 'Logistics Parks'],
    },
  ];

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        <Breadcrumbs items={breadcrumbs} />

        <section className="bg-slate-50 text-navy-primary py-16 relative overflow-hidden border-b border-slate-200">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-primary/10 text-navy-primary border border-gold-primary/30 rounded-full text-xs font-extrabold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-gold-primary" /> Service Coverage Area Hub
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-navy-primary mt-3">
              Locations We Serve
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              Roshan Enterprises provides professional painting services and civil work contracting across Noida, Greater Noida, and Delhi NCR with guaranteed milestone timelines and certified materials.
            </p>
          </div>
          <CurvyLine variant="gold" strokeWidth={2.5} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        <section className="py-20 bg-slate-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {locations.map((loc) => (
                <div
                  key={loc.slug}
                  className="bg-white border-2 border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-gold-primary/20 text-gold-primary flex items-center justify-center border border-gold-primary">
                      <MapPin className="w-6 h-6" />
                    </div>

                    <h2 className="text-2xl font-black text-navy-primary group-hover:text-gold-primary transition-colors">
                      {loc.name}
                    </h2>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {loc.desc}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                        Local Service Options:
                      </div>
                      <div className="flex flex-col gap-2 text-xs font-semibold">
                        <Link href={loc.paintingLink} className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl hover:border-gold-primary text-navy-primary flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <Paintbrush className="w-4 h-4 text-gold-primary" /> Painting Services
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>
                        <Link href={loc.civilLink} className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl hover:border-gold-primary text-navy-primary flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-gold-primary" /> Civil Work Contracting
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={loc.overviewLink}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-navy-primary hover:text-gold-primary uppercase tracking-wider transition-colors"
                    >
                      <span>Explore Location Hub</span>
                      <ArrowRight className="w-4 h-4 text-gold-primary" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-navy-primary text-white p-8 sm:p-12 rounded-3xl border-2 border-gold-primary shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl space-y-4 relative z-10">
                <span className="px-3 py-1 bg-gold-primary/20 text-gold-bright border border-gold-primary/40 rounded-full text-xs font-extrabold uppercase tracking-wider">
                  Site Survey & Inspection
                </span>
                <h3 className="text-2xl sm:text-4xl font-black">
                  Need an On-Site Engineering Assessment in Noida or Greater Noida?
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Our civil engineers visit your residential or commercial site to conduct digital area measurements, inspect surface dampness, and provide a line-item BOQ quotation.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setQuoteModalOpen(true)}
                    className="px-8 py-3.5 bg-gold-primary text-navy-dark font-extrabold rounded-full hover:bg-gold-bright transition-colors uppercase text-xs tracking-wider shadow-lg border-2 border-gold-bright"
                  >
                    Request Free Site Inspection
                  </button>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="px-8 py-3.5 border-2 border-white text-white hover:bg-white hover:text-navy-primary font-extrabold rounded-full transition-colors uppercase text-xs tracking-wider inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-gold-bright" /> Call {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      <QuickQuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { WavyBackground } from '@/components/WavyBackground';
import { CurvyLine } from '@/components/CurvyLine';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SERVICES_DATA } from '@/lib/data';
import { ArrowRight, Paintbrush, Building2, ShieldCheck, MapPin } from 'lucide-react';

export function ServicesClient() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Painting Services');

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => handleOpenQuote('General Service Inquiry')} />

      <main className="flex-1 pt-28">
        <Breadcrumbs items={[{ name: 'Services', href: '/services' }]} />

        {/* Page Hero */}
        <section className="bg-slate-50 text-navy-primary py-16 relative overflow-hidden border-b border-slate-200">
          <WavyBackground variant="gold-subtle" />
          <div className="absolute inset-0 pattern-grid-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <h1 className="text-4xl sm:text-6xl font-black text-navy-primary mt-3">
              Painting & Civil Work Services
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              Roshan Enterprises delivers professional residential painting, commercial painting, wall surface treatments, and civil work construction services across Noida, Greater Noida, and Delhi NCR.
            </p>
          </div>
          <CurvyLine variant="gold" strokeWidth={2.5} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        {/* Services Cards */}
        <section className="py-20 bg-slate-100 relative overflow-hidden">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES_DATA.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onOpenQuoteModal={handleOpenQuote}
                />
              ))}
            </div>

            {/* Structured Sub-Services Directory */}
            <div className="mt-16 bg-white p-8 border-2 border-slate-200 rounded-3xl space-y-8">
              <div>
                <h2 className="text-2xl font-black text-navy-primary">Detailed Service Categories</h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">Explore our specific specialized painting and civil work services in Noida & Greater Noida.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Painting Services Column */}
                <div className="space-y-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 text-navy-primary font-black text-lg border-b border-slate-200 pb-3">
                    <Paintbrush className="w-5 h-5 text-gold-primary" />
                    <span>Painting Services Directory</span>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-700 font-semibold">
                    <li>
                      <Link href="/services/painting/residential-painting" className="hover:text-gold-primary flex items-center justify-between group">
                        <span>• Residential Painting (Noida & Greater Noida)</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-gold-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/painting/commercial-painting" className="hover:text-gold-primary flex items-center justify-between group">
                        <span>• Commercial Painting (Offices & IT Parks)</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-gold-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/painting/interior-painting" className="hover:text-gold-primary flex items-center justify-between group">
                        <span>• Interior Painting & Designer Wall Textures</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-gold-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/painting/exterior-painting" className="hover:text-gold-primary flex items-center justify-between group">
                        <span>• Exterior Painting & Weatherproof Sealing</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-gold-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Civil Work Column */}
                <div className="space-y-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 text-navy-primary font-black text-lg border-b border-slate-200 pb-3">
                    <Building2 className="w-5 h-5 text-gold-primary" />
                    <span>Civil Work Directory</span>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-700 font-semibold">
                    <li>
                      <Link href="/services/civil-work/residential-civil-work" className="hover:text-gold-primary flex items-center justify-between group">
                        <span>• Residential Civil Work & Tile Laying</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-gold-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil-work/commercial-civil-work" className="hover:text-gold-primary flex items-center justify-between group">
                        <span>• Commercial Civil Construction & Partitions</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-gold-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil-work/repair-work" className="hover:text-gold-primary flex items-center justify-between group">
                        <span>• Civil Repair Work & Structural Rehabilitation</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-gold-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil-works" className="hover:text-gold-primary flex items-center justify-between group">
                        <span>• Structural RCC & Masonry Overview</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-gold-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <CurvyLine variant="slate" strokeWidth={2} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        <CTASection onOpenQuoteModal={() => handleOpenQuote('General Inquiry')} />
      </main>

      <Footer onOpenQuoteModal={() => handleOpenQuote('General Inquiry')} />
      <QuickQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}

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
import { MapPin, Phone, CheckCircle2, ShieldCheck, ArrowRight, HelpCircle, Building2, Paintbrush } from 'lucide-react';

interface LocationPageProps {
  locationName: string;
  title: string;
  breadcrumbs: { name: string; href: string }[];
  intro: string;
  heroImage: string;
  sectorsServed: string[];
  paintingHighlights: string[];
  civilHighlights: string[];
  localRequirements: string;
  faqs: { question: string; answer: string }[];
  serviceLinks: { title: string; href: string }[];
}

export const LocationPageClient: React.FC<LocationPageProps> = ({
  locationName,
  title,
  breadcrumbs,
  intro,
  heroImage,
  sectorsServed,
  paintingHighlights,
  civilHighlights,
  localRequirements,
  faqs,
  serviceLinks,
}) => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="bg-slate-50 text-navy-primary py-16 relative overflow-hidden border-b border-slate-200">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-primary/10 text-navy-primary border border-gold-primary/30 rounded-full text-xs font-extrabold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-gold-primary" /> Local Service Hub
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-navy-primary leading-tight mt-2">
              {title}
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              {intro}
            </p>
          </div>
          <CurvyLine variant="gold" strokeWidth={2.5} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        {/* Local Services Breakdown */}
        <section className="py-16 bg-slate-50 relative overflow-hidden">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-12">
            
            {/* Visual & Quick Info */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl font-black text-navy-primary">
                  Professional Contractor Services in {locationName}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {localRequirements}
                </p>

                <div className="p-6 bg-white border-2 border-slate-200 rounded-2xl space-y-3">
                  <h3 className="text-xs font-black uppercase text-navy-primary tracking-wider flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-primary" /> Specific Zones & Sectors Covered in {locationName}:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sectorsServed.map((sec, i) => (
                      <span key={i} className="text-xs font-bold bg-slate-100 text-navy-primary px-3 py-1 rounded-full border border-slate-200">
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[360px]">
                  <img src={heroImage} alt={title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 right-6 bg-navy-primary/95 text-white p-5 rounded-2xl border border-gold-primary/30">
                    <div className="text-gold-bright text-xs font-black uppercase tracking-wider">Fast Site Inspection</div>
                    <div className="text-base font-extrabold text-white mt-0.5">Callback & Site Visit within 24 Hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Services Offered in this Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Painting Column */}
              <div className="p-8 bg-white border-2 border-slate-200 rounded-3xl space-y-4 shadow-md">
                <div className="flex items-center gap-3 text-navy-primary">
                  <div className="p-3 bg-gold-primary/20 text-gold-primary rounded-2xl border border-gold-primary/40">
                    <Paintbrush className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black">Painting Services in {locationName}</h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-semibold pt-2">
                  {paintingHighlights.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Civil Work Column */}
              <div className="p-8 bg-white border-2 border-slate-200 rounded-3xl space-y-4 shadow-md">
                <div className="flex items-center gap-3 text-navy-primary">
                  <div className="p-3 bg-gold-primary/20 text-gold-primary rounded-2xl border border-gold-primary/40">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black">Civil Work in {locationName}</h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-semibold pt-2">
                  {civilHighlights.map((cv, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                      <span>{cv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQs Specific to Location */}
            {faqs.length > 0 && (
              <div className="bg-white p-8 border-2 border-slate-200 rounded-3xl space-y-6">
                <h2 className="text-2xl font-black text-navy-primary flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-gold-primary" /> {locationName} Service FAQs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {faqs.map((faq, i) => (
                    <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                      <h3 className="text-base font-extrabold text-navy-primary">Q: {faq.question}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Internal Service Cross-Links */}
            <div className="p-6 bg-navy-primary text-white rounded-3xl space-y-4 shadow-xl border border-gold-primary/30">
              <h3 className="text-lg font-extrabold text-gold-bright">Explore Services for {locationName}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {serviceLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="p-3 bg-navy-dark hover:bg-gold-primary hover:text-navy-dark text-slate-200 font-extrabold text-xs rounded-xl transition-all border border-gold-primary/20 flex items-center justify-between group"
                  >
                    <span>{link.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-primary group-hover:text-navy-dark shrink-0 ml-1" />
                  </Link>
                ))}
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
        defaultService={`Services in ${locationName}`}
      />
    </div>
  );
};

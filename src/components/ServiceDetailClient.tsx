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
import { CheckCircle2, ShieldCheck, ArrowRight, HelpCircle, Phone, MapPin } from 'lucide-react';

interface ServiceDetailProps {
  serviceTitle: string;
  breadcrumbs: { name: string; href: string }[];
  introText: string;
  heroImage: string;
  features: { title: string; desc: string }[];
  suitableProperties: string[];
  serviceLocations: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; href: string }[];
}

export const ServiceDetailClient: React.FC<ServiceDetailProps> = ({
  serviceTitle,
  breadcrumbs,
  introText,
  heroImage,
  features,
  suitableProperties,
  serviceLocations,
  faqs,
  relatedServices,
}) => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="bg-slate-50 text-navy-primary py-14 relative overflow-hidden border-b border-slate-200">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <h1 className="text-3xl sm:text-5xl font-black text-navy-primary leading-tight mt-2">
              {serviceTitle}
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              {introText}
            </p>
          </div>
          <CurvyLine variant="gold" strokeWidth={2.5} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        {/* Main Content & Sidebar */}
        <section className="py-16 bg-slate-50 relative overflow-hidden">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-12">
                
                {/* Hero Visual */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[380px]">
                  <img
                    src={heroImage}
                    alt={serviceTitle}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-70"></div>
                  <div className="absolute bottom-6 left-6 right-6 bg-navy-primary/95 text-white p-5 rounded-2xl border border-gold-primary/30 backdrop-blur-md">
                    <div className="text-gold-bright text-xs font-bold uppercase tracking-wider">
                      Roshan Enterprises Execution Standard
                    </div>
                    <div className="text-lg font-extrabold text-white mt-0.5">
                      Quality Materials & Certified Site Supervision
                    </div>
                  </div>
                </div>

                {/* Key Features & Offerings */}
                <div>
                  <h2 className="text-2xl font-black text-navy-primary mb-6">
                    Key Highlights & Included Scope
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((feat, idx) => (
                      <div key={idx} className="p-6 bg-white border-2 border-slate-200 hover:border-gold-primary transition-colors rounded-2xl shadow-sm space-y-2">
                        <div className="flex items-center gap-2 text-gold-primary font-bold">
                          <CheckCircle2 className="w-5 h-5 shrink-0" />
                          <h3 className="text-navy-primary font-extrabold text-base">{feat.title}</h3>
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suitable Property Types & Locations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-8 border-2 border-slate-200 rounded-3xl">
                  <div>
                    <h3 className="text-base font-extrabold text-navy-primary mb-3 uppercase tracking-wider">
                      Suitable Property Types
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-semibold">
                      {suitableProperties.map((prop, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-gold-primary shrink-0" />
                          <span>{prop}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-navy-primary mb-3 uppercase tracking-wider">
                      Primary Service Areas
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-semibold">
                      {serviceLocations.map((loc, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gold-primary shrink-0" />
                          <span>{loc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* FAQs Section */}
                {faqs.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-black text-navy-primary mb-6 flex items-center gap-2">
                      <HelpCircle className="w-6 h-6 text-gold-primary" /> Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {faqs.map((faq, idx) => (
                        <div key={idx} className="p-6 bg-white border-2 border-slate-200 rounded-2xl">
                          <h3 className="text-base font-extrabold text-navy-primary">Q: {faq.question}</h3>
                          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* CTA Card */}
                <div className="p-6 bg-navy-primary text-white border border-gold-primary/30 shadow-xl space-y-4 rounded-3xl">
                  <h3 className="text-xl font-extrabold text-gold-bright">Request a Site Quote</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Get in touch with our site engineers in Noida & Greater Noida for a transparent line-item BOQ quotation.
                  </p>
                  <button
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full py-3.5 bg-gold-primary text-navy-dark font-extrabold text-xs hover:bg-gold-bright transition-colors uppercase tracking-wider shadow-md rounded-full border-2 border-gold-bright"
                  >
                    Request Free Estimate
                  </button>
                  <a
                    href="tel:+917048976431"
                    className="block text-center text-xs font-bold text-slate-300 hover:text-white"
                  >
                    <Phone className="w-3.5 h-3.5 inline mr-1 text-gold-primary" /> Call +91 70489 76431
                  </a>
                </div>

                {/* Related Services Links */}
                {relatedServices.length > 0 && (
                  <div className="p-6 bg-white border border-slate-200 space-y-3 rounded-2xl">
                    <h3 className="font-extrabold text-navy-primary text-sm uppercase tracking-wider">
                      Related Services
                    </h3>
                    <ul className="space-y-2.5 text-xs text-slate-700 font-semibold">
                      {relatedServices.map((rel, i) => (
                        <li key={i}>
                          <Link href={rel.href} className="hover:text-gold-primary flex items-center justify-between group">
                            <span>{rel.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-gold-primary group-hover:translate-x-1 transition-all" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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
        defaultService={serviceTitle}
      />
    </div>
  );
};

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { ClientShowcase } from '@/components/ClientShowcase';
import { ServiceCard } from '@/components/ServiceCard';
import { IndustryGrid } from '@/components/IndustryGrid';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { CTASection } from '@/components/CTASection';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { WelcomeModal } from '@/components/WelcomeModal';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WavyBackground } from '@/components/WavyBackground';
import { CurvyLine, WavyTransition } from '@/components/CurvyLine';
import { SERVICES_DATA, TESTIMONIALS } from '@/lib/data';
import { adminStore, AdminReview } from '@/lib/adminStore';
import { ArrowRight, CheckCircle2, Star, Building2, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Painting Services');
  const [activeReviews, setActiveReviews] = useState<AdminReview[]>([]);

  useEffect(() => {
    const reviews = adminStore.getReviews();
    setActiveReviews(reviews);
  }, []);

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col selection:bg-gold-primary selection:text-navy-dark overflow-x-hidden">
      
      {/* Navigation Bar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuote('Turnkey Maintenance')} />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuote('Painting Services')} />

        {/* 2. Trust Metrics Strip */}
        <TrustStrip />

        {/* 3. Corporate Clients Trust Banner */}
        <ClientShowcase />

        {/* 4. About Us Preview Section */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Image Visual - Curvy Rounded */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 group">
                  <img
                    src="/images/painting_interior.jpg"
                    alt="Roshan Enterprises Engineered Construction and Painting Solutions"
                    className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Gold Experience Badge */}
                  <div className="absolute bottom-6 left-6 bg-navy-primary/95 text-white p-5 border border-gold-primary/40 shadow-xl max-w-xs rounded-2xl">
                    <div className="text-gold-bright text-xs font-bold uppercase tracking-wider mb-1">
                      PAN India Reach
                    </div>
                    <div className="text-xl font-extrabold text-white">
                      PAN India Contractor
                    </div>
                    <p className="text-slate-300 text-xs mt-1">
                      Equipped with heavy-duty mobile machinery & skilled teams across India.
                    </p>
                  </div>
                </div>

                {/* Decorative Gold Accent Bar */}
                <div className="absolute -top-3 -right-3 w-28 h-28 bg-gold-primary/20 blur-2xl pointer-events-none"></div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-5xl font-black text-navy-primary leading-tight">
                  Building Trust Through Quality & Commitment
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Roshan Enterprises provides professional painting, flooring, and civil work solutions for residential, commercial, industrial, and institutional spaces. Our approach combines quality materials, skilled professionals, transparent communication, and timely execution.
                </p>

                {/* 4 Feature Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-slate-50 border border-slate-200 flex items-start gap-3 rounded-2xl">
                    <CheckCircle2 className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-navy-primary text-sm">Quality Materials</h4>
                      <p className="text-slate-500 text-xs mt-0.5">Certified paint emulsions, grade-A cement & epoxy.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 flex items-start gap-3 rounded-2xl">
                    <ShieldCheck className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-navy-primary text-sm">Skilled Professionals</h4>
                      <p className="text-slate-500 text-xs mt-0.5">Certified civil engineers & VDF operators.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 flex items-start gap-3 rounded-2xl">
                    <CheckCircle2 className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-navy-primary text-sm">Timely Completion</h4>
                      <p className="text-slate-500 text-xs mt-0.5">Rigorous milestone schedules & target handover.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 flex items-start gap-3 rounded-2xl">
                    <ShieldCheck className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-navy-primary text-sm">Customer Satisfaction</h4>
                      <p className="text-slate-500 text-xs mt-0.5">Dedicated post-handover warranty support.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    href="/about"
                    className="px-6 py-3.5 bg-navy-primary text-white font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-navy-dark transition-colors inline-flex items-center gap-2 shadow-lg border border-gold-primary/30"
                  >
                    <span>Know More About Us</span>
                    <ArrowRight className="w-4 h-4 text-gold-bright" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
          <WavyTransition topColor="#F8FAFC" bottomColor="#FFFFFF" strokeColor="#D99A16" className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        {/* 5. Services Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-5xl font-black text-navy-primary">
                Our Core Services
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                Complete painting, industrial flooring, and structural civil solutions delivered under one reliable contractor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES_DATA.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onOpenQuoteModal={handleOpenQuote}
                />
              ))}
            </div>
          </div>
          <WavyTransition topColor="#FFFFFF" bottomColor="#FFFFFF" strokeColor="#D99A16" className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        {/* 6. Industries Section */}
        <IndustryGrid />

        {/* 7. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 8. Process Timeline */}
        <ProcessTimeline />

        {/* 9. Testimonials */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <WavyTransition topColor="#F8FAFC" bottomColor="#F8FAFC" strokeColor="#D99A16" className="absolute top-0 left-0 right-0 w-full z-20 pointer-events-none" />
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-black text-navy-primary">
                Trusted by Industrial & Corporate Clients
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(activeReviews.length > 0 ? activeReviews : TESTIMONIALS).slice(0, 6).map((test, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-8 border-2 border-slate-200 hover:border-gold-primary shadow-md transition-all flex flex-col justify-between rounded-3xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-gold-primary">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold-primary" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-sm italic leading-relaxed">
                      "{'quote' in test ? test.quote : (test as any).quote}"
                    </p>
                  </div>

                  <div className="mt-6 pt-2 flex flex-col space-y-2">
                    <CurvyLine variant="slate" strokeWidth={1} height={6} className="w-full" />
                    <div>
                      <h4 className="font-extrabold text-navy-primary text-sm">{test.company}</h4>
                      <p className="text-slate-500 text-xs">{test.author} {'role' in test && test.role ? `(${test.role})` : ''}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CurvyLine variant="slate" strokeWidth={2} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        {/* 10. Strategic Quote CTA */}
        <CTASection onOpenQuoteModal={() => handleOpenQuote('General Inquiry')} />

      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuote('General Inquiry')} />

      {/* Automatic Welcome Promotional Popup Modal */}
      <WelcomeModal />

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={selectedService}
      />

    </div>
  );
}

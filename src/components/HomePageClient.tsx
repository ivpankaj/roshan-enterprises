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
import { SERVICES_DATA, TESTIMONIALS, FAQS } from '@/lib/data';
import { adminStore, AdminReview } from '@/lib/adminStore';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, MapPin, HelpCircle, Building2, Paintbrush } from 'lucide-react';

export function HomePageClient() {
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
      <Navbar onOpenQuoteModal={() => handleOpenQuote('Painting Services')} />

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
              
              {/* Left Image Visual */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 group">
                  <img
                    src="/images/painting_interior.jpg"
                    alt="Roshan Enterprises Painting and Civil Work Services Noida Greater Noida"
                    className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-6 left-6 bg-navy-primary/95 text-white p-5 border border-gold-primary/40 shadow-xl max-w-xs rounded-2xl">
                    <div className="text-gold-bright text-xs font-bold uppercase tracking-wider mb-1">
                      Noida • Greater Noida • NCR
                    </div>
                    <div className="text-xl font-extrabold text-white">
                      Roshan Enterprises
                    </div>
                    <p className="text-slate-300 text-xs mt-1">
                      Professional painting contractors & civil work experts.
                    </p>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 w-28 h-28 bg-gold-primary/20 blur-2xl pointer-events-none"></div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-primary/10 text-navy-primary border border-gold-primary/30 rounded-full text-xs font-extrabold uppercase tracking-wider">
                  Trusted Local Painting & Civil Contractor
                </div>

                <h2 className="text-3xl sm:text-5xl font-black text-navy-primary leading-tight">
                  Building Trust Through Quality & Execution
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Roshan Enterprises is a leading provider of professional residential painting, commercial painting, interior and exterior wall coatings, and structural civil work services across Noida, Greater Noida, and Delhi NCR. We combine grade-A materials, certified technicians, transparent pricing, and guaranteed project timelines.
                </p>

                {/* 4 Feature Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-white border border-slate-200 flex items-start gap-3 rounded-2xl shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-extrabold text-navy-primary text-sm">Certified Paint Materials</h3>
                      <p className="text-slate-500 text-xs mt-0.5">Asian Paints, Berger & weather-proof emulsions.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 flex items-start gap-3 rounded-2xl shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-extrabold text-navy-primary text-sm">Experienced Engineers</h3>
                      <p className="text-slate-500 text-xs mt-0.5">Civil engineers & master paint application teams.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 flex items-start gap-3 rounded-2xl shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-extrabold text-navy-primary text-sm">On-Time Completion</h3>
                      <p className="text-slate-500 text-xs mt-0.5">Strict project gantt scheduling & timely handover.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 flex items-start gap-3 rounded-2xl shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-extrabold text-navy-primary text-sm">Transparent Estimations</h3>
                      <p className="text-slate-500 text-xs mt-0.5">No hidden fees, upfront detailed quotation.</p>
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
                Our Core Painting & Civil Services
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                Complete painting solutions, structural civil work, and industrial flooring delivered by trusted local specialists in Noida & Greater Noida.
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

            {/* Quick Links to Sub-services */}
            <div className="mt-12 bg-slate-50 p-6 border-2 border-slate-200 rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/services/painting/residential-painting" className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-gold-primary transition-all text-left group">
                <div className="text-xs font-bold text-gold-primary uppercase tracking-wider">Painting</div>
                <div className="font-extrabold text-navy-primary text-sm group-hover:text-gold-primary transition-colors mt-1">Residential Painting</div>
                <p className="text-slate-500 text-xs mt-1">Interiors, wall textures & home waterproofing.</p>
              </Link>

              <Link href="/services/painting/commercial-painting" className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-gold-primary transition-all text-left group">
                <div className="text-xs font-bold text-gold-primary uppercase tracking-wider">Painting</div>
                <div className="font-extrabold text-navy-primary text-sm group-hover:text-gold-primary transition-colors mt-1">Commercial Painting</div>
                <p className="text-slate-500 text-xs mt-1">Offices, IT parks & industrial facades.</p>
              </Link>

              <Link href="/services/civil-work/residential-civil-work" className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-gold-primary transition-all text-left group">
                <div className="text-xs font-bold text-gold-primary uppercase tracking-wider">Civil Work</div>
                <div className="font-extrabold text-navy-primary text-sm group-hover:text-gold-primary transition-colors mt-1">Residential Civil Work</div>
                <p className="text-slate-500 text-xs mt-1">Masonry, tile laying & home modifications.</p>
              </Link>

              <Link href="/services/civil-work/repair-work" className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-gold-primary transition-all text-left group">
                <div className="text-xs font-bold text-gold-primary uppercase tracking-wider">Civil Work</div>
                <div className="font-extrabold text-navy-primary text-sm group-hover:text-gold-primary transition-colors mt-1">Civil Repair Work</div>
                <p className="text-slate-500 text-xs mt-1">Structural rehab, crack repairs & plaster.</p>
              </Link>
            </div>
          </div>
          <WavyTransition topColor="#FFFFFF" bottomColor="#FFFFFF" strokeColor="#D99A16" className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        {/* 6. Local Service Areas Section */}
        <section className="py-16 bg-navy-dark text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-primary/20 text-gold-bright border border-gold-primary/40 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5 text-gold-primary" /> Primary Local Service Hubs
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Serving Noida, Greater Noida & Delhi NCR
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2">
                Fast site inspection within 24 hours across all sectors and industrial zones in Delhi NCR.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Noida Hub */}
              <div className="p-8 bg-slate-900/90 border border-gold-primary/30 rounded-3xl space-y-4 hover:border-gold-primary transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gold-primary/20 rounded-2xl border border-gold-primary/40 text-gold-bright">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Noida</h3>
                    <p className="text-xs text-slate-400">All Sectors & Expressways</p>
                  </div>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Specialized painting contractor and civil work team serving Sector 62, Sector 18, Noida Expressway, Sector 137, Sector 150, and surrounding residential & commercial developments.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <Link href="/painting-services/noida" className="text-[11px] font-bold text-gold-bright hover:underline">
                    • Painting Services in Noida
                  </Link>
                  <Link href="/civil-work/noida" className="text-[11px] font-bold text-gold-bright hover:underline">
                    • Civil Work in Noida
                  </Link>
                </div>
              </div>

              {/* Greater Noida Hub */}
              <div className="p-8 bg-slate-900/90 border border-gold-primary/30 rounded-3xl space-y-4 hover:border-gold-primary transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gold-primary/20 rounded-2xl border border-gold-primary/40 text-gold-bright">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Greater Noida</h3>
                    <p className="text-xs text-slate-400">Knowledge Park, Ecotech & West</p>
                  </div>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Our central headquarters area. Serving Knowledge Park I-V, Ecotech industrial zones, Greater Noida West (Noida Extension), Pari Chowk, and Omega sectors.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <Link href="/painting-services/greater-noida" className="text-[11px] font-bold text-gold-bright hover:underline">
                    • Painting in Greater Noida
                  </Link>
                  <Link href="/civil-work/greater-noida" className="text-[11px] font-bold text-gold-bright hover:underline">
                    • Civil Work in Greater Noida
                  </Link>
                </div>
              </div>

              {/* Delhi NCR Hub */}
              <div className="p-8 bg-slate-900/90 border border-gold-primary/30 rounded-3xl space-y-4 hover:border-gold-primary transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gold-primary/20 rounded-2xl border border-gold-primary/40 text-gold-bright">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Delhi NCR</h3>
                    <p className="text-xs text-slate-400">Delhi, Ghaziabad & Regional Projects</p>
                  </div>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Turnkey painting and civil execution for commercial complexes, healthcare institutions, and corporate facilities across South Delhi, East Delhi, Ghaziabad, and NCR.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <Link href="/location/delhi-ncr" className="text-[11px] font-bold text-gold-bright hover:underline">
                    • Delhi NCR Services
                  </Link>
                  <Link href="/location" className="text-[11px] font-bold text-gold-bright hover:underline">
                    • View All Locations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Industries Section */}
        <IndustryGrid />

        {/* 8. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 9. Process Timeline */}
        <ProcessTimeline />

        {/* 10. Testimonials */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <WavyTransition topColor="#F8FAFC" bottomColor="#F8FAFC" strokeColor="#D99A16" className="absolute top-0 left-0 right-0 w-full z-20 pointer-events-none" />
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-black text-navy-primary">
                Trusted by Industrial & Corporate Clients in Delhi NCR
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(activeReviews.length > 0 ? activeReviews : TESTIMONIALS).slice(0, 6).map((test, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 border-2 border-slate-200 hover:border-gold-primary shadow-md transition-all flex flex-col justify-between rounded-3xl"
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
                      <h3 className="font-extrabold text-navy-primary text-sm">{test.company}</h3>
                      <p className="text-slate-500 text-xs">{test.author} {'role' in test && test.role ? `(${test.role})` : ''}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Frequently Asked Questions Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-primary/10 text-navy-primary border border-gold-primary/30 rounded-full text-xs font-extrabold uppercase tracking-wider mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-gold-primary" /> Got Questions?
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-navy-primary">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Everything you need to know about our painting services, civil work execution, and local coverage in Noida & Greater Noida.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div key={index} className="p-6 bg-slate-50 border-2 border-slate-200 rounded-2xl hover:border-gold-primary transition-colors">
                  <h3 className="text-base sm:text-lg font-extrabold text-navy-primary flex items-start gap-3">
                    <span className="text-gold-primary font-black shrink-0">Q.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 pl-7 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. Strategic Quote CTA */}
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

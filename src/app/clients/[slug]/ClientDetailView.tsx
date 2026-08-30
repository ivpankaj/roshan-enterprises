'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { WavyBackground } from '@/components/WavyBackground';
import { CurvyLine } from '@/components/CurvyLine';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ClientCompanyDetail } from '@/lib/clientData';
import { adminStore } from '@/lib/adminStore';
import { Building2, CheckCircle2, Star, Globe, MapPin, Calendar, ArrowLeft, ShieldCheck, ArrowRight, Video } from 'lucide-react';

interface ClientDetailViewProps {
  client: ClientCompanyDetail;
}

export function ClientDetailView({ client }: ClientDetailViewProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(client.youtubeVideoId);
  const [reviewsList, setReviewsList] = useState(client.reviews);

  useEffect(() => {
    const dynamicId = adminStore.getVideoForClient(client.slug, client.youtubeVideoId);
    setActiveVideoId(dynamicId);

    const storeReviews = adminStore.getReviews();
    const matched = storeReviews.filter(
      (r) => r.clientSlug === client.slug || r.company.toLowerCase().includes(client.name.toLowerCase())
    );

    if (matched.length > 0) {
      setReviewsList(
        matched.map((r) => ({
          author: r.author,
          role: r.role || 'Corporate Client',
          rating: r.rating,
          date: r.date || 'Recent',
          comment: r.quote,
        }))
      );
    }
  }, [client.slug, client.name, client.youtubeVideoId]);

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col font-sans">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        <Breadcrumbs items={[{ name: 'Projects', href: '/projects' }, { name: client.name, href: `/clients/${client.slug}` }]} />

        {/* Client Page Header */}
        <section className="bg-slate-50 text-navy-primary py-16 relative overflow-hidden border-b border-slate-200">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold text-navy-primary hover:text-gold-primary uppercase tracking-wider mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-gold-primary" /> Back to Projects Portfolio
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h1 className="text-4xl sm:text-6xl font-black text-navy-primary">
                  {client.name}
                </h1>
                <p className="text-gold-primary text-sm sm:text-base font-bold">
                  {client.legalName} • {client.category}
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {client.overview}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-2 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gold-primary" /> {client.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gold-primary" /> Est. {client.established}
                  </span>
                  {client.websiteUrl && (
                    <>
                      <span>•</span>
                      <a
                        href={client.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-navy-primary hover:text-gold-primary hover:underline"
                      >
                        <Globe className="w-4 h-4 text-gold-primary" /> Official Website
                      </a>
                    </>
                  )}
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="p-6 bg-white border-2 border-gold-primary shadow-2xl rounded-3xl w-full max-w-sm flex flex-col items-center text-center space-y-4">
                  {client.logoImg ? (
                    <img
                      src={client.logoImg}
                      alt={client.name}
                      className="h-24 w-auto object-contain max-w-[220px]"
                    />
                  ) : (
                    <div
                      className="w-full h-24 flex items-center justify-center p-2 rounded-2xl"
                      dangerouslySetInnerHTML={{ __html: client.logoSvg }}
                    />
                  )}
                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                    Verified Corporate Partner
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CurvyLine variant="gold" strokeWidth={2.5} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        {/* Contract Executed */}
        <section className="py-16 bg-slate-50 relative overflow-hidden">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-8">
                <div className="bg-white p-8 border-2 border-navy-primary shadow-xl rounded-3xl space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 bg-gold-primary text-navy-dark text-xs font-black uppercase tracking-wider rounded-full">
                      Contract Scope Delivered
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-navy-primary">
                    {client.roshanContractScope.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {client.roshanContractScope.description}
                  </p>
                  <div className="space-y-3 pt-2">
                    <h3 className="font-extrabold text-navy-primary text-xs uppercase tracking-widest">
                      Contract Deliverables:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {client.roshanContractScope.services.map((item: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 rounded-xl">
                          <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-navy-primary font-black text-xl">
                    <Video className="w-6 h-6 text-red-600" />
                    <h3>{client.youtubeTitle}</h3>
                  </div>

                  <div className="relative w-full aspect-video border-2 border-navy-primary bg-black shadow-2xl rounded-3xl overflow-hidden">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?rel=0`}
                      title={client.youtubeTitle}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-8">
                <div className="bg-navy-primary text-white p-6 border border-gold-primary/40 shadow-xl space-y-4 rounded-3xl">
                  <h3 className="text-lg font-extrabold text-gold-bright uppercase tracking-wider">
                    Facility Specifications
                  </h3>
                  <div className="space-y-3">
                    {client.specifications.map((spec: { label: string; value: string }, i: number) => (
                      <div key={i} className="flex flex-col space-y-1">
                        <div className="flex items-center justify-between text-xs py-1">
                          <span className="text-slate-400 font-semibold">{spec.label}:</span>
                          <span className="font-extrabold text-white">{spec.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-black text-navy-primary flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold-primary" /> Verified Client Reviews
                  </h3>

                  {reviewsList.map((rev: { author: string; role: string; rating: number; date: string; comment: string }, idx: number) => (
                    <div key={idx} className="bg-white p-6 border border-slate-200 space-y-3 rounded-2xl shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-gold-primary">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-gold-primary" />
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold">{rev.date}</span>
                      </div>
                      <p className="text-slate-700 text-xs italic leading-relaxed">
                        "{rev.comment}"
                      </p>
                      <div className="pt-2 border-t border-slate-200">
                        <div className="font-extrabold text-navy-primary text-xs">{rev.author}</div>
                        <div className="text-[11px] text-slate-500 font-medium">{rev.role}, {client.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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

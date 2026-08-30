'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { WavyBackground } from '@/components/WavyBackground';
import { CurvyLine } from '@/components/CurvyLine';
import { BookOpen, ArrowRight, Calendar, User } from 'lucide-react';

export const ARTICLES = [
  {
    slug: 'house-painting-cost-noida',
    title: 'How Much Does House Painting Cost in Noida & Greater Noida?',
    description: 'A detailed breakdown of per-square-foot painting costs, wall putty expenses, labor rates, and material options for 2BHK, 3BHK, and villa house painting in Noida.',
    date: 'August 2026',
    author: 'Roshan Engineering Team',
    readTime: '5 min read',
  },
  {
    slug: 'choosing-painting-contractor-noida',
    title: 'How to Choose the Best Painting Contractor in Noida: 7 Vital Checklist Points',
    description: 'Avoid hidden costs and poor paint finishes. Learn what to look for when hiring a professional painter or contractor in Noida and Greater Noida.',
    date: 'August 2026',
    author: 'Roshan Engineering Team',
    readTime: '6 min read',
  },
  {
    slug: 'civil-repair-work-guide',
    title: 'Essential Guide to Civil Repair Work: Plaster Restoration & Crack Injection',
    description: 'Understand how structural civil repairs, damp-proofing, and polymer plaster restoration protect aging residential and commercial buildings.',
    date: 'August 2026',
    author: 'Roshan Engineering Team',
    readTime: '7 min read',
  },
];

export function ResourcesClient() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const breadcrumbs = [{ name: 'Resources', href: '/resources' }];

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        <Breadcrumbs items={breadcrumbs} />

        <section className="bg-slate-50 text-navy-primary py-16 relative overflow-hidden border-b border-slate-200">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-primary/10 text-navy-primary border border-gold-primary/30 rounded-full text-xs font-extrabold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-gold-primary" /> Knowledge Base & Guides
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-navy-primary mt-3">
              Painting & Civil Work Resources
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              Explore practical, original guides written by our civil engineers and paint specialists to help you plan property upgrades in Noida, Greater Noida, and Delhi NCR.
            </p>
          </div>
          <CurvyLine variant="gold" strokeWidth={2.5} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        <section className="py-20 bg-slate-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ARTICLES.map((art) => (
                <article
                  key={art.slug}
                  className="bg-white border-2 border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gold-primary" /> {art.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-gold-primary" /> {art.author}
                      </span>
                    </div>

                    <h2 className="text-xl font-extrabold text-navy-primary group-hover:text-gold-primary transition-colors leading-snug">
                      {art.title}
                    </h2>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {art.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400">{art.readTime}</span>
                    <Link
                      href={`/resources/${art.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-black text-gold-primary hover:text-navy-primary transition-colors uppercase tracking-wider"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      <QuickQuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { WavyBackground } from '@/components/WavyBackground';
import { CurvyLine } from '@/components/CurvyLine';
import { Calendar, User, ArrowLeft, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

export function ChoosingContractorClient() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const breadcrumbs = [
    { name: 'Resources', href: '/resources' },
    { name: 'Choosing Painting Contractor in Noida', href: '/resources/choosing-painting-contractor-noida' },
  ];

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        <Breadcrumbs items={breadcrumbs} />

        <section className="bg-slate-50 text-navy-primary py-16 relative overflow-hidden border-b border-slate-200">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-xs font-bold text-navy-primary hover:text-gold-primary uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-gold-primary" /> Back to Resources
            </Link>

            <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold pt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gold-primary" /> August 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-gold-primary" /> Roshan Engineering Team
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-navy-primary leading-tight">
              How to Choose the Best Painting Contractor in Noida: 7 Vital Checklist Points
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Hiring an inexperienced painter can lead to peeling paint, patchy wall finishes, and unexpected costs. Review this 7-step guide to verify credentials, material specs, and contract terms.
            </p>
          </div>
          <CurvyLine variant="gold" strokeWidth={2.5} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy-primary">The 7 Verification Checklist Points</h2>
              <ul className="space-y-3 font-medium">
                <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-navy-primary">1. Written BOQ & Brand Verification:</strong> Ensure exact paint lines (Asian Paints Royale, Apex Ultima, Berger Silk) are written in the estimate contract.
                </li>
                <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-navy-primary">2. Surface Moisture Testing:</strong> Professional contractors use digital moisture meters before applying primer.
                </li>
                <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-navy-primary">3. Floor & Furniture Protection:</strong> Masking tape and plastic sheets must be provided by the contractor.
                </li>
                <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-navy-primary">4. Supervised Site Execution:</strong> Experienced civil engineers or foremen should oversee labor execution.
                </li>
                <li className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-navy-primary">5. Fixed Completion Milestones:</strong> Set clear milestone payments linked to progress stages.
                </li>
              </ul>
            </div>

            <div className="bg-navy-primary text-white p-8 rounded-3xl space-y-4 border border-gold-primary">
              <h3 className="text-xl font-bold text-gold-bright">Hire Roshan Enterprises for Guaranteed Quality</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                We satisfy all 7 checklist points with written guarantees, certified brand materials, and experienced engineering supervision across Noida and Greater Noida.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="px-6 py-3 bg-gold-primary text-navy-dark font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-gold-bright transition-colors"
                >
                  Book Free Consultation
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-6 py-3 border border-white text-white font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white hover:text-navy-primary transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call {COMPANY_INFO.phone}
                </a>
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

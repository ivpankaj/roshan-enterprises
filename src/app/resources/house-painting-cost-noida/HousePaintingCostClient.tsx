'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { WavyBackground } from '@/components/WavyBackground';
import { CurvyLine } from '@/components/CurvyLine';
import { Calendar, User, ArrowLeft, Phone, CheckCircle, Calculator } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

export function HousePaintingCostClient() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const breadcrumbs = [
    { name: 'Resources', href: '/resources' },
    { name: 'House Painting Cost in Noida', href: '/resources/house-painting-cost-noida' },
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
              How Much Does House Painting Cost in Noida & Greater Noida? (2026 Price Guide)
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Planning to paint your 2BHK, 3BHK, or independent villa in Noida? Learn exact per-sq-ft rates for interior distemper, tractor emulsion, royal luxury finish, and weather-proof exterior coatings.
            </p>
          </div>
          <CurvyLine variant="gold" strokeWidth={2.5} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            <div className="p-6 bg-slate-50 border-2 border-gold-primary/40 rounded-2xl space-y-2">
              <h3 className="font-extrabold text-navy-primary text-base uppercase tracking-wider flex items-center gap-2">
                <Calculator className="w-5 h-5 text-gold-primary" /> Quick Summary of Rates in Noida (2026)
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> Fresh Painting (Putty + Primer + 2 Coats): ₹18 - ₹38 / sq.ft.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> Repainting (1 Coat Primer + 2 Coats): ₹12 - ₹24 / sq.ft.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> Luxury Emulsion (Royale Finish): ₹35 - ₹65 / sq.ft.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> Exterior Waterproof Paint: ₹22 - ₹48 / sq.ft.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy-primary">Factors Affecting House Painting Cost in Noida</h2>
              <p>
                Painting expenses in Noida, Greater Noida, and Delhi NCR depend on wall condition, height, surface dampness, and material selection (Asian Paints Royale, Apex Ultima, Berger Silk, Nerolac).
              </p>
              <ol className="list-decimal pl-5 space-y-2 font-medium">
                <li><strong>Carpet Area vs Super Built-up Area:</strong> Total paintable surface area is generally 3.5 times the carpet area of your flat or villa.</li>
                <li><strong>Fresh Painting vs Repainting:</strong> Fresh walls require 2 coats of acrylic wall putty, 1 coat of deep primer, and 2 finish coats.</li>
                <li><strong>Dampness Treatment:</strong> Waterproof damp block coatings are essential before painting living room walls near bathrooms or balconies.</li>
              </ol>
            </div>

            <div className="bg-navy-primary text-white p-8 rounded-3xl space-y-4 border border-gold-primary">
              <h3 className="text-xl font-bold text-gold-bright">Get an Instant Line-Item BOQ Quote for Your Flat</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Roshan Enterprises provides exact written quotations with zero hidden costs across all sectors of Noida and Greater Noida.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="px-6 py-3 bg-gold-primary text-navy-dark font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-gold-bright transition-colors"
                >
                  Calculate My Estimate Now
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

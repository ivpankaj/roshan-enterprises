'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export function TermsClient() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28 py-16">
        <Breadcrumbs items={[{ name: 'Terms & Conditions', href: '/terms' }]} />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-6 mt-4">
          <span className="text-gold-primary text-xs font-bold uppercase tracking-wider">Legal Document</span>
          <h1 className="text-3xl sm:text-4xl font-black text-navy-primary">Terms & Conditions</h1>
          <p className="text-xs text-slate-400">Effective Date: January 1, 2026</p>

          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              Welcome to the official web portal of <strong>Roshan Enterprises</strong>. By accessing or engaging our contracting services (Painting, Flooring, Civil Works), you agree to comply with these terms.
            </p>
            <h2 className="text-lg font-bold text-navy-primary pt-2">1. Scope of Work & Quotations</h2>
            <p>
              All technical estimations, material specifications, and project timelines are subject to formal site verification. Official contracts will detail exact line-item BOQs, payment milestones, and warranty conditions.
            </p>
            <h2 className="text-lg font-bold text-navy-primary pt-2">2. Warranties & Quality Assurance</h2>
            <p>
              Our painting, flooring, and civil execution warranties are backed by certified manufacturer materials (Asian Paints, Berger, UltraTech, Fosroc) and subject to site conditions outlined in final project agreements.
            </p>
            <h2 className="text-lg font-bold text-navy-primary pt-2">3. Jurisdiction</h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Gautam Buddha Nagar / Greater Noida, Uttar Pradesh.
            </p>
          </div>
        </div>
      </main>

      <Footer onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      <QuickQuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}

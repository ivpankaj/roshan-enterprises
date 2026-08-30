'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export function PrivacyPolicyClient() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28 py-16">
        <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy-policy' }]} />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-6 mt-4">
          <span className="text-gold-primary text-xs font-bold uppercase tracking-wider">Legal Document</span>
          <h1 className="text-3xl sm:text-4xl font-black text-navy-primary">Privacy Policy</h1>
          <p className="text-xs text-slate-400">Effective Date: January 1, 2026</p>

          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              At <strong>Roshan Enterprises</strong> ("we", "our", or "us"), based in Greater Noida, Uttar Pradesh, India, we prioritize the confidentiality and protection of our clients' and site visitors' personal data.
            </p>
            <h2 className="text-lg font-bold text-navy-primary pt-2">1. Information We Collect</h2>
            <p>
              When you fill out our quote request forms or contact us directly via telephone (+91 70489 76431) or email, we collect relevant contact information including your full name, mobile number, email address, company name, project site location, and technical scope parameters.
            </p>
            <h2 className="text-lg font-bold text-navy-primary pt-2">2. How We Use Information</h2>
            <p>
              Your information is exclusively utilized to generate accurate line-item BOQs, conduct site engineering assessments, communicate timeline estimates, and deliver quality contracting services across Noida, Greater Noida, and Delhi NCR. We do not sell or lease client details to third-party marketers.
            </p>
            <h2 className="text-lg font-bold text-navy-primary pt-2">3. Data Protection & Security</h2>
            <p>
              We implement appropriate administrative, technical, and physical security measures to safeguard your communications against unauthorized access, loss, or misuse.
            </p>
            <h2 className="text-lg font-bold text-navy-primary pt-2">4. Contacting Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please email us at <strong>info@roshanenterprises.co.in</strong> or write to our headquarters in Greater Noida, UP, India.
            </p>
          </div>
        </div>
      </main>

      <Footer onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      <QuickQuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}

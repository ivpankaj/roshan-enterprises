'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Home, ArrowRight, Paintbrush, Building2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-32 pb-20 px-4 sm:px-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-primary/20 text-gold-primary border-2 border-gold-primary rounded-3xl font-black text-3xl">
            404
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-navy-primary">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The page you are looking for does not exist or may have been moved. Explore our core service sections or return to the homepage.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
            <Link href="/" className="p-4 bg-white border-2 border-slate-200 hover:border-gold-primary rounded-2xl transition-all block group">
              <Home className="w-5 h-5 text-gold-primary mb-2" />
              <div className="font-extrabold text-navy-primary text-sm group-hover:text-gold-primary">Homepage</div>
              <p className="text-slate-500 text-xs mt-0.5">Return to the main page.</p>
            </Link>

            <Link href="/services/painting" className="p-4 bg-white border-2 border-slate-200 hover:border-gold-primary rounded-2xl transition-all block group">
              <Paintbrush className="w-5 h-5 text-gold-primary mb-2" />
              <div className="font-extrabold text-navy-primary text-sm group-hover:text-gold-primary">Painting Services</div>
              <p className="text-slate-500 text-xs mt-0.5">Residential & commercial painting.</p>
            </Link>

            <Link href="/services/civil-work" className="p-4 bg-white border-2 border-slate-200 hover:border-gold-primary rounded-2xl transition-all block group">
              <Building2 className="w-5 h-5 text-gold-primary mb-2" />
              <div className="font-extrabold text-navy-primary text-sm group-hover:text-gold-primary">Civil Works</div>
              <p className="text-slate-500 text-xs mt-0.5">Civil construction & repair.</p>
            </Link>
          </div>

          <div className="pt-6">
            <Link
              href="/"
              className="px-8 py-3.5 bg-navy-primary text-white font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-navy-dark transition-colors inline-flex items-center gap-2 shadow-md border border-gold-primary/30"
            >
              <span>Back to Roshan Enterprises Home</span>
              <ArrowRight className="w-4 h-4 text-gold-bright" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

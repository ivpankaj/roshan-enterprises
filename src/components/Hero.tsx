'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Award, Building } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { CurvyLine } from './CurvyLine';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-[90vh] pt-36 sm:pt-40 lg:pt-44 pb-20 flex items-center bg-white text-slate-800 overflow-hidden border-b border-slate-200">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pattern-grid-subtle opacity-30"></div>

      {/* Golden Wavy Curved Lines Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          preserveAspectRatio="none"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hero-gold-wave-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D99A16" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#F0B323" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D99A16" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="hero-gold-wave-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F0B323" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#D99A16" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F0B323" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="hero-gold-wave-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D99A16" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#F0B323" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Golden Wave Filled Area */}
          <path
            d="M0,180 C360,340 720,60 1080,300 C1280,420 1440,200 1440,200 L1440,600 L0,600 Z"
            fill="url(#hero-gold-wave-fill)"
          />

          {/* Primary Golden Wave Curve */}
          <path
            d="M0,180 C360,340 720,60 1080,300 C1280,420 1440,200 1440,200"
            stroke="url(#hero-gold-wave-1)"
            strokeWidth="3.5"
            fill="none"
          />

          {/* Secondary Intersecting Wave Curve */}
          <path
            d="M0,380 C400,120 800,480 1200,160 C1320,50 1440,260 1440,260"
            stroke="url(#hero-gold-wave-2)"
            strokeWidth="2.5"
            strokeDasharray="12 6"
            fill="none"
          />
        </svg>

        {/* Ambient Golden Glow Orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold-primary/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-bright/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-navy-primary">
                We Paint. <br />
                <span className="gold-gradient-text">We Build.</span> <br />
                We Deliver.
              </h1>
              <p className="text-gold-primary font-extrabold text-lg sm:text-xl tracking-wide pt-2">
                {COMPANY_INFO.subTagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              From professional commercial painting and heavy-duty industrial flooring to complete structural civil works, Roshan Enterprises delivers uncompromised workmanship, technical precision, and on-time project completion.
            </p>

            {/* Key Assurance Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-navy-primary">
                <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-navy-primary">
                <ShieldCheck className="w-4 h-4 text-gold-primary shrink-0" />
                <span>Experienced Engineers</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-navy-primary col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-gold-primary shrink-0" />
                <span>Transparent Estimations</span>
              </div>
            </div>

            {/* CTA Button Group - Curvy Pills */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 bg-gold-primary text-navy-dark font-black text-base rounded-full hover:bg-gold-bright transition-all shadow-xl hover:shadow-gold-primary/30 flex items-center justify-center gap-2 uppercase tracking-wider group border-2 border-gold-bright"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/services"
                className="px-8 py-4 bg-navy-primary text-white hover:bg-navy-dark font-bold text-base rounded-full transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Fast Contact Callout */}
            <div className="pt-2 flex items-center gap-4 text-xs sm:text-sm text-slate-500">
              <span className="flex items-center gap-1 font-semibold text-slate-700">
                <MapPin className="w-4 h-4 text-gold-primary" /> Serving PAN India Clients
              </span>
              <span>•</span>
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-navy-primary font-bold hover:text-gold-primary">
                Direct Call: {COMPANY_INFO.phone}
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual Card - Curvy Rounded Rectangle */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 group">
              {/* Background Construction Visual */}
              <img
                src="/images/hero_painting.jpg"
                alt="Roshan Enterprises Modern Professional Painting and Construction Site"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Subtle Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent"></div>

              {/* Floating Stat Overlay Card - Curvy Rounded */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 border-2 border-slate-200 shadow-2xl rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-gold-primary" />
                    <span className="font-black text-sm text-navy-primary uppercase tracking-wider">Trusted Construction Partner</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-gold-primary/20 text-navy-primary text-[10px] font-extrabold uppercase rounded-full border border-gold-primary/30">
                    PAN INDIA
                  </span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Specialized contractors for Painting, VDF/Epoxy Flooring & RCC Civil Structural execution for Industrial, Commercial, and Residential clients.
                </p>
              </div>

              {/* Top Accent Badge - Curvy Rounded */}
              <div className="absolute top-4 right-4 bg-gold-primary text-navy-dark px-3.5 py-1.5 text-xs font-black uppercase tracking-widest shadow-md rounded-full">
                RE Standard
              </div>
            </div>

            {/* Gold Curvy Horizontal Decorative Rule */}
            <div className="absolute -bottom-4 -left-4 w-3/4">
              <CurvyLine variant="gold" strokeWidth={3} height={12} pattern="wave" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

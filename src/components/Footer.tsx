import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Mail, Shield, CheckCircle, Clock, ThumbsUp, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '@/lib/data';
import { CurvyLine } from './CurvyLine';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-white text-slate-800 pt-16 pb-8 relative overflow-hidden border-t border-slate-200">
      {/* Top Curvy Golden Border Line */}
      <CurvyLine variant="gold" strokeWidth={3.5} height={14} pattern="double" className="absolute top-0 left-0 right-0 w-full z-20 pointer-events-none" />

      {/* Golden Wavy Curved Lines Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          preserveAspectRatio="none"
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ft-gold-wave-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D99A16" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#F0B323" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D99A16" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="ft-gold-wave-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F0B323" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#D99A16" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F0B323" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Primary Golden Wave Curve */}
          <path
            d="M0,80 C360,240 720,20 1080,200 C1260,280 1440,120 1440,120"
            stroke="url(#ft-gold-wave-1)"
            strokeWidth="3.5"
            fill="none"
          />

          {/* Secondary Intersecting Wave Curve */}
          <path
            d="M0,240 C400,60 800,320 1200,90 C1320,30 1440,180 1440,180"
            stroke="url(#ft-gold-wave-2)"
            strokeWidth="2.5"
            strokeDasharray="12 6"
            fill="none"
          />
        </svg>

        {/* Ambient Golden Glow Orb */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-primary/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10">
          
          {/* Col 1 & 2: Brand Identity & About */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="dark" showTagline={true} />
            <p className="text-slate-600 text-sm leading-relaxed max-w-md">
              Roshan Enterprises is a premier construction, industrial flooring, and painting contractor providing turnkey engineering solutions across PAN India with unyielding commitment to quality and execution timelines.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gold-primary text-navy-dark font-extrabold text-xs rounded-full hover:bg-gold-bright transition-colors uppercase tracking-wider shadow-md border-2 border-gold-bright"
              >
                Request a Free Quote <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-navy-primary text-navy-primary hover:bg-navy-primary hover:text-white font-extrabold text-xs rounded-full transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-primary" /> {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-navy-primary text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-primary rounded-full"></span> Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li>
                <Link href="/" className="hover:text-gold-primary transition-colors flex items-center gap-1.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-primary transition-colors flex items-center gap-1.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-primary transition-colors flex items-center gap-1.5">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gold-primary transition-colors flex items-center gap-1.5">
                  Projects Portfolio
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-gold-primary transition-colors flex items-center gap-1.5">
                  Sectors Served
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-primary transition-colors flex items-center gap-1.5">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Primary Services */}
          <div>
            <h4 className="text-navy-primary text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-primary rounded-full"></span> Core Services
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li>
                <Link href="/services/painting" className="hover:text-gold-primary transition-colors">
                  Painting Services (Interior/Exterior)
                </Link>
              </li>
              <li>
                <Link href="/services/flooring" className="hover:text-gold-primary transition-colors">
                  VDF & Epoxy Flooring
                </Link>
              </li>
              <li>
                <Link href="/services/civil-works" className="hover:text-gold-primary transition-colors">
                  RCC Structural & Civil Works
                </Link>
              </li>
              <li>
                <Link href="/services/painting" className="hover:text-gold-primary transition-colors text-xs text-slate-500">
                  • Texture & Waterproof Paints
                </Link>
              </li>
              <li>
                <Link href="/services/flooring" className="hover:text-gold-primary transition-colors text-xs text-slate-500">
                  • Concrete Densification & Polishing
                </Link>
              </li>
              <li>
                <Link href="/services/civil-works" className="hover:text-gold-primary transition-colors text-xs text-slate-500">
                  • False Ceilings & Plastering
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & Contact Info */}
          <div>
            <h4 className="text-navy-primary text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-primary rounded-full"></span> Reach Us
            </h4>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-primary shrink-0 mt-1" />
                <span>
                  <strong className="text-navy-primary">PAN India Contractor</strong>
                  <br />
                  <span className="text-xs text-slate-500">Uttar Pradesh, India</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-primary shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-gold-primary font-bold text-navy-primary">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-primary shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold-primary text-xs font-medium text-slate-600">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Curvy Divider Line */}
        <CurvyLine variant="gold" strokeWidth={1.5} height={10} className="w-full my-2 opacity-40" />

        {/* Brochure Value Bar */}
        <div className="py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-navy-primary text-xs sm:text-sm font-bold">
            <Shield className="w-4 h-4 text-gold-primary" />
            <span>Quality Materials</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-navy-primary text-xs sm:text-sm font-bold">
            <CheckCircle className="w-4 h-4 text-gold-primary" />
            <span>Skilled Professionals</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-navy-primary text-xs sm:text-sm font-bold">
            <Clock className="w-4 h-4 text-gold-primary" />
            <span>Timely Completion</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-navy-primary text-xs sm:text-sm font-bold">
            <ThumbsUp className="w-4 h-4 text-gold-primary" />
            <span>Customer Satisfaction</span>
          </div>
        </div>

        {/* Curvy Divider Line */}
        <CurvyLine variant="gold" strokeWidth={1.5} height={10} className="w-full my-2 opacity-40" />

        {/* Bottom Legal Strip */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-slate-200">
          <p>© 2026 Roshan Enterprises. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-gold-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-primary transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

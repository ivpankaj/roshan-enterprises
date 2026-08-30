import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Mail, Shield, CheckCircle, Clock, ThumbsUp, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '@/lib/data';
import { CurvyLine } from './CurvyLine';

interface FooterProps {
  onOpenQuoteModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const handleQuoteClick = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <footer className="bg-white text-slate-800 pt-16 pb-8 relative overflow-hidden border-t border-slate-200">
      <CurvyLine variant="gold" strokeWidth={3.5} height={14} pattern="double" className="absolute top-0 left-0 right-0 w-full z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="dark" showTagline={true} />
            <p className="text-slate-600 text-sm leading-relaxed max-w-md">
              Roshan Enterprises is a premier painting contractor and civil work contractor serving Noida, Greater Noida, and Delhi NCR with quality materials, skilled engineers, and on-time execution guarantees.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleQuoteClick}
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

          {/* Col 3: Services Links */}
          <div>
            <h4 className="text-navy-primary text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-primary rounded-full"></span> Painting Services
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <Link href="/services/painting" className="hover:text-gold-primary transition-colors font-bold text-navy-primary">
                  All Painting Services
                </Link>
              </li>
              <li>
                <Link href="/services/painting/residential-painting" className="hover:text-gold-primary transition-colors">
                  • Residential Painting
                </Link>
              </li>
              <li>
                <Link href="/services/painting/commercial-painting" className="hover:text-gold-primary transition-colors">
                  • Commercial Painting
                </Link>
              </li>
              <li>
                <Link href="/services/painting/interior-painting" className="hover:text-gold-primary transition-colors">
                  • Interior Wall Textures
                </Link>
              </li>
              <li>
                <Link href="/services/painting/exterior-painting" className="hover:text-gold-primary transition-colors">
                  • Exterior Waterproofing
                </Link>
              </li>
              <li>
                <Link href="/painting-services/noida" className="hover:text-gold-primary transition-colors">
                  • Painting Services in Noida
                </Link>
              </li>
              <li>
                <Link href="/painting-services/greater-noida" className="hover:text-gold-primary transition-colors">
                  • Painting in Greater Noida
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Civil Work & Location Links */}
          <div>
            <h4 className="text-navy-primary text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-primary rounded-full"></span> Civil Work & Locations
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <Link href="/services/civil-work" className="hover:text-gold-primary transition-colors font-bold text-navy-primary">
                  All Civil Work Services
                </Link>
              </li>
              <li>
                <Link href="/services/civil-work/residential-civil-work" className="hover:text-gold-primary transition-colors">
                  • Residential Civil Work
                </Link>
              </li>
              <li>
                <Link href="/services/civil-work/commercial-civil-work" className="hover:text-gold-primary transition-colors">
                  • Commercial Civil Work
                </Link>
              </li>
              <li>
                <Link href="/services/civil-work/repair-work" className="hover:text-gold-primary transition-colors">
                  • Civil Repair Work
                </Link>
              </li>
              <li>
                <Link href="/civil-work/noida" className="hover:text-gold-primary transition-colors">
                  • Civil Work in Noida
                </Link>
              </li>
              <li>
                <Link href="/civil-work/greater-noida" className="hover:text-gold-primary transition-colors">
                  • Civil Work Greater Noida
                </Link>
              </li>
              <li>
                <Link href="/location/delhi-ncr" className="hover:text-gold-primary transition-colors">
                  • Services in Delhi NCR
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Reach Us */}
          <div>
            <h4 className="text-navy-primary text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-primary rounded-full"></span> Corporate & Contact
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600 mb-4">
              <li><Link href="/about" className="hover:text-gold-primary">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-gold-primary">Projects Portfolio</Link></li>
              <li><Link href="/resources" className="hover:text-gold-primary font-bold text-navy-primary">Guides & Resources</Link></li>
              <li><Link href="/contact" className="hover:text-gold-primary">Contact Us</Link></li>
            </ul>
            
            <div className="space-y-2 text-xs text-slate-600 border-t border-slate-200 pt-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-primary shrink-0" />
                <span>Greater Noida, UP, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-primary shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-navy-primary">{COMPANY_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-primary shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </div>
            </div>
          </div>

        </div>

        {/* Curvy Divider */}
        <CurvyLine variant="gold" strokeWidth={1.5} height={10} className="w-full my-2 opacity-40" />

        {/* Brochure Value Bar */}
        <div className="py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-navy-primary text-xs font-bold">
            <Shield className="w-4 h-4 text-gold-primary" />
            <span>Grade-A Materials</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-navy-primary text-xs font-bold">
            <CheckCircle className="w-4 h-4 text-gold-primary" />
            <span>Experienced Civil Engineers</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-navy-primary text-xs font-bold">
            <Clock className="w-4 h-4 text-gold-primary" />
            <span>Guaranteed Milestones</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-navy-primary text-xs font-bold">
            <ThumbsUp className="w-4 h-4 text-gold-primary" />
            <span>Customer Satisfaction</span>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-slate-200">
          <p>© 2026 Roshan Enterprises. All Rights Reserved. Domain: https://www.roshanenterprises.org/</p>
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

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MapPin, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '@/lib/data';
import { CurvyLine } from './CurvyLine';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      subItems: [
        { name: 'All Services Overview', href: '/services' },
        { name: 'Painting Services', href: '/services/painting' },
        { name: 'Flooring Solutions', href: '/services/flooring' },
        { name: 'Civil Works', href: '/services/civil-works' },
      ]
    },
    { name: 'Projects', href: '/projects' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-navy-dark text-slate-200 text-xs py-2 px-4 sm:px-8 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-gold-bright font-semibold">
              <MapPin className="w-3.5 h-3.5 text-gold-primary" />
              {COMPANY_INFO.serviceArea}
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline italic text-slate-300">
              "{COMPANY_INFO.tagline}"
            </span>
          </div>

          <div className="flex items-center gap-4 font-medium text-[11px] sm:text-xs">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-white hover:text-gold-bright transition-colors font-bold tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 text-gold-primary animate-pulse" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
        {/* Curvy Line Under Top Bar */}
        <CurvyLine variant="white" strokeWidth={1} height={6} className="absolute bottom-0 left-0 right-0 w-full opacity-30 pointer-events-none" />
      </div>

      {/* Main Navbar - Solid Pure White (Zero Gray Tint) */}
      <nav
        className={`w-full transition-all duration-300 relative bg-white ${
          isScrolled
            ? 'shadow-lg py-3'
            : 'shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo variant="dark" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-4 py-2 text-sm font-semibold rounded-full flex items-center gap-1 transition-all ${
                        isActive
                          ? 'text-navy-primary bg-gold-primary/20 font-bold border-2 border-gold-primary'
                          : 'text-slate-800 hover:text-gold-primary hover:bg-gold-light/40'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-gold-primary' : ''}`} />
                    </Link>

                    {/* Dropdown Menu - Curvy Borders */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 pt-2 animate-fade-in z-50">
                        <div className="bg-white border-2 border-gold-primary/30 shadow-2xl rounded-2xl p-3 space-y-1 relative">
                          {link.subItems?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-navy-dark hover:bg-gold-primary/20 rounded-xl transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                    isActive
                      ? 'text-navy-primary bg-gold-primary/20 font-bold border-2 border-gold-primary'
                      : 'text-slate-800 hover:text-gold-primary hover:bg-gold-light/40'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Button - CURVY PILL BUTTON */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="relative group px-6 py-2.5 bg-gold-primary text-navy-dark font-black text-sm rounded-full hover:bg-gold-bright transition-all shadow-md hover:shadow-gold-primary/40 flex items-center gap-2 overflow-hidden uppercase tracking-wider border-2 border-gold-bright"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-3.5 py-1.5 bg-gold-primary text-navy-dark font-bold text-xs rounded-full hover:bg-gold-bright uppercase tracking-wider"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-gold-primary focus:outline-none rounded-full"
              aria-label="Toggle mobile navigation"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Seamless Curvy Wave Bottom Edge for Navbar */}
        <div className="absolute top-full left-0 right-0 w-full overflow-hidden leading-none z-40 pointer-events-none">
          <svg
            className="w-full block"
            viewBox="0 0 1200 24"
            preserveAspectRatio="none"
            style={{ height: '18px' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* White Fill matching Navbar background - exact curve boundary */}
            <path
              d="M 0 0 L 1200 0 L 1200 12 Q 1050 4, 900 12 Q 750 20, 600 12 Q 450 4, 300 12 Q 150 20, 0 12 Z"
              fill="#FFFFFF"
            />
            {/* Golden Wavy Stroke Line - 100% exact match along curve */}
            <path
              d="M 0 12 Q 150 20, 300 12 Q 450 4, 600 12 Q 750 20, 900 12 Q 1050 4, 1200 12"
              fill="none"
              stroke="#D99A16"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Mobile Slide-out Drawer - Curvy Bottom */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white text-slate-800 px-6 py-6 space-y-4 shadow-2xl animate-fade-in relative rounded-b-3xl border-b-2 border-gold-primary">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="space-y-1">
                      <span className="block px-3 py-2 text-xs font-bold text-gold-primary uppercase tracking-wider border-l-2 border-gold-primary pl-2 rounded-r-lg">
                        {link.name}
                      </span>
                      <div className="pl-4 space-y-1 border-l border-gold-primary/30">
                        {link.subItems?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-gold-primary rounded-xl"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2.5 text-base font-semibold rounded-xl ${
                      isActive ? 'bg-gold-primary/20 text-gold-primary font-bold border-l-4 border-gold-primary' : 'text-slate-800 hover:text-gold-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 space-y-3">
              <CurvyLine variant="slate" strokeWidth={1.5} height={8} className="w-full mb-3" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 bg-gold-primary text-navy-dark font-extrabold rounded-full text-center shadow-lg uppercase text-sm tracking-wider"
              >
                Get a Free Quote
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="block text-center py-2 text-xs font-bold text-slate-600 hover:text-navy-dark"
              >
                📞 Call Directly: {COMPANY_INFO.phone}
              </a>
            </div>
            <CurvyLine variant="gold" strokeWidth={3} height={10} className="absolute bottom-0 left-0 right-0 w-full pointer-events-none" />
          </div>
        )}
      </nav>
    </header>
  );
};


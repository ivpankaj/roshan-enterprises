'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MapPin, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '@/lib/data';
import { CurvyLine } from './CurvyLine';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
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

  const handleQuoteClick = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      window.location.href = '/contact';
    }
  };

  const serviceSubItems = [
    { name: 'All Services Overview', href: '/services' },
    { name: 'Painting Services Overview', href: '/services/painting' },
    { name: '• Residential Painting', href: '/services/painting/residential-painting' },
    { name: '• Commercial Painting', href: '/services/painting/commercial-painting' },
    { name: '• Interior Painting', href: '/services/painting/interior-painting' },
    { name: '• Exterior Painting', href: '/services/painting/exterior-painting' },
    { name: 'Civil Work Overview', href: '/services/civil-work' },
    { name: '• Residential Civil Work', href: '/services/civil-work/residential-civil-work' },
    { name: '• Commercial Civil Work', href: '/services/civil-work/commercial-civil-work' },
    { name: '• Civil Repair Work', href: '/services/civil-work/repair-work' },
    { name: 'Flooring Solutions (VDF/Epoxy)', href: '/services/flooring' },
  ];

  const locationSubItems = [
    { name: 'All Locations Overview', href: '/location' },
    { name: 'Noida (Overview)', href: '/location/noida' },
    { name: '• Painting Services Noida', href: '/painting-services/noida' },
    { name: '• Civil Work Noida', href: '/civil-work/noida' },
    { name: 'Greater Noida (Overview)', href: '/location/greater-noida' },
    { name: '• Painting Services Greater Noida', href: '/painting-services/greater-noida' },
    { name: '• Civil Work Greater Noida', href: '/civil-work/greater-noida' },
    { name: 'Delhi NCR Region', href: '/location/delhi-ncr' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-navy-dark text-slate-200 text-xs py-2 px-4 sm:px-8 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-gold-bright font-semibold">
              <MapPin className="w-3.5 h-3.5 text-gold-primary" />
              Noida • Greater Noida • Delhi NCR
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
        <CurvyLine variant="white" strokeWidth={1} height={6} className="absolute bottom-0 left-0 right-0 w-full opacity-30 pointer-events-none" />
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 relative bg-white ${
          isScrolled ? 'shadow-lg py-3' : 'shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo variant="dark" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-semibold rounded-full transition-all ${
                pathname === '/'
                  ? 'text-navy-primary bg-gold-primary/20 font-bold border-2 border-gold-primary'
                  : 'text-slate-800 hover:text-gold-primary hover:bg-gold-light/40'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-semibold rounded-full transition-all ${
                pathname === '/about'
                  ? 'text-navy-primary bg-gold-primary/20 font-bold border-2 border-gold-primary'
                  : 'text-slate-800 hover:text-gold-primary hover:bg-gold-light/40'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`px-3 py-2 text-sm font-semibold rounded-full flex items-center gap-1 transition-all ${
                  pathname.startsWith('/services')
                    ? 'text-navy-primary bg-gold-primary/20 font-bold border-2 border-gold-primary'
                    : 'text-slate-800 hover:text-gold-primary hover:bg-gold-light/40'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-gold-primary' : ''}`} />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 animate-fade-in z-50">
                  <div className="bg-white border-2 border-gold-primary/30 shadow-2xl rounded-2xl p-3 space-y-1 relative max-h-[80vh] overflow-y-auto">
                    {serviceSubItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`block px-3 py-2 text-xs font-semibold rounded-xl transition-colors ${
                          sub.name.startsWith('•')
                            ? 'text-slate-600 pl-5 hover:text-navy-dark hover:bg-slate-100'
                            : 'text-navy-primary font-bold bg-slate-50 hover:bg-gold-primary/20 mt-1'
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsDropdownOpen(true)}
              onMouseLeave={() => setLocationsDropdownOpen(false)}
            >
              <Link
                href="/location"
                className={`px-3 py-2 text-sm font-semibold rounded-full flex items-center gap-1 transition-all ${
                  pathname.startsWith('/location') || pathname.startsWith('/painting-services') || pathname.startsWith('/civil-work/')
                    ? 'text-navy-primary bg-gold-primary/20 font-bold border-2 border-gold-primary'
                    : 'text-slate-800 hover:text-gold-primary hover:bg-gold-light/40'
                }`}
              >
                Locations
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${locationsDropdownOpen ? 'rotate-180 text-gold-primary' : ''}`} />
              </Link>

              {locationsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 animate-fade-in z-50">
                  <div className="bg-white border-2 border-gold-primary/30 shadow-2xl rounded-2xl p-3 space-y-1 relative">
                    {locationSubItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`block px-3 py-2 text-xs font-semibold rounded-xl transition-colors ${
                          sub.name.startsWith('•')
                            ? 'text-slate-600 pl-5 hover:text-navy-dark hover:bg-slate-100'
                            : 'text-navy-primary font-bold bg-slate-50 hover:bg-gold-primary/20 mt-1'
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className={`px-3 py-2 text-sm font-semibold rounded-full transition-all ${
                pathname === '/projects'
                  ? 'text-navy-primary bg-gold-primary/20 font-bold border-2 border-gold-primary'
                  : 'text-slate-800 hover:text-gold-primary hover:bg-gold-light/40'
              }`}
            >
              Projects
            </Link>

            <Link
              href="/resources"
              className={`px-3 py-2 text-sm font-semibold rounded-full transition-all ${
                pathname.startsWith('/resources')
                  ? 'text-navy-primary bg-gold-primary/20 font-bold border-2 border-gold-primary'
                  : 'text-slate-800 hover:text-gold-primary hover:bg-gold-light/40'
              }`}
            >
              Resources
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-semibold rounded-full transition-all ${
                pathname === '/contact'
                  ? 'text-navy-primary bg-gold-primary/20 font-bold border-2 border-gold-primary'
                  : 'text-slate-800 hover:text-gold-primary hover:bg-gold-light/40'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handleQuoteClick}
              className="relative group px-6 py-2.5 bg-gold-primary text-navy-dark font-black text-sm rounded-full hover:bg-gold-bright transition-all shadow-md flex items-center gap-2 uppercase tracking-wider border-2 border-gold-bright"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={handleQuoteClick}
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

        {/* Mobile Slide-out Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white text-slate-800 px-6 py-6 space-y-4 shadow-2xl animate-fade-in relative rounded-b-3xl border-b-2 border-gold-primary max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-base font-semibold">Home</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-base font-semibold">About Us</Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-base font-bold text-navy-primary bg-slate-100 rounded-lg">Services Overview</Link>
              <div className="pl-4 space-y-1 text-xs text-slate-600 font-medium">
                <Link href="/services/painting" onClick={() => setMobileMenuOpen(false)} className="block py-1">Painting Services</Link>
                <Link href="/services/painting/residential-painting" onClick={() => setMobileMenuOpen(false)} className="block py-1 pl-2">• Residential Painting</Link>
                <Link href="/services/painting/commercial-painting" onClick={() => setMobileMenuOpen(false)} className="block py-1 pl-2">• Commercial Painting</Link>
                <Link href="/services/civil-work" onClick={() => setMobileMenuOpen(false)} className="block py-1">Civil Work</Link>
                <Link href="/services/civil-work/residential-civil-work" onClick={() => setMobileMenuOpen(false)} className="block py-1 pl-2">• Residential Civil Work</Link>
                <Link href="/services/civil-work/repair-work" onClick={() => setMobileMenuOpen(false)} className="block py-1 pl-2">• Civil Repair Work</Link>
              </div>

              <Link href="/location" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-base font-bold text-navy-primary bg-slate-100 rounded-lg mt-2">Locations</Link>
              <div className="pl-4 space-y-1 text-xs text-slate-600 font-medium">
                <Link href="/location/noida" onClick={() => setMobileMenuOpen(false)} className="block py-1">Noida Overview</Link>
                <Link href="/painting-services/noida" onClick={() => setMobileMenuOpen(false)} className="block py-1 pl-2">• Painting Services Noida</Link>
                <Link href="/civil-work/noida" onClick={() => setMobileMenuOpen(false)} className="block py-1 pl-2">• Civil Work Noida</Link>
                <Link href="/location/greater-noida" onClick={() => setMobileMenuOpen(false)} className="block py-1">Greater Noida Overview</Link>
                <Link href="/painting-services/greater-noida" onClick={() => setMobileMenuOpen(false)} className="block py-1 pl-2">• Painting Services Greater Noida</Link>
                <Link href="/civil-work/greater-noida" onClick={() => setMobileMenuOpen(false)} className="block py-1 pl-2">• Civil Work Greater Noida</Link>
              </div>

              <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-base font-semibold">Projects</Link>
              <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-base font-semibold">Resources & Guides</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-base font-semibold">Contact</Link>
            </div>

            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleQuoteClick();
                }}
                className="w-full py-3 bg-gold-primary text-navy-dark font-extrabold rounded-full text-center shadow-lg uppercase text-sm tracking-wider"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

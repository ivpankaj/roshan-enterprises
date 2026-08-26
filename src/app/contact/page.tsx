'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WavyBackground } from '@/components/WavyBackground';
import { CurvyLine } from '@/components/CurvyLine';
import { COMPANY_INFO } from '@/lib/data';
import { Phone, MapPin, Mail, Send, CheckCircle2, Clock } from 'lucide-react';

export default function ContactPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    service: 'Painting Services',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        {/* Page Hero */}
        <section className="bg-slate-50 text-navy-primary py-16 relative overflow-hidden border-b border-slate-200">
          <WavyBackground variant="gold-subtle" />
          <div className="absolute inset-0 pattern-grid-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <h1 className="text-4xl sm:text-6xl font-black text-navy-primary mt-3">
              Let's Build Something Great Together
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              Reach out to our engineering and project management team for fast site assessments, line-item BOQ estimates, or general project inquiries across India.
            </p>
          </div>
          <CurvyLine variant="gold" strokeWidth={2.5} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        {/* Contact Content Grid */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Contact Information */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-navy-primary">
                    Roshan Enterprises Headquarters
                  </h2>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    We maintain mobile site engineering teams serving client projects across PAN India.
                  </p>
                </div>

                {/* Contact Cards - Curvy */}
                <div className="space-y-4">
                  <div className="p-6 bg-slate-50 border-2 border-slate-200 flex items-start gap-4 rounded-2xl">
                    <div className="p-3 bg-navy-primary text-gold-bright shrink-0 rounded-xl border border-gold-primary/30">
                      <Phone className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-navy-primary text-sm uppercase">Phone / Hotline</h4>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="text-lg font-black text-navy-primary hover:text-gold-primary transition-colors block mt-0.5">
                        {COMPANY_INFO.phone}
                      </a>
                      <span className="text-xs text-slate-500 font-medium">Available Mon - Sat (8:00 AM - 8:00 PM)</span>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 border-2 border-slate-200 flex items-start gap-4 rounded-2xl">
                    <div className="p-3 bg-navy-primary text-gold-bright shrink-0 rounded-xl border border-gold-primary/30">
                      <MapPin className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-navy-primary text-sm uppercase">Base Location</h4>
                      <p className="text-sm font-bold text-navy-primary mt-0.5">
                        Greater Noida, Uttar Pradesh, India
                      </p>
                      <span className="text-xs text-gold-primary font-bold block mt-1">★ Serving PAN India Execution Sites</span>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 border-2 border-slate-200 flex items-start gap-4 rounded-2xl">
                    <div className="p-3 bg-navy-primary text-gold-bright shrink-0 rounded-xl border border-gold-primary/30">
                      <Mail className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-navy-primary text-sm uppercase">Email Contact</h4>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-navy-primary hover:text-gold-primary transition-colors block mt-0.5">
                        {COMPANY_INFO.email}
                      </a>
                      <span className="text-xs text-slate-500 font-medium">For official tenders & technical BOQs</span>
                    </div>
                  </div>
                </div>

                {/* Assurance Box */}
                <div className="p-6 bg-navy-primary text-white border border-gold-primary/30 space-y-3 rounded-3xl shadow-xl">
                  <div className="flex items-center gap-2 text-gold-bright font-bold text-sm">
                    <Clock className="w-4 h-4 text-gold-primary" /> Fast Response Standard
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    All submitted quote forms are routed directly to our senior site engineers. You will receive an initial project callback within <strong>2 to 4 hours</strong>.
                  </p>
                </div>
              </div>

              {/* Right Form Column - Curvy Rounded */}
              <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-12 border-2 border-slate-200 shadow-xl rounded-3xl">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-fade-in">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-500 rounded-2xl">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-navy-primary">Inquiry Received Successfully</h3>
                    <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
                      Thank you for contacting Roshan Enterprises. Our site engineering team will review your specifications and contact you within <strong className="text-navy-primary">2 to 4 hours</strong>.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-navy-primary text-gold-bright font-bold text-xs hover:bg-navy-dark transition-colors rounded-full uppercase tracking-wider border border-gold-primary/30"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-black text-navy-primary mb-1">Send Us a Direct Message</h3>
                      <p className="text-slate-600 text-xs sm:text-sm">Fill in your project requirements for immediate technical response.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-extrabold uppercase text-navy-primary mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Anand Sharma"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary bg-white rounded-xl"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold uppercase text-navy-primary mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary bg-white rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-extrabold uppercase text-navy-primary mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="anand@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary bg-white rounded-xl"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold uppercase text-navy-primary mb-1.5">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary bg-white rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-extrabold uppercase text-navy-primary mb-1.5">
                          Service Category <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary bg-white rounded-xl"
                        >
                          <option value="Painting Services">Painting Services</option>
                          <option value="Flooring Solutions">Flooring Solutions (VDF/Epoxy/PCC)</option>
                          <option value="Civil Works">Civil Works & Masonry</option>
                          <option value="Turnkey Maintenance">Turnkey Multi-Service</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold uppercase text-navy-primary mb-1.5">
                          Site Location <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Greater Noida, Delhi NCR, Gujarat"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary bg-white rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase text-navy-primary mb-1.5">
                        Project Scope / Specs
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Mention square footage, site status, or specific technical requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary bg-white resize-none rounded-xl"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gold-primary text-navy-dark font-black text-sm hover:bg-gold-bright transition-all shadow-lg hover:shadow-gold-primary/30 uppercase tracking-wider flex items-center justify-center gap-2 rounded-full border-2 border-gold-bright"
                    >
                      {isSubmitting ? 'Submitting Form...' : 'Submit Contact Inquiry'}
                    </button>
                  </form>
                )}

              </div>

            </div>
          </div>
          <CurvyLine variant="slate" strokeWidth={2} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>
      </main>

      <Footer onOpenQuoteModal={() => setQuoteModalOpen(true)} />
    </div>
  );
}

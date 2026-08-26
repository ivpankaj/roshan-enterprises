'use client';

import React, { useState } from 'react';
import { X, CheckCircle, PhoneCall, Send, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { CurvyLine } from './CurvyLine';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Painting Services'
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    service: defaultService,
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-navy-dark/85 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-2 border-gold-primary overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-navy-primary px-6 py-5 text-white flex items-center justify-between relative rounded-t-3xl">
          <div>
            <span className="text-gold-bright text-xs uppercase font-bold tracking-wider">Fast Response Guaranteed</span>
            <h3 className="text-xl sm:text-2xl font-bold">Request a Free Project Quote</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white hover:bg-navy-dark transition-colors focus:outline-none rounded-full border border-transparent hover:border-gold-primary"
            aria-label="Close quote modal"
          >
            <X className="w-6 h-6" />
          </button>
          <CurvyLine variant="gold" strokeWidth={2} height={8} className="absolute bottom-0 left-0 right-0 w-full z-10 pointer-events-none" />
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-500 rounded-2xl">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-navy-primary">Thank You! Request Received</h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                Our project engineering team at Roshan Enterprises will evaluate your requirements and contact you within <strong className="text-navy-primary">2 to 4 hours</strong>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-primary text-navy-dark font-bold rounded-full hover:bg-gold-bright transition-colors uppercase tracking-wider text-xs border-2 border-gold-bright"
                >
                  <PhoneCall className="w-4 h-4" /> Call Now: {COMPANY_INFO.phone}
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-full hover:bg-slate-200 transition-colors uppercase tracking-wider text-xs border border-slate-300"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy-primary uppercase mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-primary uppercase mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy-primary uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-primary uppercase mb-1">
                    Company / Entity Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sperry Techno Solutions"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy-primary uppercase mb-1">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary bg-white"
                  >
                    <option value="Painting Services">Painting Services (Interior/Exterior/Texture)</option>
                    <option value="Flooring Solutions">Flooring Solutions (VDF/PCC/Epoxy/Tiles)</option>
                    <option value="Civil Works">Civil Works (RCC/Brickwork/Plaster/Ceiling)</option>
                    <option value="Turnkey Maintenance">Turnkey Multi-Service Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-primary uppercase mb-1">
                    Project Site Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Delhi NCR, Neemrana, Mumbai, UP"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-primary uppercase mb-1">
                  Project Details / Area Specs
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention approximate square footage, current site condition, or target completion date..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none text-sm text-navy-primary resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                  <Building2 className="w-4 h-4 text-gold-primary" />
                  <span>PAN India Turnkey Execution</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gold-primary text-navy-dark font-extrabold rounded-full hover:bg-gold-bright transition-all shadow-lg hover:shadow-gold-primary/30 flex items-center justify-center gap-2 text-xs uppercase tracking-wider border-2 border-gold-bright"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Processing Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Quote Request
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

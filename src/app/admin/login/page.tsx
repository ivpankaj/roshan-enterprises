'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { adminStore } from '@/lib/adminStore';
import { ShieldCheck, Lock, ArrowRight, AlertCircle, KeyRound } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (adminStore.isAuthenticated()) {
      router.push('/admin');
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const success = adminStore.login(passcode);
      if (success) {
        router.push('/admin');
      } else {
        setError('Incorrect passcode! Default passcode is admin123');
        setIsLoading(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center items-center px-4 relative overflow-hidden font-sans">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 pattern-grid-subtle opacity-60 pointer-events-none"></div>
      <div className="absolute w-[600px] h-[600px] bg-gold-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-xl p-8">
        
        {/* Brand Header - Clean Logo */}
        <div className="text-center mb-8">
          <img
            src="/logo.png"
            alt="Roshan Enterprises"
            className="w-16 h-16 object-contain mx-auto mb-4"
          />
          <h1 className="text-2xl font-black text-navy-primary tracking-wide uppercase">
            Roshan Enterprises
          </h1>
          <p className="text-xs font-bold text-gold-primary uppercase tracking-widest mt-1">
            Admin Management Portal
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
              Enter Admin Passcode
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gold-primary">
                <KeyRound className="w-5 h-5" />
              </div>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode (e.g. admin123)"
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm rounded-xl focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-all font-mono"
              />
            </div>
            {error && (
              <div className="flex items-center gap-2 text-red-600 text-xs mt-2 font-medium bg-red-50 p-2.5 rounded-lg border border-red-200">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{error}</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-6 bg-navy-primary hover:bg-navy-dark text-white font-black uppercase text-xs tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
          >
            {isLoading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Access Dashboard</span>
                <ArrowRight className="w-4 h-4 text-gold-bright group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
            <Lock className="w-3.5 h-3.5 text-gold-primary" />
            <span>Protected Passcode Gate • Default: <code className="text-navy-primary font-bold font-mono bg-slate-100 px-1.5 py-0.5 rounded">admin123</code></span>
          </div>
        </div>

      </div>
    </div>
  );
}

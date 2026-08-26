'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { adminStore } from '@/lib/adminStore';
import {
  LayoutDashboard,
  MessageSquareQuote,
  Video,
  BarChart3,
  LogOut,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname === '/admin/login') {
      setIsAuthenticated(true);
      return;
    }

    const auth = adminStore.isAuthenticated();
    setIsAuthenticated(auth);
    if (!auth) {
      router.push('/admin/login');
    }
  }, [pathname, router]);

  const handleLogout = () => {
    adminStore.logout();
    router.push('/admin/login');
  };

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (isAuthenticated === false || isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-800">
        <div className="animate-pulse font-bold text-sm text-gold-primary">Checking Admin Authorization...</div>
      </div>
    );
  }

  const navItems = [
    { label: 'Overview', href: '/admin', icon: LayoutDashboard },
    { label: 'Visitor Analytics', href: '/admin/analytics', icon: BarChart3 },
    { label: 'Company Reviews', href: '/admin/reviews', icon: MessageSquareQuote },
    { label: 'Client Videos', href: '/admin/videos', icon: Video },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col md:flex-row font-sans selection:bg-gold-primary selection:text-navy-dark">
      
      {/* Sidebar Desktop - Clean Light Style */}
      <aside className="hidden md:flex w-64 bg-white border-r border-slate-200 flex-col justify-between shrink-0 shadow-sm">
        <div>
          {/* Logo Brand Header - Clean without white box behind */}
          <div className="p-6 border-b border-slate-100 flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Roshan Enterprises"
              className="w-10 h-10 object-contain shrink-0"
            />
            <div>
              <h2 className="font-black text-sm text-navy-primary uppercase tracking-wider leading-none">
                ROSHAN
              </h2>
              <span className="text-[10px] font-bold text-gold-primary tracking-widest uppercase">
                ADMIN PANEL
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-navy-primary text-white shadow-md shadow-navy-primary/20'
                      : 'text-slate-600 hover:text-navy-primary hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-gold-bright' : 'text-slate-500'}`} />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <ChevronRight className="w-4 h-4 text-gold-bright" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-100 space-y-2 bg-slate-50/50">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-navy-primary hover:bg-white border border-slate-200 shadow-sm transition-all"
          >
            <ExternalLink className="w-4 h-4 text-gold-primary" />
            <span>View Public Website</span>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout Admin</span>
          </button>
        </div>
      </aside>

      {/* Mobile Top Header */}
      <header className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain shrink-0" />
          <span className="font-black text-sm text-navy-primary uppercase tracking-wider">
            ADMIN PORTAL
          </span>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-700 hover:text-navy-primary"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-2 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider ${
                  isActive ? 'bg-navy-primary text-white' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <div className="pt-2 border-t border-slate-100 flex justify-between items-center">
            <Link href="/" target="_blank" className="text-xs text-navy-primary font-bold flex items-center gap-1">
              <ExternalLink className="w-3.5 h-3.5" /> Site Preview
            </Link>
            <button onClick={handleLogout} className="text-xs text-red-600 font-bold flex items-center gap-1">
              <LogOut className="w-3.5 h-3.5" /> Logout
            </button>
          </div>
        </div>
      )}

      {/* Main Content Viewport */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto max-w-7xl mx-auto w-full">
        {children}
      </main>

    </div>
  );
}

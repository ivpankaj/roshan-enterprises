import React from 'react';
import { ShieldCheck, Users, Clock, FileCheck, MapPin, ThumbsUp } from 'lucide-react';
import { CurvyLine, WavyTransition } from './CurvyLine';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      title: "Quality Assured",
      desc: "Premium grade paints & tested concrete mix ratios",
      icon: ShieldCheck
    },
    {
      title: "Experienced Team",
      desc: "Skilled civil engineers & certified technicians",
      icon: Users
    },
    {
      title: "On-Time Delivery",
      desc: "Planned milestone schedules & daily tracking",
      icon: Clock
    },
    {
      title: "Honest & Transparent",
      desc: "Detailed line-item quotes with zero hidden fees",
      icon: FileCheck
    },
    {
      title: "PAN India Service",
      desc: "Mobile site engineering teams across India",
      icon: MapPin
    },
    {
      title: "Customer Satisfaction",
      desc: "Post-execution support & performance warranty",
      icon: ThumbsUp
    }
  ];

  return (
    <section className="bg-white py-12 relative z-20 shadow-sm overflow-hidden border-b border-slate-200">
      {/* Top Curvy Border Line */}
      <CurvyLine variant="gold" strokeWidth={2.5} height={12} className="absolute top-0 left-0 right-0 w-full z-20 pointer-events-none" />

      {/* Golden Wavy Curved Lines Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          preserveAspectRatio="none"
          viewBox="0 0 1440 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gold-wave-primary" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D99A16" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#F0B323" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D99A16" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="gold-wave-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D99A16" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#F0B323" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="gold-wave-subtle" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F0B323" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#D99A16" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F0B323" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Golden Wave Filled Area */}
          <path
            d="M0,60 C320,150 640,20 960,140 C1280,240 1440,70 1440,70 L1440,220 L0,220 Z"
            fill="url(#gold-wave-fill)"
          />

          {/* Thick Primary Golden Wave Line */}
          <path
            d="M0,60 C320,150 640,20 960,140 C1280,240 1440,70 1440,70"
            stroke="url(#gold-wave-primary)"
            strokeWidth="3.5"
            fill="none"
          />

          {/* Secondary Intersecting Golden Wave Line */}
          <path
            d="M0,140 C360,30 720,180 1080,50 C1260,30 1440,110 1440,110"
            stroke="url(#gold-wave-subtle)"
            strokeWidth="2.5"
            strokeDasharray="10 5"
            fill="none"
          />
        </svg>

        {/* Ambient Golden Glow Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[160px] bg-gold-primary/10 blur-3xl rounded-full"></div>
      </div>

      {/* Trust Cards Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-slate-50 hover:bg-white p-4 rounded-2xl border-2 border-slate-200 hover:border-gold-primary transition-all duration-300 shadow-sm flex flex-col items-center text-center space-y-2 relative overflow-hidden"
              >
                {/* Subtle Card Curvy Accent Line */}
                <div className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CurvyLine variant="gold" strokeWidth={2} height={6} />
                </div>

                <div className="p-2.5 bg-navy-primary text-gold-bright rounded-xl group-hover:scale-110 transition-transform shadow-sm">
                  <Icon className="w-6 h-6 text-gold-primary" />
                </div>
                <h4 className="font-extrabold text-navy-primary text-sm sm:text-base leading-tight">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-xs leading-snug">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Wavy Transition (White to Slate-50) */}
      <WavyTransition topColor="#FFFFFF" bottomColor="#F8FAFC" strokeColor="#D99A16" className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
    </section>
  );
};

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Paintbrush, Grid, Building2 } from 'lucide-react';
import { ServiceItem } from '@/lib/data';
import { CurvyLine } from './CurvyLine';

interface ServiceCardProps {
  service: ServiceItem;
  onOpenQuoteModal: (serviceName: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onOpenQuoteModal }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Paintbrush':
        return Paintbrush;
      case 'Grid':
        return Grid;
      case 'Building2':
      default:
        return Building2;
    }
  };

  const IconComponent = getIcon(service.iconName);

  return (
    <div className="bg-white border-2 border-slate-200 hover:border-gold-primary transition-all duration-300 flex flex-col overflow-hidden group hover:shadow-2xl rounded-3xl">
      {/* Top Image Banner */}
      <div className="relative h-56 overflow-hidden rounded-t-3xl">
        <img
          src={service.heroImage}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/30 to-transparent"></div>

        {/* Badge - Curvy */}
        <div className="absolute top-4 left-4 bg-navy-primary text-gold-bright border border-gold-primary/40 text-xs font-black uppercase tracking-wider px-3 py-1 shadow-md rounded-full">
          {service.badge}
        </div>

        {/* Floating Icon - Curvy */}
        <div className="absolute -bottom-5 right-6 w-12 h-12 bg-gold-primary text-navy-dark flex items-center justify-center shadow-xl group-hover:bg-gold-bright transition-colors rounded-2xl border-2 border-navy-dark">
          <IconComponent className="w-6 h-6" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <h3 className="text-2xl font-black text-navy-primary group-hover:text-gold-primary transition-colors mb-2">
            {service.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {service.shortDesc}
          </p>

          {/* Sub-services List */}
          <div className="space-y-2.5 pt-2">
            <CurvyLine variant="slate" strokeWidth={1} height={6} className="w-full mb-3" />
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-navy-primary">
              Core Capabilities:
            </h4>
            <ul className="space-y-2">
              {service.subServices.slice(0, 5).map((sub, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-gold-primary shrink-0" />
                  <span>{sub.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col space-y-3">
          <CurvyLine variant="slate" strokeWidth={1} height={6} className="w-full mb-1" />
          <div className="flex items-center justify-between gap-3">
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-navy-primary hover:text-gold-primary transition-colors group/link uppercase tracking-wider"
            >
              <span>Explore Details</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform text-gold-primary" />
            </Link>

            <button
              onClick={() => onOpenQuoteModal(service.title)}
              className="px-4 py-2 bg-navy-primary text-gold-bright hover:bg-gold-primary hover:text-navy-dark text-xs font-bold transition-colors rounded-full uppercase tracking-wider border border-gold-primary/30"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

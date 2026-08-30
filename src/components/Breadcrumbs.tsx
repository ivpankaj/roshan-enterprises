'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema, BreadcrumbItem } from '@/lib/seo';

interface BreadcrumbsProps {
  items: { name: string; href: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const schemaBreadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', item: '/' },
    ...items.map((it) => ({ name: it.name, item: it.href })),
  ];

  const jsonLd = generateBreadcrumbSchema(schemaBreadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="bg-slate-100/80 border-b border-slate-200 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center flex-wrap text-xs sm:text-sm font-medium text-slate-600">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-gold-primary transition-colors text-slate-500"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <React.Fragment key={item.href}>
                <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400 shrink-0" />
                {isLast ? (
                  <span className="text-navy-primary font-bold truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-gold-primary transition-colors text-slate-600"
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
};

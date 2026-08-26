'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { WavyBackground } from '@/components/WavyBackground';
import { CurvyLine } from '@/components/CurvyLine';
import { PROJECTS_DATA, ProjectItem } from '@/lib/data';
import { MapPin, Calendar, Maximize2, X } from 'lucide-react';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'painting', label: 'Painting' },
    { id: 'flooring', label: 'Flooring' },
    { id: 'civil-works', label: 'Civil Works' },
    { id: 'Industrial', label: 'Industrial' },
    { id: 'Commercial', label: 'Commercial' },
    { id: 'Residential', label: 'Residential' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter || proj.sector === activeFilter;
  });

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-28">
        {/* Hero */}
        <section className="bg-slate-50 text-navy-primary py-16 relative overflow-hidden border-b border-slate-200">
          <WavyBackground variant="gold-subtle" />
          <div className="absolute inset-0 pattern-grid-subtle opacity-30 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <h1 className="text-4xl sm:text-6xl font-black text-navy-primary mt-3">
              Projects & Case Studies
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
              Explore key commercial, industrial, and residential projects executed by Roshan Enterprises across Greater Noida and PAN India.
            </p>
          </div>
          <CurvyLine variant="gold" strokeWidth={2.5} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <WavyBackground variant="gold-subtle" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            
            {/* Filter Tabs - Curvy Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all uppercase tracking-wider ${
                    activeFilter === cat.id
                      ? 'bg-gold-primary text-navy-dark shadow-md border-2 border-gold-bright'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-slate-50 border-2 border-slate-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative h-60 overflow-hidden cursor-pointer rounded-t-3xl" onClick={() => setSelectedProject(proj)}>
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-80"></div>
                      
                      {/* Floating Sector Badge */}
                      <div className="absolute top-4 left-4 bg-navy-primary text-gold-bright text-[10px] font-black uppercase px-3 py-1 shadow-md rounded-full border border-gold-primary/30">
                        {proj.sector}
                      </div>

                      {/* Expand Lightbox Icon */}
                      <div className="absolute bottom-4 right-4 p-2 bg-gold-primary text-navy-dark opacity-0 group-hover:opacity-100 transition-opacity shadow-md rounded-xl">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-gold-primary" /> {proj.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-gold-primary" /> {proj.completionYear}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-navy-primary group-hover:text-gold-primary transition-colors">
                        {proj.title}
                      </h3>

                      <p className="text-slate-600 text-xs leading-relaxed">
                        {proj.description}
                      </p>

                      <div className="pt-2 flex flex-col space-y-1">
                        <CurvyLine variant="slate" strokeWidth={1} height={6} className="w-full mb-1" />
                        <span className="text-[10px] font-bold uppercase text-slate-400">Scope Delivered:</span>
                        <div className="flex flex-wrap gap-1">
                          {proj.scope.map((s, i) => (
                            <span key={i} className="text-[11px] font-semibold bg-white border border-slate-200 px-2 py-0.5 text-navy-primary rounded-lg">
                              ✓ {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setQuoteModalOpen(true)}
                      className="w-full py-2.5 bg-navy-primary text-white hover:bg-gold-primary hover:text-navy-dark font-bold text-xs transition-colors rounded-full uppercase tracking-wider border border-gold-primary/30"
                    >
                      Request Similar Project Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
          <CurvyLine variant="slate" strokeWidth={2} height={12} className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none" />
        </section>

        {/* Lightbox Modal - Curvy Rounded Edge */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/90 backdrop-blur-md animate-fade-in">
            <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-gold-primary">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-navy-dark text-white rounded-full hover:bg-gold-primary hover:text-navy-dark transition-colors border border-gold-primary"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-80 md:h-full">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 space-y-4 flex flex-col justify-between">
                  <div>
                    <span className="text-gold-primary text-xs font-black uppercase tracking-wider">
                      {selectedProject.sector} Sector Case Study
                    </span>
                    <h3 className="text-2xl font-black text-navy-primary mt-1">
                      {selectedProject.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <MapPin className="w-4 h-4 text-gold-primary" /> Location: {selectedProject.location}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <Calendar className="w-4 h-4 text-gold-primary" /> Year Completed: {selectedProject.completionYear}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      setQuoteModalOpen(true);
                    }}
                    className="w-full py-3.5 bg-gold-primary text-navy-dark font-extrabold text-xs uppercase rounded-full hover:bg-gold-bright transition-colors tracking-wider border-2 border-gold-bright"
                  >
                    Get Free Quote For Your Site
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <CTASection onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      </main>

      <Footer onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      <QuickQuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}

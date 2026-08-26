'use client';

import React, { useState, useEffect } from 'react';
import { adminStore, AdminReview } from '@/lib/adminStore';
import { CLIENTS_LIST } from '@/lib/clientData';
import {
  MessageSquareQuote,
  Plus,
  Trash2,
  Edit2,
  Star,
  Search,
  CheckCircle2,
  X,
  Building2,
  User,
  Calendar,
} from 'lucide-react';

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<AdminReview[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [company, setCompany] = useState('');
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [quote, setQuote] = useState('');
  const [clientSlug, setClientSlug] = useState('');
  const [dateStr, setDateStr] = useState('');
  const [toastMsg, setToastMsg] = useState('');

  useEffect(() => {
    refreshReviews();
  }, []);

  const refreshReviews = () => {
    setReviews(adminStore.getReviews());
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleOpenAddModal = () => {
    setEditingId(null);
    setCompany('');
    setAuthor('');
    setRole('');
    setRating(5);
    setQuote('');
    setClientSlug('');
    setDateStr(new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (rev: AdminReview) => {
    setEditingId(rev.id);
    setCompany(rev.company);
    setAuthor(rev.author);
    setRole(rev.role || '');
    setRating(rev.rating);
    setQuote(rev.quote);
    setClientSlug(rev.clientSlug || '');
    setDateStr(rev.date || '');
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, companyName: string) => {
    if (confirm(`Are you sure you want to delete review for "${companyName}"?`)) {
      adminStore.deleteReview(id);
      refreshReviews();
      showToast(`Review for ${companyName} deleted!`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company || !author || !quote) {
      alert('Please fill out all required fields');
      return;
    }

    if (editingId) {
      adminStore.updateReview(editingId, {
        company,
        author,
        role,
        rating,
        quote,
        clientSlug: clientSlug || undefined,
        date: dateStr,
      });
      showToast(`Review for ${company} updated!`);
    } else {
      adminStore.addReview({
        company,
        author,
        role,
        rating,
        quote,
        clientSlug: clientSlug || undefined,
        date: dateStr || 'Recent',
      });
      showToast(`New review for ${company} published!`);
    }

    setIsModalOpen(false);
    refreshReviews();
  };

  const filteredReviews = reviews.filter(
    (r) =>
      r.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.quote.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Toast Alert */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm font-extrabold animate-in fade-in duration-300">
          <CheckCircle2 className="w-5 h-5" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-navy-primary flex items-center gap-2">
            <MessageSquareQuote className="w-6 h-6 text-gold-primary" />
            Company Reviews & Testimonials
          </h1>
          <p className="text-slate-500 text-xs mt-1 font-medium">
            Post, edit, and organize client feedback displayed on the homepage & corporate showcase.
          </p>
        </div>

        <button
          onClick={handleOpenAddModal}
          className="px-5 py-3 bg-navy-primary hover:bg-navy-dark text-white font-extrabold uppercase text-xs tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-[3] text-gold-bright" />
          <span>Post New Review</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by company, author name, or review content..."
          className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm rounded-xl focus:outline-none focus:border-gold-primary shadow-sm"
        />
      </div>

      {/* Reviews Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white border border-slate-200 hover:border-gold-primary/60 rounded-2xl p-6 transition-all shadow-sm hover:shadow-md flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-black text-navy-primary text-lg flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gold-primary" />
                    {rev.company}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-600 text-xs mt-0.5 font-medium">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>{rev.author}</span>
                    {rev.role && <span className="text-slate-500">({rev.role})</span>}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                  <Star className="w-4 h-4 text-gold-primary fill-gold-primary" />
                  <span className="text-xs font-black text-navy-primary">{rev.rating}.0</span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-slate-700 text-sm italic leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                "{rev.quote}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1 text-slate-500">
                <Calendar className="w-3.5 h-3.5 text-gold-primary" />
                {rev.date || 'Recent'}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenEditModal(rev)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-navy-primary font-extrabold rounded-lg transition-colors flex items-center gap-1"
                >
                  <Edit2 className="w-3.5 h-3.5 text-gold-primary" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(rev.id, rev.company)}
                  className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 font-extrabold rounded-lg border border-red-200 transition-colors flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-1"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-1">
              <h2 className="text-xl font-black text-navy-primary uppercase tracking-wide">
                {editingId ? 'Edit Review' : 'Post New Review'}
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                {editingId ? 'Update testimonial details.' : 'Add new company feedback to display on website.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Company Name */}
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                  Company / Organization Name *
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Sperry Plast Limited"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl focus:outline-none focus:border-gold-primary"
                />
              </div>

              {/* Author & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                    Author Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl focus:outline-none focus:border-gold-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                    Role / Designation
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Plant Operations Head"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl focus:outline-none focus:border-gold-primary"
                  />
                </div>
              </div>

              {/* Rating & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                    Star Rating (1 - 5)
                  </label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl focus:outline-none focus:border-gold-primary"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ 5 Stars (Excellent)</option>
                    <option value={4}>⭐⭐⭐⭐ 4 Stars (Good)</option>
                    <option value={3}>⭐⭐⭐ 3 Stars (Average)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                    Date Tag
                  </label>
                  <input
                    type="text"
                    value={dateStr}
                    onChange={(e) => setDateStr(e.target.value)}
                    placeholder="e.g. January 2026"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl focus:outline-none focus:border-gold-primary"
                  />
                </div>
              </div>

              {/* Associate with Specific Corporate Client */}
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                  Associate with Client (Optional)
                </label>
                <select
                  value={clientSlug}
                  onChange={(e) => setClientSlug(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl focus:outline-none focus:border-gold-primary"
                >
                  <option value="">General Testimonial (Homepage Showcase)</option>
                  {CLIENTS_LIST.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name} ({c.sector})
                    </option>
                  ))}
                </select>
              </div>

              {/* Quote Content */}
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                  Review / Feedback Content *
                </label>
                <textarea
                  required
                  rows={4}
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  placeholder="Enter detailed review commentary..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl focus:outline-none focus:border-gold-primary"
                ></textarea>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-1/2 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold uppercase text-xs rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-3 bg-navy-primary hover:bg-navy-dark text-white font-black uppercase text-xs rounded-xl transition-all shadow-md"
                >
                  {editingId ? 'Save Changes' : 'Publish Review'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}

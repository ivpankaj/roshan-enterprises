'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { adminStore, AdminReview, AnalyticsEvent } from '@/lib/adminStore';
import {
  MessageSquareQuote,
  Video,
  BarChart3,
  Users,
  Eye,
  PlusCircle,
  ArrowUpRight,
  Clock,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

export default function AdminOverviewPage() {
  const [reviews, setReviews] = useState<AdminReview[]>([]);
  const [videosCount, setVideosCount] = useState(0);
  const [analyticsEvents, setAnalyticsEvents] = useState<AnalyticsEvent[]>([]);

  useEffect(() => {
    setReviews(adminStore.getReviews());
    const videoMap = adminStore.getVideoMap();
    setVideosCount(Object.keys(videoMap).length);
    setAnalyticsEvents(adminStore.getAnalyticsEvents());
  }, []);

  const totalVisits = analyticsEvents.length;
  const todayStr = new Date().toLocaleDateString('en-IN');
  const todayVisits = analyticsEvents.filter((e) => {
    return new Date(e.timestamp).toLocaleDateString('en-IN') === todayStr;
  }).length;

  const recentVisits = analyticsEvents.slice(0, 6);

  return (
    <div className="space-y-8">
      
      {/* Header Banner */}
      <div className="bg-navy-primary border border-gold-primary/30 rounded-2xl p-6 sm:p-8 shadow-lg text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-primary/20 border border-gold-primary/40 rounded-full text-gold-bright text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Dashboard Control Center
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Welcome, Roshan Admin!
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Manage client reviews, update YouTube project video URLs, and track live visitor traffic analytics across all pages.
          </p>
        </div>
      </div>

      {/* Quick Metrics Grid - Light Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Metric 1: Total Reviews */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Company Reviews</span>
            <div className="p-2.5 bg-amber-50 rounded-xl text-gold-primary border border-amber-200">
              <MessageSquareQuote className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-black text-navy-primary">{reviews.length}</div>
            <p className="text-xs text-slate-500 mt-1 font-medium">Active client testimonials</p>
          </div>
          <Link href="/admin/reviews" className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold text-navy-primary hover:text-gold-primary transition-colors">
            Manage Reviews <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Metric 2: Client Videos */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Client Videos</span>
            <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 border border-blue-200">
              <Video className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-black text-navy-primary">{videosCount}</div>
            <p className="text-xs text-slate-500 mt-1 font-medium">Configured company videos</p>
          </div>
          <Link href="/admin/videos" className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors">
            Update Video URLs <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Metric 3: Total Visitor Hits */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Total Site Visits</span>
            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 border border-emerald-200">
              <Eye className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-black text-navy-primary">{totalVisits}</div>
            <p className="text-xs text-slate-500 mt-1 font-medium">Tracked page hits</p>
          </div>
          <Link href="/admin/analytics" className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold text-emerald-600 hover:text-emerald-700 transition-colors">
            View Analytics <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Metric 4: Today's Traffic */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Today's Visitors</span>
            <div className="p-2.5 bg-purple-50 rounded-xl text-purple-600 border border-purple-200">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-black text-navy-primary">{todayVisits}</div>
            <p className="text-xs text-slate-500 mt-1 font-medium">Visits logged today</p>
          </div>
          <Link href="/admin/analytics" className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold text-purple-600 hover:text-purple-700 transition-colors">
            See Traffic Details <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

      {/* Quick Action Navigation Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Panel 1: Post Review */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 bg-amber-50 text-gold-primary border border-amber-200 rounded-xl flex items-center justify-center mb-3">
              <MessageSquareQuote className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-navy-primary">Post New Review</h3>
            <p className="text-slate-600 text-xs mt-1 leading-relaxed">
              Add new customer feedback, star ratings, and client testimonials to display on the home and client pages.
            </p>
          </div>
          <Link
            href="/admin/reviews"
            className="w-full py-3 px-4 bg-navy-primary hover:bg-navy-dark text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <PlusCircle className="w-4 h-4 text-gold-bright" />
            <span>Add Review Now</span>
          </Link>
        </div>

        {/* Panel 2: Change Video URLs */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 bg-blue-50 text-blue-600 border border-blue-200 rounded-xl flex items-center justify-center mb-3">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-navy-primary">Manage Video URLs</h3>
            <p className="text-slate-600 text-xs mt-1 leading-relaxed">
              Update YouTube video links for Sperry Group, LG Electronics, INOX, TRSCH, and other corporate client showcases.
            </p>
          </div>
          <Link
            href="/admin/videos"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <Video className="w-4 h-4" />
            <span>Update Client Videos</span>
          </Link>
        </div>

        {/* Panel 3: Traffic Analytics */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-xl flex items-center justify-center mb-3">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-navy-primary">Traffic Analytics</h3>
            <p className="text-slate-600 text-xs mt-1 leading-relaxed">
              Inspect live visitor logs ("Kab kon aaya, kaha se aaya") with timestamps, referrers, device breakdown, and URLs.
            </p>
          </div>
          <Link
            href="/admin/analytics"
            className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <BarChart3 className="w-4 h-4" />
            <span>Open Visitor Log Table</span>
          </Link>
        </div>

      </div>

      {/* Live Recent Visitor Log Stream */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold-primary" />
            <h3 className="text-base font-extrabold text-navy-primary">Recent Visitor Activity</h3>
          </div>
          <Link href="/admin/analytics" className="text-xs font-extrabold text-navy-primary hover:text-gold-primary transition-colors">
            View All Logs →
          </Link>
        </div>

        {recentVisits.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-sm bg-slate-50 rounded-xl border border-slate-200">
            No visitor logs captured yet. Navigate around the public website to record live traffic!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 uppercase font-extrabold border-b border-slate-200">
                <tr>
                  <th className="p-3">Time ("Kab Aaya")</th>
                  <th className="p-3">Page Path ("Kaha Aaya")</th>
                  <th className="p-3">Referrer ("Kaha Se Aaya")</th>
                  <th className="p-3">Device</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-slate-700">
                {recentVisits.map((event) => (
                  <tr key={event.id} className="hover:bg-slate-50">
                    <td className="p-3 text-navy-primary font-bold">{event.formattedTime}</td>
                    <td className="p-3 text-slate-900 font-bold">{event.path}</td>
                    <td className="p-3 text-emerald-700 font-semibold">{event.referrerDomain}</td>
                    <td className="p-3 text-slate-500">{event.device} ({event.os})</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}

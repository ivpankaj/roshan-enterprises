'use client';

import React, { useState, useEffect } from 'react';
import { adminStore, AnalyticsEvent } from '@/lib/adminStore';
import {
  BarChart3,
  Globe,
  Clock,
  Smartphone,
  Laptop,
  Trash2,
  RefreshCw,
  Search,
} from 'lucide-react';

export default function AdminAnalyticsPage() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDevice, setFilterDevice] = useState<string>('all');

  useEffect(() => {
    refreshLogs();
  }, []);

  const refreshLogs = () => {
    setEvents(adminStore.getAnalyticsEvents());
  };

  const handleClearLogs = () => {
    if (confirm('Are you sure you want to clear all recorded analytics traffic logs?')) {
      adminStore.clearAnalytics();
      refreshLogs();
    }
  };

  const totalVisits = events.length;

  const referrerCounts: Record<string, number> = {};
  events.forEach((e) => {
    const domain = e.referrerDomain || 'Direct Visit';
    referrerCounts[domain] = (referrerCounts[domain] || 0) + 1;
  });

  const sortedReferrers = Object.entries(referrerCounts).sort((a, b) => b[1] - a[1]);
  const topReferrer = sortedReferrers.length > 0 ? sortedReferrers[0][0] : 'None';

  let mobileCount = 0;
  let desktopCount = 0;
  events.forEach((e) => {
    if (e.device === 'Mobile') mobileCount++;
    else desktopCount++;
  });

  const filteredEvents = events.filter((e) => {
    const matchesSearch =
      e.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.referrerDomain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.formattedTime.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (e.browser && e.browser.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDevice = filterDevice === 'all' || e.device.toLowerCase() === filterDevice.toLowerCase();

    return matchesSearch && matchesDevice;
  });

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-navy-primary flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-emerald-600" />
            Visitor Analytics ("Kab Kon Aaya, Kaha Se Aaya")
          </h1>
          <p className="text-slate-500 text-xs font-medium mt-1">
            Real-time tracking of visitor entry time, referrer sources, visited pages, and user devices.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={refreshLogs}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-navy-primary font-extrabold text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Refresh</span>
          </button>
          <button
            onClick={handleClearLogs}
            className="px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 font-extrabold text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Logs</span>
          </button>
        </div>
      </div>

      {/* Metrics Summary Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
          <span className="text-xs font-extrabold uppercase text-slate-500">Total Page Views</span>
          <div className="text-3xl font-black text-navy-primary mt-2">{totalVisits}</div>
          <span className="text-[11px] text-slate-500 mt-1 block font-medium">Hits recorded by tracker</span>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
          <span className="text-xs font-extrabold uppercase text-slate-500">Top Referrer ("Kaha Se Aaya")</span>
          <div className="text-xl font-black text-emerald-700 truncate mt-2">{topReferrer}</div>
          <span className="text-[11px] text-slate-500 mt-1 block font-medium">Most frequent traffic origin</span>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
          <span className="text-xs font-extrabold uppercase text-slate-500">Desktop Visits</span>
          <div className="text-3xl font-black text-blue-600 mt-2">{desktopCount}</div>
          <span className="text-[11px] text-slate-500 mt-1 block font-medium">Laptops & PCs</span>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
          <span className="text-xs font-extrabold uppercase text-slate-500">Mobile Visits</span>
          <div className="text-3xl font-black text-purple-600 mt-2">{mobileCount}</div>
          <span className="text-[11px] text-slate-500 mt-1 block font-medium">Smartphones & Tablets</span>
        </div>

      </div>

      {/* Referrer Sources Breakdown */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
        <h3 className="text-sm font-black text-navy-primary uppercase tracking-wider flex items-center gap-2">
          <Globe className="w-4 h-4 text-gold-primary" />
          Traffic Referrer Breakdown
        </h3>

        {sortedReferrers.length === 0 ? (
          <p className="text-xs text-slate-500 italic">No traffic sources recorded yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {sortedReferrers.map(([source, count]) => {
              const pct = Math.round((count / Math.max(totalVisits, 1)) * 100);
              return (
                <div key={source} className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl space-y-1">
                  <div className="text-xs font-bold text-navy-primary truncate">{source}</div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-black text-navy-primary">{count} visits</span>
                    <span className="text-xs font-bold text-slate-500">{pct}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gold-primary h-full rounded-full" style={{ width: `${pct}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by path (/services), referrer (Google), or time..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 text-slate-900 text-xs rounded-xl focus:outline-none focus:border-gold-primary shadow-sm"
          />
        </div>

        <select
          value={filterDevice}
          onChange={(e) => setFilterDevice(e.target.value)}
          className="px-4 py-3 bg-white border border-slate-200 text-slate-900 text-xs font-bold rounded-xl focus:outline-none focus:border-gold-primary shadow-sm"
        >
          <option value="all">All Devices</option>
          <option value="desktop">Desktop</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>

      {/* Detailed Visitor Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
          <h3 className="text-xs font-black text-slate-700 uppercase tracking-widest flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold-primary" />
            Live Visitor Log History ({filteredEvents.length} Entries)
          </h3>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="p-12 text-center text-slate-500 text-sm">
            No visitor entries match your current search/filters.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 uppercase font-extrabold border-b border-slate-200">
                <tr>
                  <th className="p-4">Time ("Kab Aaya")</th>
                  <th className="p-4">Visited Page ("Kaha Aaya")</th>
                  <th className="p-4">Referrer Source ("Kaha Se Aaya")</th>
                  <th className="p-4">Device & Browser</th>
                  <th className="p-4">Region</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-slate-700">
                {filteredEvents.map((evt) => (
                  <tr key={evt.id} className="hover:bg-slate-50 transition-colors">
                    
                    {/* Timestamp */}
                    <td className="p-4 text-navy-primary font-bold whitespace-nowrap">
                      {evt.formattedTime}
                    </td>

                    {/* Path */}
                    <td className="p-4 text-slate-900 font-bold">
                      <span className="bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 inline-block font-mono">
                        {evt.path}
                      </span>
                    </td>

                    {/* Referrer Source */}
                    <td className="p-4">
                      <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg font-bold">
                        {evt.referrerDomain}
                      </span>
                    </td>

                    {/* Device & Browser */}
                    <td className="p-4 text-slate-600">
                      <div className="flex items-center gap-1.5 font-sans">
                        {evt.device === 'Mobile' ? (
                          <Smartphone className="w-3.5 h-3.5 text-purple-600" />
                        ) : (
                          <Laptop className="w-3.5 h-3.5 text-blue-600" />
                        )}
                        <span className="font-bold">{evt.device}</span>
                        <span className="text-slate-500">• {evt.browser} ({evt.os})</span>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="p-4 text-slate-500 font-sans">
                      {evt.location || 'PAN India'}
                    </td>

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

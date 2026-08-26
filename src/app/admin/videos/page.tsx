'use client';

import React, { useState, useEffect } from 'react';
import { adminStore } from '@/lib/adminStore';
import { CLIENTS_LIST, ClientCompanyDetail } from '@/lib/clientData';
import { Video, Film, CheckCircle2, Play, Save, ExternalLink } from 'lucide-react';

export default function AdminVideosPage() {
  const [videoMap, setVideoMap] = useState<Record<string, string>>({});
  const [editingValues, setEditingValues] = useState<Record<string, string>>({});
  const [activePreviewSlug, setActivePreviewSlug] = useState<string | null>(null);
  const [toastMsg, setToastMsg] = useState('');

  useEffect(() => {
    refreshVideos();
  }, []);

  const refreshVideos = () => {
    const map = adminStore.getVideoMap();
    setVideoMap(map);
    const initialEdits: Record<string, string> = {};
    CLIENTS_LIST.forEach((c) => {
      initialEdits[c.slug] = map[c.slug] || c.youtubeVideoId;
    });
    setEditingValues(initialEdits);
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleSaveVideo = (slug: string, companyName: string) => {
    const val = editingValues[slug];
    if (!val) return;
    adminStore.updateClientVideo(slug, val);
    refreshVideos();
    showToast(`Video URL updated for ${companyName}!`);
  };

  return (
    <div className="space-y-6 font-sans">
      
      {/* Toast Alert */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm font-extrabold animate-in fade-in duration-300">
          <CheckCircle2 className="w-5 h-5" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
        <h1 className="text-2xl font-black text-navy-primary flex items-center gap-2">
          <Video className="w-6 h-6 text-blue-600" />
          Client Video URL Manager
        </h1>
        <p className="text-slate-500 text-xs font-medium">
          Change YouTube project showcase video URLs for corporate clients. Updated links immediately play on client pages and video modals.
        </p>
      </div>

      {/* Client Video Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {CLIENTS_LIST.map((client) => {
          const currentVideoId = videoMap[client.slug] || client.youtubeVideoId;
          const editValue = editingValues[client.slug] || '';
          const isPreviewing = activePreviewSlug === client.slug;

          return (
            <div
              key={client.slug}
              className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 hover:border-gold-primary/60 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                {/* Client Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl p-1 flex items-center justify-center border border-slate-200 shrink-0">
                      {client.logoImg ? (
                        <img src={client.logoImg} alt={client.name} className="w-full h-full object-contain" />
                      ) : (
                        <span className="font-extrabold text-navy-primary text-xs">{client.name.substring(0, 2)}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-navy-primary text-base">{client.name}</h3>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        {client.sector} • {client.category}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`/clients/${client.slug}`}
                    target="_blank"
                    className="text-xs font-extrabold text-navy-primary hover:text-gold-primary transition-colors flex items-center gap-1"
                  >
                    <span>View Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Video Player Box / Preview */}
                <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200 aspect-video flex items-center justify-center group shadow-inner">
                  {isPreviewing ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${currentVideoId}?autoplay=1`}
                      title={client.youtubeTitle || client.name}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-slate-950">
                      {/* Thumbnail Preview */}
                      <img
                        src={`https://img.youtube.com/vi/${currentVideoId}/hqdefault.jpg`}
                        alt="Video Thumbnail"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="relative z-10 flex flex-col items-center space-y-2">
                        <button
                          onClick={() => setActivePreviewSlug(client.slug)}
                          className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 cursor-pointer"
                        >
                          <Play className="w-6 h-6 fill-white ml-1" />
                        </button>
                        <span className="text-xs font-bold text-white bg-slate-950/80 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
                          Click to Preview Video
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* YouTube URL Input & ID display */}
                <div className="space-y-1.5 pt-1">
                  <label className="block text-xs font-extrabold uppercase text-slate-700 flex items-center gap-1.5">
                    <Film className="w-4 h-4 text-red-600" />
                    <span>YouTube Video URL or Video ID</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) =>
                        setEditingValues({
                          ...editingValues,
                          [client.slug]: e.target.value,
                        })
                      }
                      placeholder="e.g. 5qap5aO4i9A or https://youtu.be/5qap5aO4i9A"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 text-xs font-mono rounded-xl focus:outline-none focus:border-gold-primary"
                    />
                    <button
                      onClick={() => handleSaveVideo(client.slug, client.name)}
                      className="px-4 py-2.5 bg-navy-primary hover:bg-navy-dark text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center gap-1.5 shrink-0 cursor-pointer"
                    >
                      <Save className="w-4 h-4 text-gold-bright" />
                      <span>Save</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-500 font-mono">
                    Current Active ID: <span className="text-navy-primary font-bold">{currentVideoId}</span>
                  </p>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

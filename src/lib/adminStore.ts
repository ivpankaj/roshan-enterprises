'use client';

import { TESTIMONIALS } from './data';
import { CLIENTS_LIST } from './clientData';

export interface AdminReview {
  id: string;
  quote: string;
  author: string;
  company: string;
  role?: string;
  rating: number;
  date?: string;
  clientSlug?: string;
}

export interface AnalyticsEvent {
  id: string;
  timestamp: string; // ISO string
  formattedTime: string;
  path: string;
  pageTitle: string;
  referrer: string;
  referrerDomain: string;
  device: 'Desktop' | 'Mobile' | 'Tablet';
  browser: string;
  os: string;
  ip?: string;
  location?: string;
}

const REVIEWS_STORAGE_KEY = 're_admin_reviews';
const VIDEOS_STORAGE_KEY = 're_admin_videos';
const ANALYTICS_STORAGE_KEY = 're_admin_analytics';
const AUTH_KEY = 're_admin_auth';

// Helper to safely get item from localStorage
const getStoredData = <T>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.error(`Error reading ${key} from localStorage`, e);
    return fallback;
  }
};

// Helper to set item in localStorage
const setStoredData = <T>(key: string, value: T): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error writing ${key} to localStorage`, e);
  }
};

// INITIAL REVIEWS
const getInitialReviews = (): AdminReview[] => {
  const baseReviews: AdminReview[] = TESTIMONIALS.map((t, idx) => ({
    id: `rev-default-${idx + 1}`,
    quote: t.quote,
    author: t.author,
    company: t.company,
    rating: t.rating,
    date: 'Recent',
  }));

  // Also collect reviews from CLIENTS_LIST
  CLIENTS_LIST.forEach((client) => {
    client.reviews.forEach((r, rIdx) => {
      baseReviews.push({
        id: `rev-client-${client.slug}-${rIdx}`,
        quote: r.comment,
        author: r.author,
        company: client.name,
        role: r.role,
        rating: r.rating,
        date: r.date,
        clientSlug: client.slug,
      });
    });
  });

  return baseReviews;
};

// INITIAL VIDEOS
const getInitialVideos = (): Record<string, string> => {
  const initialMap: Record<string, string> = {};
  CLIENTS_LIST.forEach((client) => {
    initialMap[client.slug] = client.youtubeVideoId;
  });
  return initialMap;
};

export const adminStore = {
  // --- AUTH ---
  isAuthenticated: (): boolean => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(AUTH_KEY) === 'true';
  },

  login: (passcode: string): boolean => {
    // Default Passcode: admin123
    if (passcode === 'admin123') {
      localStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
    return false;
  },

  logout: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AUTH_KEY);
  },

  // --- REVIEWS ---
  getReviews: (): AdminReview[] => {
    return getStoredData<AdminReview[]>(REVIEWS_STORAGE_KEY, getInitialReviews());
  },

  addReview: (review: Omit<AdminReview, 'id'>): AdminReview => {
    const reviews = adminStore.getReviews();
    const newReview: AdminReview = {
      ...review,
      id: `rev-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    };
    const updated = [newReview, ...reviews];
    setStoredData(REVIEWS_STORAGE_KEY, updated);
    return newReview;
  },

  updateReview: (id: string, updatedFields: Partial<AdminReview>): void => {
    const reviews = adminStore.getReviews();
    const updated = reviews.map((r) => (r.id === id ? { ...r, ...updatedFields } : r));
    setStoredData(REVIEWS_STORAGE_KEY, updated);
  },

  deleteReview: (id: string): void => {
    const reviews = adminStore.getReviews();
    const updated = reviews.filter((r) => r.id !== id);
    setStoredData(REVIEWS_STORAGE_KEY, updated);
  },

  // --- CLIENT VIDEO URLS ---
  getVideoMap: (): Record<string, string> => {
    return getStoredData<Record<string, string>>(VIDEOS_STORAGE_KEY, getInitialVideos());
  },

  getVideoForClient: (clientSlug: string, defaultVideoId: string): string => {
    const videoMap = adminStore.getVideoMap();
    return videoMap[clientSlug] || defaultVideoId;
  },

  updateClientVideo: (clientSlug: string, youtubeVideoIdOrUrl: string): void => {
    let videoId = youtubeVideoIdOrUrl.trim();
    if (videoId.includes('v=')) {
      const parts = videoId.split('v=');
      videoId = parts[1].split('&')[0];
    } else if (videoId.includes('youtu.be/')) {
      const parts = videoId.split('youtu.be/');
      videoId = parts[1].split('?')[0];
    }

    const videoMap = adminStore.getVideoMap();
    videoMap[clientSlug] = videoId;
    setStoredData(VIDEOS_STORAGE_KEY, videoMap);
  },

  // --- ANALYTICS TRACKING ---
  getAnalyticsEvents: (): AnalyticsEvent[] => {
    return getStoredData<AnalyticsEvent[]>(ANALYTICS_STORAGE_KEY, []);
  },

  logAnalyticsEvent: (event: Omit<AnalyticsEvent, 'id' | 'timestamp' | 'formattedTime'>): void => {
    const events = adminStore.getAnalyticsEvents();
    const now = new Date();
    
    // Avoid duplicate logs within 3 seconds for same path
    if (events.length > 0) {
      const lastEvent = events[0];
      const timeDiff = now.getTime() - new Date(lastEvent.timestamp).getTime();
      if (lastEvent.path === event.path && timeDiff < 3000) {
        return;
      }
    }

    const newEvent: AnalyticsEvent = {
      ...event,
      id: `evt-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      timestamp: now.toISOString(),
      formattedTime: now.toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }),
    };

    const updated = [newEvent, ...events].slice(0, 500);
    setStoredData(ANALYTICS_STORAGE_KEY, updated);
  },

  clearAnalytics: (): void => {
    setStoredData(ANALYTICS_STORAGE_KEY, []);
  },
};

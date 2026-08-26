'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { adminStore } from '@/lib/adminStore';

export const AnalyticsTracker: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Don't track admin panel internal navigation as visitor traffic
    if (pathname.startsWith('/admin')) return;

    try {
      const userAgent = navigator.userAgent;
      
      // Determine Device Type
      let device: 'Desktop' | 'Mobile' | 'Tablet' = 'Desktop';
      if (/Mobi|Android|iPhone|iPod/i.test(userAgent)) {
        device = 'Mobile';
      } else if (/iPad|Tablet/i.test(userAgent) || (window.innerWidth <= 1024 && window.innerWidth >= 600)) {
        device = 'Tablet';
      }

      // Determine Referrer Source
      let referrerRaw = document.referrer;
      let referrerDomain = 'Direct Visit';

      if (referrerRaw) {
        try {
          const refUrl = new URL(referrerRaw);
          referrerDomain = refUrl.hostname;
          if (referrerDomain.includes('google')) {
            referrerDomain = 'Google Search';
          } else if (referrerDomain.includes('whatsapp') || referrerDomain.includes('wa.me')) {
            referrerDomain = 'WhatsApp';
          } else if (referrerDomain.includes('facebook') || referrerDomain.includes('instagram')) {
            referrerDomain = 'Social Media';
          }
        } catch {
          referrerDomain = referrerRaw;
        }
      }

      // Determine OS
      let os = 'Unknown OS';
      if (userAgent.indexOf('Win') !== -1) os = 'Windows';
      else if (userAgent.indexOf('Mac') !== -1) os = 'macOS';
      else if (userAgent.indexOf('Linux') !== -1) os = 'Linux';
      else if (userAgent.indexOf('Android') !== -1) os = 'Android';
      else if (userAgent.indexOf('like Mac') !== -1) os = 'iOS';

      // Determine Browser
      let browser = 'Chrome/Safari';
      if (userAgent.indexOf('Firefox') !== -1) browser = 'Firefox';
      else if (userAgent.indexOf('Edg') !== -1) browser = 'Edge';
      else if (userAgent.indexOf('Chrome') !== -1) browser = 'Chrome';
      else if (userAgent.indexOf('Safari') !== -1) browser = 'Safari';

      // Log event to adminStore
      adminStore.logAnalyticsEvent({
        path: pathname || '/',
        pageTitle: document.title || 'Roshan Enterprises',
        referrer: referrerRaw || 'Direct Visit',
        referrerDomain,
        device,
        browser,
        os,
        location: 'PAN India',
      });
    } catch (err) {
      console.error('Analytics tracking error:', err);
    }
  }, [pathname]);

  return null;
};

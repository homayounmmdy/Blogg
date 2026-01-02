// app/components/Banner.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const STORAGE_KEY = 'banner_dismissed_until';
  const REAPPEAR_AFTER = 10 * 60 * 100; // 1 minutes

  useEffect(() => {
    const now = Date.now();
    const dismissedUntil = localStorage.getItem(STORAGE_KEY);

    if (!dismissedUntil || now > parseInt(dismissedUntil, 10)) {
      // Show with delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    const reappearAt = Date.now() + REAPPEAR_AFTER;
    localStorage.setItem(STORAGE_KEY, reappearAt.toString());
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden border-b border-teal-400/40 bg-gray-950/90 p-3 backdrop-blur-md">
      {/* Subtle scanlines inside banner */}
      <div className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,255,255,0.1) 1px, transparent 2px, transparent 3px, rgba(0,0,0,0.1) 4px)',
        }}
      />

      {/* Glowing edge */}
      <div className="absolute inset-0 animate-pulse rounded-lg opacity-0 shadow-[0_0_12px_rgba(0,255,255,0.2)]" />

      <div className="relative flex w-full items-center justify-between gap-3 sm:flex-row">
        <div className="flex items-start sm:items-center">
          <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full border border-teal-400/30 bg-teal-400/20 text-[10px] text-teal-300">
            !
          </div>
          <Link
            href="/explore"
            className="group font-mono text-[13px] font-bold uppercase tracking-wide text-teal-300 transition-all duration-300 hover:text-teal-200 hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.5)]"
          >
            <span className="hidden sm:inline">→</span> EXPLORE TRANSMISSIONS
          </Link>
        </div>

        <button
          onClick={handleClose}
          className="flex h-6 w-6 items-center justify-center rounded border border-teal-400/30 bg-gray-900 text-teal-300 transition-all duration-200 hover:bg-teal-400/10 hover:text-teal-200 hover:shadow-[0_0_8px_rgba(0,255,255,0.4)]"
          aria-label="Dismiss system alert"
        >
          ✕
        </button>
      </div>

      <p className="mt-2 hidden font-mono text-[10px] italic text-gray-500 md:block">Access all pages in the Retro Blog system.</p>
    </div>
  );
};

export default Banner;
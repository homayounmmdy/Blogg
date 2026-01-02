// app/explore/page.tsx
import React from 'react';
import Link from 'next/link';
import { pages } from '@/app/config/pages';



const ExplorePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950 text-gray-200">
      {/* CRT Scanlines Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.12)_1px,transparent_2px,transparent_3px,rgba(0,255,255,0.04)_4px)]" />

      {/* Circuit Grid (Subtle) */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <main className="relative z-10 px-4 py-10 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <h1 className="mb-8 mt-4 text-center font-mono text-2xl font-bold uppercase tracking-wide text-teal-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)] sm:text-3xl">
            SYSTEM EXPLORER
          </h1>

          {/* Intro */}
          <p className="mb-8 text-center font-mono text-[14px] text-gray-400">
            Access all active modules in the Retro Blog system.
          </p>

          {/* Page List */}
          <div className="space-y-5">
            {pages.map((page, index) => (
              <div
                key={index}
                className="group rounded-lg border border-teal-400/15 bg-gray-900/60 p-4 backdrop-blur-sm transition-all hover:border-teal-400/30"
              >
                <Link
                  href={page.href}
                  className="block font-mono text-[15px] font-bold uppercase tracking-wide text-teal-300 no-underline transition-colors group-hover:text-teal-200"
                >
                  {page.title}
                </Link>
                <p className="mt-2 font-mono text-[13px] text-gray-400">
                  {page.description}
                </p>
                <p className="mt-2 font-mono text-[11px] text-teal-400/80">
                  → {page.href}
                </p>
              </div>
            ))}
          </div>

          {/* System Status */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center space-x-2 rounded-sm border border-teal-400/30 bg-gray-900/80 px-4 py-2">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              <span className="font-mono text-[12px] uppercase tracking-wider text-gray-300">
                MODULE INDEX LOADED
              </span>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border-2 border-teal-400 bg-gray-900 px-6 py-2 font-mono text-[13px] font-bold uppercase tracking-wider text-teal-300 transition-all duration-300 hover:border-teal-300 hover:text-teal-200"
            >
              <div className="absolute inset-0 bg-teal-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative z-10 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]">
                ← RETURN TO TERMINAL
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExplorePage;
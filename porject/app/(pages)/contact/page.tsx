import React from 'react';
import Link from 'next/link';

const ContactPage = () => {
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
            CONTACT
          </h1>

          {/* Intro */}
          <div className="mb-8 font-mono text-[15px] leading-relaxed text-gray-300">
            <p>
              This terminal channel is configured for <span className="text-teal-300">outbound messaging only</span>.  
              The form below is a <span className="text-teal-300">static interface</span>—ideal for template integration.
            </p>
          </div>

          {/* Disabled Form (Static Showcase) */}
          <div className="space-y-5">
            <div>
              <label className="mb-1 block font-mono text-xs uppercase tracking-wider text-teal-400">
                CALLSIGN
              </label>
              <input
                type="text"
                disabled
                value="USER_734"
                className="w-full rounded border border-teal-400/30 bg-gray-900 px-3 py-2 font-mono text-sm text-gray-400 placeholder-gray-600 backdrop-blur-sm"
              />
            </div>

            <div>
              <label className="mb-1 block font-mono text-xs uppercase tracking-wider text-teal-400">
                SIGNAL ADDRESS
              </label>
              <input
                type="email"
                disabled
                value="operator@example.com"
                className="w-full rounded border border-teal-400/30 bg-gray-900 px-3 py-2 font-mono text-sm text-gray-400 placeholder-gray-600 backdrop-blur-sm"
              />
            </div>

            <div>
              <label className="mb-1 block font-mono text-xs uppercase tracking-wider text-teal-400">
                MESSAGE PAYLOAD
              </label>
              <textarea
                disabled
                rows={5}
                defaultValue="Hello from the future. This is a demo message from Retro Blog template."
                className="w-full resize-none rounded border border-teal-400/30 bg-gray-900 p-3 font-mono text-sm text-gray-400 placeholder-gray-600 backdrop-blur-sm"
              />
            </div>

            {/* Submit Button (Disabled) */}
            <div className="pt-2">
              <button
                disabled
                className="relative inline-flex items-center justify-center overflow-hidden rounded-md border-2 border-teal-400/50 bg-gray-900 px-6 py-2 font-mono text-[13px] font-bold uppercase tracking-wider text-gray-600"
              >
                <div className="absolute inset-0 bg-teal-400/5 opacity-0" />
                <span className="relative z-10">TRANSMIT (LOCKED)</span>
              </button>
              <p className="mt-2 text-xs italic text-gray-600">
                ⚠️ Form disabled in archive mode. Integrate with your backend to enable.
              </p>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="mt-12 rounded-lg border border-teal-400/20 bg-gray-900/70 p-4 backdrop-blur-sm">
            <h3 className="font-mono text-sm font-bold uppercase text-teal-300">ALTERNATE CHANNELS</h3>
            <ul className="mt-2 space-y-1 font-mono text-xs text-gray-400">
              <li>• GitHub: <span className="text-teal-400">github.com/homayounmmdy</span></li>
              <li>• Email: <span className="text-teal-400">homayoun763@gmail.com</span></li>
            </ul>
          </div>

          {/* System Status */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center space-x-2 rounded-sm border border-teal-400/30 bg-gray-900/80 px-4 py-2">
              <div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              <span className="font-mono text-[12px] uppercase tracking-wider text-gray-300">
                INPUT LOCKED
              </span>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12 flex justify-center">
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

export default ContactPage;
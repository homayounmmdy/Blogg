import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SiteConfig from "../config/site";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-teal-400/20 bg-gray-950">
      {/* CRT Scanlines Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.12)_1px,transparent_2px,transparent_3px,rgba(0,255,255,0.04)_4px)]" />

      {/* Circuit Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative py-10 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main content grid */}
          <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            
            {/* Brand section */}
            <div className="flex flex-col items-center space-y-4 md:items-start">
              <div className="relative">
                <div className="border border-teal-400 bg-gray-900 px-3 py-1.5">
                  <span className="font-mono text-lg font-bold uppercase tracking-wider text-teal-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]">
                    {SiteConfig.name}
                  </span>
                </div>
              </div>
              <p className="max-w-xs text-center font-mono text-[13px] text-gray-400 md:text-left">
                BUILDING THE FUTURE, ONE LINE OF CODE AT A TIME.
              </p>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col items-center space-y-4">
              <h3 className="mb-2 font-mono text-[12px] font-bold uppercase tracking-widest text-teal-400">
                NAVIGATION
              </h3>
              <ul className="space-y-2.5">
                {SiteConfig.nav.map((nav, index) => (
                  <li key={nav.id} className="text-center">
                    <a
                      href={nav.href}
                      className="group relative inline-flex items-center space-x-2 font-mono text-[13px] uppercase tracking-wide text-gray-400 transition-colors hover:text-teal-300"
                    >
                      <span className="text-teal-400/70">[{String(index + 1).padStart(2, '0')}]</span>
                      <span>{nav.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links */}
            <div className="flex flex-col items-center space-y-4 md:items-end">
              <h3 className="mb-2 font-mono text-[12px] font-bold uppercase tracking-widest text-teal-400">
                CONNECT
              </h3>
              <div className="flex space-x-3">
                {[
                  { icon: FaFacebookF, href: "/", label: "Facebook" },
                  { icon: FaInstagram, href: "/", label: "Instagram" },
                  { icon: FaXTwitter, href: "/", label: "Twitter" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="group relative"
                  >
                    <div className="relative flex h-9 w-9 items-center justify-center rounded-sm border border-teal-400/50 bg-gray-900 transition-all hover:border-teal-300">
                      <social.icon className="h-4 w-4 text-teal-400 transition-colors group-hover:text-teal-300" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Divider with system pulse */}
          <div className="relative my-8">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-400/40 to-transparent opacity-60" />
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 animate-pulse rounded-full bg-teal-400"
                  style={{ animationDelay: `${i * 300}ms` }}
                />
              ))}
            </div>
          </div>

          {/* Copyright & System Status */}
          <div className="space-y-4 text-center">
            <div className="flex flex-col items-center justify-center space-y-2 font-mono text-[11px] uppercase tracking-wider text-gray-500 sm:flex-row sm:space-x-6 sm:space-y-0">
              <span>© {new Date().getFullYear()} / {SiteConfig.name}</span>
              <span className="hidden text-teal-500/40 sm:block">|</span>
              <span>ALL RIGHTS RESERVED</span>
            </div>

            {/* System Online Badge */}
            <div className="inline-flex items-center space-x-2 rounded-sm border border-teal-400/30 bg-gray-900/80 px-3 py-1.5">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              <span className="font-mono text-[11px] tracking-wider text-gray-300">
                SYSTEM.ONLINE
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
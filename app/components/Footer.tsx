import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SiteConfig from "../config/site";
;

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Neon glow background */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-purple-500/10 to-transparent blur-3xl" />
      
      {/* Top border with glow */}
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(rgba(34,211,238,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative bg-slate-900/90 pb-8 pt-10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Main content grid */}
          <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
            
            {/* Brand section */}
            <div className="flex flex-col items-center space-y-4 md:items-start">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-50 blur-lg transition-opacity duration-300 group-hover:opacity-75" />
                <div className="relative border-2 border-cyan-400 bg-slate-900 px-3 py-1.5 md:px-6 md:py-3">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text font-black tracking-wider text-transparent md:text-2xl">
                    {SiteConfig.name}
                  </span>
                </div>
              </div>
              <p className="max-w-xs text-center font-mono text-sm text-gray-400 md:text-left">
                Building the future, one line of code at a time.
              </p>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col items-center space-y-4">
              <h3 className="mb-2 border-b-2 border-cyan-400/50 pb-2 text-sm font-bold uppercase tracking-widest text-cyan-400">
                Navigation
              </h3>
              <ul className="space-y-3">
                {SiteConfig.nav.map((nav, index) => (
                  <li key={nav.id} className="text-center">
                    <a
                      href={nav.href}
                      className="group relative inline-flex items-center space-x-3 text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                    >
                      <span className="font-mono text-xs text-cyan-400/50">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-semibold uppercase tracking-wide">
                        {nav.name}
                      </span>
                      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links */}
            <div className="flex flex-col items-center space-y-4 md:items-end">
              <h3 className="mb-2 border-b-2 border-cyan-400/50 pb-2 text-sm font-bold uppercase tracking-widest text-cyan-400">
                Connect
              </h3>
              <div className="flex space-x-4">
                {[
                  { icon: FaFacebookF, href: "/", label: "Facebook" },
                  { icon: FaInstagram, href: "/", label: "Instagram" },
                  { icon: FaXTwitter, href: "/", label: "Twitter" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-cyan-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50" />
                    <div className="relative border-2 border-cyan-400/50 bg-slate-800 p-4 transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                      <social.icon className="h-5 w-5 text-cyan-400 transition-colors duration-300 group-hover:text-purple-400" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider with glow */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-cyan-400/30 shadow-[0_0_5px_rgba(34,211,238,0.3)]" />
            </div>
            <div className="relative flex justify-center">
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-2 animate-pulse bg-cyan-400"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="space-y-4 text-center">
            <div className="flex flex-col items-center justify-center space-y-2 font-mono text-xs text-gray-500 sm:flex-row sm:space-x-8 sm:space-y-0">
              <span className="flex items-center space-x-2">
                <span className="text-cyan-400">©</span>
                <span>{new Date().getFullYear()}</span>
                <span className="text-cyan-400">/</span>
                <span>{SiteConfig.name}</span>
              </span>
              <span className="hidden text-cyan-400/30 sm:block">|</span>
              <span>All rights reserved</span>
            </div>
            
            {/* Tech badge */}
            <div className="inline-flex items-center space-x-2 border border-cyan-400/30 bg-slate-800/50 px-4 py-2">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              <span className="font-mono text-xs text-gray-400">SYSTEM.ONLINE</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scanline effect */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[repeating-linear-gradient(0deg,rgba(34,211,238,0.1)_0px,transparent_1px,transparent_2px,rgba(34,211,238,0.1)_3px)]" />
      </div>
    </footer>
  );
};

export default Footer;
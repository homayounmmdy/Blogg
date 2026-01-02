"use client";
import React, { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import SiteConfig from "../config/site";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* CRT Scanlines Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.12)_1px,transparent_2px,transparent_3px,rgba(0,255,255,0.04)_4px)]" />

      <nav className="relative border-b border-teal-400/30 bg-gray-950/90 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            {/* Logo - Retro Terminal Badge */}
            <a href="/" className="group relative">
              <div className="flex items-center space-x-2 border border-teal-400 bg-gray-900 px-2.5 py-1">
                <span className="font-mono text-lg font-bold uppercase tracking-wider text-teal-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]">
                  {SiteConfig.name}
                </span>
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-1 lg:flex">
              {SiteConfig.nav.map((nav, index) => (
                <a
                  key={nav.id}
                  href={nav.href}
                  className="group relative overflow-hidden px-4 py-2 font-mono text-[13px] uppercase tracking-wider text-gray-400 transition-colors hover:text-teal-300"
                >
                  {/* Index badge */}
                  <span className="text-teal-400/70">[{String(index + 1).padStart(2, '0')}]</span>
                  <span className="ml-2">{nav.name}</span>
                  
                  {/* Animated underline on hover */}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-teal-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-3">
              {/* GitHub Link */}
              <a
                href="https://github.com/homayounmmdy"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="relative flex h-8 w-8 items-center justify-center rounded-sm border border-teal-400/50 bg-gray-900 transition-all hover:border-teal-300">
                  <FaGithub className="h-4 w-4 text-teal-400 transition-colors group-hover:text-teal-300" />
                </div>
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="group relative flex h-8 w-8 items-center justify-center rounded-sm border border-teal-400/50 bg-gray-900 lg:hidden"
              >
                {isMenuOpen ? (
                  <FaTimes className="h-4 w-4 text-teal-400" />
                ) : (
                  <FaBars className="h-4 w-4 text-teal-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1 border-t border-teal-400/20 bg-gray-950/95 px-4 pb-4 pt-3">
            {SiteConfig.nav.map((nav, index) => (
              <Link
                key={nav.id}
                href={nav.href}
                className="group relative block font-mono text-[13px] uppercase tracking-wide text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-between border-l-2 border-transparent py-3 pl-4 pr-2 transition-colors group-hover:border-teal-400 group-hover:text-teal-300">
                  <span>{nav.name}</span>
                  <span className="text-teal-400/70">[{String(index + 1).padStart(2, '0')}]</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
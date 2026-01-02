import React from "react";
import { MainSecData } from "../config/StaticData";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const MainSec = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Retro Grid Background - Inspired by circuit boards */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.2)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* CRT Scanlines Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15)_1px,transparent_2px)]" />

      {/* VHS-style Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      <div className="relative mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header - Retro Terminal Style */}
        <SectionHeader title="FEATURED POSTS"/>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {MainSecData.map((data, index) => (
            <article key={data.id} className="group relative">
              {/* Outer Card - Brushed Metal Look */}
              <div className="relative overflow-hidden rounded-lg border border-teal-400/40 bg-gradient-to-br from-gray-900 to-gray-800 p-0.5 transition-all duration-300 hover:border-teal-300/70 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                {/* Inner Card with Retro Bevel */}
                <div className="relative h-full overflow-hidden bg-gray-950">

                  {/* Corner Rivets (Retro Detail) */}
                  <div className="absolute left-2 top-2 h-2 w-2 rounded-full border border-teal-400 bg-teal-500/30" />
                  <div className="absolute right-2 top-2 h-2 w-2 rounded-full border border-teal-400 bg-teal-500/30" />
                  <div className="absolute bottom-2 left-2 h-2 w-2 rounded-full border border-teal-400 bg-teal-500/30" />
                  <div className="absolute bottom-2 right-2 h-2 w-2 rounded-full border border-teal-400 bg-teal-500/30" />

                  {/* Index Badge - CRT Glow */}
                  <div className="absolute right-3 top-3 z-10">
                    <div className="rounded-sm border border-teal-400 bg-gray-900/90 px-2 py-0.5 backdrop-blur-sm">
                      <span className="font-mono text-xs font-bold text-teal-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.5)]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Image Container */}
                  <a href="/post/1" className="block">
                    <div className="relative aspect-video overflow-hidden">
                      {/* CRT Scanlines Over Image */}
                      <div className="absolute inset-0 z-10 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.1)_1px,transparent_2px,transparent_3px,rgba(0,255,255,0.05)_4px)] opacity-60" />
                      
                      <Image
                        src={data.imgurl}
                        alt={data.title}
                        width={586}
                        height={329}
                        className="contrast-110 h-full w-full object-cover brightness-90 transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Category Badge - Retro Label */}
                      <div className="absolute bottom-3 left-3 z-20">
                        <div className="rounded-sm border border-teal-400 bg-gray-900/90 px-2 py-0.5 backdrop-blur-sm">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-teal-300">
                            {data.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Content Area */}
                  <div className="space-y-3 p-5">
                    {/* Meta - Retro Terminal Style */}
                    <div className="flex items-center space-x-3 font-mono text-[10px] text-gray-400">
                      <span className="flex items-center space-x-1">
                        <span className="h-1 w-1 rounded-full bg-teal-400" />
                        <span>{data.date}</span>
                      </span>
                      <span className="text-teal-500/50">•</span>
                      <span>{data.readTime}</span>
                    </div>

                    {/* Title - Glowing Terminal Text */}
                    <h3 className="font-mono text-base font-bold text-gray-200 drop-shadow-[0_0_6px_rgba(0,255,255,0.2)] transition-colors duration-300 group-hover:text-teal-300">
                      <a href="/">{data.title}</a>
                    </h3>

                    {/* Description */}
                    <p className="line-clamp-2 text-[13px] leading-relaxed text-gray-400">
                      {data.desc}
                    </p>

                    {/* Read More - Retro Link */}
                    <a
                      href="/"
                      className="group/link inline-flex items-center space-x-1.5 font-mono text-[12px] font-bold uppercase tracking-wider text-teal-400 transition-colors hover:text-teal-300"
                    >
                      <span>READ MORE</span>
                      <svg
                        className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSec;
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import StaticData from "../config/StaticData";

interface Article {
  id: number;
  title: string;
  imgurl: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
}

const GridSection = () => {
  const [randomArticles, setRandomArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Shuffle and pick 6 random articles from "others"
    const shuffled = [...StaticData.others].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    setRandomArticles(selected);
  }, []);

  return (
    <div className="mt-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {randomArticles.map((item) => (
          <div key={item.id} className="group relative cursor-pointer">
            {/* Card Container - Brushed Metal + Neon Border */}
            <div className="relative overflow-hidden rounded-lg border border-teal-400/30 bg-gradient-to-br from-gray-900 to-gray-800 p-0.5 transition-all duration-300 hover:border-teal-300/60 hover:shadow-[0_0_12px_rgba(0,255,255,0.25)]">
              <div className="relative bg-gray-950">
                {/* Corner Rivets */}
                <div className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full border border-teal-400 bg-teal-500/20" />
                <div className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full border border-teal-400 bg-teal-500/20" />

                {/* Image */}
                <div className="relative aspect-video">
                  {/* CRT Scanlines Overlay */}
                  <div className="absolute inset-0 z-10 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.1)_1px,transparent_2px,transparent_3px,rgba(0,255,255,0.03)_4px)] opacity-70" />
                  <Image
                    src={item.imgurl}
                    alt={item.title}
                    fill
                    className="contrast-110 object-cover brightness-90 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>

            {/* Title - Retro Terminal Text */}
            <div className="mt-3">
              <p className="font-mono text-xs font-bold leading-tight tracking-wide text-gray-200 drop-shadow-[0_0_6px_rgba(0,255,255,0.2)] transition-colors group-hover:text-teal-300 sm:text-sm">
                {item.title}
              </p>
              <div className="mt-1 flex justify-between text-[10px] text-gray-400">
                <span>{item.category}</span>
                <span>{item.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridSection;

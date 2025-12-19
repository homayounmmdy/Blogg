"use client";

import { useEffect, useState } from "react";
import StaticData from "@/app/config/StaticData";
import Link from "next/link";

const LinearPostsShowcase = () => {
  const [shuffledPosts, setShuffledPosts] = useState<(typeof StaticData.others)[0][]>([]);

  // Fisher-Yates shuffle
  const shuffleArray = <T,>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  useEffect(() => {
    setShuffledPosts(shuffleArray(StaticData.others));
  }, []);

  return (
    <div className="relative mx-auto max-w-3xl">
      {/* CRT Scanline Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.08)_1px,transparent_2px)] opacity-60" />

      <div className="relative rounded-sm border-l-2 border-teal-400/30 bg-gray-950/80 p-6 backdrop-blur-sm">
        <h3 className="mb-4 font-mono text-[12px] uppercase tracking-widest text-teal-400">
          RECENT Posts
        </h3>

        <ul className="space-y-3 font-mono text-[14px] leading-relaxed">
          {shuffledPosts.map((post) => (
            <li key={post.id} className="group flex items-start">
              {/* Bullet: Pulsing status dot */}
              <div className="mr-3 mt-1.5 h-2 w-2 animate-pulse rounded-full bg-teal-500" />

              {/* Title Link */}
              <Link
                href={`/post/${post.id}`}
                className="text-gray-300 transition-colors duration-200 group-hover:text-teal-300"
              >
                {post.title}
              </Link>

              {/* Optional: tiny category tag */}
              <span className="ml-2 text-[10px] text-teal-400/70">
                [{post.category}]
              </span>
            </li>
          ))}
        </ul>

      
      </div>
    </div>
  );
};

export default LinearPostsShowcase;
// components/LinearPostsShowcase.tsx
"use client";

import { useEffect, useState } from "react";
import StaticData from "@/app/config/StaticData";
import Link from "next/link";

const LinearPostsShowcase = () => {
  const [shuffledPosts, setShuffledPosts] = useState<(typeof StaticData.others)[0][]>([]);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  useEffect(() => {
    setShuffledPosts(shuffleArray(StaticData.others).slice(0, 6)); // Show only 6 for balance
  }, []);

  return (
    <div className="h-[500px] w-full overflow-y-auto rounded-lg border border-teal-400/30 bg-gray-950 p-4">
      <h3 className="mb-4 font-mono text-[12px] uppercase tracking-widest text-teal-400">
        RANDOM FEED
      </h3>
      <ul className="space-y-3 font-mono text-[14px]">
        {shuffledPosts.map((post) => (
          <li key={post.id} className="group flex items-start">
            <div className="mr-3 mt-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500" />
            <Link
              href={`/post/${post.id}`}
              className="text-gray-300 transition-colors group-hover:text-teal-300"
            >
              {post.title}
            </Link>
            <span className="ml-2 text-[10px] text-teal-400/70">[{post.category}]</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center space-x-2">
        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
        <span className="font-mono text-[11px] uppercase text-gray-500">FEED.ACTIVE</span>
      </div>
    </div>
  );
};

export default LinearPostsShowcase;
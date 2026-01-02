import StaticData from '@/app/config/StaticData';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import CommentsSection from '@/app/components/CommentsSection';

const PostPage = () => {
  const data = StaticData.news;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950 text-gray-200">
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.12)_1px,transparent_2px,transparent_3px,rgba(0,255,255,0.04)_4px)]" />

      {/* Circuit Grid (Subtle) */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <main className="relative z-10 px-4 py-10 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Title - Terminal Header */}
          <h1 className="mb-6 mt-4 text-center font-mono text-2xl font-bold uppercase tracking-wide text-teal-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)] sm:text-3xl">
            {data.title}
          </h1>

          {/* Featured Image */}
          <div className="relative mb-8 overflow-hidden rounded-lg border border-teal-400/30">
            <div className="absolute inset-0 z-10 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.1)_1px,transparent_2px,transparent_3px,rgba(0,255,255,0.03)_4px)] opacity-70" />
            <Image
              src={data.imgurl}
              width={900}
              height={500}
              alt={data.title}
              title={data.title}
              className="contrast-110 h-auto w-full object-cover brightness-90"
            />
          </div>

          {/* 👇 Author Post Info Section */}
          <Link href="/post/1/author" className="mb-8 flex flex-col items-center rounded-lg border border-teal-400/20 bg-gray-900/70 p-5 backdrop-blur-sm sm:flex-row sm:items-start">
            <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-full border-2 border-teal-400/40 sm:mb-0 sm:mr-5">
              <Image
                src={data.authorImg}
                alt={`${data.author} avatar`}
                width={64}
                height={64}
                className="h-full w-full object-fill"
           
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-mono text-lg font-bold text-teal-300">{data.author}</h3>
              <p className="mt-1 font-mono text-xs text-gray-400">
                {data.category} • {data.date} • {data.readTime}
              </p>
              {data.authorBio && (
                <p className="mt-2 font-mono text-[13px] italic text-gray-300">{data.authorBio}</p>
              )}
            </div>
          </Link>

          {/* Post Body - Terminal Log Style */}
          <div className="mb-10 px-2 font-mono text-[15px] leading-relaxed text-gray-300">
            <p>{data.body}</p>
          </div>

          <CommentsSection />

          {/* Back to Home - Retro Control Button */}
          <div className="mt-3 flex justify-center">
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

export default PostPage;
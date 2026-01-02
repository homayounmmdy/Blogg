"use client";

import { MainSecData } from "@/app/config/StaticData";
import Image from "next/image";
import { useEffect, useState } from "react";

const FeaturedSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MainSecData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const current = MainSecData[currentIndex];

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border border-teal-400/30 bg-gray-950">
      {/* CRT Scanlines */}
      <div className="absolute inset-0 z-10 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.1)_1px,transparent_2px,transparent_3px,rgba(0,255,255,0.03)_4px)] opacity-70" />

      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={current.imgurl}
          alt={current.title}
          fill
          className="contrast-110 object-cover brightness-90"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col justify-end p-8">
        <div className="mb-3 inline-block">
          <div className="w-fit border border-teal-400 bg-gray-900/90 px-3 py-1 backdrop-blur-sm">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-300">
              {current.category}
            </span>
          </div>
        </div>

        <h2 className="max-w-2xl font-mono text-2xl font-bold uppercase tracking-wide text-white drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] sm:text-3xl">
          {current.title}
        </h2>

        <p className="mt-3 line-clamp-2 max-w-xl font-mono text-sm text-gray-300">
          {current.desc}
        </p>

        <div className="mt-4 flex items-center space-x-4 font-mono text-xs text-gray-400">
          <span>{current.date}</span>
          <span className="text-teal-500/50">•</span>
          <span>{current.readTime}</span>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 right-6 flex space-x-2">
        {MainSecData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2 w-2 rounded-full transition-all ${
              idx === currentIndex
                ? "bg-teal-300 w-6"
                : "bg-teal-500/50 hover:bg-teal-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSlider;

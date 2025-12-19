import React from "react";
import MainSec from "./components/MainSec";
import OthersSections from "./components/OthersSections";
import GridSection from "./components/GridSection";
import LinearPostsShowcase from "./components/LinearPostsShowcase";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950 text-gray-200">
      {/* Optional: Global CRT grain/scanline (if not already in components) */}
      {/* <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.08)_1px,transparent_2px)]" /> */}

      {/* Main Content */}
      <main className="relative z-10 px-4 py-8 sm:px-6 sm:py-10 md:px-8">
        {/* Centered max-width container */}
        <div className="mx-auto max-w-7xl">
          <MainSec />
          <GridSection />
          <LinearPostsShowcase />
          <OthersSections />
        </div>
      </main>
    </div>
  );
};

export default Home;
import FeaturedSlider from "./components/FeaturedSlider";
import GridSection from "./components/GridSection";
import LinearPostsShowcase from "./components/LinearPostsShowcase";
import MainSec from "./components/MainSec";
import OthersSections from "./components/OthersSections";
import SectionHeader from "./components/SectionHeader";

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
          <div className="relative min-h-screen overflow-hidden bg-gray-950 px-4 pt-10 text-gray-200 sm:px-6">
            {/* CRT Scanlines */}
            <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.12)_1px,transparent_2px,transparent_3px,rgba(0,255,255,0.04)_4px)]" />

            <div className="relative z-10 mx-auto max-w-7xl">
             <SectionHeader title="RANDOM POSTS"/>

              {/* Responsive Grid: 60% / 40% on desktop, stacked on mobile */}
              <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
                <div className="min-w-0">
                  <FeaturedSlider />
                </div>
                <div className="min-w-0">
                  <LinearPostsShowcase />
                </div>
              </div>
            </div>
          </div>
          <SectionHeader title="ALL POSTS"/>
          <OthersSections />
        </div>
      </main>
    </div>
  );
};

export default Home;

import Link from "next/link";
import StaticData from "../config/StaticData";
import Image from "next/image";

const OthersSections = () => {
  return (
    <>
      {/* Retro Posts Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {StaticData.others.map((data) => (
          <div key={data.id} className="group relative cursor-pointer">
            {/* Card Container - Brushed Metal + Neon Border */}
            <div className="relative overflow-hidden rounded-lg border border-teal-400/30 bg-gradient-to-br from-gray-900 to-gray-800 p-0.5 transition-all duration-300 hover:border-teal-300/60 hover:shadow-[0_0_12px_rgba(0,255,255,0.25)]">
              <div className="relative h-full overflow-hidden bg-gray-950">
                {/* Corner Rivets */}
                <div className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full border border-teal-400 bg-teal-500/20" />
                <div className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full border border-teal-400 bg-teal-500/20" />

                {/* Image */}
                <Link href="/post/1" className="block aspect-square">
                  {/* CRT Scanlines Overlay */}
                  <div className="absolute inset-0 z-10 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.1)_1px,transparent_2px,transparent_3px,rgba(0,255,255,0.03)_4px)] opacity-70" />
                  <Image
                    src={data.imgurl}
                    alt={data.title}
                    title={data.title}
                    width={500}
                    height={500}
                    className="contrast-110 h-full w-full object-cover brightness-90 transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              </div>
            </div>

            {/* Title - Retro Terminal Text */}
            <div className="mt-3">
              <h2 className="font-mono text-sm font-bold uppercase tracking-wide text-gray-200 drop-shadow-[0_0_6px_rgba(0,255,255,0.2)] transition-colors group-hover:text-teal-300">
                <Link href="/" className="inline-block">
                  {data.title}
                </Link>
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button - Retro Control Panel Style */}
      <div className="my-12 flex justify-center">
        <Link
          href="/archive"
          className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-md border-2 border-teal-400 bg-gray-900 px-6 py-2 font-mono text-[12px] font-bold uppercase tracking-wider text-teal-300 transition-all duration-300 hover:border-teal-300 hover:text-teal-200"
        >
          {/* Glow on hover */}
          <div className="absolute inset-0 bg-teal-400/10 opacity-0 transition-opacity group-hover/btn:opacity-100" />
          <span className="relative z-10 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]">
            VIEW ALL POSTS
          </span>
        </Link>
      </div>
    </>
  );
};

export default OthersSections;
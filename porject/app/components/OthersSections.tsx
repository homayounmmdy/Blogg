import Link from "next/link";
import StaticData from "../config/StaticData";
import VerticalCard from "./VerticalCard";

const OthersSections = () => {
  return (
    <>
      {/* Retro Posts Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {StaticData.others.map((data) => (
          <VerticalCard data={data} key={data.id} />
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

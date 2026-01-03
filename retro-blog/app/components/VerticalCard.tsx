import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  imgurl: string;
  category?: string;
  readTime: string;
  date: string;
  author?: string;
}

const VerticalCard = ({ post }: { post: Props }) => {
  return (
    <div className="group relative cursor-pointer">
      {/* Card Container - Brushed Metal + Neon Border */}
      <div className="relative overflow-hidden rounded-lg border border-teal-400/30 bg-gradient-to-br from-gray-900 to-gray-800 p-0.5 transition-all duration-300 hover:border-teal-300/60 hover:shadow-[0_0_12px_rgba(0,255,255,0.25)]">
        <div className="relative h-full overflow-hidden bg-gray-950">
          {/* Corner Rivets */}
          <div className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full border border-teal-400 bg-teal-500/20" />
          <div className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full border border-teal-400 bg-teal-500/20" />

          {/* Image */}
          <Link href={`/post/${post.id}`} className="block aspect-square">
            {/* CRT Scanlines Overlay */}
            <div className="absolute inset-0 z-10 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.1)_1px,transparent_2px,transparent_3px,rgba(0,255,255,0.03)_4px)] opacity-70" />
            <Image
              src={post.imgurl}
              alt={post.title}
              title={post.title}
              width={500}
              height={500}
              className="contrast-110 h-full w-full object-cover brightness-90 transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Category Badge */}
          {post.category && (
            <div className="absolute bottom-3 left-3 z-20">
              <div className="rounded-sm border border-teal-400 bg-gray-900/90 px-2 py-0.5 backdrop-blur-sm">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-teal-300">
                  {post.category}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="mt-3 space-y-1.5">
        <h2 className="font-mono text-sm font-bold uppercase tracking-wide text-gray-200 drop-shadow-[0_0_6px_rgba(0,255,255,0.2)] transition-colors group-hover:text-teal-300">
          <Link href={`/post/${post.id}`} className="inline-block">
            {post.title}
          </Link>
        </h2>

        {/* Meta Bar: Date • Read Time */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-wider text-gray-500">
          <span>{post.date}</span>
          <span className="text-teal-500/50">•</span>
          <span>{post.readTime}</span>
          {post.author && (
            <>
              <span className="text-teal-500/50">•</span>
              <span className="text-gray-400">{post.author}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;

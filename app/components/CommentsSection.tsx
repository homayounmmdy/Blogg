import Image from "next/image";
import StaticData from "../config/StaticData";

const CommentsSection = () => {
  return (
    <>
      <div className="mt-12">
        <h2 className="mb-4 text-center font-mono text-xl font-bold uppercase tracking-wide text-teal-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]">
          USER FEEDBACK LOG
        </h2>

        <div className="space-y-6">
          {StaticData.comments.map((comment) => (
            <div
              key={comment.id}
              className="rounded-lg border border-teal-400/20 bg-gray-900/70 p-4 font-mono text-sm text-gray-200 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                {/* Avatar - Retro Pixel or Glowing */}
                <div className="relative h-8 w-8 overflow-hidden rounded-full border border-teal-400/30">
                  <div className="absolute inset-0 animate-pulse bg-teal-400/10" />
                  <Image
                    src={comment.avatar}
                    alt={`${comment.author} avatar`}
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-teal-300">
                      {comment.author}
                    </span>
                    <span className="text-xs text-gray-500">
                      {comment.timestamp}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-300">{comment.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </>
  );
};

export default CommentsSection;

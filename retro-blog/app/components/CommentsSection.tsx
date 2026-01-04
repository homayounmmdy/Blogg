
import StaticData, { CommentType } from "../config/StaticData";
import Comment from "./Comment";

const CommentsSection = () => {
  return (
    <section className="mx-auto mt-12 max-w-2xl px-4">
      <h2 className="mb-6 text-center font-mono text-xl font-bold uppercase tracking-wider text-teal-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
        USER FEEDBACK LOG
      </h2>

      <div className="space-y-6">
        {StaticData.comments.map((comment: any) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>

      {/* Optional: Add comment form later */}
      <div className="mt-8 rounded-lg border border-teal-400/20 bg-gray-900/50 p-4 font-mono text-sm backdrop-blur-sm">
        <textarea
          placeholder="Enter your feedback (RETRO-FUTURIST MODE: ON)"
          className="w-full bg-transparent font-mono text-gray-200 placeholder-gray-600 focus:outline-none"
          rows={2}
        />
        <div className="mt-2 flex justify-end">
          <button className="rounded border border-teal-400/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-300 transition hover:bg-teal-400/10">
            POST
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;

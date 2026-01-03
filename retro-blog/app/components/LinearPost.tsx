import Link from "next/link";

interface Props {
  id: number;
  title: string;
  category?: string;
}

const LinearPost = ({ post }: { post: Props }) => {
  return (
    <li key={post.id} className="group flex items-start">
      <div className="mr-3 mt-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500" />
      <Link
        href={`/post/${post.id}`}
        className="text-gray-300 transition-colors group-hover:text-teal-300"
      >
        {post.title}
      </Link>
      {post.category && (
        <span className="ml-2 text-[10px] text-teal-400/70">
          [{post.category}]
        </span>
      )}
    </li>
  );
};

export default LinearPost;

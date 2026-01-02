// app/posts/[id]/author/page.tsx
import StaticData from "@/app/config/StaticData";
import Image from "next/image";
import Link from "next/link";

const AuthorPage = () => {
  const author = StaticData.authorProfile;

  // Combine all posts (news + others)
  const allPosts = [
    {
      id: 0,
      ...StaticData.news,
      imgurl: StaticData.news.imgurl,
      category: StaticData.news.category,
      readTime: StaticData.news.readTime,
      date: StaticData.news.date,
      author: StaticData.news.author,
    },
    ...StaticData.others,
  ].filter((post) => post.author === author.name);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950 text-gray-200">
      {/* CRT Scanlines Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.12)_1px,transparent_2px,transparent_3px,rgba(0,255,255,0.04)_4px)]" />

      {/* Circuit Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <main className="relative z-10 px-4 py-10 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <h1 className="mb-8 mt-4 text-center font-mono text-2xl font-bold uppercase tracking-wide text-teal-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)] sm:text-3xl">
            AUTHOR PROFILE
          </h1>

          {/* Author Card */}
          <div className="mb-12 rounded-lg border border-teal-400/20 bg-gray-900/70 p-6 backdrop-blur-sm">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-teal-400/50 sm:mb-0 sm:mr-6">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={80}
                  height={80}
                  className="h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="font-mono text-xl font-bold text-teal-300">
                  {author.name}
                </h2>
                <p className="mt-1 font-mono text-sm text-gray-400">
                  Age: {author.age} • {author.location}
                </p>
                <p className="mt-3 font-mono text-[14px] italic text-gray-300">
                  {author.bio}
                </p>
              </div>
            </div>

            {/* Social / Contact Info */}
            <div className="mt-6 border-t border-teal-400/10 pt-4">
              <h3 className="font-mono text-sm uppercase tracking-wider text-teal-400">
                SYSTEM CONTACTS
              </h3>
              <ul className="mt-2 space-y-1 font-mono text-xs">
                {author.website && (
                  <li>
                    • Web:{" "}
                    <Link
                      href={author.website}
                      className="text-teal-300 hover:underline"
                    >
                      {author.website.replace(/^https?:\/\//, "")}
                    </Link>
                  </li>
                )}
                {author.email && (
                  <li>
                    • Email:{" "}
                    <Link
                      href={`mailto:${author.email}`}
                      className="text-teal-300 hover:underline"
                    >
                      <span className="text-teal-300">{author.email}</span>
                    </Link>
                  </li>
                )}
                {author.github && (
                  <li>
                    • GitHub:{" "}
                    <Link
                      href={`https://github.com/${author.github}`}
                      className="text-teal-300 hover:underline"
                    >
                      @{author.github}
                    </Link>
                  </li>
                )}
                {author.linkedin && (
                  <li>
                    • LinkedIn:{" "}
                    <Link
                      href={`https://linkedin.com/in/${author.linkedin}`}
                      className="text-teal-300 hover:underline"
                    >
                      {author.linkedin}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Posts by Author */}
          <div className="mb-12">
            <h2 className="mb-4 font-mono text-xl font-bold uppercase tracking-wide text-teal-300 drop-shadow-[0_0_4px_rgba(0,255,255,0.3)]">
              ({allPosts.length}) Posts Written by {author.name}
            </h2>
            <div className="space-y-5">
              {allPosts.map((post) => (
                <Link
                  key={post.id}
                  href="/post/1"
                  className="group block rounded border border-teal-400/10 bg-gray-900/60 p-4 transition-all hover:border-teal-400/30 hover:bg-gray-900/80"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <div className="relative mb-3 h-20 w-full overflow-hidden rounded sm:mb-0 sm:mr-4 sm:h-16 sm:w-24">
                      <Image
                        src={post.imgurl}
                        alt={post.title}
                        width={96}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-mono text-[14px] font-bold text-teal-300 group-hover:underline">
                        {post.title}
                      </h3>
                      <p className="mt-1 font-mono text-[12px] text-gray-400">
                        {post.category} • {post.date} • {post.readTime}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="flex justify-center">
            <div className="inline-flex items-center space-x-2 rounded-sm border border-teal-400/30 bg-gray-900/80 px-4 py-2">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              <span className="font-mono text-[12px] uppercase tracking-wider text-gray-300">
                PROFILE ACTIVE
              </span>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-8 flex justify-center">
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

export default AuthorPage;

"use client";
import VerticalCard from "@/app/components/VerticalCard";
import StaticData from "@/app/config/StaticData";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Badge from "./Badge";
import Heading from "./Heading";

export default function ArchiveContent() {
  const searchParams = useSearchParams(); // ✅ Now inside Suspense
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    // Safe to access after hydration
    const q = searchParams?.get("q") || "";
    setQuery(q);
  }, [searchParams]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    const newParams = new URLSearchParams();
    if (value) newParams.set("q", value);
    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  const filteredPosts = StaticData.others.filter((post) =>
    `${post.title} ${post.category} ${post.author || ""}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950 text-gray-200">
      {/* CRT Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.12)_1px,transparent_2px,transparent_3px,rgba(0,255,255,0.04)_4px)]" />

      <main className="relative z-10 px-4 py-10 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <Heading className="mb-6" size="xl" as="h1">
              ARCHIVE
            </Heading>
            <div className="mx-auto mt-4 max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="SEARCH..."
                  value={query}
                  onChange={handleSearch}
                  className="w-full rounded-sm border border-teal-400/40 bg-gray-900 px-4 py-3 pr-12 font-mono text-sm uppercase tracking-wider text-gray-300 focus:border-teal-300 focus:outline-none"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-teal-400/70">
                  {filteredPosts.length}/{StaticData.others.length}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          {filteredPosts.length === 0 ? (
            <div className="py-16 text-center">
              <div className="font-mono text-sm uppercase tracking-wider text-gray-500">
                NO TRANSMISSIONS FOUND
              </div>
              <div className="mt-2 font-mono text-xs text-teal-400/70">
                TRY ANOTHER QUERY
              </div>
            </div>
          ) : (
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
              {filteredPosts.map((post) => (
                <VerticalCard post={post} key={post.id} />
              ))}
            </div>
          )}

          <div className="mt-12 flex justify-center">
            <Badge size="sm" status="active" variant="secondary">
              ARCHIVE ONLINE
            </Badge>
          </div>
        </div>
      </main>
    </div>
  );
}

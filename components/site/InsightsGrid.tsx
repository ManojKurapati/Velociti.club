"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { PostMeta } from "@/lib/insights-shared";
import { cn } from "@/lib/utils";
import { PostCard } from "./PostCard";

export function InsightsGrid({ posts, categories }: { posts: PostMeta[]; categories: readonly string[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const raw = params.get("category");
  const active = categories.find((c) => c.toLowerCase().replace(/\s+/g, "-") === raw) ?? "All";
  return (
    <InsightsView
      posts={posts}
      categories={categories}
      active={active}
      onSelect={(c) => router.replace(c === "All" ? pathname : `${pathname}?category=${c.toLowerCase().replace(/\s+/g, "-")}`, { scroll: false })}
    />
  );
}

export function InsightsView({ posts, categories, active, onSelect }: { posts: PostMeta[]; categories: readonly string[]; active: string; onSelect?: (c: string) => void }) {
  const shown = active === "All" ? posts : posts.filter((p) => p.category === active);
  return (
    <div>
      <div role="group" aria-label="Filter by category" className="-mx-6 overflow-x-auto px-6 [scrollbar-width:none]">
        <div className="flex w-max gap-2">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={active === c}
              onClick={() => onSelect?.(c)}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full border px-5 text-[15px] font-medium transition-colors",
                active === c ? "border-ink bg-ink text-white" : "border-line bg-surface text-ink hover:border-ink",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">{shown.length} posts shown</p>
      {shown.length ? (
        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <li key={p.slug}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="card mt-10 p-8 text-[16px]">No posts in this category yet.</p>
      )}
    </div>
  );
}

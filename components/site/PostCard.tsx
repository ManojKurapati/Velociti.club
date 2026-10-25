import Link from "next/link";
import { SceneArt } from "@/components/art/SceneArt";
import { formatDate, type PostMeta } from "@/lib/insights-shared";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/insights/${post.slug}`} className="card group flex h-full flex-col overflow-hidden transition-colors hover:border-ink/40">
      <div className="aspect-[16/9] overflow-hidden border-b border-line bg-[#0F1520]">
        <SceneArt name={post.art} className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <p className="t-mono flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-cobalt">{post.category}</span>
          <span className="text-body">{formatDate(post.date)}</span>
          {post.draft && <mark className="ph">[Draft]</mark>}
        </p>
        <h3 className="mt-4 text-[20px] font-semibold leading-snug tracking-[-0.015em] text-ink">{post.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed">{post.excerpt}</p>
      </div>
    </Link>
  );
}

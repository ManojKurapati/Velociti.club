import { Children } from "react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatDate, getAllPosts, getPost } from "@/lib/insights";
import { articleJsonLd, pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { JsonLd } from "@/components/site/JsonLd";
import { PostCard } from "@/components/site/PostCard";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { copy, SHOW_PLACEHOLDERS } from "@/components/site/Copy";
import { SceneArt } from "@/components/art/SceneArt";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts({ includeDrafts: true }).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) return {};
  const meta = pageMetadata({ title: post.meta.title, description: post.meta.excerpt, path: `/insights/${post.meta.slug}`, type: "article" });
  return post.meta.draft ? { ...meta, robots: { index: false, follow: true } } : meta;
}

const mdxComponents = {
  Placeholder: ({ children }: { children: string }) => (SHOW_PLACEHOLDERS ? <p><mark className="ph">[{children}]</mark></p> : null),
  p: ({ children }: { children: React.ReactNode }) => <p>{Children.map(children, (c) => (typeof c === "string" ? copy(c) : c))}</p>,
};

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const { meta, content } = post;
  const path = `/insights/${meta.slug}`;
  const more = getAllPosts().filter((p) => p.slug !== meta.slug).slice(0, 2);

  return (
    <>
      <JsonLd data={articleJsonLd({ title: meta.title, description: meta.excerpt, path, datePublished: meta.date, author: meta.author })} />
      <article>
        <header className="pb-10 pt-16 lg:pt-24">
          <div className="container-site max-w-[880px]">
            <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: meta.category, path }]} />
            <p className="t-mono mt-10 flex flex-wrap gap-x-3">
              <span className="text-cobalt">{meta.category}</span>
              <time dateTime={meta.date} className="text-body">{formatDate(meta.date)}</time>
              {meta.draft && SHOW_PLACEHOLDERS && <mark className="ph">[Draft]</mark>}
            </p>
            <h1 className="mt-5 text-[clamp(36px,5vw,64px)] font-semibold leading-[1.04] tracking-[-0.04em]">{meta.title}</h1>
            <p className="t-lead mt-6">{meta.excerpt}</p>
          </div>
        </header>
        <div className="container-site max-w-[1048px]">
          <div className="aspect-[16/9] overflow-hidden rounded-[24px] bg-[#0F1520]">
            <SceneArt name={meta.art} className="h-full w-full" />
          </div>
        </div>
        <div className="container-site prose-velociti max-w-[760px] py-16">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </article>
      {more.length > 0 && (
        <Section tone="white" labelledBy="more-title">
          <h2 id="more-title" className="t-h2 mb-10">More insights</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {more.map((p) => (
              <li key={p.slug}>
                <PostCard post={p} />
              </li>
            ))}
          </ul>
        </Section>
      )}
      <CTABand />
    </>
  );
}

import type { Metadata } from "next";
import { POSTS, getPostBySlug } from "@/lib/posts";
import PostClient from "./PostClient";

const DESCRIPTIONS: Record<string, string> = {
  "how-to-choose-a-printing-company-in-lagos":
    "A practical guide to avoid costly mistakes when choosing a printing company in Lagos, from quality checks to turnaround time.",
  "why-branded-bags-are-the-best-corporate-gift":
    "Branded bags are one of the most effective, long lasting corporate gifts you can give clients and staff in Nigeria.",
  "art-paper-vs-matt-paper":
    "Choosing the wrong paper can ruin a print job. A clear breakdown of art paper vs matte paper and when to use each one.",
};

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }

  const description = DESCRIPTIONS[post.slug] || post.excerpt;

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      images: post.thumbnail ? [{ url: post.thumbnail }] : undefined,
    },
  };
}

export default function PostPage() {
  return <PostClient />;
}

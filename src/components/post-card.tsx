import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article>
      <Link href={`/blog/${post.slug}`} className="group block">
        <time className="text-sm text-muted">{formatDate(post.date)}</time>
        <h3 className="mt-1 text-lg font-medium tracking-tight group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="mt-1 text-muted leading-relaxed">{post.description}</p>
      </Link>
    </article>
  );
}

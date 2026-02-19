import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <div>
      <section className="py-8">
        <h1 className="text-3xl font-bold tracking-tight">four minute thoughts</h1>
        <p className="mt-3 text-lg text-muted leading-relaxed">
          Short reads about tech, life, and ideas.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted mb-6">
          Recent
        </h2>
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}

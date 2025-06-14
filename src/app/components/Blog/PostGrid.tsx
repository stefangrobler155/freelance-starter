import BlogPostCard from './BlogPostCard';

type PostGridProps = {
  posts: any[]; // optionally define more specific types if you're ready
};

export default function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {posts.map((post) => {
        const image =
          post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? '/fallback.jpg';

        return (
          <BlogPostCard
            key={post.id}
            title={post.title.rendered}
            slug={post.slug}
            excerpt={post.excerpt.rendered}
            image={image}
          />
        );
      })}
    </div>
  );
}

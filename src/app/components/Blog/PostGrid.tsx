// /components/blog/PostGrid.tsx

import BlogPostCard from './BlogPostCard';

type Category = {
  id: number;
  name: string;
  slug: string;
};

type PostGridProps = {
  posts: any[];
};

export default function PostGrid({ posts }: PostGridProps) {
  const filteredPosts = posts.filter(
    (post) => post.title?.rendered || post.excerpt?.rendered || post.slug
  );

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {filteredPosts.map((post) => {
        const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? '/fallback.jpg';
        const author = post._embedded?.author?.[0]?.name ?? '';
        const categories: Category[] = post._embedded?.['wp:term']?.[0] ?? [];
        const isFeatured = categories.some((cat) => cat.slug === 'featured');

        return (
          <BlogPostCard
            key={post.id}
            title={post.title.rendered}
            slug={post.slug}
            excerpt={post.excerpt.rendered}
            image={image}
            date={post.date}
            author={author}
            categories={categories}
            isFeatured={isFeatured}
          />
        );
      })}
    </div>
  );
}

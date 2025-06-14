import BlogSearch from '@/app/components/Blog/BlogSearch';
import Pagination from '@/app/components/Blog/Pagination';
import PostGrid from '@/app/components/Blog/PostGrid';
import { getPaginatedPosts } from '@/app/lib/queries';
import Link from 'next/link';

export default async function BlogPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const currentPage = parseInt(page, 10) || 1;

  const { posts, totalPages } = await getPaginatedPosts(currentPage);

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
      <BlogSearch />
      <PostGrid posts={posts} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath="/blog/page"
        />
    </section>
  );
}

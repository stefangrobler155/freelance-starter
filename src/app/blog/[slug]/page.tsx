import { getPost } from '@/app/lib/queries';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return notFound();

  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? '/fallback.jpg';
  const author = post._embedded?.author?.[0]?.name ?? '';
  const categories = post._embedded?.['wp:term']?.[0] ?? [];

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-6 text-sm text-blue-600">
        <Link href="/blog" className="hover:underline">← Back to Blog</Link>
      </div>

      <h1 className="text-4xl font-bold text-blue-800 mb-4">{post.title.rendered}</h1>

      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-x-4 gap-y-2">
        <span>{new Date(post.date).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })}</span>
        {author && <span>By {author}</span>}
        {categories.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {categories.map((cat: { id: number; slug: string; name: string }) => (
              <li key={cat.id}>
                <Link href={`/blog/category/${cat.slug}`} className="text-blue-600 hover:underline">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {image && (
        <img
          src={image}
          alt={post.title.rendered}
          className="w-full h-64 object-cover rounded-lg shadow mb-10"
        />
      )}

      <div
        className="prose prose-lg max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}

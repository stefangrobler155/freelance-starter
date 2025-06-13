import { notFound } from 'next/navigation';
import { getPost } from '@/app/lib/queries'; // make sure this exists
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: post?.title?.rendered || 'Post not found',
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return notFound();

  const featuredImage = post.featured_media_url || '/fallback.jpg';

  return (
    <article className="prose max-w-3xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-4">{post.title.rendered}</h1>

      {featuredImage && (
        <img
          src={featuredImage}
          alt={post.title.rendered}
          className="w-full rounded mb-6"
        />
      )}

      {post.content?.rendered ? (
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      ) : (
        <p className="text-gray-500 italic">No content available.</p>
      )}
    </article>
  );
}

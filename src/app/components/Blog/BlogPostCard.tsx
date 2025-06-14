import Link from 'next/link';

type BlogPostCardProps = {
  title: string;
  slug: string;
  excerpt: string;
  image?: string;
};

export default function BlogPostCard({ title, slug, excerpt, image }: BlogPostCardProps) {
  return (
    <article className="flex bg-white shadow rounded overflow-hidden p-4 border border-gray-100">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-28 h-28 object-cover rounded-md mr-4 border"
        />
      )}
      <div className="flex flex-col justify-between">
        <h2 className="text-lg font-semibold mb-1">
          <Link href={`/blog/${slug}`} className="text-blue-700 hover:underline">
            {title}
          </Link>
        </h2>
        <div
          className="text-gray-600 text-sm"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </div>
    </article>
  );
}

// /components/blog/BlogPostCard.tsx

'use client';

import Link from 'next/link';
import clsx from 'clsx';
import CategoryBadge from './CategoryBadge';

type BlogPostCardProps = {
  title: string;
  slug: string;
  excerpt: string;
  image?: string;
  date?: string;
  author?: string;
  categories?: { id: number; name: string; slug: string }[];
  isFeatured?: boolean;
};

export default function BlogPostCard({
  title,
  slug,
  excerpt,
  image = '/fallback.jpg',
  date,
  author,
  categories = [],
  isFeatured = false,
}: BlogPostCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center text-xs text-gray-500">
          {date && (
            <span>{new Date(date).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}</span>
          )}
          {isFeatured && (
            <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded uppercase font-semibold tracking-wide">
              Featured
            </span>
          )}
        </div>

        <h2 className="text-lg font-bold text-blue-800">
          <Link href={`/blog/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h2>

        {author && (
          <p className="text-sm text-gray-500">By {author}</p>
        )}

        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {categories.map((cat) => (
              <CategoryBadge key={cat.id} {...cat} />
            ))}
          </div>
        )}

        <div
          className="text-sm text-gray-700"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />

        <Link
          href={`/blog/${slug}`}
          className="text-blue-700 text-sm font-medium mt-2 hover:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}

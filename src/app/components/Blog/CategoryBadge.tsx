'use client';

import Link from 'next/link';

type CategoryBadgeProps = {
  id: number;
  name: string;
  slug: string;
};

export default function CategoryBadge({ id, name, slug }: CategoryBadgeProps) {
  return (
    <Link
      href={`/blog/category/${slug}`}
      className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs hover:underline"
    >
      {name}
    </Link>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CategoryFilter({ categories }: { categories: any[] }) {
  const pathname = usePathname();

  return (
    <ul className="flex gap-4 flex-wrap text-sm text-blue-600 mb-4">
      <li>
        <Link
          href="/blog"
          className={pathname === '/blog' ? 'font-semibold underline' : ''}
        >
          All
        </Link>
      </li>
      {categories.map((cat) => (
        <li key={cat.id}>
          <Link
            href={`/blog/category/${cat.slug}`}
            className={pathname.endsWith(cat.slug) ? 'font-semibold underline' : ''}
          >
            {cat.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

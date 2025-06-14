'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath?: string; // default: /blog/page
};

export default function Pagination({
  currentPage,
  totalPages,
  basePath = '/blog/page',
}: PaginationProps) {
  const pathname = usePathname();

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages <= 1) return null;

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2 mt-10">
      {currentPage > 1 && (
        <Link
          href={`${basePath}/${currentPage - 1}`}
          className="px-3 py-1 border rounded text-sm text-blue-600 hover:bg-gray-100"
        >
          ← Prev
        </Link>
      )}

      {pages.map((page) => (
        <Link
          key={page}
          href={`${basePath}/${page}`}
          className={clsx(
            'px-3 py-1 border rounded text-sm',
            page === currentPage
              ? 'bg-blue-600 text-white border-blue-600'
              : 'text-blue-600 hover:bg-gray-100'
          )}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={`${basePath}/${currentPage + 1}`}
          className="px-3 py-1 border rounded text-sm text-blue-600 hover:bg-gray-100"
        >
          Next →
        </Link>
      )}
    </nav>
  );
}

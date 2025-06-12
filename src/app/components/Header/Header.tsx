'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          GenericCo
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/about" className="text-gray-700 hover:text-blue-700">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-700">Services</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-700">Contact</Link>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-right">
          <Link href="/about" className="block text-gray-700 hover:text-blue-700">About</Link>
          <Link href="/services" className="block text-gray-700 hover:text-blue-700">Services</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-700">Contact</Link>
        </div>
      )}
    </header>
  );
}

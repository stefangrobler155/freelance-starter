'use client';

import { useEffect, useState } from 'react';
import PostGrid from './PostGrid';

let debounceTimeout: NodeJS.Timeout;

export default function BlogSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(async () => {
      const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data);
      setLoading(false);
    }, 500);

    return () => clearTimeout(debounceTimeout);
  }, [query]);

  function clearSearch() {
    setQuery('');
    setResults([]);
    setLoading(false);
  }

  return (
    <section className="mb-10">
      <div className="relative">
        <input
          type="text"
          placeholder="Search blog posts..."
          className="w-full border rounded px-3 py-2 pr-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 text-sm"
          >
            ✕
          </button>
        )}
      </div>

      {loading && <p className="mt-4 text-sm">Searching...</p>}

      {!loading && results.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">Search Results</h2>
          <PostGrid posts={results} />
        </div>
      )}

      {!loading && results.length === 0 && query && (
        <p className="mt-4 text-gray-500">No results found.</p>
      )}
    </section>
  );
}

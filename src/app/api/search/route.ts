import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');

  if (!query) return NextResponse.json([]);

  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed&search=${encodeURIComponent(query)}`
  );

  const data = await res.json();
  return NextResponse.json(data);
}

export async function getPost(slug: string) {
  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return null;

  const posts = await res.json();

  if (!posts.length) return null;

  const post = posts[0];

  const featuredMedia =
    post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;

  return {
    ...post,
    featured_media_url: featuredMedia,
  };
}

export async function getCategories() {
  const res = await fetch(`${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/categories`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}


export async function getService(slug: string) {
  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/services?slug=${slug}&_embed`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return null;

  const data = await res.json();
  if (!data.length) return null;

  return data[0];
}

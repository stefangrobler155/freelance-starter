const FALLBACK_IMAGE = '/fallback.jpg';

async function getPosts() {
  const res = await fetch(`${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed`, {
    next: { revalidate: 60 }, // ISR (cache for 60s)
  });
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
      <p className="text-gray-600 mb-8">Read the latest updates and insights from our team.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post: any) => {
          const featuredImage =
                 post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? FALLBACK_IMAGE;
          return (
            <article key={post.id} className="flex bg-white shadow rounded overflow-hidden p-4">
              {featuredImage && (
                <img
                  src={featuredImage}
                  alt={post.title.rendered}
                  className="w-30 h-30 object-cover p-0.5 rounded-2xl border border-gray-200 mb-4"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  <a href={`/blog/${post.slug}`} className="text-blue-700 hover:underline">
                    {post.title.rendered}
                  </a>
                </h2>
                <div
                  className="text-gray-600 text-sm"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

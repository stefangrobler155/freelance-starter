import CategoryFilter from '@/app/components/Blog/CategoryFilter';
import { notFound } from 'next/navigation';

async function getCategoryBySlug(slug: string) {
  const res = await fetch(`${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/categories?slug=${slug}`);
  const categories = await res.json();
  return categories[0];
}

async function getPostsByCategoryId(categoryId: number) {
  const res = await fetch(`${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed&categories=${categoryId}`);
  return res.json();
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const category = await getCategoryBySlug(slug);
  if (!category) return notFound();

  const posts = await getPostsByCategoryId(category.id);

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Posts in: {category.name}</h1>
      <CategoryFilter categories={[category]} />
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post: any) => {
          const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? '/fallback.jpg';
          return (
            <article key={post.id} className="flex bg-white shadow rounded overflow-hidden p-4">
              <img
                src={featuredImage}
                alt={post.title.rendered}
                className="w-30 h-30 object-cover p-0.5 rounded-2xl border border-gray-200 mb-4"
              />
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

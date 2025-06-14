const FALLBACK_IMAGE = '/fallback.jpg';
import { getCategories } from '@/app/lib/queries'; // Add this import
import CategoryFilter from '../components/Blog/CategoryFilter';
import BlogPostCard from '../components/Blog/BlogPostCard';
import PostGrid from '../components/Blog/PostGrid';

async function getPosts() {
  const res = await fetch(`${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed`, {
    next: { revalidate: 60 }, // ISR (cache for 60s)
  });
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();
  const categories = await getCategories(); // Fetch all categories

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
      <p className="text-gray-600 mb-8">Read the latest updates and insights from our team.</p>

      <CategoryFilter categories={categories} />
      <PostGrid posts={posts} />
      
    </section>
  );
}

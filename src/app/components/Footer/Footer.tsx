import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-white pt-12 pb-6">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-gray-900 text-lg font-semibold mb-2">GenericCo</h2>
          <p className="text-gray-900">
            Crafting modern websites with WordPress and Next.js. Designed for performance and scalability.
          </p>
        </div>

        <div>
          <h3 className="text-gray-900 text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/about" className="text-gray-900 hover:text-blue-700">About</Link></li>
            <li><Link href="/services" className="text-gray-900 hover:text-blue-700">Services</Link></li>
            <li><Link href="/contact" className="text-gray-900 hover:text-blue-700">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-900 text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-900 hover:text-blue-700">Twitter</a>
            <a href="#" className="text-gray-900 hover:text-blue-700">LinkedIn</a>
            <a href="#" className="text-gray-900 hover:text-blue-700">GitHub</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} GenericCo. All rights reserved.
      </div>
    </footer>
  );
}

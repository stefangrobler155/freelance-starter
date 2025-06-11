import Link from 'next/link';
import './globals.css';
import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export const metadata = {
  title: 'Generic Services Site',
  description: 'Showcase your services and testimonials',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header />

        <main className="py-10 px-4 max-w-5xl mx-auto">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
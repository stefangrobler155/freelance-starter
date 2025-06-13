'use client';
import { useEffect, useState } from 'react';
import { fetchServices, fetchTestimonials } from '@/lib/api'; // Adjust the import path as necessary
import TestimonialCarousel from './components/TestimonialCarousel/TestimonialCarousel';

export default function Home() {
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

useEffect(() => {
  fetchServices().then(data => {
    setServices(data);
  });

  fetchTestimonials().then(data => {
    setTestimonials(data);
  });
}, []);

  return (
    
  <>
      {/* HERO */}
      <section>

        <div className="text-center py-20 bg-gray-150">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
            Welcome to GenericCo
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
            Simple, elegant solutions for your digital presence. We build trust through great design and performance.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
      </div>

      </section>
      {/* ABOUT */}
      <section>
        <div className="grid md:grid-cols-2 gap-10 py-12">
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
            <p className="text-gray-700">
              We help clients build fast, modern websites using Next.js, Tailwind CSS, and WordPress. Whether you need a custom landing page or a full CMS setup, we've got you covered.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
            <p className="text-gray-700">
              Our experience with headless WordPress and modern frontend technologies allows us to deliver flexible, scalable, and easy-to-manage web solutions tailored to your goals.
            </p>
          </div>
      </div> 
      </section>

      {/* Our Services */}
      <section>
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: any) => (
            <div key={service.id} className="bg-white p-6 rounded-lg hover:shadow-lg transition">
              <div className='inline-flex items-base justify-center'>
                {service.acf?.service_icon?.url && (
                <img 
                  src={service.acf.service_icon.url}
                  alt={service.title.rendered}
                  className="w-6 h-6 mb-4 mx-auto"
                />
              )}
              <h3 className="font-semibold text-lg mb-1 ml-2" dangerouslySetInnerHTML={{ __html: service.title.rendered }} />
              </div>
              
              <p
                className="text-sm text-gray-600"
                dangerouslySetInnerHTML={{ __html: service.acf.service_description }}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
            <div className="py-12 bg-gray-150">
              <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
              <TestimonialCarousel testimonials={testimonials} />
            </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Online Presence?</h2>
          <p className="text-lg mb-6">
            Contact us today to discuss your project and see how we can help you achieve your goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>
      </section>

  </>
  );
}

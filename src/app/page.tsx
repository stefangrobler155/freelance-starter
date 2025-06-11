'use client';
import { useEffect, useState } from 'react';
import { fetchServices, fetchTestimonials } from '@/lib/api';

export default function Home() {
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

useEffect(() => {
  fetchServices().then(data => {
    console.log('Services:', data);
    setServices(data);
  });

  fetchTestimonials().then(data => {
    console.log('Testimonials:', data); // <-- Check this
    setTestimonials(data);
  });
}, []);

  return (
    <main className="p-6 space-y-12 max-w-5xl mx-auto">
      <section>
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: any) => (
            <div key={service.id} className="bg-white shadow rounded-xl p-4">
              {service.acf?.service_icon?.url && (
                <img
                  src={service.acf.service_icon.url}
                  alt={service.title.rendered}
                  className="w-12 h-12 mb-4"
                />
              )}
              <h2 className="text-xl font-semibold" dangerouslySetInnerHTML={{ __html: service.title.rendered }} />
              <div
                className="text-gray-700 mt-2"
                dangerouslySetInnerHTML={{ __html: service.acf.service_description }}
              />
            </div>
          ))}
        </div>
      </section>

<section>
  <h2 className="text-3xl font-bold mb-6">What Clients Say</h2>
  <div className="space-y-6">
    {testimonials.length === 0 && <p className="text-gray-500">No testimonials found.</p>}
    {testimonials.map((testimonial: any) => (
      <div key={testimonial.id} className="bg-gray-50 border-l-4 border-blue-500 p-4 shadow rounded">
        <p className="italic">"{testimonial.acf?.testimonial_text}"</p>
        <p className="mt-2 font-semibold">
          — {testimonial.acf?.client_name}
          {testimonial.acf?.client_role && (
            <span className="text-sm text-gray-500">, {testimonial.acf.client_role}</span>
          )}
        </p>
      </div>
    ))}
  </div>
</section>

    </main>
  );
}

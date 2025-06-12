'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  title: { rendered: string };
  acf: {
    testimonial_text: string;
    client_name?: string;
    client_role?: string;
    testimonial_image?: {
      url: string;
    };
  };
}

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  const testimonial = testimonials[current];

  return (
    <div className="relative max-w-xl mx-auto p-6 text-center rounded-lg shadow bg-white">
      <h3 className="text-xl font-semibold text-blue-700 mb-2" dangerouslySetInnerHTML={{ __html: testimonial.title.rendered }} />
      <p className="text-gray-700 italic mb-2">
        {testimonial.acf.testimonial_text || 'No testimonial text provided.'}
      </p>
      {
          testimonial.acf.testimonial_image && testimonial.acf.testimonial_image.url && (
            <img
              src={testimonial.acf.testimonial_image.url}
              alt={testimonial.acf.client_name || 'Client Image'}
              className="w-16 h-16 border rounded-full mx-auto my-4" 
            />
          )   
        }
      {testimonial.acf.client_name && (
        <p className="text-sm text-gray-500">– {testimonial.acf.client_name}</p>
      )}
        
        {testimonial.acf.client_role && (
            <p className="text-sm text-gray-500">{testimonial.acf.client_role}</p>
        )}

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full ${index === current ? 'bg-blue-700' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

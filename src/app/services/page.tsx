'use client';

import { useEffect, useState } from "react";
import { fetchServices, fetchTestimonials } from '@/lib/api';

export default function ServicesPage() {
    const [services, setServices] = useState([]);
  
  useEffect(() => {
    fetchServices().then(data => {
      console.log('Services:', data);
      setServices(data);
    });
  }, []);
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
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
  );
}
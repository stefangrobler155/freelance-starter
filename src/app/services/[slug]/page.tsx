import { getService } from '@/app/lib/queries';
import { notFound } from 'next/navigation';
import PackageCard from '@/app/components/services/PackageCard';

type Props = {
  params: Promise<{ slug: string }>; // 👈 make this a Promise
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params; // 👈 await the params object

  const service = await getService(slug);
  if (!service) return notFound();

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{service.title.rendered}</h1>
      <div
        className="text-gray-700 mb-8"
        dangerouslySetInnerHTML={{ __html: service.content.rendered }}
      />

      {service.acf.basic_package_name && (
        <section className="grid md:grid-cols-3 gap-6 mt-12">
            <PackageCard
            title={service.acf.basic_package_name}
            description={service.acf.basic_package_description}
            features={service.acf.basic_package_features}
            price={service.acf.basic_package_price}
            turnaround={service.acf.basic_package_turnaround}
            />

            <PackageCard
            title={service.acf.pro_package_name}
            description={service.acf.pro_package_description}
            features={service.acf.pro_package_features}
            price={service.acf.pro_package_price}
            turnaround={service.acf.pro_package_turnaround}
            />

            <PackageCard
            title={service.acf.premium_package_name}
            description={service.acf.premium_package_description}
            features={service.acf.premium_package_features}
            price={service.acf.premium_package_price}
            turnaround={service.acf.premium_package_turnaround}
            />
        </section>
)}
    </section>
  );
}

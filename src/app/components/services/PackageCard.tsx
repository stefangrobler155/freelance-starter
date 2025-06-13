'use client';

type PackageCardProps = {
  title: string;
  description: string;
  features: string; // HTML string
  price: string;
  turnaround: string;
};

export default function PackageCard({
  title,
  description,
  features,
  price,
  turnaround,
}: PackageCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 max-w-md w-full">
      <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>

      <div
        className="text-sm text-gray-600 mb-4"
        dangerouslySetInnerHTML={{ __html: features }}
      />

      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-semibold text-blue-600">{price}</span>
        <span className="text-sm text-gray-500">{turnaround}</span>
      </div>
    </div>
  );
}

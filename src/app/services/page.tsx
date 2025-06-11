export default function ServicesPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <ul className="space-y-4">
        <li className="border-l-4 border-blue-500 pl-4">
          <h2 className="text-xl font-semibold">Web Design</h2>
          <p className="text-gray-600">Beautiful, user-friendly websites built with modern tools.</p>
        </li>
        <li className="border-l-4 border-blue-500 pl-4">
          <h2 className="text-xl font-semibold">WordPress Development</h2>
          <p className="text-gray-600">Custom themes, plugins, and full WordPress sites.</p>
        </li>
        <li className="border-l-4 border-blue-500 pl-4">
          <h2 className="text-xl font-semibold">Maintenance & Support</h2>
          <p className="text-gray-600">Ongoing support, updates, and security monitoring.</p>
        </li>
      </ul>
    </section>
  );
}
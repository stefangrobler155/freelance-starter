export default function ContactPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        We’d love to hear from you! Reach out with any questions or project inquiries.
      </p>
      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Name" className="w-full border px-4 py-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" />
        <textarea placeholder="Message" className="w-full border px-4 py-2 rounded h-32" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}

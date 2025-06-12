import Image from "next/image";

export default function AboutPage() {
  return (
    <section>
      <div className="flex flex-col bg-gray-150">
        <h1 className="text-4xl font-bold mb-4 ">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md"> 
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">    
            We are a digital agency specializing in modern web development. Our team is passionate about creating innovative solutions that drive results for our clients.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Our mission is to empower businesses with cutting-edge technology and design. We strive to deliver exceptional user experiences and measurable outcomes.
          </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md"> 
            <Image src={"/media/placeholder-1-600px.webp"} alt="About Us" width={600} height={750} className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
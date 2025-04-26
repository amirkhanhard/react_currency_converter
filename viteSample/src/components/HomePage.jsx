export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg md:text-2xl mb-8">We make your dreams come true with creativity and passion.</p>
          <a href="#features" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow hover:bg-gray-100 transition">
            Explore More
          </a>
        </div>
      </section>

    

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600">Building responsive and dynamic websites tailored to your needs.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-gray-600">Crafting intuitive and engaging designs for maximum user satisfaction.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Digital Marketing</h3>
              <p className="text-gray-600">Boost your business reach with targeted and effective marketing strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <p className="text-gray-700 mb-4">"Absolutely fantastic service. Our website looks stunning and works perfectly!"</p>
              <h4 className="font-semibold">— Sarah L.</h4>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <p className="text-gray-700 mb-4">"Creative, professional, and extremely reliable. Highly recommended!"</p>
              <h4 className="font-semibold">— James W.</h4>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <p className="text-gray-700 mb-4">"They transformed our online presence completely. Couldn’t be happier."</p>
              <h4 className="font-semibold">— Emma T.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

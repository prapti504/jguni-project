export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white/70 backdrop-blur shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">JG University</h1>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
          Apply Now
        </button>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Build Your Future <br /> with Modern Education
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          Learn industry-ready skills with expert faculty, modern labs and placement support.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full">
            Get Started
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold">Expert Faculty</h3>
            <p className="text-gray-600 mt-2">Learn from industry experts.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold">Modern Labs</h3>
            <p className="text-gray-600 mt-2">Hands-on practical learning.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold">Placements</h3>
            <p className="text-gray-600 mt-2">Top company opportunities.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
        <p className="mt-2">Join thousands of students today</p>

        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full">
          Apply Now
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600">
        © 2026 JG University. All rights reserved.
      </footer>

    </main>
  );
}
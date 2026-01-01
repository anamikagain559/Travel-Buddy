export default function WhyChooseUs() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Verified Travelers",
          "Smart Matching System",
          "Secure & Trusted Platform",
        ].map((item) => (
          <div key={item} className="p-6 border rounded-xl text-center">
            <h3 className="text-xl font-semibold">{item}</h3>
            <p className="mt-2 text-gray-600">
              Travel with confidence and peace of mind.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

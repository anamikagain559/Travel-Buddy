export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { step: "1", title: "Sign Up", desc: "Create your travel profile" },
          { step: "2", title: "Create Plan", desc: "Add your travel details" },
          { step: "3", title: "Find Buddy", desc: "Match with travelers" },
        ].map((item) => (
          <div key={item.step} className="text-center p-6 border rounded-xl">
            <div className="text-4xl font-bold text-blue-600">
              {item.step}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

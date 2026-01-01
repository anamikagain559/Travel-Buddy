export default function TopTravelers() {
  return (
    <section className="bg-gray-50 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Top Travel Buddies
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <div className="h-20 w-20 bg-gray-200 rounded-full mx-auto" />
            <h3 className="mt-4 text-center font-semibold">
              Traveler {i}
            </h3>
            <p className="text-center text-sm text-gray-600">
              ⭐⭐⭐⭐☆
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

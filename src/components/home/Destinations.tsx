export default function Destinations() {
  const destinations = ["Paris", "Bangkok", "Bali", "Rome", "Tokyo", "Istanbul"];

  return (
    <section className="bg-gray-50 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Popular Destinations
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {destinations.map((place) => (
          <div
            key={place}
            className="p-6 bg-white rounded-xl shadow text-center font-semibold"
          >
            {place}
          </div>
        ))}
      </div>
    </section>
  );
}

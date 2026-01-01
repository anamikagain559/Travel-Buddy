export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">
        Find Your Perfect Travel Buddy
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg">
        Connect with like-minded travelers, plan trips together, and turn solo
        journeys into unforgettable shared adventures.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold">
          Find Travel Buddy
        </button>
        <button className="px-6 py-3 border border-white rounded-xl">
          Explore Travelers
        </button>
      </div>
    </section>
  );
}

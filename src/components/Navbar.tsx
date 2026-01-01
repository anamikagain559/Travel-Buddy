import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          TravelBuddy
        </Link>

        <div className="flex gap-4 text-sm">
          <Link href="/travel-plans">Travel Plans</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </nav>
    </header>
  );
}

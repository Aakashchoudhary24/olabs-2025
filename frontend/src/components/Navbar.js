import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">OLabs</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/experiments">Experiments</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

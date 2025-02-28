import Link from "next/link";
import '../app/globals.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="text-xl font-bold">OLabs</h1>
      <input className="search-bar" type="text" placeholder="Search..."/>
      <ul className="space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/experiments">Experiments</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

    </nav>
  );
}

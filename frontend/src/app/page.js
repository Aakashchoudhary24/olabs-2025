'use client'
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link"; // Import Link

export default function Home() {
  return (
    <section className="home-container">
      <Navbar />
      <div className="hero">
        <h1>Welcome to the Science Lab</h1>
      </div>

      <div className="grid-container">
        {/* Physics */}
        <Link href="/physics">
          <div className="card">
            <h2>Physics</h2>
            <p>Click here to perform experiments</p>
          </div>
        </Link>

        {/* Chemistry */}
        <Link href="/chemistry">
          <div className="card">
            <h2>Chemistry</h2>
            <p>Click here to perform experiments</p>
          </div>
        </Link>

        {/* Biology */}
        <Link href="/biology">
          <div className="card">
            <h2>Biology</h2>
            <p>Click here to perform experiments</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

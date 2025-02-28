'use client'
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section className="home-container">
      <Navbar/>
      <div className="hero">
        <h1>Welcome to the Science Lab</h1>
      </div>

      <div className="grid-container">
        <div className="card">
          <h2>Physics</h2>
          <p>Click here to perform experiments</p>
        </div>
        <div className="card">
          <h2>Chemistry</h2>
          <p>Click here to perform experiments</p>
        </div>
        <div className="card">
          <h2>Biology</h2>
          <p>Click here to perform experiments</p>
        </div>
      </div>
    </section>
  );
}

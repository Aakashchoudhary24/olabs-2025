"use client";
import React from "react";
import "./globals.css"; // Ensure styles are applied

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          {/* Navbar - Fixed at the top */}
          <nav className="navbar">
            <h1>OLabs</h1>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>

          {/* Hero Section Placeholder */}
          <section className="hero">
            <h2>Welcome to OLabs</h2>
            <p>Innovate, Learn, and Create</p>
          </section>

          {/* Main Content */}
          <main className="content">{children}</main>

          {/* Footer */}
          <footer className="footer">© 2025 My Website</footer>
        </div>
      </body>
    </html>
  );
}

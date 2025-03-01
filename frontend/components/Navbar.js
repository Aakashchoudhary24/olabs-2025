'use client';

import Link from 'next/link';
import { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchQuery.trim() === '') {
            alert('Please enter a search query');
            return;
        }
        
        try {
            const response = await fetch(`http://localhost:5000/search?q=${searchQuery}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: searchQuery })
            });
            
            const data = await response.json();
            setSearchResults(data.results || []);
            setSearchPerformed(true);
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    return (
        <>
            {/* Navbar Section */}
            <div className="nav-container">
                <nav className="navbar">
                    <div className="logo">
                        <Link href="/">OLabs</Link>
                    </div>
                    <ul className="nav-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                    <form className="search-form" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>
                </nav>
            </div>

            {/* Search Results Section - Moved Outside Navbar */}
            {searchPerformed && (
                <div className="search-results-container">
                    {searchResults.length > 0 ? (
                        <div className="search-results-grid">
                            {searchResults.map((result, index) => (
                                <div key={index} className="search-card">
                                    <h3>{result.title}</h3>
                                    <p><strong>Subject:</strong> {result.subject}</p>
                                    <p>{result.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            )}
        </>
    );
}

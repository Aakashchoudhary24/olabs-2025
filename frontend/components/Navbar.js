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
        <div>
            <nav className="navbar">
                <div className="logo">
                    <Link href="/">OLabs</Link>
                </div>
                <ul className="nav-links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/maths">Contact</Link></li>
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
            {!searchPerformed ? (
                <div className="subject-container">
                    <div className="subject-card"><Link href="/physics">Physics</Link></div>
                    <div className="subject-card"><Link href="/chemistry">Chemistry</Link></div>
                    <div className="subject-card"><Link href="/maths">Maths</Link></div>
                </div>
            ) : (
                <div className="search-results">
                    {searchResults.length > 0 ? (
                        <ul>
                            {searchResults.map((result, index) => (
                                <li key={index}>
                                    <strong>{result.title}</strong> - {result.subject} <br />
                                    <em>{result.description}</em>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            )}
        </div>
    );
}

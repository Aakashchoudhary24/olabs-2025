'use client';

import Link from 'next/link';
import { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState(''); // Filter criteria

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
            setFilteredResults(data.results || []); // Initialize filtered results
            setSearchPerformed(true);
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    const handleFilterChange = (e) => {
        const subject = e.target.value;
        setSelectedSubject(subject);

        if (subject === '') {
            setFilteredResults(searchResults); // Show all results if no filter is applied
        } else {
            const filtered = searchResults.filter(item => item.subject.toLowerCase() === subject.toLowerCase());
            setFilteredResults(filtered);
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

            {/* Filter Dropdown */}
            {searchPerformed && searchResults.length > 0 && (
                <div className="filter-container">
                    <label htmlFor="subject-filter">Filter by Subject: </label>
                    <select id="subject-filter" value={selectedSubject} onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Maths">Maths</option>
                    </select>
                </div>
            )}

            {/* Search Results Section */}
            {searchPerformed && (
                <div className="search-results-container">
                    {filteredResults.length > 0 ? (
                        <div className="search-results-grid">
                            {filteredResults.map((result, index) => (
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
'use client';
import Navbar from "@/components/Navbar";
import './globals.css'
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="subject-container">
                <div className="subject-card physics-card">
                    <Link href="/physics">PHYSICS</Link>
                </div>
                <div className="subject-card chemistry-card">
                    <Link href="/chemistry">CHEMISTRY</Link>
                </div>
                <div className="subject-card maths-card">
                    <Link href="/maths">MATHS</Link>
                </div>
            </div>
        </div>
    );
}
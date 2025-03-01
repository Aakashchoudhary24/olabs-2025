'use client'
import Navbar from "@/components/Navbar"
import '../../styles/subjects.css'

export default function Physics() {
    return (
        <div className="physics">
            <Navbar />
            <div className="subject-content">
                <h1>Physics</h1>
                <p>Welcome to the Physics page. Here you will find various experiments and concepts.</p>
            </div>
        </div>
    );
}   

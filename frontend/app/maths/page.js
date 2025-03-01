'use client'
import Navbar from "@/components/Navbar"
import '../../styles/subjects.css'

export default function Maths() {
    return (
        <div className="maths">
            <Navbar />
            <div className="subject-content">
                <h1>Maths</h1>
                <p>Welcome to the Maths page. Here you will find various experiments and concepts.</p>
            </div>
        </div>
    );
}   

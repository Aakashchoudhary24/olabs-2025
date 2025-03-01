'use client'
import Navbar from "@/components/Navbar"
import '../../styles/subjects.css'

export default function Chemistry(){
    return(
        <div className="chemistry">
            <Navbar />
            <div className="subject-content">
                <h1>Chemistry</h1>
                <p>Welcome to the Chemistry page. Here you will find various experiments and concepts.</p>
            </div>
        </div>
    )
}
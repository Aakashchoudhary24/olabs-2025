'use client'

import Navbar from "@/components/Navbar"
import '../../styles/about.css';

export default function About(){
    return(
        <div className="about-page">
            <Navbar/>
            <div className="about-para">
                <h1>Online Labs (OLabs)</h1>
                <p>The Online Labs is an educational initiative pioneered by 
                AmritaCREATE, the Amrita Center for Research in Analytics 
                Technology, Government of India.</p>

                <h2>OLabs Hackathon, 2025</h2>
                <p>The OLabs Hackathon (OLabsThon) is a prestigious national event.</p>

                <h1>Need:</h1>
                <ul>
                    <li>Targets rural areas where access to labs is limited.</li>
                    <li>OLabs integrates AI, Virtual Labs, Unity, and more to enhance learning.</li>
                </ul>

                <h1>Aim:</h1>
                <ul>
                    <li>To make OLabs a self-study platform/tool.</li>
                    <li>Implement AI and make it a part of daily student lives.</li>
                    <li>Make educational resources more accessible.</li>
                    <li>Implement search features to correlate topics and support deep understanding.</li>
                </ul>

                <h1>Idea/Proposal:</h1>
                <ul>
                    <li>Develop a web application and deploy it with Next.js.</li>
                    <li>The web application can either act as a demo or be integrated into OLabs.</li>
                    <li>Main goal: Implement a search feature to help students find and relate resources.</li>
                    <li>Users can upload documents or integrate with OLabs for structured learning.</li>
                </ul>
            </div>
        </div>
    )
}

'use client'
import Navbar from "@/components/Navbar";
import '../../styles/subjects.css';

export default function Biology() {
    const experiments = [
        { id: 1, title: "Photosynthesis Experiment", pdf: "/pdfs/photosynthesis.pdf" },
        { id: 2, title: "Cell Structure Analysis", pdf: "/pdfs/cell-structure.pdf" },
        { id: 3, title: "DNA Extraction", pdf: "/pdfs/dna-extraction.pdf" }
    ];

    const openPDF = (pdfPath) => {
        window.open(pdfPath, "_blank");
    };

    return (
        <div className="biology">
            <Navbar />
            <div className="subject-content">
                <h1 className="page-title">Biology</h1>
                <p className="page-subtitle">Explore various biology experiments</p>
                <div className="experiments-container">
                    {experiments.map((exp) => (
                        <div key={exp.id} className="experiment-card" onClick={() => openPDF(exp.pdf)}>
                            {exp.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

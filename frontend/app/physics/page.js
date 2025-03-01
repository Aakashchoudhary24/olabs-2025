'use client'
import Navbar from "@/components/Navbar";
import '../../styles/subjects.css';

export default function Physics() {
    const experiments = [
        { id: 1, title: "Acceleration due to Gravity", pdf: "/pdfs/Acceleration__due_to_gravity.pdf" },
        { id: 2, title: "Buoyant Force", pdf: "/pdfs/Buyoant_Force.pdf" },
        { id: 3, title: "Diffraction", pdf: "/pdfs/Diffraction.pdf" },
        { id: 4, title: "Ohm’s Law", pdf: "/pdfs/Ohms_1.pdf" },
        { id: 5, title: "Potentiometer", pdf: "/pdfs/Potentiometer.pdf" },
        { id: 6, title: "Radioactivity", pdf: "/pdfs/Radioactivity.pdf" },
        { id: 7, title: "Simple Harmonic Motion", pdf: "/pdfs/Simple_Harmonic_Motion.pdf" },
        { id: 8, title: "Simple Pendulum", pdf: "/pdfs/Simple_Pendulum.pdf" },
        { id: 9, title: "Thin Lens", pdf: "/pdfs/Thin_lens_1.pdf" },
        { id: 10, title: "Waves", pdf: "/pdfs/Waves.pdf" }
    ];

    const openPDF = (pdfPath) => {
        window.open(pdfPath, "_blank");
    };

    return (
        <div className="physics">
            <Navbar />
            <div className="subject-content">
                <h1 className="page-title">Physics</h1>
                <p className="page-subtitle">Explore various physics experiments</p>
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

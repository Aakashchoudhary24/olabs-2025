'use client'
import Navbar from "@/components/Navbar";
import '../../styles/subjects.css';

export default function Maths() {
    const experiments = [
        { id: 1, title: "Circle & Parabola", pdf: "/pdfs/Cicle_Parabola.pdf" },
        { id: 2, title: "Conic Sections", pdf: "/pdfs/Conic_Sections.pdf" },
        { id: 3, title: "Domain & Range", pdf: "/pdfs/Domain_Range.pdf" },
        { id: 4, title: "Ellipse & Hyperbola", pdf: "/pdfs/Ellipse_Hyperbola.pdf" },
        { id: 5, title: "Functions", pdf: "/pdfs/Functions.pdf" },
        { id: 6, title: "Limits", pdf: "/pdfs/Limits.pdf" },
        { id: 7, title: "Maxima & Minima", pdf: "/pdfs/Maxima_Minima.pdf" },
        { id: 8, title: "Scaling of Graphs", pdf: "/pdfs/Scaling_of_Graph.pdf" },
        { id: 9, title: "Shift of Graphs", pdf: "/pdfs/Shift_of_Graph.pdf" },
        { id: 10, title: "Straight Lines", pdf: "/pdfs/Straight_Lines.pdf" },
        { id: 11, title: "Trigonometry", pdf: "/pdfs/Trigonometery.pdf" },
        { id: 12, title: "Trigonometric Equations", pdf: "/pdfs/Trigonometric_Equations.pdf" },
        { id: 13, title: "Trigonometric Identities", pdf: "/pdfs/Trigonommetric_Identities.pdf" }
    ];

    const openPDF = (pdfPath) => {
        window.open(pdfPath, "_blank");
    };

    return (
        <div className="math">
            <Navbar />
            <div className="subject-content">
                <h1 className="page-title">Math</h1>
                <p className="page-subtitle">Explore various math experiments</p>
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

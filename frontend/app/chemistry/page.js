'use client'
import Navbar from "@/components/Navbar";
import '../../styles/subjects.css';

export default function Chemistry() {
    const experiments = [
        { id: 1, title: "Calibration of Glassware", pdf: "/pdfs/Chem11_Lab2_CalibrationGlassware_V4_03-04-2022.pdf" },
        { id: 2, title: "Acid-Base Titration", pdf: "/pdfs/Chem11_Lab4_AcidBaseTitration_V4_03-04-2022.pdf" },
        { id: 3, title: "Thermochemistry", pdf: "/pdfs/Chem11_Lab6_ThermoChemistry_V4_03-04-2022.pdf" },
        { id: 4, title: "Le Chatelier's Principle", pdf: "/pdfs/CHM12_Experiment_1_LeChatelier.pdf" },
        { id: 5, title: "Acid-Base Titrations", pdf: "/pdfs/CHM12_Experiment_7_AcidBaseTitrations.pdf" },
        { id: 6, title: "Chromatography", pdf: "/pdfs/Chromotography.pdf" },
        { id: 7, title: "Colloids", pdf: "/pdfs/Colloids.pdf" },
        { id: 8, title: "Chemical Kinetics", pdf: "/pdfs/Kkinetics.pdf" },
        { id: 9, title: "Titrations", pdf: "/pdfs/Titrations.pdf" },
        { id: 10, title: "Transformers", pdf: "/pdfs/Transformers.pdf" }
    ];

    const openPDF = (pdfPath) => {
        window.open(pdfPath, "_blank");
    };

    return (
        <div className="chemistry">
            <Navbar />
            <div className="subject-content">
                <h1 className="page-title">Chemistry</h1>
                <p className="page-subtitle">Explore various chemistry experiments</p>
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

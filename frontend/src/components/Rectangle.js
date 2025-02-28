import React from "react";
import "@/components/Rectangle.css";
import Navbar_new from "@/components/Navbar_new";

const Rectangle = () => {
  return (
    <div>
      <Navbar_new />
      <div className="page-container">
        <h2 className="page-heading">Rectangle Section</h2>
        <p>This is a reusable rectangle component.</p>
        <div className="main-rectangle">
          <div className="grid-container">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="small-box"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;

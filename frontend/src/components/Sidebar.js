// "use client";
// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md"
//       >
//         {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//       </button>

//       {/* Sidebar (Only Shows When Open) */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="p-6">
//           <h2 className="text-2xl font-bold mb-6">OLabs 2025</h2>
//           <ul className="space-y-4">
//             <li>
//               <a href="#home" onClick={() => setIsOpen(false)} className="block text-lg hover:underline">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#experiments" onClick={() => setIsOpen(false)} className="block text-lg hover:underline">
//                 Experiments
//               </a>
//             </li>
//             <li>
//               <a href="#contact" onClick={() => setIsOpen(false)} className="block text-lg hover:underline">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

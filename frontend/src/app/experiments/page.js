import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Experiments() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="flex items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold">Experiments Page</h1>
      </div>
      <Footer />
    </main>
  );
}

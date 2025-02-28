export default function Home() {
  return (
    <section className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to the Science Lab</h1>
      </div>

      {/* Grid for the 3 Cards */}
      <div className="grid-container">
        <div className="card">
          <h2>Physics</h2>
          <p>Click here to perform experiments</p>
        </div>
        <div className="card">
          <h2>Chemistry</h2>
          <p>Click here to perform experiments</p>
        </div>
        <div className="card">
          <h2>Biology</h2>
          <p>Click here to perform experiments</p>
        </div>
      </div>

      {/* Space Below for Images */}
      <div className="image-section">
        <img src="/images/physics.png" alt="Physics" className="grid-image" />
        <img src="/images/chemistry.png" alt="Chemistry" className="grid-image" />
        <img src="/images/biology.png" alt="Biology" className="grid-image" />
      </div>
    </section>
  );
}

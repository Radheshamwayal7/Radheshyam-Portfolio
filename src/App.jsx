import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="placeholder-section">
          <h2>About</h2>
        </section>

        <section id="skills" className="placeholder-section">
          <h2>Skills</h2>
        </section>

        <section id="projects" className="placeholder-section">
          <h2>Projects</h2>
        </section>

        <section id="experience" className="placeholder-section">
          <h2>Experience</h2>
        </section>

        <section id="contact" className="placeholder-section">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}

export default App;
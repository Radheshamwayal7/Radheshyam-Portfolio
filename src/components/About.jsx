import {
  GraduationCap,
  Code2,
  Database,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="about-header">
          <span className="section-tag">ABOUT ME</span>

          <h2>
            Building my path as a{" "}
            <span>Java Full Stack Developer.</span>
          </h2>

          <p>
            I'm Radheshyam Wayal, an aspiring Java Full Stack Developer
            focused on building practical projects, solving problems, and
            continuously improving my development skills.
          </p>
        </div>


        {/* =========================
            MAIN CONTENT
        ========================= */}

        <div className="about-grid">

          {/* LEFT */}
          <div className="about-story">

            <div className="story-card">
              <div className="story-icon">
                <Code2 size={21} />
              </div>

              <div>
                <h3>My Development Journey</h3>

                <p>
                  I have built a foundation in HTML, CSS, JavaScript,
                  Java, Object-Oriented Programming, SQL and MySQL.
                  I'm currently expanding my skills through Java Full
                  Stack Development while learning React.js and
                  Spring Boot.
                </p>
              </div>
            </div>


            <div className="story-card">
              <div className="story-icon">
                <BriefcaseBusiness size={21} />
              </div>

              <div>
                <h3>Learning Through Projects</h3>

                <p>
                  My projects include a Myntra Clone Store, SkyCast
                  Weather Forecast App, and a Smart Hospital Management
                  System. These projects help me apply what I learn
                  while improving my development skills.
                </p>
              </div>
            </div>


            <a href="#projects" className="about-link">
              Explore my projects
              <ArrowUpRight size={17} />
            </a>

          </div>


          {/* RIGHT */}
          <div className="about-highlights">

            {/* EDUCATION */}
            <div className="highlight-card">
              <div className="highlight-icon">
                <GraduationCap size={22} />
              </div>

              <div>
                <span>EDUCATION</span>
                <h3>Bachelor of Computer Applications</h3>
                <p>
                  Samarth College of Computer Science, Belhe
                </p>
                <small>
                  Affiliated to Savitribai Phule Pune University
                </small>
              </div>
            </div>


            {/* CURRENT FOCUS */}
            <div className="highlight-card">
              <div className="highlight-icon">
                <Code2 size={22} />
              </div>

              <div>
                <span>CURRENT FOCUS</span>
                <h3>Java Full Stack Development</h3>
                <p>
                  Java • Spring Boot • React.js • REST APIs
                </p>
              </div>
            </div>


            {/* DATABASE */}
            <div className="highlight-card">
              <div className="highlight-icon">
                <Database size={22} />
              </div>

              <div>
                <span>DATABASE</span>
                <h3>MySQL & PostgreSQL</h3>
                <p>
                  SQL • Database fundamentals • JDBC
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
import {
  SiReact,
  SiMysql,
  SiSpringboot,
} from "react-icons/si";

import { FaCode, FaJava } from "react-icons/fa";
import { ArrowUpRight, Download } from "lucide-react";
import { useRef } from "react";
import "../styles/Hero.css";

function Hero() {
  const imageWrapperRef = useRef(null);

  /* =========================================
     INTERACTIVE IMAGE
  ========================================= */

  const handleMouseMove = (e) => {
    const element = imageWrapperRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((centerY - y) / centerY) * 5;

    element.style.setProperty("--mouse-x", `${rotateY}deg`);
    element.style.setProperty("--mouse-y", `${rotateX}deg`);
  };

  const handleMouseLeave = () => {
    const element = imageWrapperRef.current;

    if (!element) return;

    element.style.setProperty("--mouse-x", "0deg");
    element.style.setProperty("--mouse-y", "0deg");
  };

  return (
    <section className="hero" id="home">

      {/* =========================================
          LEFT SIDE
      ========================================= */}

      <div className="hero-content">

        <div className="availability">
          <span className="availability-icon">✦</span>
          Open to internships & opportunities
        </div>

        <p className="hero-greeting">
          Hey, I'm <span>Radheshyam</span>
        </p>

        <h1>
          Java Full Stack
          <br />
          <span>Developer</span>
        </h1>

        <p className="hero-description">
          I build modern, responsive and user-friendly web applications
          using Java, Spring Boot, React and MySQL.
        </p>

        {/* BUTTONS */}

        <div className="hero-buttons">

          <a
            href="#projects"
            className="primary-btn"
          >
            View My Work
            <ArrowUpRight size={18} />
          </a>

          <a
            href="/resume.pdf"
            className="secondary-btn"
            download
          >
            <Download size={17} />
            Download Resume
          </a>

        </div>

        {/* =========================================
            SOCIAL LINKS
        ========================================= */}

        <div className="social-links">

          {/* GitHub */}

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.14c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17A10.9 10.9 0 0 1 12 6.16c.97 0 1.94.13 2.85.39 2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.04.78 2.1v3.12c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
              />
            </svg>
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
              />
            </svg>
          </a>

        </div>

      </div>

      {/* =========================================
          RIGHT SIDE VISUAL
      ========================================= */}

      <div className="hero-visual">

        {/* Orange Glow */}

        <div className="hero-image-glow"></div>

        {/* Developer Image */}

        <div
          className="developer-image-wrapper"
          ref={imageWrapperRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="/developer-character.png"
            alt="Radheshyam - Java Full Stack Developer"
            className="developer-character"
          />
        </div>

        {/* =========================================
            JAVA
        ========================================= */}

        <div className="tech-card java-card">
          <FaJava />
          <small>Java</small>
        </div>

        {/* =========================================
            REACT
        ========================================= */}

        <div className="tech-card react-card">
          <SiReact />
          <small>React</small>
        </div>

        {/* =========================================
            CODE
        ========================================= */}

        <div className="tech-card code-card-new">
          <FaCode />
        </div>

        {/* =========================================
            MYSQL
        ========================================= */}

        <div className="tech-card mysql-card">
          <SiMysql />
          <small>MySQL</small>
        </div>

        {/* =========================================
            SPRING BOOT
        ========================================= */}

        <div className="tech-card spring-card">
          <SiSpringboot />
          <small>Spring Boot</small>
        </div>

      </div>

    </section>
  );
}

export default Hero;
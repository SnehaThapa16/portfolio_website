"use client"
import { Github, Linkedin, Mail, Star, Settings } from "lucide-react"
import "./PortfolioHomepage.css"
import AboutSection from "./AboutSection"
import TechStack from "./TechStack"
import ProjectGallery from "./ProjectGallery"
import ContactSection from "./ContactSection"
import Footer from "./Footer"

export default function PortfolioHomepage() {
  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="header">
        <div className="logo">Sneha Thapa</div>
        <nav className="navigation">
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Projects", href: "#projects" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.name}
              <span className="nav-underline"></span>
            </a>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main id="home" className="main-content">
        {/* Left Column - Introduction + Social Icons */}
        <div className="intro-section">
          <h1 className="main-heading">
            Hi, my name is <span className="gradient-text">Sneha Thapa</span>
          </h1>

          <p className="intro-text">
            I craft digital experiences where code meets creativity, turning innovative ideas into beautiful, functional
            realities.
          </p>

          {/* Social Icons - After intro text */}
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <Linkedin className="social-icon" />
              <div className="social-overlay"></div>
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link github">
              <Github className="social-icon" />
              <div className="social-overlay"></div>
            </a>

            <a href="mailto:sneha@example.com" className="social-link email">
              <Mail className="social-icon" />
              <div className="social-overlay"></div>
            </a>
          </div>
        </div>

        {/* Right Column - Photo with ENHANCED Magical Particle System */}
        <div className="photo-section">
          <div className="photo-container">
            {/* Main Photo Container */}
            <div className="photo-wrapper">
              <img src="/images/sneha.jpg" alt="Sneha Thapa" className="profile-photo" />
            </div>

            {/* ENHANCED MAGICAL PARTICLE CONSTELLATION SYSTEM */}
            <div className="particle-system">
              {/* REVOLVING ELEMENTS - 4 Orbital Rings with Stars & Settings */}
              <div className="revolving-container">
                {/* Orbit Ring 1 - Closest */}
                <div className="orbit-ring-1">
                  <div className="revolving-hex-1">
                    <div className="hex-particle"></div>
                  </div>
                  <div className="revolving-plus-1">
                    <div className="plus-particle"></div>
                  </div>
                  <div className="revolving-ring-1">
                    <div className="ring-particle"></div>
                  </div>
                  <div className="revolving-cross-1">
                    <div className="sparkle-cross"></div>
                  </div>
                  <div className="revolving-star-1">
                    <Star className="revolving-star-icon" />
                  </div>
                  <div className="revolving-settings-1">
                    <Settings className="revolving-settings-icon" />
                  </div>
                </div>

                {/* Orbit Ring 2 */}
                <div className="orbit-ring-2">
                  <div className="revolving-hex-2">
                    <div className="hex-particle"></div>
                  </div>
                  <div className="revolving-plus-2">
                    <div className="plus-particle"></div>
                  </div>
                  <div className="revolving-ring-2">
                    <div className="ring-particle"></div>
                  </div>
                  <div className="revolving-arrow-1">
                    <div className="arrow-particle"></div>
                  </div>
                  <div className="revolving-star-2">
                    <Star className="revolving-star-icon" />
                  </div>
                  <div className="revolving-settings-2">
                    <Settings className="revolving-settings-icon" />
                  </div>
                </div>

                {/* Orbit Ring 3 */}
                <div className="orbit-ring-3">
                  <div className="revolving-hex-3">
                    <div className="hex-particle"></div>
                  </div>
                  <div className="revolving-plus-3">
                    <div className="plus-particle"></div>
                  </div>
                  <div className="revolving-ring-3">
                    <div className="ring-particle"></div>
                  </div>
                  <div className="revolving-cross-2">
                    <div className="sparkle-cross"></div>
                  </div>
                  <div className="revolving-star-3">
                    <Star className="revolving-star-icon" />
                  </div>
                  <div className="revolving-settings-3">
                    <Settings className="revolving-settings-icon" />
                  </div>
                </div>

                {/* Orbit Ring 4 - Outermost */}
                <div className="orbit-ring-4">
                  <div className="revolving-hex-4">
                    <div className="hex-particle"></div>
                  </div>
                  <div className="revolving-plus-4">
                    <div className="plus-particle"></div>
                  </div>
                  <div className="revolving-arrow-2">
                    <div className="arrow-particle"></div>
                  </div>
                  <div className="revolving-star-4">
                    <Star className="revolving-star-icon" />
                  </div>
                  <div className="revolving-settings-4">
                    <Settings className="revolving-settings-icon" />
                  </div>
                </div>
              </div>

              {/* Medium Particles - 8 total */}
              <div className="particle-medium"></div>
              <div className="particle-medium"></div>
              <div className="particle-medium"></div>
              <div className="particle-medium"></div>
              <div className="particle-medium"></div>
              <div className="particle-medium"></div>
              <div className="particle-medium"></div>

              {/* Small Dust Particles - 8 total */}
              <div className="particle-small"></div>
              <div className="particle-small"></div>
              <div className="particle-small"></div>
              <div className="particle-small"></div>
              <div className="particle-small"></div>
              <div className="particle-small"></div>
              <div className="particle-small"></div>
              <div className="particle-small"></div>

              {/* Small Moving Stars - 8 total */}
              <div className="moving-star"></div>
              <div className="moving-star"></div>
              <div className="moving-star"></div>
              <div className="moving-star"></div>
              <div className="moving-star"></div>
              <div className="moving-star"></div>
              <div className="moving-star"></div>
              <div className="moving-star"></div>

              {/* Micro Stars - 8 total */}
              <div className="micro-star"></div>
              <div className="micro-star"></div>
              <div className="micro-star"></div>
              <div className="micro-star"></div>
              <div className="micro-star"></div>
              <div className="micro-star"></div>
              <div className="micro-star"></div>
              <div className="micro-star"></div>

              {/* Floating Orbs - 4 total */}
              <div className="floating-orb"></div>
              <div className="floating-orb"></div>
              <div className="floating-orb"></div>
              <div className="floating-orb"></div>

              {/* Energy Dots - 6 total */}
              <div className="energy-dot"></div>
              <div className="energy-dot"></div>
              <div className="energy-dot"></div>
              <div className="energy-dot"></div>
              <div className="energy-dot"></div>
              <div className="energy-dot"></div>

              {/* Cosmic Dust - 8 total */}
              <div className="cosmic-dust"></div>
              <div className="cosmic-dust"></div>
              <div className="cosmic-dust"></div>
              <div className="cosmic-dust"></div>
              <div className="cosmic-dust"></div>
              <div className="cosmic-dust"></div>
              <div className="cosmic-dust"></div>
              <div className="cosmic-dust"></div>

              {/* Tiny Glitter - 8 total */}
              <div className="glitter-tiny"></div>
              <div className="glitter-tiny"></div>
              <div className="glitter-tiny"></div>
              <div className="glitter-tiny"></div>
              <div className="glitter-tiny"></div>
              <div className="glitter-tiny"></div>
              <div className="glitter-tiny"></div>
              <div className="glitter-tiny"></div>

              {/* Tech-inspired Geometric Particles - 4 total */}
              <div className="tech-particle diamond"></div>
              <div className="tech-particle"></div>
              <div className="tech-particle triangle"></div>
              <div className="tech-particle diamond"></div>

              {/* Code Symbols - 4 total */}
              <div className="code-symbol">{"<>"}</div>
              <div className="code-symbol">{"{ }"}</div>
              <div className="code-symbol">{"[ ]"}</div>
              <div className="code-symbol">{"( )"}</div>

              {/* NEW: Static Dot Clusters - 4 total */}
              <div className="dot-cluster static-cluster-1"></div>
              <div className="dot-cluster static-cluster-2"></div>
              <div className="dot-cluster static-cluster-3"></div>
              <div className="dot-cluster static-cluster-4"></div>

              {/* NEW: Static Lightning Bolts - 4 total */}
              <div className="lightning-particle static-lightning-1"></div>
              <div className="lightning-particle static-lightning-2"></div>
              <div className="lightning-particle static-lightning-3"></div>
              <div className="lightning-particle static-lightning-4"></div>
            </div>

            {/* Enhanced Cosmic Background Glow */}
            <div className="background-glow"></div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack">
        <TechStack />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectGallery />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

"use client"

import { Github, Linkedin, Mail, ArrowUp, Heart, Coffee } from "lucide-react"
import "./Footer.css"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="brand-name">Sneha Thapa</h3>
            <p className="brand-tagline">Crafting digital experiences with passion</p>
          </div>

          {/* Right Side - Social Links & Back to Top */}
          <div className="footer-right">
            {/* Social Links */}
            <div className="social-section">
              <p className="social-title">Let's Connect</p>
              <div className="social-links">
                <a
                  href="https://github.com/SnehaThapa16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github"
                  aria-label="GitHub Profile"
                >
                  <Github className="social-icon" />
                  <span className="social-tooltip">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sneha-thapa-00a353270"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="social-icon" />
                  <span className="social-tooltip">LinkedIn</span>
                </a>
                <a href="thapasneha444@gmail.com" className="social-link email" aria-label="Send Email">
                  <Mail className="social-icon" />
                  <span className="social-tooltip">Email</span>
                </a>
              </div>
            </div>

            {/* Back to Top Button */}
            <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
              <ArrowUp className="arrow-icon" />
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="copyright-section">
            <p className="copyright-text">
              © {currentYear} Sneha Thapa. Made with <Heart className="heart-icon" /> and lots of{" "}
              <Coffee className="coffee-icon" />
            </p>
            <div className="footer-links">
              <a href="#privacy" className="footer-link">
                Privacy Policy
              </a>
              <span className="separator">•</span>
              <a href="#terms" className="footer-link">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="footer-decorations">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-3"></div>
          <div className="floating-dot dot-4"></div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

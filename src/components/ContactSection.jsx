"use client"

import { Phone, Mail, MapPin, Send, User, MessageSquare, Heart, Coffee, Zap, CheckCircle, X } from "lucide-react"
import { useState } from "react"
import "./ContactSection.css"

const ContactSection = () => {
  const [showModal, setShowModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xwpbapvb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        // Show success modal
        setShowModal(true)
        // Reset form
        form.reset()
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Sorry, there was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="title-underline">
            <div className="underline-dot"></div>
          </div>
          <p className="contact-subtitle">Ready to bring your ideas to life? Let's chat!</p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="card-header">
                <div className="header-icon">
                  <Coffee className="coffee-icon" />
                  {/* Steam/Vapor Effects */}
                  <div className="steam-container">
                    <div className="steam steam-1"></div>
                    <div className="steam steam-2"></div>
                    <div className="steam steam-3"></div>
                    <div className="steam steam-4"></div>
                    <div className="steam steam-5"></div>
                  </div>
                </div>
                <h3 className="info-title">Let's grab a coffee!</h3>
                <p className="info-description">
                  I'm always excited to discuss new projects and creative ideas. Drop me a message and let's make
                  something amazing together.
                </p>
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon phone-icon">
                    <Phone className="icon" />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Call me</span>
                    <span className="contact-value">+91 8894876244</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon email-icon">
                    <Mail className="icon" />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Email me</span>
                    <span className="contact-value">thapasneha444@gmail.com</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon location-icon">
                    <MapPin className="icon" />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Visit me</span>
                    <span className="contact-value">Dalhousie, Himachal Pradesh, India</span>
                  </div>
                </div>
              </div>

              {/* Fun Stats */}
              <div className="fun-stats">
                <div className="stat-item">
                  <Heart className="stat-icon" />
                  <span className="stat-number">Innovate</span>
                  <span className="stat-label">Design + Development</span>
                </div>
                <div className="stat-item">
                  <Zap className="stat-icon" />
                  <span className="stat-number">24h</span>
                  <span className="stat-label">Response Time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <h3 className="form-title">Send me a message</h3>
              <p className="form-subtitle">I'll get back to you within 24 hours!</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group half">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <div className="input-wrapper">
                    <User className="input-icon" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="form-input"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="form-group half">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <div className="input-wrapper">
                    <Mail className="input-icon" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      className="form-input"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <div className="input-wrapper">
                  <MessageSquare className="input-icon textarea-icon" />
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    className="form-textarea"
                    rows="4"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className={`submit-button ${isSubmitting ? "loading" : ""}`}
                disabled={isSubmitting}
              >
                <Send className="button-icon" />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <div className="button-ripple"></div>
                {isSubmitting && <div className="loading-spinner"></div>}
              </button>
            </form>
          </div>
        </div>

        {/* Creative Background Elements */}
        <div className="creative-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="code-snippet snippet-1">{"{ }"}</div>
          <div className="code-snippet snippet-2">{"< />"}</div>
          <div className="geometric-pattern pattern-1"></div>
          <div className="geometric-pattern pattern-2"></div>
        </div>
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <X className="close-icon" />
            </button>

            <div className="modal-body">
              <div className="success-icon-container">
                <CheckCircle className="success-icon" />
                <div className="success-ripple"></div>
              </div>

              <h2 className="modal-title">Thank You!</h2>
              <p className="modal-message">Your details has been successfully submitted. Thanks!</p>

              <button className="modal-button" onClick={closeModal}>
                OK
              </button>

              <div className="modal-signature">thapasneha</div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ContactSection

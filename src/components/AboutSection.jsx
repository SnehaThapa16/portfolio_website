"use client"
import { useEffect, useRef, useState } from "react"
import { GraduationCap, Calendar, Award } from "lucide-react"
import "./AboutSection.css"

export default function AboutSection() {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const sectionRef = useRef(null)
  const timelineItemsRef = useRef([])

  const timelineData = [
    {
      id: 1,
      year: "2019-2020",
      title: "Kendriya Vidyalaya Bakloh Cantt.",
      subtitle: "Secondary School Certification",
      percentage: "86.4%",
      icon: GraduationCap,
      side: "right",
    },
    {
      id: 2,
      year: "2021-2022",
      title: "Kendriya Vidyalaya Bakloh Cantt.",
      subtitle: "Higher Secondary Certification",
      percentage: "81.8%",
      icon: Award,
      side: "left",
    },
    {
      id: 3,
      year: "2022-Present",
      title: "Chandigarh University",
      subtitle: "Bachelors Degree(BE), Computer Science Engineering(CSE)",
      percentage: "CGPA: 8.13",
      icon: GraduationCap,
      side: "right",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = Number.parseInt(entry.target.dataset.itemId)
            setVisibleItems((prev) => new Set([...prev, itemId]))
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    timelineItemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="about-subtitle">
            <p>My educational journey and achievements</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {timelineData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (timelineItemsRef.current[index] = el)}
              data-item-id={item.id}
              className={`timeline-item timeline-item--${item.side} ${
                visibleItems.has(item.id) ? "timeline-item--visible" : ""
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot">
                <div className="timeline-dot-inner">
                  <item.icon className="timeline-icon" />
                </div>
              </div>

              {/* Timeline Content */}
              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="timeline-year">
                    <Calendar className="year-icon" />
                    <span>{item.year}</span>
                  </div>

                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-subtitle">{item.subtitle}</p>

                  <div className="timeline-achievement">
                    <span className="achievement-label">
                      {item.percentage.includes("CGPA") ? "CGPA" : "Percentage"}:
                    </span>
                    <span className="achievement-value">{item.percentage}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="about-decorations">
          <div className="decoration decoration--1"></div>
          <div className="decoration decoration--2"></div>
          <div className="decoration decoration--3"></div>
        </div>
      </div>
    </section>
  )
}

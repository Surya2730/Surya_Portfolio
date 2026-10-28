/**
 * ExperienceSection.jsx — Education and Experience Timeline
 *
 * Displays:
 *   - Chronological vertical timeline connecting educational and engineering milestones
 *   - Distinct visual treatments for Education and Project/Experience milestones
 *   - Strictly verified information: Bannari Amman Institute of Technology, CGPA 8.5
 */

import { GraduationCap, Briefcase, Calendar, Award } from 'lucide-react'
import { TIMELINE } from '../data/portfolioData'
import './ExperienceSection.css'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section" aria-label="Education and Experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">04. Trajectory</span>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Milestones</span>
          </h2>
          <p className="section-subtitle">
            Academic groundwork and project development roadmap.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-container">
          <div className="timeline-line" aria-hidden="true" />

          {TIMELINE.map((item, index) => {
            const isEducation = item.category === 'education'
            const Icon = isEducation ? GraduationCap : Briefcase

            return (
              <div
                key={item.id}
                className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
              >
                {/* Center Node Icon */}
                <div
                  className={`timeline-node ${isEducation ? 'node-edu' : 'node-exp'}`}
                  aria-hidden="true"
                >
                  <Icon size={18} />
                </div>

                {/* Timeline Card */}
                <div className="timeline-card glass-card">
                  <div className="timeline-card-header">
                    <span className="timeline-period">
                      <Calendar size={13} />
                      {item.period}
                    </span>
                    {item.grade && (
                      <span className="timeline-grade-badge">
                        <Award size={12} />
                        {item.grade}
                      </span>
                    )}
                  </div>

                  <h3 className="timeline-title">{item.title}</h3>
                  <h4 className="timeline-institution">{item.institution}</h4>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


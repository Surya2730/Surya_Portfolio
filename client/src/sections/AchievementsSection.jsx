/**
 * AchievementsSection.jsx — Honors, Awards, and Certifications
 *
 * Displays:
 *   - Ideathon 2025 Thematic Award Winner
 *   - NPTEL Joy of Computing using Python (87% Silver Medal)
 *   - iThink 2025 International Conference Presentation
 */

import { Trophy, Medal, BookOpen, Award, ExternalLink } from 'lucide-react'
import { Leetcode } from '../components/ui/Icons'
import { ACHIEVEMENTS } from '../data/portfolioData'
import './AchievementsSection.css'

const TYPE_ICONS = {
  Award: Trophy,
  Certification: Medal,
  Publication: BookOpen,
  Coding: Leetcode,
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section section-alt achievements-section" aria-label="Achievements">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">05. Recognition</span>
          <h2 className="section-title">
            Honors &amp; <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated excellence in national hackathons, technical conferences, and accredited certifications.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {ACHIEVEMENTS.map((item) => {
            const Icon = TYPE_ICONS[item.type] || Award

            return (
              <div key={item.id} className="achievement-card glass-card">
                <div className="achievement-card-top">
                  <div className="achievement-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <div className="achievement-top-right">
                    <span className="achievement-type-badge">{item.type}</span>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="achievement-link-icon"
                        aria-label={`View ${item.title}`}
                        title="View Profile"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="achievement-title">{item.title}</h3>
                <div className="achievement-meta">
                  <span className="achievement-org">{item.organization}</span>
                  <span className="achievement-dot">•</span>
                  <span className="achievement-date">{item.date}</span>
                </div>

                <p className="achievement-desc">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


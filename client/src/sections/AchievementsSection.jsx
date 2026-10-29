/**
 * AchievementsSection.jsx — Honors, Awards, and Certifications
 *
 * Layout per card:
 *   [icon]  [type badge]          ← top row
 *   Title
 *   Org • Date
 *   Description paragraph
 *   [View Profile →]              ← bottom, only for items with a link (LeetCode)
 *   [View Certificate]            ← bottom, only for items with a certificateUrl
 *
 * Certificate modal: full-screen backdrop → centred card → <iframe> PDF viewer.
 * Close via X button, Escape key, or clicking outside the card.
 */

import { useState, useEffect, useCallback } from 'react'
import { Trophy, Medal, BookOpen, Award, ExternalLink, FileText, X } from 'lucide-react'
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
  const [activeCert, setActiveCert] = useState(null)

  /* Close modal on Escape key */
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setActiveCert(null)
  }, [])

  useEffect(() => {
    if (activeCert) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeCert, handleKeyDown])

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
              <div key={item.id + item.title} className="achievement-card glass-card">

                {/* Top row: icon + type badge only */}
                <div className="achievement-card-top">
                  <div className="achievement-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <span className="achievement-type-badge">{item.type}</span>
                </div>

                {/* Title */}
                <h3 className="achievement-title">{item.title}</h3>

                {/* Org • Date */}
                <div className="achievement-meta">
                  <span className="achievement-org">{item.organization}</span>
                  <span className="achievement-dot">•</span>
                  <span className="achievement-date">{item.date}</span>
                </div>

                {/* Description */}
                <p className="achievement-desc">{item.description}</p>

                {/* Bottom actions row */}
                <div className="achievement-actions">
                  {/* "View Profile" — for LeetCode (items with a link) */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achieve-action-btn achieve-profile-btn"
                      aria-label={`Visit profile for ${item.title}`}
                    >
                      <ExternalLink size={14} />
                      View Profile
                    </a>
                  )}

                  {/* "View Certificate" — for items with a PDF */}
                  {item.certificateUrl && (
                    <button
                      className="achieve-action-btn achieve-cert-btn"
                      onClick={() => setActiveCert(item.certificateUrl)}
                      aria-label={`View certificate for ${item.title}`}
                    >
                      <FileText size={14} />
                      View Certificate
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Certificate PDF Modal ── */}
      {activeCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate viewer"
        >
          <div
            className="cert-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cert-modal-header">
              <span className="cert-modal-title">
                <FileText size={18} />
                Certificate
              </span>
              <button
                className="cert-modal-close"
                onClick={() => setActiveCert(null)}
                aria-label="Close certificate viewer"
              >
                <X size={20} />
              </button>
            </div>

            <iframe
              src={activeCert}
              className="cert-modal-iframe"
              title="Certificate PDF"
            />
          </div>
        </div>
      )}
    </section>
  )
}

/**
 * HeroSection.jsx — Hero Section
 *
 * Right column: Full profile photo with CSS meteor/shooting-star background.
 * The 3D bubble and floating circle overlay have been removed.
 * Meteor trails are pure CSS — no Three.js, no external assets.
 */

import { ArrowDown, FolderGit2, Send, Download } from 'lucide-react'
import { Github, Linkedin, Leetcode } from '../components/ui/Icons'
import { PERSONAL_INFO } from '../data/portfolioData'
import './HeroSection.css'

export default function HeroSection() {
  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 70
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      {/* Ambient glow orbs */}
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="container hero-container">
        {/* ── Left: Text & Actions ── */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span className="hero-badge-dot" />
            <span>Available for Opportunities</span>
          </div>

          <h1 className="hero-title animate-fade-up">
            Hi, I'm <span className="gradient-text hero-name-nowrap">Surya Kumar&nbsp;T</span>
          </h1>

          <div className="hero-role-wrapper">
            <span className="hero-role-text">{PERSONAL_INFO.role}</span>
          </div>

          <p className="hero-description animate-fade-up">
            {PERSONAL_INFO.shortBio}
          </p>

          {/* Action Buttons — All 3 in a single line */}
          <div className="hero-actions">
            <button
              onClick={() => handleScroll('projects')}
              className="btn btn-primary hero-btn"
            >
              <FolderGit2 size={17} />
              <span>View Projects</span>
            </button>

            <button
              onClick={() => handleScroll('contact')}
              className="btn btn-outline hero-btn"
            >
              <Send size={17} />
              <span>Contact Me</span>
            </button>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Surya_Kumar_T_Resume.pdf"
              className="btn btn-ghost hero-btn hero-resume-btn"
              title="Download Resume"
            >
              <Download size={17} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="hero-socials-label">Connect:</span>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer"
              className="hero-social-link" aria-label="GitHub Profile">
              <Github size={20} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"
              className="hero-social-link" aria-label="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
            <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noopener noreferrer"
              className="hero-social-link" aria-label="LeetCode Profile (400+ Problems Solved)"
              title="LeetCode (400+ Problems Solved)">
              <Leetcode size={20} />
            </a>
          </div>
        </div>

        {/* ── Right: Profile Photo + Meteor Background ── */}
        <div className="hero-photo-column" aria-hidden="true">
          {/* CSS meteor shooting stars */}
          <div className="hero-meteor-field">
            {[...Array(12)].map((_, i) => (
              <span key={i} className={`hero-meteor hero-meteor-${i + 1}`} />
            ))}
          </div>

          {/* Glowing aura behind the photo */}
          <div className="hero-photo-aura" />

          {/* Profile photo card wrapper with flip animation */}
          <div className="hero-photo-card-wrapper">
            <div className="hero-photo-card hero-phone-frame">
              {/* Phone speaker grill & Dynamic Island camera */}
              <div className="phone-speaker" />
              <div className="phone-island">
                <span className="phone-camera-lens" />
              </div>

              {/* Glass screen reflection sweep */}
              <div className="phone-screen-sheen" />

              <img
                src="/profile white 2.jpeg"
                alt="Surya Kumar T — Full Stack Developer"
                className="hero-photo-img"
              />

              {/* Bottom home indicator bar */}
              <div className="phone-home-indicator" />

              {/* Subtle overlay gradient at bottom */}
              <div className="hero-photo-overlay" />
            </div>

            {/* Decorative corner accent — bottom only */}
            <div className="hero-corner hero-corner-br" />
          </div>
        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <button
        onClick={() => handleScroll('about')}
        className="hero-scroll-indicator"
        aria-label="Scroll down to About section"
      >
        <span className="hero-scroll-text">Explore</span>
        <ArrowDown size={18} className="hero-scroll-icon" />
      </button>
    </section>
  )
}

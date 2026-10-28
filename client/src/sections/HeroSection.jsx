/**
 * HeroSection.jsx — Interactive 3D Hero Section
 *
 * Displays:
 *   - Name, role badge, headline, and professional introduction
 *   - Primary CTA buttons: View Projects, Contact Me, Download Resume
 *   - Social links: GitHub & LinkedIn
 *   - 3D interactive scene (Hero3D)
 *   - Scroll indicator to guide visitors down the page
 */

import React, { lazy, Suspense } from 'react'
import { ArrowDown, FolderGit2, Send, Download } from 'lucide-react'
import { Github, Linkedin, Leetcode } from '../components/ui/Icons'
import { PERSONAL_INFO } from '../data/portfolioData'
import './HeroSection.css'

// Lazy load 3D scene to keep initial load lightweight and split large 3D bundles
const Hero3D = lazy(() => import('../components/3d/Hero3D'))

export default function HeroSection() {
  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 70
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      {/* Decorative gradient glow backgrounds */}
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="container hero-container">
        {/* Left: Text & Actions */}
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

          {/* Action Buttons */}
          <div className="hero-actions">
            <button
              onClick={() => handleScroll('projects')}
              className="btn btn-primary btn-lg"
            >
              <FolderGit2 size={18} />
              <span>View Projects</span>
            </button>

            <button
              onClick={() => handleScroll('contact')}
              className="btn btn-outline btn-lg"
            >
              <Send size={18} />
              <span>Contact Me</span>
            </button>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Surya_Kumar_T_Resume.pdf"
              className="btn btn-ghost btn-lg hero-resume-btn"
              title="Download Resume"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="hero-socials-label">Connect:</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LeetCode Profile (400+ Problems Solved)"
              title="LeetCode (400+ Problems Solved)"
            >
              <Leetcode size={20} />
            </a>
          </div>
        </div>

        {/* Right: 3D Scene + Floating Photo Over 3D Bubble */}
        <div className="hero-3d-column">
          <Suspense fallback={<div className="hero-3d-fallback"><div className="fallback-orb-glow" /></div>}>
            <Hero3D />
          </Suspense>

          {/* User Photo positioned right over the 3D bubble */}
          <div className="hero-bubble-photo-container animate-float" aria-hidden="true">
            <div className="hero-bubble-photo-glow" />
            <div className="hero-bubble-photo-frame">
              <img
                src={PERSONAL_INFO.photoUrl}
                alt="Surya Kumar T"
                className="hero-bubble-photo-img"
              />
            </div>
            <div className="hero-bubble-orbit hero-bubble-orbit-1" />
            <div className="hero-bubble-orbit hero-bubble-orbit-2" />
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

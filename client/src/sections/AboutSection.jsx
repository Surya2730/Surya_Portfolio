/**
 * AboutSection.jsx — About Me Section
 *
 * Displays:
 *   - Professional Profile Photo of Surya Kumar T
 *   - Educational background: B.Tech CSBS at Bannari Amman Institute of Technology (8.3 CGPA)
 *   - Professional Experience: Software Developer Intern @ Aerele Technologies (Frappe & ERPNext)
 *   - Algorithmic milestones: 400+ Problems Solved on LeetCode
 *   - Engineering mindset and technical interests
 */

import { GraduationCap, Award, Compass, Code, Cpu, Sparkles, Briefcase } from 'lucide-react'
import { Leetcode } from '../components/ui/Icons'
import { PERSONAL_INFO } from '../data/portfolioData'
import './AboutSection.css'

export default function AboutSection() {
  return (
    <section id="about" className="section section-alt about-section" aria-label="About Me">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">01. Overview</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Merging computer science fundamentals with modern product engineering.
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Professional Photo & Identity Card */}
          <div className="about-photo-card glass-card">
            <div className="about-photo-wrapper">
              <img
                src={PERSONAL_INFO.photoUrl}
                alt="Surya Kumar T — Software Developer"
                className="about-photo-img"
              />
              <div className="about-photo-glow" aria-hidden="true" />
            </div>

            <div className="about-photo-info">
              <h3 className="about-photo-name">{PERSONAL_INFO.name}</h3>
              <p className="about-photo-role">
                Software Developer Intern <br />
                <span className="text-accent">@ {PERSONAL_INFO.currentCompany}</span>
              </p>

              <div className="about-photo-badges">
                <span className="photo-badge">
                  <span className="photo-badge-dot" />
                  B.Tech CSBS Graduate '27
                </span>
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="photo-badge photo-badge-leetcode"
                  title="View LeetCode Profile"
                >
                  <Leetcode size={14} />
                  <span>400+ LeetCode Solved</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Narrative Bio & Quick Stats */}
          <div className="about-content-column">
            <div className="about-bio glass-card">
              <div className="about-bio-header">
                <Sparkles size={24} className="about-header-icon" />
                <h3 className="about-bio-title">Engineering Mindset &amp; Journey</h3>
              </div>
              <p className="about-text">
                I am a final-year undergraduate in <strong>Computer Science and Business Systems</strong> at{' '}
                <strong>Bannari Amman Institute of Technology</strong>, maintaining an academic standing of{' '}
                <span className="text-accent">{PERSONAL_INFO.cgpa} CGPA</span>.
              </p>
              <p className="about-text">
                Currently working as a <strong>Software Developer Intern at {PERSONAL_INFO.currentCompany}</strong>,
                learning and developing custom enterprise applications using the <strong>Frappe framework</strong> and{' '}
                <strong>ERPNext</strong>, alongside full-stack MERN architecture.
              </p>
              <p className="about-text">
                {PERSONAL_INFO.approach}
              </p>

              {/* Core Interest Tags */}
              <div className="about-interest-tags">
                <span className="interest-tag"><Code size={14} /> Full-Stack MERN</span>
                <span className="interest-tag"><Cpu size={14} /> Frappe &amp; ERPNext</span>
                <span className="interest-tag"><Compass size={14} /> Core Java &amp; DSA</span>
              </div>
            </div>

            {/* Quick Stat Cards */}
            <div className="about-stats-grid">
              {/* Education Card */}
              <div className="about-stat-card glass-card">
                <div className="stat-card-icon-wrap stat-icon-blue">
                  <GraduationCap size={24} />
                </div>
                <div className="stat-card-content">
                  <span className="stat-label">College</span>
                  <h4 className="stat-value">{PERSONAL_INFO.college}</h4>
                  <p className="stat-sub">{PERSONAL_INFO.degree}</p>
                </div>
              </div>

              {/* CGPA Card */}
              <div className="about-stat-card glass-card">
                <div className="stat-card-icon-wrap stat-icon-violet">
                  <Award size={24} />
                </div>
                <div className="stat-card-content">
                  <span className="stat-label">Academic Merit</span>
                  <h4 className="stat-value text-accent">{PERSONAL_INFO.cgpa} CGPA</h4>
                  <p className="stat-sub">Consistent high academic performance</p>
                </div>
              </div>

              {/* LeetCode Card */}
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="about-stat-card glass-card about-stat-interactive"
              >
                <div className="stat-card-icon-wrap stat-icon-amber">
                  <Leetcode size={24} />
                </div>
                <div className="stat-card-content">
                  <span className="stat-label">Algorithmic Practice</span>
                  <h4 className="stat-value">400+ Problems</h4>
                  <p className="stat-sub">Solved on LeetCode ↗</p>
                </div>
              </a>

              {/* Current Role Card */}
              <div className="about-stat-card glass-card">
                <div className="stat-card-icon-wrap stat-icon-cyan">
                  <Briefcase size={24} />
                </div>
                <div className="stat-card-content">
                  <span className="stat-label">Current Role</span>
                  <h4 className="stat-value">Aerele Technologies</h4>
                  <p className="stat-sub">Software Developer Intern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * ProjectsSection.jsx — Interactive Projects Showcase
 *
 * Displays:
 *   - The 4 featured engineering projects from portfolioData.js
 *   - Problem statement, key capabilities, and technology tags
 *   - Modal view with deep-dive project details
 *   - Repository and live demo action links
 */

import { useState } from 'react'
import {
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Layers,
  X,
  Sparkles,
} from 'lucide-react'
import { Github } from '../components/ui/Icons'
import { PROJECTS } from '../data/portfolioData'
import './ProjectsSection.css'

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="section section-alt projects-section" aria-label="Projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">03. Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Engineered systems tackling real-world campus automation, machine learning predictions, and enterprise audits.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <article key={project.id} className="project-card glass-card">
              {/* Card Header */}
              <div className="project-card-top">
                <div className="project-index-badge">0{index + 1}</div>
                <div className="project-card-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-btn"
                    aria-label={`GitHub repository for ${project.title}`}
                    title="View Source on GitHub"
                  >
                    <Github size={18} />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn"
                      aria-label={`Live demo for ${project.title}`}
                      title="View Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>

              {/* High-level Description */}
              <p className="project-description">{project.description}</p>

              {/* Highlight Badges (Accuracy or Conference) */}
              {(project.highlight || project.conferenceNote) && (
                <div className="project-special-badge">
                  <Sparkles size={13} />
                  <span>{project.highlight || project.conferenceNote}</span>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="project-tech-list">
                {project.techStack.map((tech) => (
                  <span key={tech} className="project-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer CTA */}
              <button
                className="project-expand-btn"
                onClick={() => setActiveProject(project)}
                aria-label={`Read architectural breakdown of ${project.title}`}
              >
                <span>System Architecture</span>
                <Layers size={14} />
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Deep-Dive Modal */}
      {activeProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="project-modal-card glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setActiveProject(null)}
              aria-label="Close project modal"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <span className="section-tag">Deep Dive</span>
              <h3 id="modal-project-title" className="modal-title">
                {activeProject.title}
              </h3>
              <p className="modal-subtitle">{activeProject.subtitle}</p>
            </div>

            {/* Problem Statement */}
            <div className="modal-section">
              <h4 className="modal-section-heading">
                <AlertCircle size={16} className="modal-heading-icon icon-warn" />
                Problem Statement
              </h4>
              <p className="modal-text">{activeProject.problem}</p>
            </div>

            {/* Key Features */}
            <div className="modal-section">
              <h4 className="modal-section-heading">
                <CheckCircle size={16} className="modal-heading-icon icon-success" />
                Key Engineered Capabilities
              </h4>
              <ul className="modal-feature-list">
                {activeProject.features.map((feature, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <span className="feature-bullet" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="modal-section">
              <h4 className="modal-section-heading">
                <Layers size={16} className="modal-heading-icon icon-cyan" />
                Technology Stack
              </h4>
              <div className="modal-tech-list">
                {activeProject.techStack.map((tech) => (
                  <span key={tech} className="project-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="modal-footer">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <Github size={16} />
                <span>GitHub Repository</span>
              </a>
              {activeProject.liveUrl ? (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  <ExternalLink size={16} />
                  <span>Live Preview</span>
                </a>
              ) : (
                <span className="modal-offline-note">Deployment link pending verification</span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

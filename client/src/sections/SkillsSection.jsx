/**
 * SkillsSection.jsx — Technical Skills Showcase
 *
 * Displays:
 *   - Categorized skills: Programming, Frontend, Backend, Database, Tools & CS Fundamentals
 *   - Clean glassmorphism badge layout without fabricated percentage bars
 *   - Category filtering tabs for fast scanning
 */

import { useState } from 'react'
import { Code2, Layout, Server, Database, Terminal, CheckCircle2 } from 'lucide-react'
import { SKILL_CATEGORIES } from '../data/portfolioData'
import './SkillsSection.css'

const CATEGORY_ICONS = {
  Programming: Code2,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  'Tools & CS Fundamentals': Terminal,
}

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categoriesToDisplay =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.title === selectedCategory)

  return (
    <section id="skills" className="section skills-section" aria-label="Technical Skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">02. Capabilities</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Core technologies and computer science fundamentals applied in academic and production systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-tabs" role="tablist" aria-label="Skill categories">
          <button
            role="tab"
            aria-selected={selectedCategory === 'All'}
            className={`skills-tab ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('All')}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.title}
              role="tab"
              aria-selected={selectedCategory === cat.title}
              className={`skills-tab ${selectedCategory === cat.title ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.title)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {categoriesToDisplay.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.title] || Code2
            const isToolsFundamentals = cat.title === 'Tools & CS Fundamentals'

            return (
              <div
                key={cat.title}
                className={`skills-category-card glass-card ${isToolsFundamentals ? 'skills-tools-card' : ''}`}
              >
                <div className="skills-card-header">
                  <div className="skills-card-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <h3 className="skills-card-title">{cat.title}</h3>
                </div>

                <div className="skills-badge-list">
                  {cat.skills.map((skill) => (
                    <div key={skill} className="skill-badge">
                      <CheckCircle2 size={14} className="skill-badge-check" />
                      <span className="skill-badge-text">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


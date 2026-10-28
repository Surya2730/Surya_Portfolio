/**
 * Navbar.jsx — Responsive navigation bar
 *
 * Features:
 *   - Logo / initials on left
 *   - Nav links that smooth-scroll to sections
 *   - Active section highlight (changes as user scrolls)
 *   - Glassmorphism background appears after scrolling 50px
 *   - Hamburger mobile menu (toggles with state)
 *   - Closes mobile menu on link click or window resize
 *   - "Hire Me" CTA button
 *
 * React hooks used:
 *   - useState:  tracks scrolled state + mobile menu open/closed
 *   - useEffect: adds/removes scroll event listener; cleans up on unmount
 */

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Github, Linkedin, Leetcode } from './Icons'
import './Navbar.css'

// Nav items — each `href` matches a section's `id` attribute on the page
const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
]

function Navbar() {
  // scrolled: true once user scrolls > 50px — activates glassmorphism bg
  const [scrolled, setScrolled] = useState(false)
  // menuOpen: controls mobile hamburger menu visibility
  const [menuOpen, setMenuOpen] = useState(false)
  // activeSection: which nav link is currently highlighted
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      // Activate glassmorphism background after 50px of scroll
      setScrolled(window.scrollY > 50)

      // Determine the active section by checking which section is in viewport
      const sections = NAV_LINKS.map(l => l.href.slice(1)) // strip '#'
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          // Section is "active" if its top is above the middle of the viewport
          if (rect.top <= window.innerHeight * 0.4) {
            current = id
          }
        }
      }
      setActiveSection(current)
    }

    // Close mobile menu if window resizes to desktop width
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    // Cleanup: removing event listeners when component unmounts
    // Without this, the listener would pile up and cause memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, []) // runs once on mount

  // Smooth scroll to section when a nav link is clicked
  const handleNavClick = (href) => {
    setMenuOpen(false) // always close mobile menu
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      const navbarH = 70
      const top = el.getBoundingClientRect().top + window.scrollY - navbarH
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} role="banner">
      <div className="navbar-container">

        {/* ── Logo ── */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          aria-label="Surya Kumar T — scroll to top"
        >
          <span className="navbar-logo-badge">SK</span>
          <span className="navbar-logo-text">Surya Kumar</span>
        </a>

        {/* ── Desktop Nav Links ── */}
        <nav className="navbar-links" role="navigation" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`navbar-link ${activeSection === href.slice(1) ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ── Right: social icons + CTA ── */}
        <div className="navbar-actions">
          <a
            href="https://github.com/Surya2730"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-link"
            aria-label="GitHub profile"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/suryakumardev/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-link"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://leetcode.com/u/surya_1929/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-link"
            aria-label="LeetCode profile"
            title="LeetCode (400+ Problems Solved)"
          >
            <Leetcode size={18} />
          </a>
          <a
            href="#contact"
            className="btn btn-primary btn-sm"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
          >
            Hire Me
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        id="mobile-menu"
        className={`navbar-mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav role="navigation" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`navbar-mobile-link ${activeSection === href.slice(1) ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
              tabIndex={menuOpen ? 0 : -1}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="navbar-mobile-footer">
          <a href="https://github.com/Surya2730" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
            <Github size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/suryakumardev/" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="https://leetcode.com/u/surya_1929/" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
            <Leetcode size={16} /> LeetCode
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar

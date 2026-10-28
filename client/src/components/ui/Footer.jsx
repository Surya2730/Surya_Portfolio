/**
 * Footer.jsx — Site footer
 *
 * Contains: social links, email, quick nav, copyright, back-to-top
 */

import { Mail, ArrowUp, Heart } from 'lucide-react'
import { Github, Linkedin, Leetcode } from './Icons'
import './Footer.css'

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: 'https://github.com/Surya2730',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/suryakumardev/',
    label: 'LinkedIn',
  },
  {
    icon: Leetcode,
    href: 'https://leetcode.com/u/surya_1929/',
    label: 'LeetCode',
  },
  {
    icon: Mail,
    href: 'mailto:suryaselvam219@gmail.com',
    label: 'Email',
  },
]

const QUICK_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
]

const CURRENT_YEAR = new Date().getFullYear()

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer" role="contentinfo">
      {/* Divider line */}
      <div className="footer-divider" aria-hidden="true" />

      <div className="container">
        <div className="footer-grid">

          {/* Brand column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-badge">SK</span>
              <span className="footer-logo-name">Surya Kumar T</span>
            </div>
            <p className="footer-tagline">
              Full Stack Developer crafting modern, scalable web experiences
              with the MERN stack.
            </p>
            <div className="footer-socials">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-links-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="footer-link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="footer-contact-col">
            <h3 className="footer-col-title">Get In Touch</h3>
            <p className="footer-contact-text">
              Open to internship opportunities and
              full-time roles. Eagerly waiting to apply my skills to solve real world problems.
            </p>
            <a href="#contact" className="btn btn-primary btn-sm footer-cta">
              Send a Message
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm footer-cta"
              download
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {CURRENT_YEAR} Surya Kumar T 
            {/* Built with{' '} */}
            <Heart size={13} className="footer-heart" aria-label="love" />{' '}
            {/* using MERN stack */}
          </p>
          <button
            className="footer-back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

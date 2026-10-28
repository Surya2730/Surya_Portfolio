/**
 * NotFound.jsx — Futuristic 404 Page Component
 *
 * What: Renders when a visitor enters an unknown URL route.
 * Why separate: Isolated page handling routing fallbacks cleanly.
 * Key Concepts:
 *   - React Router DOM's <Link> for client-side navigation without full page reload.
 */

import { Link } from 'react-router-dom'
import { Home, Compass } from 'lucide-react'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found-page" role="main" aria-label="Page not found">
      <div className="not-found-card glass-card">
        <div className="not-found-icon-wrap" aria-hidden="true">
          <Compass size={64} className="not-found-icon animate-float" />
        </div>
        <h1 className="not-found-code gradient-text">404</h1>
        <h2 className="not-found-title">Sector Not Found</h2>
        <p className="not-found-desc">
          The coordinates you entered do not match any known section in this portfolio system.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          <Home size={18} />
          <span>Return to Headquarters</span>
        </Link>
      </div>
    </div>
  )
}

export default NotFound


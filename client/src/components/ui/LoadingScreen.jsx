/**
 * LoadingScreen.jsx
 *
 * What: Full-screen animated entry experience shown for ~2.5s on first visit.
 * Why separate: Keeps App.jsx clean; easier to style and test in isolation.
 *
 * Features:
 *   - Animated rotating 3D-looking geometric shape (CSS only, no Three.js)
 *   - Name + tagline text
 *   - Animated progress bar (decorative — not real asset loading)
 *   - Fade-out handled by parent (App.jsx removes this component after timer)
 *   - Reduced-motion: all animations disabled via CSS media query
 *
 * Props: none (App.jsx controls when it unmounts via state)
 */

import './LoadingScreen.css'

function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-label="Loading portfolio">
      {/* Animated background gradient orbs */}
      <div className="loading-orb loading-orb-1" aria-hidden="true" />
      <div className="loading-orb loading-orb-2" aria-hidden="true" />

      {/* Geometric 3D-looking shape with Photo */}
      <div className="loading-shape-wrapper" aria-hidden="true">
        <div className="loading-shape">
          <div className="loading-shape-inner">
            <img
              src="/Coat image with bb.jpg"
              alt="Surya Kumar T"
              className="loading-shape-photo"
            />
          </div>
          <div className="loading-shape-ring loading-shape-ring-1" />
          <div className="loading-shape-ring loading-shape-ring-2" />
        </div>
      </div>

      {/* Content */}
      <div className="loading-content">
        <div className="loading-initials" aria-hidden="true">SK</div>
        <h1 className="loading-name">Surya Kumar T</h1>
        <p className="loading-role">Full Stack Developer</p>

        {/* Animated progress bar — purely decorative */}
        <div className="loading-progress" role="progressbar" aria-hidden="true">
          <div className="loading-progress-bar" />
        </div>

        <p className="loading-hint">Initializing portfolio...</p>
      </div>
    </div>
  )
}

export default LoadingScreen

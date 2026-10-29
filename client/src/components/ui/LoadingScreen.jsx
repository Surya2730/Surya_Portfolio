/**
 * LoadingScreen.jsx
 *
 * Animation sequence (pure CSS + inline SVG, zero external assets):
 *   Phase 1 (0–0.6s)  : AK-47 SVG slides in from left
 *   Phase 2 (0.6–1.0s): Trigger pulls back
 *   Phase 3 (1.0–1.3s): Muzzle flash + bullet fires across screen
 *   Phase 4 (1.3–1.6s): Bullet hits the rotating square → impact flash
 *   Phase 5 (1.6–2.5s): Photo appears inside square, then name / role / progress bar fade in
 *
 * No Three.js, no external images for the gun — all CSS keyframes + SVG paths.
 * The user's photo (/sk icon image1.png) appears AFTER the bullet impact.
 */

import './LoadingScreen.css'

function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-label="Loading portfolio">
      {/* Ambient glow orbs */}
      <div className="ls-orb ls-orb-1" aria-hidden="true" />
      <div className="ls-orb ls-orb-2" aria-hidden="true" />

      {/* ── AK-47 gun SVG ── */}
      <div className="ls-gun-wrap" aria-hidden="true">
        <svg
          className="ls-gun-svg"
          viewBox="0 0 380 130"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          {/* ─── STOCK ─── */}
          <rect x="2" y="62" width="52" height="20" rx="5" fill="#1a3528" stroke="#10b981" strokeWidth="1.3"/>
          <rect x="6" y="66" width="44" height="6" rx="2" fill="#0d2218" opacity="0.8"/>
          <rect x="6" y="74" width="44" height="4" rx="2" fill="#0d2218" opacity="0.5"/>
          {/* stock cheekpiece */}
          <path d="M48 62 L58 58 L62 68 L54 72 Z" fill="#243d2e" stroke="#10b981" strokeWidth="1"/>

          {/* ─── PISTOL GRIP ─── */}
          <path d="M62 64 L76 64 L80 62 L82 98 L64 98 Z" fill="#1a3528" stroke="#10b981" strokeWidth="1.3"/>
          {/* grip texture lines */}
          <line x1="66" y1="70" x2="79" y2="68" stroke="#10b981" strokeWidth="0.5" opacity="0.4"/>
          <line x1="66" y1="76" x2="79" y2="74" stroke="#10b981" strokeWidth="0.5" opacity="0.4"/>
          <line x1="66" y1="82" x2="79" y2="80" stroke="#10b981" strokeWidth="0.5" opacity="0.4"/>
          <line x1="66" y1="88" x2="79" y2="86" stroke="#10b981" strokeWidth="0.5" opacity="0.4"/>
          {/* grip screw */}
          <circle cx="73" cy="78" r="3" fill="#0d2218" stroke="#10b981" strokeWidth="0.8"/>
          <line x1="71" y1="78" x2="75" y2="78" stroke="#10b981" strokeWidth="0.6"/>

          {/* ─── TRIGGER GUARD ─── */}
          <path d="M82 66 Q94 84 82 88 L76 88 L76 66 Z"
                fill="none" stroke="#10b981" strokeWidth="1.3"/>

          {/* ─── TRIGGER (animated) ─── */}
          <g className="ls-trigger" style={{ transformOrigin: '84px 70px' }}>
            <rect x="80" y="64" width="7" height="18" rx="3" fill="#34d399" stroke="#059669" strokeWidth="1"/>
            <line x1="83" y1="66" x2="83" y2="80" stroke="#10b981" strokeWidth="0.7" opacity="0.6"/>
          </g>

          {/* ─── MAIN RECEIVER ─── */}
          <rect x="66" y="52" width="180" height="30" rx="4" fill="#172d22" stroke="#10b981" strokeWidth="1.4"/>
          {/* top rail */}
          <rect x="80" y="50" width="155" height="5" rx="2" fill="#1e3a2a" stroke="#059669" strokeWidth="0.9"/>
          {/* rail notches */}
          {[90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210].map(x => (
            <rect key={x} x={x} y="50" width="5" height="5" fill="#0a1a12" opacity="0.7"/>
          ))}
          {/* ejection port */}
          <rect x="140" y="56" width="35" height="14" rx="2.5" fill="#0a1a12" stroke="#10b981" strokeWidth="0.8"/>
          <line x1="142" y1="60" x2="173" y2="60" stroke="#10b981" strokeWidth="0.5" opacity="0.4"/>
          {/* receiver side detail lines */}
          <line x1="68" y1="60" x2="245" y2="60" stroke="#10b981" strokeWidth="0.4" opacity="0.25"/>
          <line x1="68" y1="74" x2="245" y2="74" stroke="#10b981" strokeWidth="0.4" opacity="0.25"/>

          {/* ─── CURVED MAGAZINE ─── */}
          <path d="M90 82 Q88 115 82 122 Q90 126 106 124 Q112 115 110 82 Z"
                fill="#1a3528" stroke="#10b981" strokeWidth="1.3"/>
          {/* mag ridges */}
          <line x1="88" y1="92" x2="108" y2="92" stroke="#10b981" strokeWidth="0.7" opacity="0.5"/>
          <line x1="87" y1="100" x2="107" y2="100" stroke="#10b981" strokeWidth="0.7" opacity="0.5"/>
          <line x1="86" y1="108" x2="106" y2="108" stroke="#10b981" strokeWidth="0.5" opacity="0.4"/>
          {/* mag follower indicator */}
          <rect x="92" y="86" width="16" height="3" rx="1" fill="#34d399" opacity="0.5"/>

          {/* ─── HANDGUARD ─── */}
          <rect x="190" y="56" width="56" height="26" rx="4" fill="#1e3528" stroke="#059669" strokeWidth="1.1"/>
          {/* vent holes */}
          {[196, 204, 212, 220, 228, 236].map(x => (
            <circle key={x} cx={x} cy="69" r="2.5" fill="#0a1a12" stroke="#10b981" strokeWidth="0.6"/>
          ))}
          {/* handguard side rail */}
          <rect x="190" y="53" width="56" height="4" rx="2" fill="#243d2e" stroke="#10b981" strokeWidth="0.7"/>

          {/* ─── GAS TUBE (above barrel) ─── */}
          <rect x="190" y="45" width="64" height="7" rx="3" fill="#1a3528" stroke="#059669" strokeWidth="0.9"/>
          <line x1="192" y1="48" x2="252" y2="48" stroke="#10b981" strokeWidth="0.4" opacity="0.3"/>

          {/* ─── BARREL ─── */}
          <rect x="246" y="60" width="110" height="10" rx="3" fill="#172d22" stroke="#10b981" strokeWidth="1.3"/>
          {/* barrel underlug */}
          <rect x="246" y="70" width="60" height="5" rx="2" fill="#1a3528" stroke="#059669" strokeWidth="0.7"/>

          {/* ─── FRONT SIGHT POST ─── */}
          <rect x="248" y="47" width="10" height="15" rx="2" fill="#1a3528" stroke="#10b981" strokeWidth="1"/>
          <rect x="251" y="44" width="4" height="5" rx="1" fill="#34d399"/>
          {/* sight wings */}
          <rect x="244" y="52" width="18" height="4" rx="1" fill="#1e3528" stroke="#059669" strokeWidth="0.7"/>

          {/* ─── REAR SIGHT ─── */}
          <rect x="132" y="47" width="18" height="10" rx="2" fill="#1a3528" stroke="#10b981" strokeWidth="0.9"/>
          <rect x="138" y="48" width="4" height="7" rx="1" fill="#34d399" opacity="0.9"/>

          {/* ─── MUZZLE BRAKE / COMPENSATOR ─── */}
          <rect x="356" y="56" width="22" height="18" rx="3" fill="#1a3528" stroke="#10b981" strokeWidth="1.4"/>
          {/* ports */}
          <rect x="358" y="58" width="5" height="14" rx="1" fill="#0a1a12"/>
          <rect x="365" y="58" width="5" height="14" rx="1" fill="#0a1a12"/>
          <rect x="372" y="58" width="5" height="14" rx="1" fill="#0a1a12"/>
          {/* top ports */}
          <rect x="360" y="54" width="14" height="3" rx="1" fill="#0a1a12" stroke="#10b981" strokeWidth="0.5"/>

          {/* ─── GREEN EMIT GLOW LINE (energy look) ─── */}
          <line x1="68" y1="67" x2="355" y2="67"
                stroke="#10b981" strokeWidth="0.6" opacity="0.18"/>

          {/* ─── SELECTOR SWITCH ─── */}
          <rect x="240" y="54" width="6" height="14" rx="2" fill="#2a4a38" stroke="#10b981" strokeWidth="0.7"/>
          <circle cx="243" cy="59" r="2" fill="#34d399" opacity="0.8"/>
        </svg>

        {/* Muzzle flash — appears on shot */}
        <div className="ls-muzzle-flash" aria-hidden="true">
          <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <polygon points="25,2 29,18 46,25 29,32 25,48 21,32 4,25 21,18" fill="#ffd700" opacity="0.95"/>
            <polygon points="25,10 27,19 36,25 27,31 25,40 23,31 14,25 23,19" fill="#fff7aa"/>
            <circle cx="25" cy="25" r="5" fill="#fff"/>
          </svg>
        </div>
      </div>

      {/* ── Bullet projectile ── */}
      <div className="ls-bullet" aria-hidden="true">
        <svg viewBox="0 0 28 10" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 3 L20 3 L28 5 L20 7 L0 7 Z" fill="#ffd700" />
          <path d="M20 3 L28 5 L20 7 Z" fill="#ffaa00" />
          {/* tracer glow trail */}
          <line x1="0" y1="5" x2="-60" y2="5" stroke="#34d399" strokeWidth="2" opacity="0.5" />
        </svg>
      </div>

      {/* ── Central animated square + photo ── */}
      <div className="ls-shape-wrap" aria-hidden="true">
        {/* Impact flash overlay */}
        <div className="ls-impact-flash" />

        <div className="ls-shape">
          <div className="ls-shape-inner">
            <img
              src="/profile.jpg"
              alt="Surya Kumar T"
              className="ls-shape-photo"
            />
          </div>
          <div className="ls-ring ls-ring-1" />
          <div className="ls-ring ls-ring-2" />
        </div>
      </div>

      {/* ── Text content — fades in after impact ── */}
      <div className="ls-content">
        <div className="ls-initials">SK</div>
        <h1 className="ls-name">Surya Kumar T</h1>
        <p className="ls-role">Full Stack Developer</p>
        <div className="ls-progress" role="progressbar" aria-hidden="true">
          <div className="ls-progress-bar" />
        </div>
        <p className="ls-hint">Initializing portfolio...</p>
      </div>
    </div>
  )
}

export default LoadingScreen

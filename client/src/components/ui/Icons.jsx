/**
 * Icons.jsx — Custom Scalable Vector Graphics for Brand Icons
 *
 * Why this file exists:
 *   Lucide-react v1.x does not include proprietary brand icons (GitHub, LinkedIn, LeetCode).
 *   Providing them here as standard SVG components ensures 100% stable, zero-dependency,
 *   crisp rendering across all viewports and browser environments.
 */

export function Github({ size = 20, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function Linkedin({ size = 20, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

/**
 * Authentic Official LeetCode Logo:
 * Features the signature slate/currentColor bracket paired with the iconic LeetCode #FFA116 orange wedge.
 */
export function Leetcode({ size = 20, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.528 5.985 5.985 0 0 0 3.343-.572l6.818-3.953a1.402 1.402 0 0 0 .546-.667 1.368 1.368 0 0 0 .025-.86 1.377 1.377 0 0 0-.58-.755 1.377 1.377 0 0 0-.858-.205 1.38 1.38 0 0 0-.845.398l-6.554 3.8a3.24 3.24 0 0 1-1.802.308 3.208 3.208 0 0 1-2.6-1.9 3.018 3.018 0 0 1-.186-.546 2.94 2.94 0 0 1-.034-1.272 2.87 2.87 0 0 1 .655-1.144L8.7 10.66l3.82-3.642a1.374 1.374 0 0 0 .423-.984 1.37 1.37 0 0 0-.423-.984L13.483 0z"
      />
      <path
        fill="#FFA116"
        d="M18.61 8.01a1.378 1.378 0 0 0-.974.403l-4.743 4.542a1.374 1.374 0 1 0 1.902 1.983l4.743-4.543a1.376 1.376 0 0 0-.928-2.385z"
      />
    </svg>
  )
}

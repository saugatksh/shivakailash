// Signature visual element: topographic contour lines evoking Kailash itself.
// Used sparingly as a decorative background layer across key sections.
export default function ContourMotif({ className = '', opacity = 0.5 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 600"
      fill="none"
      aria-hidden="true"
      style={{ opacity }}
    >
      <g stroke="currentColor" strokeWidth="0.75">
        <path d="M-50 480 Q 200 380 400 420 T 900 380 T 1300 440" />
        <path d="M-50 420 Q 220 320 420 360 T 920 310 T 1300 370" />
        <path d="M-50 360 Q 240 260 440 300 T 940 250 T 1300 300" />
        <path d="M-50 300 Q 260 210 460 240 T 960 190 T 1300 230" />
        <path d="M-50 240 Q 280 160 480 185 T 980 140 T 1300 170" />
        <path d="M-50 180 Q 300 110 500 135 T 1000 95 T 1300 115" />
      </g>
    </svg>
  )
}

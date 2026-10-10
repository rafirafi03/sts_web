/**
 * Angular blue shapes taken from the company presentation's visual style.
 * Purely decorative: hidden from assistive tech.
 */
export default function Facets({ variant = "right", soft = false }) {
  const flip = variant === "left";
  return (
    <svg
      className={`facets${soft ? " facets--soft" : ""}`}
      viewBox="0 0 1000 600"
      preserveAspectRatio={flip ? "xMinYMid slice" : "xMaxYMid slice"}
      aria-hidden="true"
      focusable="false"
    >
      <g transform={flip ? "translate(1000 0) scale(-1 1)" : undefined}>
        <polygon points="1000,0 700,0 840,600 1000,600" fill="#2e74a2" opacity="0.9" />
        <polygon points="1000,0 850,0 945,600 1000,600" fill="#1c5a8a" />
        <polygon points="700,0 600,0 790,600 715,600" fill="#76d2f1" opacity="0.32" />
        <polygon points="1000,300 1000,600 560,600" fill="#21a6dc" opacity="0.8" />
        <polygon points="1000,430 1000,600 770,600" fill="#76d2f1" opacity="0.5" />
        <line x1="590" y1="0" x2="1000" y2="430" stroke="#76d2f1" strokeWidth="1.2" opacity="0.6" />
        <line x1="760" y1="600" x2="1000" y2="240" stroke="#76d2f1" strokeWidth="1.2" opacity="0.5" />
      </g>
    </svg>
  );
}

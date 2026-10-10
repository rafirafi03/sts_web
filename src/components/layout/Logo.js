import Link from "next/link";

export function LogoMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path
        d="M41.2 14.5A20 20 0 1 0 43.9 27"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <text
        x="24"
        y="29.5"
        textAnchor="middle"
        fontFamily="Urbanist Variable, Urbanist, Arial, sans-serif"
        fontWeight="800"
        fontSize="15"
        letterSpacing="-0.5"
        fill="currentColor"
      >
        STS
      </text>
    </svg>
  );
}

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Superior Tubular Solutions, home">
      <LogoMark className="logo__mark" />
      <span className="logo__text">
        Superior Tubular Solutions
        <span>STS FZE, Jebel Ali Free Zone</span>
      </span>
    </Link>
  );
}

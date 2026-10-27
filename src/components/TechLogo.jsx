// Simple hand-drawn technology marks in each technology's familiar colour.
const logos = {
  react: (
    <g fill="none" stroke="#149eca" strokeWidth="1.6">
      <ellipse cx="16" cy="16" rx="12" ry="4.6" />
      <ellipse cx="16" cy="16" rx="12" ry="4.6" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="12" ry="4.6" transform="rotate(120 16 16)" />
      <circle cx="16" cy="16" r="2.4" fill="#149eca" stroke="none" />
    </g>
  ),
  js: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="4" fill="#f7df1e" />
      <text x="25" y="25" textAnchor="end" fontSize="11" fontWeight="800" fontFamily="Arial, sans-serif" fill="#1f1f1f">JS</text>
    </>
  ),
  html: (
    <>
      <path d="M6 4h20l-1.8 20.5L16 28l-8.2-3.5z" fill="#e34f26" />
      <path d="M16 6v20l6.6-2.8L24.1 6z" fill="#f06529" />
      <text x="16" y="21" textAnchor="middle" fontSize="12" fontWeight="800" fontFamily="Arial, sans-serif" fill="#fff">5</text>
    </>
  ),
  css: (
    <>
      <path d="M6 4h20l-1.8 20.5L16 28l-8.2-3.5z" fill="#1572b6" />
      <path d="M16 6v20l6.6-2.8L24.1 6z" fill="#33a9dc" />
      <text x="16" y="21" textAnchor="middle" fontSize="12" fontWeight="800" fontFamily="Arial, sans-serif" fill="#fff">3</text>
    </>
  ),
  node: (
    <>
      <path d="M16 3l11 6.3v13.4L16 29 5 22.7V9.3z" fill="#5fa04e" />
      <text x="16" y="20" textAnchor="middle" fontSize="8.5" fontWeight="800" fontFamily="Arial, sans-serif" fill="#fff">JS</text>
    </>
  ),
  express: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill="#1f2937" />
      <text x="16" y="20.5" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif" fill="#fff">ex</text>
    </>
  ),
  php: (
    <>
      <ellipse cx="16" cy="16" rx="13" ry="8.5" fill="#777bb4" />
      <text x="16" y="19.5" textAnchor="middle" fontSize="9.5" fontWeight="800" fontStyle="italic" fontFamily="Arial, sans-serif" fill="#fff">php</text>
    </>
  ),
  opencart: (
    <>
      <path d="M5 8h3l3 11h12l2.5-8H10" fill="none" stroke="#23a1d1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="13" cy="24" r="2.2" fill="#23a1d1" />
      <circle cx="21" cy="24" r="2.2" fill="#23a1d1" />
    </>
  ),
  mongodb: (
    <>
      <path d="M16 3c4.5 5 6.5 9.4 6.5 13.2 0 4.6-3 7.9-5.6 9.2L16 29l-.9-3.6c-2.6-1.3-5.6-4.6-5.6-9.2C9.5 12.4 11.5 8 16 3z" fill="#47a248" />
      <path d="M16 6v21" stroke="#c5e6c0" strokeWidth="1.2" />
    </>
  ),
  mysql: (
    <>
      <rect x="4" y="6" width="24" height="20" rx="5" fill="#00758f" />
      <text x="16" y="19.5" textAnchor="middle" fontSize="8.5" fontWeight="800" fontFamily="Arial, sans-serif" fill="#fff">SQL</text>
      <path d="M22 6c2 0 4 1 5 3" stroke="#f29111" strokeWidth="2" fill="none" strokeLinecap="round" />
    </>
  ),
  git: (
    <>
      <rect x="6.5" y="6.5" width="19" height="19" rx="3" transform="rotate(45 16 16)" fill="#f05032" />
      <path d="M13 11v10M13 15l5 0v6" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <circle cx="13" cy="11" r="1.6" fill="#fff" /><circle cx="13" cy="21" r="1.6" fill="#fff" /><circle cx="18" cy="21" r="1.6" fill="#fff" />
    </>
  ),
  github: (
    <>
      <circle cx="16" cy="16" r="13" fill="#181717" />
      <path d="M12.5 24c0-1.6.1-2.4.6-3-2.9-.3-5-1.5-5-5 0-1.1.4-2.1 1.1-2.8-.1-.4-.4-1.6.2-3 0 0 1-.3 3.1 1.1a10.6 10.6 0 0 1 5.6 0c2.1-1.4 3.1-1.1 3.1-1.1.6 1.4.3 2.6.2 3 .7.7 1.1 1.7 1.1 2.8 0 3.5-2.1 4.7-5 5 .5.6.6 1.4.6 3" fill="#fff" />
    </>
  ),
  api: (
    <>
      <rect x="4" y="6" width="24" height="20" rx="5" fill="#0f766e" />
      <text x="16" y="19.5" textAnchor="middle" fontSize="8.5" fontWeight="800" fontFamily="Arial, sans-serif" fill="#fff">API</text>
    </>
  ),
  vscode: (
    <>
      <path d="M22 4l6 3v18l-6 3-12-11-5 4-2-1V12l2-1 5 4z" fill="#007acc" />
      <path d="M22 9.5v13L15 16z" fill="#fff" opacity=".9" />
    </>
  ),
  xampp: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill="#fb7a24" />
      <path d="M11 10l10 12M21 10L11 22" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  pages: (
    <>
      <rect x="4" y="4" width="24" height="24" rx="6" fill="#0a1628" />
      <path d="M10 21l4-10 4 10M11.5 17.5h5M20 11v10" stroke="#5eead4" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export default function TechLogo({ name, size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      {logos[name]}
    </svg>
  );
}

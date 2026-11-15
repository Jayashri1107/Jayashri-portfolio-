import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { profile } from '../data/profile.js';

const quick = [
  ['projects', 'Projects'],
  ['about', 'About'],
  ['services', 'Services'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
];

// Social links: a link only appears when its address is filled in data/profile.js.
const socials = [
  ['linkedin', 'LinkedIn', profile.linkedin],
  ['github', 'GitHub', profile.github],
  ['instagram', 'Instagram', profile.instagram],
  ['mail', 'Email', `mailto:${profile.email}`],
].filter(([, , href]) => href);

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Link to="/#home" className="nav__brand">
            <span className="nav__logo">JS</span>
            <span>{profile.name}</span>
          </Link>
          <p>{profile.title} – websites, dashboards and custom software for growing businesses.</p>
        </div>
        <nav className="site-footer__links" aria-label="Footer">
          {quick.map(([id, label]) => <Link key={id} to={`/#${id}`}>{label}</Link>)}
        </nav>
        <div className="site-footer__social">
          {socials.map(([icon, label, href]) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label} title={label}>
              <Icon name={icon} size={20} />
            </a>
          ))}
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

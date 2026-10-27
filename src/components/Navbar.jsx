import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { profile } from '../data/profile.js';
import { asset } from '../asset.js';

const links = [
  ['about', 'About'],
  ['services', 'Services'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['process', 'Process'],
  ['contact', 'Contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/#home" className="nav__brand" onClick={close}>
          <span className="nav__logo">JS</span>
          <span>{profile.name}</span>
        </Link>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map(([id, label]) => (
            <Link key={id} to={`/#${id}`} onClick={close}>
              {label}
            </Link>
          ))}
          <a href={asset(profile.resume)} download="Jayashri_Sable_Resume.pdf" className="btn btn--ghost btn--sm nav__resume">
            <Icon name="download" size={16} /> Resume
          </a>
          <Link to="/#contact" className="btn btn--primary btn--sm" onClick={close}>
            Hire Me
          </Link>
        </nav>
        <button className="nav__toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
    </header>
  );
}

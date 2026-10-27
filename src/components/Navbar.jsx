import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { profile } from '../data/profile.js';

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

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__logo">JS</span>
          <span>{profile.name}</span>
        </a>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href={profile.resume} download className="btn btn--ghost btn--sm nav__resume">
            <Icon name="download" size={16} /> Resume
          </a>
          <a href="#contact" className="btn btn--primary btn--sm" onClick={() => setOpen(false)}>
            Hire Me
          </a>
        </nav>
        <button className="nav__toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
    </header>
  );
}

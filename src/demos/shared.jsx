import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../components/Icon.jsx';

// State that is remembered in this browser only (so visitors can play with the demo).
export function usePersistentState(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage unavailable – demo still works for this visit */
    }
  }, [key, value]);
  return [value, setValue];
}

export const uid = () => Math.random().toString(36).slice(2, 9);
export const today = () => new Date().toISOString().slice(0, 10);

export function useIsPreview() {
  return new URLSearchParams(useLocation().search).has('preview');
}

export function DemoBanner({ onReset }) {
  const preview = useIsPreview();
  useEffect(() => {
    if (preview) document.documentElement.style.overflow = 'hidden';
  }, [preview]);
  if (preview) return null;
  return (
    <div className="demo-banner">
      <Link to="/#projects" className="demo-banner__back"><Icon name="back" size={16} /> Back to portfolio</Link>
      <span className="demo-banner__note">Demo project – sample data only, saved in your browser.</span>
      {onReset && <button className="demo-banner__reset" onClick={onReset}>Reset demo data</button>}
    </div>
  );
}

export function Modal({ title, onClose, children }) {
  return (
    <div className="modal" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal__box" role="dialog" aria-label={title}>
        <div className="modal__head">
          <h3>{title}</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close"><Icon name="close" size={18} /></button>
        </div>
        {children}
      </div>
    </div>
  );
}

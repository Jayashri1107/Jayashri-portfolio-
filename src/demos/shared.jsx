import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../components/Icon.jsx';

export function useIsPreview() {
  return new URLSearchParams(useLocation().search).has('preview');
}

export function DemoBanner() {
  const preview = useIsPreview();
  useEffect(() => {
    if (preview) document.documentElement.style.overflow = 'hidden';
  }, [preview]);
  if (preview) return null;
  return (
    <div className="demo-banner">
      <Link to="/#projects" className="demo-banner__back"><Icon name="back" size={16} /> Back to portfolio</Link>
      <span className="demo-banner__note">Demo project – a fictional business with sample content.</span>
    </div>
  );
}

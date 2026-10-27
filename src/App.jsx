import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Portfolio from './Portfolio.jsx';
import ProjectPage from './ProjectPage.jsx';
import BusinessDemo from './demos/BusinessDemo.jsx';

// New page → top of the page; a link like /#contact → scroll to that section.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 60);
    return () => clearTimeout(t);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/demos/business" element={<BusinessDemo />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </>
  );
}

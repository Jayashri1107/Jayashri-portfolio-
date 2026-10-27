import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Portfolio from './Portfolio.jsx';
import BusinessDemo from './demos/BusinessDemo.jsx';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/demos/business" element={<BusinessDemo />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </>
  );
}

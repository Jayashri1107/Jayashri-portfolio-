import { useEffect, useRef, useState } from 'react';
import { asset } from '../asset.js';

// A live, scaled-down view of a demo page – a real "screenshot" that is always up to date.
const FRAME_W = 1280;
const FRAME_H = 800;

export default function ProjectPreview({ path, title }) {
  const box = useRef(null);
  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / FRAME_W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="preview" ref={box}>
      <div className="preview__bar">
        <span /> <span /> <span />
        <em>{path}</em>
      </div>
      <div className="preview__screen" style={{ height: FRAME_H * scale }}>
        <iframe
          src={`${asset(path)}?preview=1`}
          title={`${title} preview`}
          loading="lazy"
          tabIndex={-1}
          style={{ width: FRAME_W, height: FRAME_H, transform: `scale(${scale})` }}
        />
      </div>
    </div>
  );
}

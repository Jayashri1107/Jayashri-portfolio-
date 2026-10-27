import ProjectPreview from './ProjectPreview.jsx';

function BrowserFrame({ url, children }) {
  return (
    <div className="preview">
      <div className="preview__bar">
        <span /> <span /> <span />
        <em>{url}</em>
      </div>
      {children}
    </div>
  );
}

// Designed preview of the IpShopy store and Reel Studio (the live sites are not always online).
function ShopMock() {
  const products = [
    ['#fde68a', '#f59e0b'],
    ['#bae6fd', '#0ea5e9'],
    ['#fbcfe8', '#ec4899'],
    ['#bbf7d0', '#22c55e'],
  ];
  return (
    <BrowserFrame url="ipshopy.com">
      <div className="shop">
        <div className="shop__head">
          <strong>ipshopy</strong>
          <span className="shop__search" />
          <span className="shop__cart">Cart · 2</span>
        </div>
        <div className="shop__banner">
          <div>
            <b>Festive Sale</b>
            <i>Up to 40% off on top brands</i>
            <span>Shop now</span>
          </div>
        </div>
        <div className="shop__grid">
          {products.map(([a, b], i) => (
            <div key={i} className="shop__item">
              <div className="shop__img" style={{ background: `linear-gradient(135deg, ${a}, ${b})` }} />
              <span className="shop__line" />
              <span className="shop__price">₹{[499, 1299, 799, 349][i]}</span>
            </div>
          ))}
        </div>
        <div className="studio">
          <div className="studio__bar"><b>Reel Studio</b><span>studio.ipshopy.com</span></div>
          <div className="studio__row">
            {[1, 2, 3].map((i) => <div key={i} className="studio__reel"><span>▶</span></div>)}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export default function ProjectMedia({ project }) {
  if (project.media === 'image')
    return (
      <BrowserFrame url={project.links[0].href.replace('https://', '')}>
        <img className="preview__img" src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
      </BrowserFrame>
    );
  if (project.media === 'shop') return <ShopMock />;
  return <ProjectPreview path={project.path} title={project.title} />;
}

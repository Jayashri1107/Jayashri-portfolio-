import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Icon from './components/Icon.jsx';
import ProjectMedia from './components/ProjectMedia.jsx';
import { profile, projects } from './data/profile.js';

function ProjectLinks({ links }) {
  return (
    <div className="project__links">
      {links.map((l, j) => {
        const cls = `btn ${j === 0 ? 'btn--primary' : 'btn--ghost'} btn--lg`;
        const inner = <>{l.label} <Icon name="external" size={16} /></>;
        return l.to
          ? <Link key={l.label} to={l.to} className={cls}>{inner}</Link>
          : <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>;
      })}
    </div>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const p = projects[index];

  useEffect(() => {
    if (p) document.title = `${p.title} – ${p.subtitle} | ${profile.name}`;
    return () => { document.title = `${profile.name} – ${profile.title}`; };
  }, [p]);

  if (!p) return <Navigate to="/#projects" replace />;
  const next = projects[(index + 1) % projects.length];
  const prev = projects[(index - 1 + projects.length) % projects.length];

  return (
    <>
      <Navbar />
      <main className="pp">
        <section className="pp-hero">
          <div className="container">
            <nav className="pp-crumbs" aria-label="Breadcrumb">
              <Link to="/#home">Home</Link><span>/</span><Link to="/#projects">Projects</Link><span>/</span><em>{p.title}</em>
            </nav>
            <div className="pp-hero__grid">
              <div>
                <span className={`tag tag--${p.kind}`}>{p.kind === 'work' ? 'Professional work' : 'Demo project'}</span>
                <h1>{p.title}<span>{p.subtitle}</span></h1>
                <p className="pp-hero__role">{p.role}</p>
                <p className="pp-hero__lead">{p.summary}</p>
                <ProjectLinks links={p.links} />
              </div>
              <div className="pp-hero__media"><ProjectMedia project={p} /></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container pp-overview">
            <div>
              <span className="eyebrow">Overview</span>
              <h2>About the project</h2>
              {p.overview.map((para) => <p key={para}>{para}</p>)}
              <h3 className="pp-sub">{p.kind === 'work' ? 'My contribution' : 'What’s included'}</h3>
              <ul className="checks checks--lg">
                {p.features.map((f) => <li key={f}><Icon name="check" size={18} /> {f}</li>)}
              </ul>
            </div>
            <aside className="card pp-facts">
              <h3>Project facts</h3>
              <dl>
                {p.facts.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
              <h4>Technologies</h4>
              <div className="chips">{p.stack.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            </aside>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section__head">
              <span className="eyebrow">Key features</span>
              <h2>{p.kind === 'work' ? 'What the product does' : 'What makes it work'}</h2>
            </div>
            <div className="pp-highlights">
              {p.highlights.map(([icon, title, text]) => (
                <article key={title} className="card service">
                  <div className="service__icon"><Icon name={icon} size={24} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            {p.kind === 'work' && (
              <p className="pp-note">
                This is a team project I worked on as an employee. Screenshots show public pages only – no private or customer data.
              </p>
            )}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="pp-cta">
              <div>
                <h2>Want something like this for your business?</h2>
                <p>Tell me what you need – I’ll reply within 24 hours with ideas, a timeline and a clear quote.</p>
              </div>
              <Link to="/#contact" className="btn btn--light btn--lg">Hire Me <Icon name="arrow" size={18} /></Link>
            </div>

            <div className="pp-nav">
              <Link to={`/projects/${prev.slug}`} className="pp-nav__item">
                <span><Icon name="back" size={16} /> Previous project</span>
                <strong>{prev.title}</strong>
              </Link>
              <Link to={`/projects/${next.slug}`} className="pp-nav__item pp-nav__item--next">
                <span>Next project <Icon name="arrow" size={16} /></span>
                <strong>{next.title}</strong>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="pp-footer">
        <div className="container footer footer--light">
          <span>© {new Date().getFullYear()} {profile.fullName}</span>
          <Link to="/#projects">All projects</Link>
        </div>
      </footer>
    </>
  );
}

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Icon from './components/Icon.jsx';
import ProjectMedia from './components/ProjectMedia.jsx';
import TechLogo from './components/TechLogo.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import { asset } from './asset.js';
import { profile, stats, experience, education, services, projects, kindLabel, skillGroups, tools } from './data/profile.js';

// Fades sections in as they scroll into view. Skipped for visitors who prefer reduced motion.
function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    document.documentElement.classList.add('reveal-on');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }),
      { rootMargin: '0px 0px -8% 0px' },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="section__head" data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__text">
          <span className="pill">
            <span className="pill__dot" /> Available for freelance projects
          </span>
          <p className="hero__hello">Hi, I’m {profile.name}</p>
          <h1>
            Full-Stack Web Developer <span className="hero__role">building secure, fast business software.</span>
          </h1>
          <p className="hero__lead">{profile.intro}</p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary btn--lg">
              Hire Me <Icon name="arrow" size={18} />
            </a>
            <a href="#projects" className="btn btn--ghost btn--lg">View Projects</a>
          </div>
          <div className="hero__meta">
            <span><Icon name="pin" size={16} /> {profile.location}</span>
            <a href={asset(profile.resume)} download="Jayashri_Sable_Resume.pdf"><Icon name="download" size={16} /> Download resume</a>
          </div>
        </div>
        <div className="hero__card">
          <div className="code-card">
            <div className="code-card__bar"><span /><span /><span /><em>developer.js</em></div>
            <pre>
<span className="c-k">const</span> <span className="c-v">developer</span> = {'{'}{'\n'}
{'  '}name: <span className="c-s">'{profile.name}'</span>,{'\n'}
{'  '}role: <span className="c-s">'Full-Stack Developer'</span>,{'\n'}
{'  '}experience: <span className="c-s">'1+ year'</span>,{'\n'}
{'  '}stack: [<span className="c-s">'React'</span>, <span className="c-s">'Node'</span>, <span className="c-s">'PHP'</span>,{'\n'}
{'          '}<span className="c-s">'MongoDB'</span>, <span className="c-s">'MySQL'</span>],{'\n'}
{'  '}builds: [<span className="c-s">'Websites'</span>, <span className="c-s">'Dashboards'</span>,{'\n'}
{'           '}<span className="c-s">'CRM'</span>, <span className="c-s">'APIs'</span>],{'\n'}
{'  '}available: <span className="c-k">true</span>,{'\n'}
{'}'};
            </pre>
          </div>
          <div className="float-badge float-badge--a"><Icon name="check" size={16} /> Mobile-first</div>
          <div className="float-badge float-badge--b"><Icon name="clock" size={16} /> On-time delivery</div>
        </div>
      </div>
      <div className="container stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ p, featured }) {
  return (
    <Link to={`/projects/${p.slug}`} className={`pcard ${featured ? 'pcard--featured' : ''}`} data-reveal>
      <div className="pcard__media">
        <ProjectMedia project={p} />
      </div>
      <div className="pcard__body">
        <div className="pcard__tags">
          <span className={`tag tag--${p.kind}`}>{kindLabel[p.kind]}</span>
          {featured && <span className="tag tag--feature"><Icon name="star" size={12} /> Featured</span>}
        </div>
        <h3>{p.title}</h3>
        <span className="pcard__sub">{p.subtitle}</span>
        <p>{featured ? p.summary : p.short}</p>
        {featured && (
          <ul className="pcard__points">
            {p.features.slice(0, 3).map((f) => <li key={f}><Icon name="check" size={16} /> {f}</li>)}
          </ul>
        )}
        {p.offline && <span className="pcard__note"><Icon name="clock" size={14} /> Live site temporarily offline</span>}
        <div className="pcard__foot">
          <div className="pcard__chips">
            {p.stack.slice(0, featured ? 4 : 3).map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
          <span className="pcard__more">View project <Icon name="arrow" size={16} /></span>
        </div>
      </div>
    </Link>
  );
}

function Projects() {
  const [first, ...rest] = projects;
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Projects"
          title="Selected work"
          text="Real products I build and maintain – a hospital app, a live client website and an e-commerce platform."
        />
        <ProjectCard p={first} featured />
        <div className="pcards">
          {rest.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section section--tint">
      <div className="container about">
        <div data-reveal>
          <SectionHead eyebrow="About me" title="Clean, reliable software for real businesses" />
          <p className="about__lead">
            I’m a Full-Stack Web Developer from Chhatrapati Sambhajinagar with <strong>1+ year of professional experience</strong> in React.js,
            Node.js, Express.js, PHP, MongoDB and MySQL. I currently build <strong>Perinexa</strong>, a hospital management app, and I also
            deliver websites for clients such as <strong>GS Manpower</strong>.
          </p>
          <div className="about__facts">
            <div><Icon name="code" size={20} /><span><strong>Full-stack</strong>Frontend, backend & database</span></div>
            <div><Icon name="users" size={20} /><span><strong>Team & client work</strong>Products and business sites</span></div>
          </div>
          <h3 className="about__sub">Education</h3>
          <div className="edu">
            {education.map((e) => (
              <div key={e.degree} className="edu__item">
                <strong>{e.degree}</strong>
                <span>{e.place}</span>
                <em>{e.detail}</em>
              </div>
            ))}
          </div>
        </div>
        <div className="timeline" data-reveal>
          <h3>Experience</h3>
          {experience.map((job, i) => (
            <article key={job.company} className="timeline__item">
              <div className={`timeline__dot ${i === 0 ? 'timeline__dot--now' : ''}`} />
              <div className="timeline__card">
                <span className="timeline__period">{job.period}</span>
                <h4>{job.role}</h4>
                <span className="timeline__company">{job.company}</span>
                <ul>
                  {job.points.slice(0, 2).map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHead eyebrow="Services" title="What I can build for you" />
        <div className="services">
          {services.map((s) => (
            <article key={s.title} className="card service" data-reveal>
              <div className="service__icon"><Icon name={s.icon} size={22} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section section--tint">
      <div className="container">
        <SectionHead eyebrow="Skills" title="Technologies I work with" />
        <div className="skillrows">
          {[...skillGroups, { name: 'Tools', icon: 'wrench', skills: tools }].map((g) => (
            <div key={g.name} className="skillrow" data-reveal>
              <h3><span className="skillrow__icon"><Icon name={g.icon} size={18} /></span>{g.name}</h3>
              <div className="skillrow__items">
                {g.skills.map((sk) => (
                  <span key={sk.name} className="skillchip">
                    <span className="skillchip__logo"><TechLogo name={sk.logo} size={20} /></span>
                    {sk.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const emptyForm = { name: '', contact: '', service: services[0].title, message: '', _honey: '' };

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [note, setNote] = useState('');
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const ready = form.name.trim() && form.contact.trim() && form.message.trim();
  const text = `Hello Jayashri, I'm ${form.name}${form.contact ? ` (${form.contact})` : ''}.\nI'm interested in: ${form.service}.\n\n${form.message}`;

  // Emails the enquiry to profile.email through FormSubmit (free, no account; see README).
  const sendEmail = async (e) => {
    e.preventDefault();
    if (!ready || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New portfolio enquiry – ${form.service}`,
          _template: 'table',
          _captcha: 'false',
          _honey: form._honey,
          Name: form.name,
          'Email / Phone': form.contact,
          Service: form.service,
          Message: form.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && String(data.success) === 'true') {
        setStatus('sent');
        setForm(emptyForm);
      } else {
        setStatus('error');
        setNote(data.message || '');
      }
    } catch {
      setStatus('error');
      setNote('');
    }
  };

  const sendWhatsApp = () => {
    if (!ready) return;
    window.open(`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };

  const channels = [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'whatsapp', label: 'WhatsApp', value: profile.phoneDisplay, href: `https://wa.me/${profile.whatsapp}` },
  ];

  return (
    <section id="contact" className="section section--dark">
      <div className="container contact">
        <div data-reveal>
          <span className="eyebrow eyebrow--light">Contact</span>
          <h2>Have a project in mind? Let’s build it together.</h2>
          <p className="contact__lead">Share a few details and I’ll reply within 24 hours with ideas, a timeline and a clear quote.</p>
          <ul className="contact__promise">
            <li><Icon name="check" size={18} /> Free first call to understand your needs</li>
            <li><Icon name="check" size={18} /> Clear written scope and price before work starts</li>
            <li><Icon name="check" size={18} /> Support after launch</li>
          </ul>
          <div className="channels">
            {channels.map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="channel">
                <span className="channel__icon"><Icon name={c.icon} size={22} /></span>
                <span><strong>{c.label}</strong><em>{c.value}</em></span>
              </a>
            ))}
          </div>
        </div>
        {status === 'sent' ? (
          <div className="card contact__form contact__done" data-reveal>
            <span className="contact__done-icon"><Icon name="check" size={30} strokeWidth={2.4} /></span>
            <h3>Thank you – your message has been sent.</h3>
            <p>I’ll reply within 24 hours. For a faster answer you can also message me on WhatsApp.</p>
            <button className="btn btn--ghost" onClick={() => setStatus('idle')}>Send another message</button>
          </div>
        ) : (
          <form className="card contact__form" onSubmit={sendEmail} data-reveal>
            <div className="contact__form-head">
              <h3>Start your project</h3>
              <span>Takes less than a minute</span>
            </div>
            <div className="form__row">
              <label>Your name<input value={form.name} onChange={set('name')} placeholder="e.g. Rahul Patil" required /></label>
              <label>Email or phone<input value={form.contact} onChange={set('contact')} placeholder="So I can reply to you" required /></label>
            </div>
            <label>
              What do you need?
              <select value={form.service} onChange={set('service')}>
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
                <option>Something else</option>
              </select>
            </label>
            <label>Project details<textarea rows={4} value={form.message} onChange={set('message')} placeholder="Tell me about your business and what you want to build" required /></label>
            <input type="text" name="_honey" value={form._honey} onChange={set('_honey')} className="form__honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            {status === 'error' && (
              <p className="form__error">
                The message could not be sent{note ? ` (${note})` : ''}. Please use WhatsApp or email {profile.email} directly.
              </p>
            )}
            <button className="btn btn--primary btn--block btn--lg" type="submit" disabled={!ready || status === 'sending'}>
              <Icon name="mail" size={18} /> {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <button type="button" className="btn btn--whatsapp btn--block" onClick={sendWhatsApp} disabled={!ready}>
              <Icon name="whatsapp" size={18} /> Send on WhatsApp instead
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default function Portfolio() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

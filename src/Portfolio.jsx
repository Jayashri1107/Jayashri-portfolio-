import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Icon from './components/Icon.jsx';
import ProjectMedia from './components/ProjectMedia.jsx';
import { profile, stats, experience, education, services, projects, skills, tools, process } from './data/profile.js';

function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="section__head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow" />
      <div className="container hero__grid">
        <div>
          <span className="pill">
            <span className="pill__dot" /> Available for freelance projects
          </span>
          <h1>
            Hi, I’m {profile.name}.<br />
            <span className="gradient-text">{profile.title}</span>
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
            <a href={profile.resume} download="Jayashri_Sable_Resume.pdf"><Icon name="download" size={16} /> Download resume</a>
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

function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div>
          <SectionHead eyebrow="About me" title="A developer who cares about your business, not just the code" />
          <p>
            I’m a Full-Stack Web Developer from Chhatrapati Sambhajinagar with <strong>1+ year of professional experience</strong> building and
            maintaining real web applications with React.js, Node.js, Express.js, PHP, MongoDB and MySQL.
          </p>
          <p>
            At IpShopy I built frontend and backend features, customised OpenCart stores and developed REST APIs for the Reel Studio media platform.
            Today I work as a Software Developer at Anandi Private Limited on <strong>Perinexa</strong>, a healthcare application for patient and
            clinic workflows – where reliability, security and clean code really matter.
          </p>
          <p>
            For freelance clients I bring the same approach: understand the problem first, keep you updated, and deliver software that is simple to
            use and easy to maintain.
          </p>
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
        <div className="timeline">
          <h3>Experience</h3>
          {experience.map((job) => (
            <article key={job.company} className="timeline__item">
              <div className="timeline__dot" />
              <span className="timeline__period">{job.period}</span>
              <h4>{job.role}</h4>
              <span className="timeline__company">{job.company}</span>
              <ul>
                {job.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section section--tint">
      <div className="container">
        <SectionHead
          eyebrow="Services"
          title="What I can build for you"
          text="From your first website to software that runs your daily operations."
        />
        <div className="services">
          {services.map((s) => (
            <article key={s.title} className="card service">
              <div className="service__icon"><Icon name={s.icon} size={24} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
          <article className="card service service--cta">
            <h3>Have a different idea?</h3>
            <p>Tell me what you need and I’ll suggest the simplest way to build it.</p>
            <a href="#contact" className="btn btn--light btn--sm">Get a free quote <Icon name="arrow" size={16} /></a>
          </article>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Projects"
          title="Selected work"
          text="Real products I have worked on as part of development teams, plus a demo website you can try. Demo projects use sample data only and are not client work."
        />
        <div className="projects">
          {projects.map((p, i) => (
            <article key={p.slug} className={`project ${i % 2 ? 'project--flip' : ''}`}>
              <div className="project__media">
                <ProjectMedia project={p} />
              </div>
              <div className="project__body">
                <div className="project__top">
                  <span className="project__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className={`tag tag--${p.kind}`}>{p.kind === 'work' ? 'Professional work' : 'Demo project'}</span>
                </div>
                <h3>{p.title}</h3>
                <span className="project__role">{p.role}</span>
                <p>{p.summary}</p>
                <ul className="checks">
                  {p.features.map((f) => (
                    <li key={f}><Icon name="check" size={16} /> {f}</li>
                  ))}
                </ul>
                <div className="chips">
                  {p.stack.map((t) => <span key={t} className="chip">{t}</span>)}
                </div>
                <div className="project__links">
                  {p.links.map((l, j) => {
                    const cls = `btn ${j === 0 ? 'btn--primary' : 'btn--ghost'}`;
                    const inner = <>{l.label} <Icon name="external" size={16} /></>;
                    return l.to
                      ? <Link key={l.label} to={l.to} className={cls}>{inner}</Link>
                      : <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>;
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = ['Frontend', 'Backend', 'Database'];
  return (
    <section id="skills" className="section section--tint">
      <div className="container">
        <SectionHead eyebrow="Skills" title="Technologies I work with" />
        <div className="skills">
          {groups.map((g) => (
            <div key={g} className="card skills__group">
              <h3>{g}</h3>
              {skills.filter((s) => s.group === g).map((s) => (
                <div key={s.name} className="skill">
                  <div className="skill__row"><span>{s.name}</span></div>
                  <div className="skill__bar"><span style={{ width: `${s.level}%` }} /></div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="chips chips--center">
          {tools.map((t) => <span key={t} className="chip chip--lg">{t}</span>)}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <SectionHead eyebrow="Work process" title="How we’ll work together" text="A simple, transparent process – you always know what’s happening." />
        <ol className="process">
          {process.map((p, i) => (
            <li key={p.step} className="process__step">
              <span className="process__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.step}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
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
    { icon: 'linkedin', label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin },
    { icon: 'github', label: 'GitHub', value: 'See my code', href: profile.github },
  ];

  return (
    <section id="contact" className="section section--dark">
      <div className="container contact">
        <div>
          <span className="eyebrow eyebrow--light">Contact</span>
          <h2>Let’s build something for your business</h2>
          <p className="contact__lead">
            Tell me about your project. I usually reply within 24 hours with questions, a time estimate and a quote.
          </p>
          <div className="channels">
            {channels.map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="channel">
                <span className="channel__icon"><Icon name={c.icon} size={22} /></span>
                <span><strong>{c.label}</strong><em>{c.value}</em></span>
              </a>
            ))}
          </div>
          <a href={profile.resume} download="Jayashri_Sable_Resume.pdf" className="btn btn--light">
            <Icon name="download" size={18} /> Download my resume
          </a>
        </div>
        {status === 'sent' ? (
          <div className="card contact__form contact__done">
            <span className="contact__done-icon"><Icon name="check" size={30} strokeWidth={2.4} /></span>
            <h3>Thank you – your message has been sent.</h3>
            <p>I’ll reply within 24 hours. For a faster answer you can also message me on WhatsApp.</p>
            <button className="btn btn--ghost" onClick={() => setStatus('idle')}>Send another message</button>
          </div>
        ) : (
          <form className="card contact__form" onSubmit={sendEmail}>
            <h3>Send me a message</h3>
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
            <button className="btn btn--primary btn--block" type="submit" disabled={!ready || status === 'sending'}>
              <Icon name="mail" size={18} /> {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <button type="button" className="btn btn--whatsapp btn--block" onClick={sendWhatsApp} disabled={!ready}>
              <Icon name="whatsapp" size={18} /> Send on WhatsApp instead
            </button>
          </form>
        )}
      </div>
      <footer className="container footer">
        <span>© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </section>
  );
}

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Process />
        <Contact />
      </main>
    </>
  );
}

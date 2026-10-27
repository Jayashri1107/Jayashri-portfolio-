import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import { DemoBanner } from './shared.jsx';
import './business.css';

// A fictional business – "Aura Interiors" does not exist.
const services = [
  { title: 'Home Interiors', text: 'Complete design for 1, 2 and 3 BHK homes – living, bedroom and kitchen.', price: 'From ₹1.5 lakh' },
  { title: 'Modular Kitchens', text: 'Space-saving kitchens with soft-close fittings and 10-year warranty.', price: 'From ₹85,000' },
  { title: 'Office Spaces', text: 'Productive, brand-friendly offices, cabins and reception areas.', price: 'From ₹2.5 lakh' },
];
const gallery = [
  ['Modern living room', 'linear-gradient(135deg,#d6c3a5,#8c6e4f)'],
  ['Minimal bedroom', 'linear-gradient(135deg,#c9d6df,#52616b)'],
  ['Open kitchen', 'linear-gradient(135deg,#e7d8c9,#a68a64)'],
  ['Studio office', 'linear-gradient(135deg,#b8c4bb,#4a5d52)'],
  ['Kids room', 'linear-gradient(135deg,#f3d1c2,#c07a5f)'],
  ['Reading corner', 'linear-gradient(135deg,#d9cbb8,#6b5844)'],
];
const reviews = [
  { name: 'Sample client A', text: 'They finished our 2 BHK in 45 days, exactly as shown in the 3D design.' },
  { name: 'Sample client B', text: 'Clear pricing, no hidden costs and a very neat kitchen. Highly recommended.' },
  { name: 'Sample client C', text: 'Our new office looks professional and the team loves working there.' },
];

function Enquiry() {
  const [f, setF] = useState({ name: '', phone: '', type: 'Home Interiors', msg: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (f.name.trim().length < 2) er.name = 'Please enter your name.';
    if (!/^\d{10}$/.test(f.phone.replace(/\D/g, ''))) er.phone = 'Enter a 10-digit mobile number.';
    setErrors(er);
    if (!Object.keys(er).length) setSent(true);
  };
  if (sent)
    return (
      <div className="biz-form biz-form--done">
        <Icon name="check" size={36} />
        <h3>Thank you, {f.name.split(' ')[0]}.</h3>
        <p>In a real website this enquiry would be emailed to the business owner. This is a demo, so nothing was sent.</p>
        <button className="biz-btn biz-btn--ghost" onClick={() => { setSent(false); setF({ name: '', phone: '', type: 'Home Interiors', msg: '' }); }}>Send another</button>
      </div>
    );
  return (
    <form className="biz-form" onSubmit={submit} noValidate>
      <h3>Book a free consultation</h3>
      <label>Name<input value={f.name} onChange={set('name')} />{errors.name && <small>{errors.name}</small>}</label>
      <label>Mobile number<input value={f.phone} onChange={set('phone')} inputMode="numeric" />{errors.phone && <small>{errors.phone}</small>}</label>
      <label>Interested in<select value={f.type} onChange={set('type')}>{services.map((s) => <option key={s.title}>{s.title}</option>)}</select></label>
      <label>Message (optional)<textarea rows={3} value={f.msg} onChange={set('msg')} /></label>
      <button className="biz-btn">Request a call back</button>
    </form>
  );
}

export default function BusinessDemo() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="biz">
      <DemoBanner />
      <header className="biz-nav">
        <div className="biz-wrap biz-nav__in">
          <a href="#top" className="biz-logo">Aura<span>Interiors</span></a>
          <nav className={menu ? 'is-open' : ''} onClick={() => setMenu(false)}>
            <a href="#services">Services</a><a href="#work">Our work</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a>
          </nav>
          <button className="biz-nav__toggle" onClick={() => setMenu(!menu)} aria-label="Menu"><Icon name={menu ? 'close' : 'menu'} /></button>
        </div>
      </header>

      <section id="top" className="biz-hero">
        <div className="biz-wrap biz-hero__in">
          <div>
            <span className="biz-kicker">Interior design studio · Sample business</span>
            <h1>Beautiful spaces, designed around the way you live.</h1>
            <p>Homes, kitchens and offices – designed in 3D, delivered on time, with one clear price.</p>
            <div className="biz-actions">
              <a href="#contact" className="biz-btn">Get a free quote</a>
              <a href="#work" className="biz-btn biz-btn--ghost">See our work</a>
            </div>
            <div className="biz-trust">
              <div><strong>350+</strong><span>Projects</span></div>
              <div><strong>45 days</strong><span>Avg. delivery</span></div>
              <div><strong>4.9</strong><span>Rating</span></div>
            </div>
          </div>
          <div className="biz-hero__art">
            <div className="biz-hero__tile biz-hero__tile--a" />
            <div className="biz-hero__tile biz-hero__tile--b" />
            <div className="biz-hero__chip"><Icon name="star" size={16} /> 10-year warranty</div>
          </div>
        </div>
      </section>

      <section id="services" className="biz-section">
        <div className="biz-wrap">
          <h2>What we do</h2>
          <div className="biz-cards">
            {services.map((s) => (
              <article key={s.title} className="biz-card">
                <Icon name="home" size={28} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <strong>{s.price}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="biz-section biz-section--alt">
        <div className="biz-wrap">
          <h2>Recent work</h2>
          <div className="biz-gallery">
            {gallery.map(([t, bg]) => (
              <figure key={t} style={{ background: bg }}><figcaption>{t}</figcaption></figure>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="biz-section">
        <div className="biz-wrap">
          <h2>What clients say</h2>
          <div className="biz-cards">
            {reviews.map((r) => (
              <blockquote key={r.name} className="biz-card biz-quote">
                <div className="biz-stars">{[1, 2, 3, 4, 5].map((i) => <Icon key={i} name="star" size={16} />)}</div>
                <p>“{r.text}”</p>
                <cite>{r.name}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="biz-section biz-section--dark">
        <div className="biz-wrap biz-contact">
          <div>
            <h2>Let’s design your space</h2>
            <p>Visit our studio or book a free home visit. We reply within one working day.</p>
            <ul>
              <li><Icon name="pin" size={18} /> Sample Road, Your City</li>
              <li><Icon name="phone" size={18} /> 90000 00000 (sample)</li>
              <li><Icon name="clock" size={18} /> Mon–Sat, 10 am – 7 pm</li>
            </ul>
          </div>
          <Enquiry />
        </div>
      </section>
      <footer className="biz-footer">© Aura Interiors – a fictional business created as a website demo.</footer>
      <a className="biz-wa" href="#contact" aria-label="Chat on WhatsApp"><Icon name="whatsapp" size={26} /></a>
    </div>
  );
}

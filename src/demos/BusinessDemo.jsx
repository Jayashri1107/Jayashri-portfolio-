import { useEffect, useState } from 'react';
import Icon from '../components/Icon.jsx';
import RoomArt from './RoomArt.jsx';
import { DemoBanner, useIsPreview } from './shared.jsx';
import './business.css';

// A fictional business – "Aura Interiors" does not exist. All names, numbers and reviews are sample content.
const services = [
  { title: 'Home Interiors', room: 'living', palette: 'sand', text: 'Complete design for 1, 2 and 3 BHK homes – living room, bedrooms and storage.', price: 'From ₹1.5 lakh' },
  { title: 'Modular Kitchens', room: 'kitchen', palette: 'sage', text: 'Smart, space-saving kitchens with soft-close fittings and a 10-year warranty.', price: 'From ₹85,000' },
  { title: 'Bedroom Makeovers', room: 'bedroom', palette: 'blush', text: 'Calm, cosy bedrooms with wardrobes, lighting and made-to-measure furniture.', price: 'From ₹60,000' },
  { title: 'Office Spaces', room: 'office', palette: 'slate', text: 'Productive workspaces, cabins and reception areas that reflect your brand.', price: 'From ₹2.5 lakh' },
];
const gallery = [
  { title: 'Warm minimal living room', type: 'Living', room: 'living', palette: 'sand' },
  { title: 'Terracotta kitchen', type: 'Kitchen', room: 'kitchen', palette: 'sage' },
  { title: 'Soft blush bedroom', type: 'Bedroom', room: 'bedroom', palette: 'blush' },
  { title: 'Founder’s studio office', type: 'Office', room: 'office', palette: 'slate' },
  { title: 'Navy accent living room', type: 'Living', room: 'living', palette: 'blush' },
  { title: 'Sage green bedroom', type: 'Bedroom', room: 'bedroom', palette: 'sage' },
];
const steps = [
  ['Free consultation', 'We visit your space, understand your style and budget, and take measurements.'],
  ['3D design', 'See your room in 3D within 7 days. Change anything until you love it.'],
  ['Build & install', 'Our own team builds in the factory and installs on site – with weekly updates.'],
  ['Handover', 'Move in on the promised date, with a 10-year warranty on woodwork.'],
];
const plans = [
  { name: 'Essential', price: '₹1.5L', unit: 'for 1 BHK', items: ['3D design for 2 rooms', 'Modular kitchen', 'Wardrobes & TV unit', '45-day delivery'] },
  { name: 'Premium', price: '₹3.2L', unit: 'for 2 BHK', items: ['3D design for every room', 'Kitchen + wardrobes', 'False ceiling & lighting', 'Décor & soft furnishing', 'Dedicated designer'], featured: true },
  { name: 'Luxury', price: '₹5.8L', unit: 'for 3 BHK', items: ['Everything in Premium', 'Imported finishes', 'Smart-home lighting', 'Custom furniture', 'Priority 35-day delivery'] },
];
const reviews = [
  { name: 'Sample client · Pune', initials: 'SP', text: 'They finished our 2 BHK in 45 days, exactly as shown in the 3D design. The team was polite and tidy.' },
  { name: 'Sample client · Nashik', initials: 'RK', text: 'Clear pricing with no hidden costs, and the kitchen is beautiful. We recommend them to everyone.' },
  { name: 'Sample client · Aurangabad', initials: 'MD', text: 'Our new office looks professional and the staff love working there. Great value for money.' },
];
const faqs = [
  ['How long does a project take?', 'Most homes are completed in 35–45 days after the 3D design is approved.'],
  ['Is the consultation really free?', 'Yes. The first visit, measurements and a rough estimate are completely free with no obligation.'],
  ['Do you offer EMI?', 'Yes – easy EMI options are available through partner banks for projects above ₹1 lakh.'],
  ['What warranty do I get?', 'A 10-year warranty on modular woodwork and 1 year on installation and fittings.'],
];

// Fade sections in as they scroll into view.
function useReveal(enabled) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!enabled || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('is-visible'), io.unobserve(e.target))),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [enabled]);
}

function Enquiry() {
  const blank = { name: '', phone: '', type: services[0].title, msg: '' };
  const [f, setF] = useState(blank);
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
        <span className="biz-done-icon"><Icon name="check" size={30} strokeWidth={2.4} /></span>
        <h3>Thank you, {f.name.split(' ')[0]}.</h3>
        <p>On a real website this request goes straight to the owner’s email and WhatsApp. This is a demo, so nothing was sent.</p>
        <button className="biz-btn biz-btn--ghost" onClick={() => { setSent(false); setF(blank); }}>Send another</button>
      </div>
    );
  return (
    <form className="biz-form" onSubmit={submit} noValidate>
      <h3>Book a free home visit</h3>
      <p className="biz-form__sub">We’ll call you back within one working day.</p>
      <label>Your name<input value={f.name} onChange={set('name')} className={errors.name ? 'has-error' : ''} />{errors.name && <small>{errors.name}</small>}</label>
      <label>Mobile number<input value={f.phone} onChange={set('phone')} inputMode="numeric" className={errors.phone ? 'has-error' : ''} />{errors.phone && <small>{errors.phone}</small>}</label>
      <label>Interested in<select value={f.type} onChange={set('type')}>{services.map((s) => <option key={s.title}>{s.title}</option>)}</select></label>
      <label>Message (optional)<textarea rows={3} value={f.msg} onChange={set('msg')} /></label>
      <button className="biz-btn biz-btn--accent">Request a call back <Icon name="arrow" size={16} /></button>
    </form>
  );
}

export default function BusinessDemo() {
  const preview = useIsPreview();
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState('All');
  const [openFaq, setOpenFaq] = useState(0);
  useReveal(!preview);

  const shown = filter === 'All' ? gallery : gallery.filter((g) => g.type === filter);

  return (
    <div className="biz">
      <DemoBanner />
      <header className="biz-nav">
        <div className="biz-wrap biz-nav__in">
          <a href="#top" className="biz-logo"><span className="biz-logo__mark">A</span>Aura<em>Interiors</em></a>
          <nav className={menu ? 'is-open' : ''} onClick={() => setMenu(false)}>
            <a href="#services">Services</a><a href="#work">Our work</a><a href="#pricing">Pricing</a><a href="#reviews">Reviews</a><a href="#faq">FAQ</a>
            <a href="#contact" className="biz-btn biz-btn--sm biz-nav__cta">Book free visit</a>
          </nav>
          <button className="biz-nav__toggle" onClick={() => setMenu(!menu)} aria-label="Menu"><Icon name={menu ? 'close' : 'menu'} /></button>
        </div>
      </header>

      <section id="top" className="biz-hero">
        <div className="biz-wrap biz-hero__in">
          <div className="biz-hero__copy">
            <span className="biz-kicker"><span className="biz-kicker__dot" /> Interior design studio</span>
            <h1>Homes that feel like <em>you</em>, designed in 3D first.</h1>
            <p>Living rooms, kitchens, bedrooms and offices – planned with you, built by our own team and delivered on time, with one clear price.</p>
            <div className="biz-actions">
              <a href="#contact" className="biz-btn biz-btn--accent">Get a free quote <Icon name="arrow" size={16} /></a>
              <a href="#work" className="biz-btn biz-btn--ghost">See our work</a>
            </div>
            <div className="biz-proof">
              <div className="biz-proof__faces">
                {['SP', 'RK', 'MD', 'AJ'].map((x, i) => <span key={x} style={{ background: ['#c7835b', '#5b7065', '#33475b', '#c9a227'][i] }}>{x}</span>)}
              </div>
              <div>
                <div className="biz-stars">{[1, 2, 3, 4, 5].map((i) => <Icon key={i} name="star" size={14} />)}</div>
                <span><strong>4.9/5</strong> from 200+ happy families</span>
              </div>
            </div>
          </div>
          <div className="biz-hero__art">
            <div className="biz-hero__frame"><RoomArt room="living" palette="sand" label="Living room design" /></div>
            <div className="biz-float biz-float--a"><Icon name="calendar" size={18} /><div><strong>3D design</strong><span>ready in 7 days</span></div></div>
            <div className="biz-float biz-float--b"><Icon name="check" size={18} /><div><strong>10-year</strong><span>warranty</span></div></div>
          </div>
        </div>
      </section>

      <section className="biz-strip">
        <div className="biz-wrap biz-strip__in">
          {[['350+', 'Homes & offices'], ['45 days', 'Average delivery'], ['12', 'Cities served'], ['0', 'Hidden charges']].map(([v, l]) => (
            <div key={l}><strong>{v}</strong><span>{l}</span></div>
          ))}
        </div>
      </section>

      <section id="services" className="biz-section">
        <div className="biz-wrap">
          <div className="biz-head reveal"><span className="biz-eyebrow">What we do</span><h2>Spaces we design and build</h2></div>
          <div className="biz-services">
            {services.map((s) => (
              <article key={s.title} className="biz-service reveal">
                <div className="biz-service__art"><RoomArt room={s.room} palette={s.palette} /></div>
                <div className="biz-service__body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <div className="biz-service__foot"><strong>{s.price}</strong><a href="#contact">Enquire <Icon name="arrow" size={14} /></a></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="biz-section biz-section--alt">
        <div className="biz-wrap">
          <div className="biz-head reveal"><span className="biz-eyebrow">Portfolio</span><h2>Recent designs</h2></div>
          <div className="biz-filters reveal">
            {['All', 'Living', 'Kitchen', 'Bedroom', 'Office'].map((t) => (
              <button key={t} className={filter === t ? 'is-active' : ''} onClick={() => setFilter(t)}>{t}</button>
            ))}
          </div>
          <div className="biz-gallery">
            {shown.map((g) => (
              <figure key={g.title}>
                <RoomArt room={g.room} palette={g.palette} label={g.title} />
                <figcaption><strong>{g.title}</strong><span>{g.type}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="biz-section">
        <div className="biz-wrap">
          <div className="biz-head reveal"><span className="biz-eyebrow">How it works</span><h2>From first visit to move-in</h2></div>
          <ol className="biz-steps">
            {steps.map(([t, d], i) => (
              <li key={t} className="reveal"><span>{i + 1}</span><h3>{t}</h3><p>{d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pricing" className="biz-section biz-section--alt">
        <div className="biz-wrap">
          <div className="biz-head reveal"><span className="biz-eyebrow">Packages</span><h2>Simple, honest pricing</h2></div>
          <div className="biz-plans">
            {plans.map((pl) => (
              <article key={pl.name} className={`biz-plan reveal ${pl.featured ? 'biz-plan--featured' : ''}`}>
                {pl.featured && <span className="biz-plan__badge">Most popular</span>}
                <h3>{pl.name}</h3>
                <div className="biz-plan__price"><strong>{pl.price}</strong><span>{pl.unit}</span></div>
                <ul>{pl.items.map((it) => <li key={it}><Icon name="check" size={16} /> {it}</li>)}</ul>
                <a href="#contact" className={`biz-btn ${pl.featured ? 'biz-btn--accent' : 'biz-btn--ghost'}`}>Choose {pl.name}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="biz-section">
        <div className="biz-wrap">
          <div className="biz-head reveal"><span className="biz-eyebrow">Reviews</span><h2>What our clients say</h2></div>
          <div className="biz-reviews">
            {reviews.map((r) => (
              <blockquote key={r.name} className="biz-review reveal">
                <div className="biz-stars">{[1, 2, 3, 4, 5].map((i) => <Icon key={i} name="star" size={16} />)}</div>
                <p>“{r.text}”</p>
                <footer><span className="biz-avatar">{r.initials}</span><cite>{r.name}</cite></footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="biz-section biz-section--alt">
        <div className="biz-wrap biz-faq">
          <div className="biz-head biz-head--left reveal">
            <span className="biz-eyebrow">FAQ</span>
            <h2>Questions, answered</h2>
            <p>Can’t find what you’re looking for? Call or WhatsApp us any day from 10 am to 7 pm.</p>
          </div>
          <div className="biz-faq__list">
            {faqs.map(([q, a], i) => (
              <div key={q} className={`biz-faq__item ${openFaq === i ? 'is-open' : ''}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                  {q}<Icon name={openFaq === i ? 'close' : 'plus'} size={18} />
                </button>
                {openFaq === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="biz-section biz-section--dark">
        <div className="biz-wrap biz-contact">
          <div>
            <span className="biz-eyebrow biz-eyebrow--light">Contact</span>
            <h2>Let’s design your space</h2>
            <p>Visit our studio or book a free home visit. No obligation, no pressure – just good design advice.</p>
            <ul>
              <li><span><Icon name="pin" size={18} /></span>Sample Road, Your City</li>
              <li><span><Icon name="phone" size={18} /></span>90000 00000 (sample)</li>
              <li><span><Icon name="clock" size={18} /></span>Mon–Sat, 10 am – 7 pm</li>
            </ul>
          </div>
          <Enquiry />
        </div>
      </section>
      <footer className="biz-footer">
        <div className="biz-wrap biz-footer__in">
          <span className="biz-logo biz-logo--light"><span className="biz-logo__mark">A</span>Aura<em>Interiors</em></span>
          <span>A fictional business created as a website demo by Jayashri Sable.</span>
        </div>
      </footer>
      <a className="biz-wa" href="#contact" aria-label="Chat on WhatsApp"><Icon name="whatsapp" size={26} /></a>
    </div>
  );
}

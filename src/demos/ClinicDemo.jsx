import { useEffect, useMemo, useState } from 'react';
import Icon from '../components/Icon.jsx';
import { DemoBanner, Modal, usePersistentState, uid, today } from './shared.jsx';
import './demos.css';

// Fictional sample data – no real people.
const seedPatients = [
  { id: 'p1', name: 'Anita Kulkarni', age: 34, gender: 'Female', phone: '90000 10001', blood: 'B+' },
  { id: 'p2', name: 'Rohan Deshmukh', age: 52, gender: 'Male', phone: '90000 10002', blood: 'O+' },
  { id: 'p3', name: 'Sneha Patil', age: 27, gender: 'Female', phone: '90000 10003', blood: 'A+' },
  { id: 'p4', name: 'Vikram Joshi', age: 45, gender: 'Male', phone: '90000 10004', blood: 'AB+' },
  { id: 'p5', name: 'Meera Shinde', age: 61, gender: 'Female', phone: '90000 10005', blood: 'O-' },
  { id: 'p6', name: 'Arjun Pawar', age: 8, gender: 'Male', phone: '90000 10006', blood: 'B+' },
];
const doctors = ['Dr. A. Mehta (General)', 'Dr. S. Rao (Paediatrics)', 'Dr. K. Iyer (Ortho)'];
const seedAppointments = () => {
  const d = today();
  return [
    { id: 'a1', patientId: 'p1', date: d, time: '09:30', doctor: doctors[0], reason: 'Fever and cold', status: 'Completed' },
    { id: 'a2', patientId: 'p2', date: d, time: '10:15', doctor: doctors[2], reason: 'Knee pain follow-up', status: 'In consultation' },
    { id: 'a3', patientId: 'p6', date: d, time: '11:00', doctor: doctors[1], reason: 'Vaccination', status: 'Waiting' },
    { id: 'a4', patientId: 'p4', date: d, time: '12:30', doctor: doctors[0], reason: 'BP check', status: 'Waiting' },
    { id: 'a5', patientId: 'p5', date: d, time: '16:00', doctor: doctors[0], reason: 'Routine check-up', status: 'Booked' },
    { id: 'a6', patientId: 'p3', date: d, time: '17:30', doctor: doctors[0], reason: 'Skin allergy', status: 'Booked' },
  ];
};

const statusFlow = ['Booked', 'Waiting', 'In consultation', 'Completed'];
const statusColor = { Booked: 'grey', Waiting: 'amber', 'In consultation': 'blue', Completed: 'green', Cancelled: 'red' };
const initials = (n) => n.split(' ').map((w) => w[0]).slice(0, 2).join('');

function PatientForm({ onSave, onClose }) {
  const [f, setF] = useState({ name: '', age: '', gender: 'Female', phone: '', blood: 'O+' });
  const [err, setErr] = useState('');
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (f.name.trim().length < 3) return setErr('Please enter the full name.');
    if (!(+f.age > 0 && +f.age < 120)) return setErr('Please enter a valid age.');
    onSave({ ...f, id: uid(), age: +f.age, name: f.name.trim() });
  };
  return (
    <form className="form" onSubmit={submit}>
      <label>Full name<input value={f.name} onChange={set('name')} placeholder="Sample patient name" autoFocus /></label>
      <div className="form__row">
        <label>Age<input type="number" value={f.age} onChange={set('age')} /></label>
        <label>Gender<select value={f.gender} onChange={set('gender')}><option>Female</option><option>Male</option><option>Other</option></select></label>
      </div>
      <div className="form__row">
        <label>Phone<input value={f.phone} onChange={set('phone')} placeholder="90000 00000" /></label>
        <label>Blood group<select value={f.blood} onChange={set('blood')}>{['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((b) => <option key={b}>{b}</option>)}</select></label>
      </div>
      {err && <p className="form__error">{err}</p>}
      <div className="form__actions">
        <button type="button" className="d-btn d-btn--ghost" onClick={onClose}>Cancel</button>
        <button className="d-btn">Save patient</button>
      </div>
    </form>
  );
}

function AppointmentForm({ patients, onSave, onClose, presetPatient }) {
  const [f, setF] = useState({ patientId: presetPatient || patients[0]?.id || '', date: today(), time: '10:00', doctor: doctors[0], reason: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!f.patientId) return;
    onSave({ ...f, id: uid(), status: 'Booked', reason: f.reason || 'Consultation' });
  };
  return (
    <form className="form" onSubmit={submit}>
      <label>Patient<select value={f.patientId} onChange={set('patientId')}>{patients.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</select></label>
      <div className="form__row">
        <label>Date<input type="date" value={f.date} onChange={set('date')} /></label>
        <label>Time<input type="time" value={f.time} onChange={set('time')} /></label>
      </div>
      <label>Doctor<select value={f.doctor} onChange={set('doctor')}>{doctors.map((d) => <option key={d}>{d}</option>)}</select></label>
      <label>Reason for visit<input value={f.reason} onChange={set('reason')} placeholder="e.g. Follow-up" /></label>
      <div className="form__actions">
        <button type="button" className="d-btn d-btn--ghost" onClick={onClose}>Cancel</button>
        <button className="d-btn">Book appointment</button>
      </div>
    </form>
  );
}

export default function ClinicDemo() {
  const [patients, setPatients] = usePersistentState('demo.clinic.patients', seedPatients);
  const [appts, setAppts] = usePersistentState('demo.clinic.appts', seedAppointments());
  // Keep the sample appointments on today's date so the dashboard is never empty on a later visit.
  useEffect(() => {
    setAppts((list) => list.map((a) => (/^a\d$/.test(a.id) ? { ...a, date: today() } : a)));
  }, [setAppts]);
  const [tab, setTab] = useState('dashboard');
  const [modal, setModal] = useState(null);
  const [q, setQ] = useState('');
  const [day, setDay] = useState(today());

  const byId = useMemo(() => Object.fromEntries(patients.map((p) => [p.id, p])), [patients]);
  const todays = appts.filter((a) => a.date === today()).sort((a, b) => a.time.localeCompare(b.time));
  const count = (s) => todays.filter((a) => a.status === s).length;

  const advance = (id) =>
    setAppts(appts.map((a) => (a.id === id && a.status !== 'Completed' && a.status !== 'Cancelled' ? { ...a, status: statusFlow[statusFlow.indexOf(a.status) + 1] } : a)));
  const cancel = (id) => setAppts(appts.map((a) => (a.id === id ? { ...a, status: 'Cancelled' } : a)));
  const reset = () => { setPatients(seedPatients); setAppts(seedAppointments()); };

  const nav = [
    ['dashboard', 'Dashboard', 'dashboard'],
    ['patients', 'Patients', 'users'],
    ['appointments', 'Appointments', 'calendar'],
  ];
  const navButtons = nav.map(([id, label, icon]) => (
    <button key={id} className={`app__nav ${tab === id ? 'is-active' : ''}`} onClick={() => setTab(id)}>
      <Icon name={icon} size={18} /> {label}
    </button>
  ));

  const apptRow = (a) => {
    const p = byId[a.patientId];
    const next = statusFlow[statusFlow.indexOf(a.status) + 1];
    return (
      <tr key={a.id}>
        <td><strong>{a.time}</strong>{tab === 'appointments' && <div className="muted">{a.date}</div>}</td>
        <td><div className="cell-user"><span className="avatar">{p ? initials(p.name) : '?'}</span><div><strong>{p?.name || 'Removed patient'}</strong><div className="muted">{a.reason}</div></div></div></td>
        <td className="muted">{a.doctor}</td>
        <td><span className={`badge badge--${statusColor[a.status]}`}>{a.status}</span></td>
        <td>
          <div className="row-actions">
            {next && a.status !== 'Cancelled' && <button className="d-btn d-btn--sm d-btn--ghost" onClick={() => advance(a.id)}>Mark {next.toLowerCase()}</button>}
            {a.status !== 'Completed' && a.status !== 'Cancelled' && <button className="icon-btn icon-btn--danger" title="Cancel" onClick={() => cancel(a.id)}><Icon name="close" size={16} /></button>}
          </div>
        </td>
      </tr>
    );
  };

  const apptTable = (list) => (
    <div className="table-wrap">
      <table className="table">
        <thead><tr><th>Time</th><th>Patient</th><th>Doctor</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>{list.length ? list.map(apptRow) : <tr><td colSpan={5} className="empty">No appointments.</td></tr>}</tbody>
      </table>
    </div>
  );

  const filteredPatients = patients.filter((p) => (p.name + p.phone).toLowerCase().includes(q.toLowerCase()));
  const doctorLoad = doctors.map((d) => ({ d, n: todays.filter((a) => a.doctor === d && a.status !== 'Cancelled').length }));
  const maxLoad = Math.max(1, ...doctorLoad.map((x) => x.n));

  return (
    <>
      <DemoBanner onReset={reset} />
      <div className="app">
        <aside className="app__side">
          <div className="app__brand"><span><Icon name="plus" size={18} strokeWidth={3} /></span> CareDesk</div>
          {navButtons}
          <div className="app__user"><strong>Reception desk</strong>Sunrise Clinic (sample)</div>
        </aside>
        <div>
          <div className="app__mobile-nav">{navButtons}</div>
          <main className="app__main">
            {tab === 'dashboard' && (
              <>
                <div className="app__top">
                  <div><h1>Good day, Reception</h1><p>{new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p></div>
                  <button className="d-btn" onClick={() => setModal('appt')}><Icon name="plus" size={16} /> New appointment</button>
                </div>
                <div className="kpis">
                  <div className="kpi"><span className="kpi__icon"><Icon name="calendar" /></span><div><strong>{todays.filter((a) => a.status !== 'Cancelled').length}</strong><span>Appointments today</span></div></div>
                  <div className="kpi"><span className="kpi__icon"><Icon name="clock" /></span><div><strong>{count('Waiting')}</strong><span>Waiting now</span></div></div>
                  <div className="kpi"><span className="kpi__icon"><Icon name="check" /></span><div><strong>{count('Completed')}</strong><span>Completed</span></div></div>
                  <div className="kpi"><span className="kpi__icon"><Icon name="users" /></span><div><strong>{patients.length}</strong><span>Registered patients</span></div></div>
                </div>
                <div className="grid-2">
                  <section className="panel">
                    <div className="panel__head"><h2>Today’s schedule</h2><button className="d-btn d-btn--ghost d-btn--sm" onClick={() => setTab('appointments')}>View all</button></div>
                    {apptTable(todays)}
                  </section>
                  <div>
                    <section className="panel">
                      <div className="panel__head"><h2>Waiting room</h2></div>
                      <div className="queue">
                        {todays.filter((a) => a.status === 'Waiting' || a.status === 'In consultation').map((a) => (
                          <div key={a.id} className="queue__item">
                            <span className="queue__time">{a.time}</span>
                            <div><strong>{byId[a.patientId]?.name}</strong><span>{a.doctor}</span></div>
                            <span className={`badge badge--${statusColor[a.status]}`}>{a.status}</span>
                          </div>
                        ))}
                        {!count('Waiting') && !count('In consultation') && <p className="muted">No one is waiting.</p>}
                      </div>
                    </section>
                    <section className="panel">
                      <div className="panel__head"><h2>Doctor load today</h2></div>
                      <div className="bars">
                        {doctorLoad.map(({ d, n }) => (
                          <div key={d} className="bars__row"><span>{d.split(' (')[0]}</span><div className="bars__track"><span style={{ width: `${(n / maxLoad) * 100}%` }} /></div><strong>{n}</strong></div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </>
            )}

            {tab === 'patients' && (
              <>
                <div className="app__top">
                  <div><h1>Patients</h1><p>{patients.length} registered</p></div>
                  <div className="toolbar">
                    <div className="search"><Icon name="search" size={16} /><input placeholder="Search name or phone" value={q} onChange={(e) => setQ(e.target.value)} /></div>
                    <button className="d-btn" onClick={() => setModal('patient')}><Icon name="plus" size={16} /> Add patient</button>
                  </div>
                </div>
                <section className="panel">
                  <div className="table-wrap">
                    <table className="table">
                      <thead><tr><th>Patient</th><th>Age / Gender</th><th>Blood</th><th>Phone</th><th>Visits</th><th>Action</th></tr></thead>
                      <tbody>
                        {filteredPatients.map((p) => (
                          <tr key={p.id}>
                            <td><div className="cell-user"><span className="avatar">{initials(p.name)}</span><strong>{p.name}</strong></div></td>
                            <td>{p.age} · {p.gender}</td>
                            <td><span className="badge badge--red">{p.blood}</span></td>
                            <td className="mono">{p.phone || '—'}</td>
                            <td>{appts.filter((a) => a.patientId === p.id).length}</td>
                            <td><button className="d-btn d-btn--sm d-btn--ghost" onClick={() => setModal({ appt: p.id })}>Book visit</button></td>
                          </tr>
                        ))}
                        {!filteredPatients.length && <tr><td colSpan={6} className="empty">No patients match “{q}”.</td></tr>}
                      </tbody>
                    </table>
                  </div>
                </section>
              </>
            )}

            {tab === 'appointments' && (
              <>
                <div className="app__top">
                  <div><h1>Appointments</h1><p>Pick a day to see its schedule</p></div>
                  <div className="toolbar">
                    <input type="date" className="select" value={day} onChange={(e) => setDay(e.target.value)} />
                    <button className="d-btn" onClick={() => setModal('appt')}><Icon name="plus" size={16} /> New appointment</button>
                  </div>
                </div>
                <section className="panel">{apptTable(appts.filter((a) => a.date === day).sort((a, b) => a.time.localeCompare(b.time)))}</section>
              </>
            )}
          </main>
        </div>

      {modal === 'patient' && (
        <Modal title="Add patient" onClose={() => setModal(null)}>
          <PatientForm onClose={() => setModal(null)} onSave={(p) => { setPatients([p, ...patients]); setModal(null); }} />
        </Modal>
      )}
      {(modal === 'appt' || modal?.appt) && (
        <Modal title="New appointment" onClose={() => setModal(null)}>
          <AppointmentForm
            patients={patients}
            presetPatient={modal?.appt}
            onClose={() => setModal(null)}
            onSave={(a) => { setAppts([...appts, a]); setDay(a.date); setModal(null); }}
          />
        </Modal>
      )}
      </div>
    </>
  );
}

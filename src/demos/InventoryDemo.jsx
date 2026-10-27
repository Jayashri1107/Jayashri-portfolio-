import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import { DemoBanner, Modal, usePersistentState, uid, today } from './shared.jsx';
import './demos.css';

const categories = ['Stationery', 'Electronics', 'Grocery', 'Hardware'];
const seedProducts = [
  { id: 'i1', sku: 'ST-1001', name: 'A4 Copier Paper (500 sheets)', category: 'Stationery', price: 320, qty: 48, min: 20 },
  { id: 'i2', sku: 'ST-1002', name: 'Blue Ball Pen (box of 50)', category: 'Stationery', price: 250, qty: 8, min: 10 },
  { id: 'i3', sku: 'EL-2001', name: 'USB-C Charging Cable 1m', category: 'Electronics', price: 199, qty: 64, min: 25 },
  { id: 'i4', sku: 'EL-2002', name: 'Wireless Mouse', category: 'Electronics', price: 549, qty: 5, min: 10 },
  { id: 'i5', sku: 'GR-3001', name: 'Basmati Rice 5kg', category: 'Grocery', price: 640, qty: 30, min: 15 },
  { id: 'i6', sku: 'GR-3002', name: 'Sunflower Oil 1L', category: 'Grocery', price: 155, qty: 72, min: 30 },
  { id: 'i7', sku: 'HW-4001', name: 'LED Bulb 9W', category: 'Hardware', price: 99, qty: 12, min: 20 },
  { id: 'i8', sku: 'HW-4002', name: 'Extension Board 4-socket', category: 'Hardware', price: 420, qty: 18, min: 8 },
];
const seedMoves = [
  { id: 'm1', productId: 'i1', type: 'in', qty: 30, note: 'Supplier delivery', date: today() },
  { id: 'm2', productId: 'i4', type: 'out', qty: 6, note: 'Sold – counter', date: today() },
  { id: 'm3', productId: 'i6', type: 'in', qty: 40, note: 'Supplier delivery', date: today() },
  { id: 'm4', productId: 'i2', type: 'out', qty: 4, note: 'Office order', date: today() },
];

const rupee = (n) => '₹' + Number(n).toLocaleString('en-IN');
const blank = { sku: '', name: '', category: categories[0], price: '', qty: '', min: 10 };

function ProductForm({ initial, onSave, onClose }) {
  const [f, setF] = useState(initial || blank);
  const [err, setErr] = useState('');
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.sku.trim()) return setErr('Product name and SKU are required.');
    if (+f.price < 0 || f.price === '' || +f.qty < 0 || f.qty === '') return setErr('Enter a valid price and quantity.');
    onSave({ ...f, id: f.id || uid(), price: +f.price, qty: +f.qty, min: +f.min });
  };
  return (
    <form className="form" onSubmit={submit}>
      <label>Product name<input value={f.name} onChange={set('name')} autoFocus /></label>
      <div className="form__row">
        <label>SKU code<input value={f.sku} onChange={set('sku')} placeholder="e.g. ST-1003" /></label>
        <label>Category<select value={f.category} onChange={set('category')}>{categories.map((c) => <option key={c}>{c}</option>)}</select></label>
      </div>
      <div className="form__row">
        <label>Price (₹)<input type="number" min="0" value={f.price} onChange={set('price')} /></label>
        <label>Quantity in stock<input type="number" min="0" value={f.qty} onChange={set('qty')} disabled={!!initial} /></label>
      </div>
      <label>Low-stock alert below<input type="number" min="0" value={f.min} onChange={set('min')} /></label>
      {err && <p className="form__error">{err}</p>}
      <div className="form__actions">
        <button type="button" className="d-btn d-btn--ghost" onClick={onClose}>Cancel</button>
        <button className="d-btn">{initial ? 'Save changes' : 'Add product'}</button>
      </div>
    </form>
  );
}

function StockForm({ product, type, onSave, onClose }) {
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState(type === 'in' ? 'Supplier delivery' : 'Sold – counter');
  const [err, setErr] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!(+qty > 0)) return setErr('Quantity must be at least 1.');
    if (type === 'out' && +qty > product.qty) return setErr(`Only ${product.qty} in stock.`);
    onSave({ id: uid(), productId: product.id, type, qty: +qty, note, date: today() });
  };
  return (
    <form className="form" onSubmit={submit}>
      <p className="muted" style={{ margin: 0 }}>{product.name} · currently <strong>{product.qty}</strong> in stock</p>
      <label>Quantity<input type="number" min="1" value={qty} onChange={(e) => setQty(e.target.value)} autoFocus /></label>
      <label>Note<input value={note} onChange={(e) => setNote(e.target.value)} /></label>
      {err && <p className="form__error">{err}</p>}
      <div className="form__actions">
        <button type="button" className="d-btn d-btn--ghost" onClick={onClose}>Cancel</button>
        <button className="d-btn">{type === 'in' ? 'Add stock' : 'Remove stock'}</button>
      </div>
    </form>
  );
}

export default function InventoryDemo() {
  const [products, setProducts] = usePersistentState('demo.inv.products', seedProducts);
  const [moves, setMoves] = usePersistentState('demo.inv.moves', seedMoves);
  const [tab, setTab] = useState('dashboard');
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const [modal, setModal] = useState(null);

  const low = products.filter((p) => p.qty <= p.min);
  const value = products.reduce((s, p) => s + p.price * p.qty, 0);
  const units = products.reduce((s, p) => s + p.qty, 0);
  const byId = Object.fromEntries(products.map((p) => [p.id, p]));
  const shown = products.filter((p) => (cat === 'All' || p.category === cat) && (p.name + p.sku).toLowerCase().includes(q.toLowerCase()));

  const saveProduct = (p) => {
    setProducts(products.some((x) => x.id === p.id) ? products.map((x) => (x.id === p.id ? p : x)) : [p, ...products]);
    setModal(null);
  };
  const saveMove = (m) => {
    setProducts(products.map((p) => (p.id === m.productId ? { ...p, qty: p.qty + (m.type === 'in' ? m.qty : -m.qty) } : p)));
    setMoves([m, ...moves]);
    setModal(null);
  };
  const remove = (p) => {
    if (window.confirm(`Delete “${p.name}” from the demo inventory?`)) setProducts(products.filter((x) => x.id !== p.id));
  };
  const reset = () => { setProducts(seedProducts); setMoves(seedMoves); };

  const nav = [
    ['dashboard', 'Dashboard', 'dashboard'],
    ['products', 'Products', 'box'],
    ['history', 'Stock history', 'clock'],
  ];
  const navButtons = nav.map(([id, label, icon]) => (
    <button key={id} className={`app__nav ${tab === id ? 'is-active' : ''}`} onClick={() => setTab(id)}>
      <Icon name={icon} size={18} /> {label}{id === 'products' && low.length > 0 && <span className="badge badge--red" style={{ marginLeft: 'auto' }}>{low.length}</span>}
    </button>
  ));

  const catTotals = categories.map((c) => ({ c, v: products.filter((p) => p.category === c).reduce((s, p) => s + p.price * p.qty, 0) }));
  const maxCat = Math.max(1, ...catTotals.map((x) => x.v));

  const stockBadge = (p) =>
    p.qty === 0 ? <span className="badge badge--red"><Icon name="alert" size={12} /> Out of stock</span>
      : p.qty <= p.min ? <span className="badge badge--amber"><Icon name="alert" size={12} /> Low stock</span>
        : <span className="badge badge--green"><Icon name="check" size={12} /> In stock</span>;

  const historyTable = (list) => (
    <div className="table-wrap">
      <table className="table">
        <thead><tr><th>Date</th><th>Product</th><th>Movement</th><th>Note</th></tr></thead>
        <tbody>
          {list.map((m) => (
            <tr key={m.id}>
              <td className="muted">{m.date}</td>
              <td><strong>{byId[m.productId]?.name || 'Deleted product'}</strong></td>
              <td><span className={`badge badge--${m.type === 'in' ? 'green' : 'blue'}`}>{m.type === 'in' ? '+' : '−'}{m.qty} {m.type === 'in' ? 'in' : 'out'}</span></td>
              <td className="muted">{m.note}</td>
            </tr>
          ))}
          {!list.length && <tr><td colSpan={4} className="empty">No stock movements yet.</td></tr>}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <DemoBanner onReset={reset} />
      <div className="app app--inv">
        <aside className="app__side">
          <div className="app__brand"><span><Icon name="box" size={18} /></span> StockPilot</div>
          {navButtons}
          <div className="app__user"><strong>Store manager</strong>Main warehouse (sample)</div>
        </aside>
        <div>
          <div className="app__mobile-nav">{navButtons}</div>
          <main className="app__main">
            {tab === 'dashboard' && (
              <>
                <div className="app__top">
                  <div><h1>Inventory overview</h1><p>Live summary of your stock</p></div>
                  <button className="d-btn" onClick={() => setModal({ product: null })}><Icon name="plus" size={16} /> Add product</button>
                </div>
                <div className="kpis">
                  <div className="kpi"><span className="kpi__icon"><Icon name="box" /></span><div><strong>{products.length}</strong><span>Products</span></div></div>
                  <div className="kpi"><span className="kpi__icon"><Icon name="dashboard" /></span><div><strong>{units.toLocaleString('en-IN')}</strong><span>Units in stock</span></div></div>
                  <div className="kpi"><span className="kpi__icon"><Icon name="rupee" /></span><div><strong>{rupee(value)}</strong><span>Stock value</span></div></div>
                  <div className="kpi"><span className="kpi__icon kpi__icon--warn"><Icon name="alert" /></span><div><strong>{low.length}</strong><span>Low-stock alerts</span></div></div>
                </div>
                <div className="grid-2">
                  <section className="panel">
                    <div className="panel__head"><h2>Needs re-ordering</h2></div>
                    <div className="table-wrap">
                      <table className="table">
                        <thead><tr><th>Product</th><th>In stock</th><th>Alert at</th><th></th></tr></thead>
                        <tbody>
                          {low.map((p) => (
                            <tr key={p.id}>
                              <td><strong>{p.name}</strong><div className="muted">{p.sku}</div></td>
                              <td className="stock-low">{p.qty}</td>
                              <td className="muted">{p.min}</td>
                              <td><button className="d-btn d-btn--sm" onClick={() => setModal({ stock: p, type: 'in' })}>Restock</button></td>
                            </tr>
                          ))}
                          {!low.length && <tr><td colSpan={4} className="empty">All products are well stocked.</td></tr>}
                        </tbody>
                      </table>
                    </div>
                  </section>
                  <section className="panel">
                    <div className="panel__head"><h2>Stock value by category</h2></div>
                    <div className="bars">
                      {catTotals.map(({ c, v }) => (
                        <div key={c} className="bars__row" style={{ gridTemplateColumns: '90px 1fr 80px' }}><span>{c}</span><div className="bars__track"><span style={{ width: `${(v / maxCat) * 100}%` }} /></div><strong>{rupee(v)}</strong></div>
                      ))}
                    </div>
                  </section>
                </div>
                <section className="panel">
                  <div className="panel__head"><h2>Recent movements</h2><button className="d-btn d-btn--ghost d-btn--sm" onClick={() => setTab('history')}>View all</button></div>
                  {historyTable(moves.slice(0, 5))}
                </section>
              </>
            )}

            {tab === 'products' && (
              <>
                <div className="app__top">
                  <div><h1>Products</h1><p>{shown.length} of {products.length} shown</p></div>
                  <div className="toolbar">
                    <div className="search"><Icon name="search" size={16} /><input placeholder="Search name or SKU" value={q} onChange={(e) => setQ(e.target.value)} /></div>
                    <select className="select" value={cat} onChange={(e) => setCat(e.target.value)}><option>All</option>{categories.map((c) => <option key={c}>{c}</option>)}</select>
                    <button className="d-btn" onClick={() => setModal({ product: null })}><Icon name="plus" size={16} /> Add product</button>
                  </div>
                </div>
                <section className="panel">
                  <div className="table-wrap">
                    <table className="table">
                      <thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th><th>Actions</th></tr></thead>
                      <tbody>
                        {shown.map((p) => (
                          <tr key={p.id}>
                            <td><strong>{p.name}</strong><div className="mono">{p.sku}</div></td>
                            <td className="muted">{p.category}</td>
                            <td>{rupee(p.price)}</td>
                            <td><strong>{p.qty}</strong></td>
                            <td>{stockBadge(p)}</td>
                            <td>
                              <div className="row-actions">
                                <button className="d-btn d-btn--sm d-btn--ghost" onClick={() => setModal({ stock: p, type: 'in' })}>+ In</button>
                                <button className="d-btn d-btn--sm d-btn--ghost" onClick={() => setModal({ stock: p, type: 'out' })}>− Out</button>
                                <button className="icon-btn" title="Edit" onClick={() => setModal({ product: p })}><Icon name="edit" size={15} /></button>
                                <button className="icon-btn icon-btn--danger" title="Delete" onClick={() => remove(p)}><Icon name="trash" size={15} /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                        {!shown.length && <tr><td colSpan={6} className="empty">No products found.</td></tr>}
                      </tbody>
                    </table>
                  </div>
                </section>
              </>
            )}

            {tab === 'history' && (
              <>
                <div className="app__top"><div><h1>Stock history</h1><p>Every stock in and stock out, newest first</p></div></div>
                <section className="panel">{historyTable(moves)}</section>
              </>
            )}
          </main>
        </div>

      {modal && 'product' in modal && (
        <Modal title={modal.product ? 'Edit product' : 'Add product'} onClose={() => setModal(null)}>
          <ProductForm initial={modal.product} onSave={saveProduct} onClose={() => setModal(null)} />
        </Modal>
      )}
      {modal?.stock && (
        <Modal title={modal.type === 'in' ? 'Stock in' : 'Stock out'} onClose={() => setModal(null)}>
          <StockForm product={modal.stock} type={modal.type} onSave={saveMove} onClose={() => setModal(null)} />
        </Modal>
      )}
      </div>
    </>
  );
}

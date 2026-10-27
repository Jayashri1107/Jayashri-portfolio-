// Hand-drawn SVG room illustrations for the interior studio demo (no stock photos needed).
const palettes = {
  sand: { wall: '#efe4d6', wall2: '#e6d7c3', floor: '#c9a27c', floor2: '#b88f68', main: '#5b7065', soft: '#dfe6df', wood: '#8a623f', accent: '#d9895b', metal: '#2b2118' },
  sage: { wall: '#e3e9e2', wall2: '#d6dfd4', floor: '#bfa58a', floor2: '#ab8f74', main: '#c7835b', soft: '#f3e3d3', wood: '#6f5034', accent: '#3f5a4c', metal: '#23302a' },
  blush: { wall: '#f3e2da', wall2: '#ead2c7', floor: '#cdb197', floor2: '#bb9c80', main: '#33475b', soft: '#e7ecf2', wood: '#7b5a3c', accent: '#c9a227', metal: '#1f2a36' },
  slate: { wall: '#dfe3e8', wall2: '#cfd5dc', floor: '#a88a6c', floor2: '#957759', main: '#b9774f', soft: '#f1e6da', wood: '#5d432c', accent: '#2f6f73', metal: '#1c2329' },
};

function Base({ p, children }) {
  return (
    <>
      <rect width="400" height="300" fill={p.wall} />
      <rect y="0" width="400" height="12" fill={p.wall2} />
      <rect y="214" width="400" height="86" fill={p.floor} />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x={i * 56 - 10} y="214" width="2" height="86" fill={p.floor2} opacity=".5" transform={`skewX(${-20 + i * 5})`} />
      ))}
      <rect y="210" width="400" height="6" fill={p.wall2} />
      {children}
    </>
  );
}

const Plant = ({ x, y, p, s = 1 }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M-14 0h28l-4 30h-20z" fill={p.wood} />
    <path d="M0 0C-4-24-26-30-30-46 -12-44-2-28 0 0z" fill="#5f8a64" />
    <path d="M0 0C4-30 22-40 30-56 34-34 16-22 0 0z" fill="#4e7a56" />
    <path d="M0 0C-2-30 2-52 6-66 14-48 8-24 0 0z" fill="#6c9a6e" />
  </g>
);

function Living({ p }) {
  return (
    <Base p={p}>
      <rect x="250" y="40" width="110" height="120" rx="4" fill="#fff" opacity=".85" />
      <rect x="256" y="46" width="98" height="108" fill="#cfe3ea" />
      <path d="M256 120l30-26 24 20 18-14 26 22v32h-98z" fill="#a9c9b4" />
      <rect x="303" y="46" width="4" height="108" fill="#fff" />
      <rect x="60" y="56" width="70" height="50" rx="2" fill={p.accent} opacity=".85" />
      <circle cx="84" cy="80" r="12" fill={p.soft} opacity=".8" />
      <rect x="140" y="66" width="40" height="40" rx="2" fill={p.main} opacity=".6" />
      <rect x="40" y="150" width="200" height="56" rx="16" fill={p.main} />
      <rect x="52" y="128" width="176" height="40" rx="14" fill={p.main} />
      <rect x="40" y="150" width="200" height="14" rx="7" fill="#000" opacity=".08" />
      <rect x="70" y="134" width="40" height="30" rx="8" fill={p.soft} />
      <rect x="168" y="134" width="40" height="30" rx="8" fill={p.accent} />
      <rect x="54" y="204" width="6" height="14" fill={p.metal} />
      <rect x="220" y="204" width="6" height="14" fill={p.metal} />
      <ellipse cx="160" cy="250" rx="70" ry="12" fill="#000" opacity=".08" />
      <rect x="110" y="226" width="110" height="10" rx="5" fill={p.wood} />
      <rect x="122" y="236" width="5" height="18" fill={p.metal} />
      <rect x="203" y="236" width="5" height="18" fill={p.metal} />
      <circle cx="150" cy="222" r="5" fill={p.accent} />
      <rect x="166" y="218" width="22" height="8" rx="2" fill={p.soft} />
      <rect x="296" y="100" width="3" height="114" fill={p.metal} />
      <path d="M280 100h34l-8-26h-18z" fill={p.soft} />
      <Plant x={360} y={226} p={p} s={1.1} />
    </Base>
  );
}

function Bedroom({ p }) {
  return (
    <Base p={p}>
      <rect x="90" y="40" width="220" height="10" fill={p.wall2} />
      <rect x="110" y="90" width="180" height="70" rx="14" fill={p.main} />
      <rect x="96" y="150" width="208" height="56" rx="10" fill="#fff" />
      <rect x="96" y="170" width="208" height="40" rx="10" fill={p.soft} />
      <path d="M96 176h208v18H96z" fill={p.accent} opacity=".85" />
      <rect x="122" y="130" width="64" height="30" rx="10" fill="#fff" />
      <rect x="214" y="130" width="64" height="30" rx="10" fill="#fff" />
      <rect x="150" y="140" width="34" height="22" rx="7" fill={p.accent} opacity=".6" />
      <rect x="100" y="206" width="8" height="14" fill={p.wood} />
      <rect x="292" y="206" width="8" height="14" fill={p.wood} />
      <rect x="40" y="168" width="44" height="46" rx="4" fill={p.wood} />
      <rect x="44" y="186" width="36" height="2" fill="#000" opacity=".15" />
      <path d="M50 168l6-26h20l6 26z" fill={p.soft} />
      <rect x="61" y="140" width="10" height="4" fill={p.metal} />
      <rect x="316" y="168" width="44" height="46" rx="4" fill={p.wood} />
      <line x1="338" y1="12" x2="338" y2="110" stroke={p.metal} strokeWidth="2" />
      <path d="M322 110h32l-6 20h-20z" fill={p.accent} />
      <rect x="156" y="54" width="88" height="26" rx="2" fill="#fff" opacity=".7" />
      <path d="M160 76l20-14 16 10 14-8 30 12z" fill={p.main} opacity=".5" />
      <Plant x={30} y={238} p={p} s={0.8} />
    </Base>
  );
}

function Kitchen({ p }) {
  return (
    <Base p={p}>
      <rect x="30" y="40" width="250" height="60" rx="3" fill={p.main} />
      {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={34 + i * 49.2} y="44" width="45" height="52" rx="2" fill="#000" opacity=".06" />)}
      <rect x="30" y="100" width="250" height="40" fill="#fff" opacity=".7" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => <rect key={i} x={30 + i * 25} y="100" width="1" height="40" fill={p.wall2} />)}
      <rect x="24" y="140" width="262" height="10" fill={p.soft} />
      <rect x="30" y="150" width="250" height="64" fill={p.main} />
      {[0, 1, 2, 3].map((i) => <rect key={i} x={36 + i * 61} y="156" width="56" height="52" rx="2" fill="#000" opacity=".07" />)}
      <rect x="130" y="112" width="40" height="28" rx="3" fill={p.metal} opacity=".8" />
      <path d="M140 40h20v40h-20z" fill={p.metal} opacity=".7" />
      <path d="M120 80h60l-10 14h-40z" fill={p.metal} opacity=".8" />
      <rect x="300" y="150" width="80" height="64" fill={p.wood} />
      <rect x="296" y="142" width="88" height="10" fill={p.soft} />
      {[318, 362].map((x) => (
        <g key={x}>
          <line x1={x} y1="12" x2={x} y2="80" stroke={p.metal} strokeWidth="2" />
          <path d={`M${x - 14} 96a14 16 0 0 1 28 0z`} fill={p.accent} />
        </g>
      ))}
      {[316, 360].map((x) => (
        <g key={x}>
          <rect x={x - 14} y="186" width="28" height="8" rx="3" fill={p.accent} />
          <rect x={x - 2} y="194" width="4" height="32" fill={p.metal} />
          <rect x={x - 10} y="224" width="20" height="3" fill={p.metal} />
        </g>
      ))}
      <Plant x={60} y={110} p={p} s={0.5} />
      <circle cx="240" cy="132" r="7" fill={p.accent} />
    </Base>
  );
}

function Office({ p }) {
  return (
    <Base p={p}>
      <rect x="40" y="40" width="120" height="8" fill={p.wood} />
      <rect x="40" y="86" width="120" height="8" fill={p.wood} />
      {[48, 62, 74, 92, 104].map((x, i) => <rect key={x} x={x} y={16 + (i % 2) * 6} width="10" height={24 - (i % 2) * 6} fill={[p.main, p.accent, p.soft, p.main, p.accent][i]} />)}
      <Plant x={130} y={86} p={p} s={0.45} />
      <rect x="50" y="62" width="40" height="24" fill={p.soft} />
      <rect x="230" y="50" width="130" height="80" rx="3" fill="#fff" opacity=".8" />
      <rect x="236" y="56" width="118" height="68" fill="#d7e4ea" />
      <rect x="180" y="150" width="200" height="10" rx="3" fill={p.wood} />
      <rect x="192" y="160" width="6" height="58" fill={p.metal} />
      <rect x="362" y="160" width="6" height="58" fill={p.metal} />
      <rect x="236" y="104" width="76" height="46" rx="4" fill={p.metal} />
      <rect x="240" y="108" width="68" height="36" rx="2" fill={p.accent} opacity=".85" />
      <rect x="270" y="144" width="8" height="8" fill={p.metal} />
      <rect x="326" y="136" width="12" height="14" rx="2" fill={p.soft} />
      <rect x="120" y="148" width="60" height="50" rx="14" fill={p.main} />
      <rect x="114" y="186" width="72" height="16" rx="8" fill={p.main} />
      <rect x="147" y="202" width="6" height="20" fill={p.metal} />
      <rect x="126" y="222" width="48" height="4" rx="2" fill={p.metal} />
      <Plant x={40} y={230} p={p} s={1} />
    </Base>
  );
}

const rooms = { living: Living, bedroom: Bedroom, kitchen: Kitchen, office: Office };

export default function RoomArt({ room = 'living', palette = 'sand', className = '', label }) {
  const Room = rooms[room];
  return (
    <svg className={className} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label || `${room} illustration`}>
      <Room p={palettes[palette]} />
    </svg>
  );
}

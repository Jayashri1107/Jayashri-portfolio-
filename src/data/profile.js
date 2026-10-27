// All personal details and links live here. Edit this file to update the site.

export const profile = {
  name: 'Jayashri Sable',
  fullName: 'Jayashri Digambar Sable',
  title: 'Full-Stack Web Developer',
  location: 'Chhatrapati Sambhajinagar, Maharashtra, India',
  email: 'jsable554@gmail.com',
  phoneDisplay: '+91 90229 37420',
  whatsapp: '919022937420',
  linkedin: 'https://www.linkedin.com/in/jayashri-sable-981b27272',
  github: 'https://github.com/Jayashri1107',
  resume: 'Jayashri_Sable_Resume.pdf',
  intro:
    'I build fast, secure and easy-to-use websites and custom software for growing businesses – from a clean business website to a complete admin dashboard, CRM or management system.',
};

export const stats = [
  { value: '1+', label: 'Year of professional experience' },
  { value: '3+', label: 'Real-world projects worked on' },
  { value: '9', label: 'Core technologies' },
  { value: '24h', label: 'Typical reply time' },
];

export const experience = [
  {
    role: 'Software Developer',
    company: 'Anandi Private Limited',
    period: 'Oct 2026 – Present',
    points: [
      'Develop features of Perinexa, a healthcare application for patient workflows and clinic operations.',
      'Implement API integrations, data handling and UI improvements across frontend and backend.',
      'Contribute to testing, debugging and code quality in an ongoing development cycle.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'IpShopy Private Limited, Chhatrapati Sambhajinagar',
    period: 'May 2025 – Jul 2026',
    points: [
      'Built frontend and backend features using PHP, React.js, Node.js, JavaScript and MySQL.',
      'Customised OpenCart modules, controllers, models and templates for business requirements.',
      'Developed REST APIs, optimised MySQL queries and delivered features for the Reel Studio project.',
      'Fixed bugs, improved performance and worked in a Git/GitHub team workflow.',
    ],
  },
];

export const education = [
  { degree: 'Master of Computer Applications (MCA)', place: 'Samarth College of Engineering and Management', detail: 'Pursuing · 2027' },
  { degree: 'Bachelor of Computer Science', place: 'Deogiri Institute of Technology and Management Studies', detail: '2022 – 2025 · 86.7%' },
];

export const services = [
  {
    icon: 'globe',
    title: 'Business Website Development',
    text: 'Modern, mobile-friendly websites that explain your business clearly and turn visitors into enquiries – with contact forms, WhatsApp and Google Maps.',
  },
  {
    icon: 'code',
    title: 'Custom Software Development',
    text: 'Web applications built around the way your business actually works – billing, bookings, records, reports and more.',
  },
  {
    icon: 'dashboard',
    title: 'Admin Dashboards & CRM',
    text: 'Secure admin panels to manage customers, leads, orders and staff, with search, filters and clear reports.',
  },
  {
    icon: 'database',
    title: 'API & Database Integration',
    text: 'REST APIs with Node.js or PHP, MongoDB and MySQL design, and connecting your site to payment, SMS or email services.',
  },
  {
    icon: 'wrench',
    title: 'Bug Fixing & Maintenance',
    text: 'Fixing broken features, speeding up slow pages, OpenCart / PHP updates and ongoing monthly support.',
  },
];

// kind: 'work' = real team project I worked on, 'demo' = demo built for this portfolio.
// media: 'image' (real screenshot), 'shop' (designed preview), 'live' (live view of the demo page).
// Each project has its own page at /projects/<slug>.
export const projects = [
  {
    slug: 'perinexa',
    kind: 'work',
    title: 'Perinexa',
    subtitle: 'Hospital Management App',
    role: 'Software Developer · Anandi Private Limited · 2026 – Present',
    short: 'A secure hospital workspace for staff and patients – OPD, wards, lab, pharmacy and billing.',
    summary:
      'A secure hospital workspace used by staff and patients: OPD and appointments, wards and inpatients, lab, pharmacy and billing – private by design.',
    facts: [
      ['Company', 'Anandi Private Limited'],
      ['My role', 'Software Developer'],
      ['Period', 'Oct 2026 – Present'],
      ['Type', 'Healthcare web application'],
    ],
    overview: [
      'Perinexa is a healthcare workflow application that helps hospitals and clinics manage patient registration, patient records and day-to-day clinic operations in one secure place.',
      'Hospital staff sign in to their own workspace for OPD and appointments, wards and inpatients, lab, pharmacy and billing, while patients have a separate sign-in. The app is built to be private by design – every record is protected and access is controlled.',
    ],
    highlights: [
      ['calendar', 'OPD & appointments', 'Patient registration, appointment booking and visit follow-ups.'],
      ['users', 'Wards & inpatients', 'Admissions and inpatient care tracked in one place.'],
      ['database', 'Lab, pharmacy & billing', 'Lab tests, medicines and bills connected to each patient record.'],
      ['check', 'Private by design', 'Secure sign-in with separate access for staff and patients.'],
    ],
    features: [
      'Built pregnancy-care modules and visit follow-ups',
      'Scheduling of lab tests and sonography',
      'API integrations across frontend and backend',
      'Testing, debugging and UI improvements',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    media: 'image',
    image: 'shots/perinexa.png',
    links: [{ label: 'Visit live app', href: 'https://app.perinexa.com' }],
  },
  {
    slug: 'ipshopy',
    kind: 'work',
    title: 'IpShopy',
    subtitle: 'E-commerce Store & Reel Studio',
    role: 'Full-Stack Developer · IpShopy Private Limited · 2025 – 2026',
    short: 'An OpenCart online store and Reel Studio, a media content platform with its own dashboard.',
    summary:
      'An online shopping store built on OpenCart, and Reel Studio – a media content platform with login, dashboard and content management.',
    facts: [
      ['Company', 'IpShopy Private Limited'],
      ['My role', 'Full-Stack Developer'],
      ['Period', 'May 2025 – Jul 2026'],
      ['Type', 'E-commerce & media platform'],
    ],
    overview: [
      'IpShopy is an online shopping store built on OpenCart, with a product catalogue, shopping cart and order processing. I customised the store’s modules, controllers, models and templates to match the business requirements.',
      'Reel Studio is IpShopy’s media content platform, with user login, a dashboard and full content management. I built responsive React.js screens and REST APIs for it, and optimised MySQL queries to keep pages fast.',
    ],
    highlights: [
      ['globe', 'OpenCart store', 'Customised modules, controllers, models and templates.'],
      ['dashboard', 'Reel Studio dashboard', 'Login, dashboard and create / edit / delete for media content.'],
      ['code', 'REST APIs', 'Backend APIs with Node.js and PHP for new features.'],
      ['wrench', 'Speed & bug fixing', 'Faster MySQL queries, bug fixes and better performance.'],
    ],
    features: [
      'Customised OpenCart modules, controllers and templates',
      'Developed REST APIs for Reel Studio',
      'Optimised MySQL queries for faster pages',
      'Fixed bugs and improved site performance',
    ],
    stack: ['PHP', 'OpenCart', 'React.js', 'Node.js', 'MySQL'],
    media: 'shop',
    links: [
      { label: 'Visit ipshopy.com', href: 'https://ipshopy.com' },
      { label: 'Reel Studio', href: 'https://studio.ipshopy.com' },
    ],
  },
  {
    slug: 'business',
    kind: 'demo',
    title: 'Aura Interiors',
    subtitle: 'Business Website Demo',
    role: 'Demo project · built to show what I can make for your business',
    short: 'A complete website for an interior design studio that turns visitors into enquiries.',
    summary:
      'A complete, conversion-focused website for a fictional interior design studio – the kind of site that turns visitors into phone calls and enquiries.',
    facts: [
      ['Client', 'Fictional business (demo)'],
      ['Built by', 'Jayashri Sable'],
      ['Pages', 'One-page website, 9 sections'],
      ['Type', 'Business website'],
    ],
    overview: [
      'Aura Interiors is a demo website I designed and built for a fictional interior design studio. It shows the kind of website I can create for a local business – clinics, shops, coaching classes, restaurants, studios and more.',
      'Every section has a job: the hero and reviews build trust, services and pricing answer “how much?”, the gallery shows the work, and the enquiry form and WhatsApp button turn visitors into real leads.',
    ],
    highlights: [
      ['star', 'Custom design', 'Hand-drawn illustrations, elegant fonts and smooth scroll animations.'],
      ['dashboard', 'Gallery & pricing', 'Filterable design gallery and clear pricing packages.'],
      ['phone', 'Lead capture', 'Call-back form with validation and a floating WhatsApp button.'],
      ['check', 'Mobile-friendly', 'Looks great on phones, tablets and desktops.'],
    ],
    features: [
      'Custom illustrations and smooth scroll animations',
      'Filterable design gallery and pricing packages',
      'Enquiry form with validation and WhatsApp button',
      'Reviews, FAQ and fully mobile-friendly layout',
    ],
    stack: ['React.js', 'CSS'],
    media: 'live',
    path: '/demos/business',
    links: [{ label: 'Open live demo', to: '/demos/business' }],
  },
];

export const skills = [
  { name: 'React.js', group: 'Frontend', level: 85 },
  { name: 'JavaScript (ES6+)', group: 'Frontend', level: 85 },
  { name: 'HTML5', group: 'Frontend', level: 90 },
  { name: 'CSS3 & Responsive Design', group: 'Frontend', level: 85 },
  { name: 'Node.js', group: 'Backend', level: 80 },
  { name: 'Express.js', group: 'Backend', level: 80 },
  { name: 'PHP & OpenCart', group: 'Backend', level: 80 },
  { name: 'MongoDB & Mongoose', group: 'Database', level: 78 },
  { name: 'MySQL', group: 'Database', level: 80 },
];

export const tools = ['Git', 'GitHub', 'REST APIs', 'VS Code', 'XAMPP', 'GitHub Pages'];

export const process = [
  { step: 'Requirements', text: 'A free call to understand your business, goals, pages and budget. You get a clear written scope and quote.' },
  { step: 'Design', text: 'A layout and look for approval before coding begins, so there are no surprises.' },
  { step: 'Development', text: 'Clean, well-structured code with regular progress updates and a preview link you can open any time.' },
  { step: 'Testing', text: 'Checked on mobile, tablet and desktop, forms and features tested, and speed optimised.' },
  { step: 'Delivery', text: 'Launch on your domain, a short handover on how to use it, and support after delivery.' },
];

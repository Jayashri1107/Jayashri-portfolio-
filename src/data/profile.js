// All personal details and links live here. Edit this file to update the site.
// TODO: replace the LinkedIn and GitHub links with your own profile URLs.

export const profile = {
  name: 'Jayashri Sable',
  fullName: 'Jayashri Digambar Sable',
  title: 'Full-Stack Web Developer',
  location: 'Chhatrapati Sambhajinagar, Maharashtra, India',
  email: 'jsable554@gmail.com',
  phoneDisplay: '+91 90229 37420',
  whatsapp: '919022937420',
  linkedin: 'https://www.linkedin.com/in/your-linkedin-id',
  github: 'https://github.com/your-github-username',
  resume: '/Jayashri_Sable_Resume.pdf',
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

export const projects = [
  {
    slug: 'clinic',
    title: 'Clinic Management System',
    tag: 'Demo project',
    summary:
      'A front-desk system for small clinics: patient register, appointment booking, today’s queue and a dashboard with daily numbers.',
    features: ['Patient registration & search', 'Appointment booking with status', 'Dashboard with daily stats', 'Data saved in the browser'],
    stack: ['React.js', 'CSS', 'localStorage'],
    path: '/demos/clinic',
  },
  {
    slug: 'inventory',
    title: 'Inventory Management System',
    tag: 'Demo project',
    summary:
      'Stock control for shops and small warehouses: products, stock in / stock out, low-stock alerts and a movement history.',
    features: ['Add, edit and delete products', 'Stock in / out with history', 'Low-stock alerts', 'Inventory value summary'],
    stack: ['React.js', 'CSS', 'localStorage'],
    path: '/demos/inventory',
  },
  {
    slug: 'business',
    title: 'Business Website',
    tag: 'Demo project',
    summary:
      'A complete one-page website for a fictional interior design studio, with services, gallery, testimonials and an enquiry form.',
    features: ['Responsive landing page', 'Services & pricing sections', 'Enquiry form with validation', 'WhatsApp call-to-action'],
    stack: ['React.js', 'CSS'],
    path: '/demos/business',
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

export const tools = ['Git', 'GitHub', 'REST APIs', 'VS Code', 'XAMPP', 'Vercel'];

export const process = [
  { step: 'Requirements', text: 'A free call to understand your business, goals, pages and budget. You get a clear written scope and quote.' },
  { step: 'Design', text: 'A layout and look for approval before coding begins, so there are no surprises.' },
  { step: 'Development', text: 'Clean, well-structured code with regular progress updates and a preview link you can open any time.' },
  { step: 'Testing', text: 'Checked on mobile, tablet and desktop, forms and features tested, and speed optimised.' },
  { step: 'Delivery', text: 'Launch on your domain, a short handover on how to use it, and support after delivery.' },
];

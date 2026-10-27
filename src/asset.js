// Builds a URL for a file in /public that works on any host (Vercel root or a GitHub Pages sub-folder).
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '');

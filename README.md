# Jayashri Sable – Developer Portfolio

Personal portfolio website with three working demo projects (Clinic Management, Inventory Management, Business Website).
Built with React + Vite. Hosted for free on Vercel.

## Run on your computer

```bash
npm install
npm run dev
```

Open http://localhost:5190

## Edit your details

Everything (name, links, services, projects, skills) is in `src/data/profile.js`.
Your resume is `public/Jayashri_Sable_Resume.pdf` – replace the file to update it (keep the same name).

## Deploy for free (one-time setup)

1. **GitHub account** – sign up at https://github.com/signup (free).
2. **Create an empty repository** on GitHub called `portfolio` (Public, no README).
3. **Push this code** (run in this folder, replace `YOUR-USERNAME`):
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. **Vercel account** – go to https://vercel.com/signup and choose **Continue with GitHub** (Hobby plan is free).
5. In Vercel click **Add New → Project**, pick the `portfolio` repository, keep the defaults
   (Framework: Vite, Build: `npm run build`, Output: `dist`) and click **Deploy**.
6. After ~1 minute you get a free link like `https://portfolio-yourname.vercel.app`.
   You can rename it in Vercel → Project → Settings → Domains.

Every time you `git push`, Vercel updates the live site automatically.

## Project structure

```
src/
  data/profile.js        all text and links
  Portfolio.jsx          home page sections
  components/            navbar, icons, live project preview
  demos/                 clinic, inventory and business demos
public/                  resume PDF, favicon
vercel.json              makes /demos/... links work on Vercel
```

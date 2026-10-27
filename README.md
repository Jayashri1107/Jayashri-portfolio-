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

## Contact form

- **Send message** emails the enquiry to the address in `profile.email` using FormSubmit (free, no account).
  The very first time someone sends a message, FormSubmit emails you an **activation link** – click it once,
  and every message after that arrives in your inbox. Send yourself a test message right after deploying.
- **Send on WhatsApp instead** opens WhatsApp with the visitor's message already typed to your number.

## Deploy for free on GitHub Pages (one-time setup)

1. On GitHub (signed in as **Jayashri1107**) click **New repository**.
   Name it exactly **`Jayashri1107.github.io`**, choose **Public**, do not add a README, click **Create repository**.
2. Push the code from this folder (sign in to GitHub when asked):
   ```bash
   git push -u origin main
   ```
3. In the repository go to **Settings → Pages** and under **Build and deployment → Source** choose **GitHub Actions**.
4. Open the **Actions** tab – the "Deploy to GitHub Pages" job runs automatically (about 1 minute).
5. Your site is live at **https://jayashri1107.github.io/**

Every `git push` to `main` rebuilds and republishes the site automatically (see `.github/workflows/deploy.yml`).
If you use another repository name (for example `portfolio`), the site works too, at
`https://jayashri1107.github.io/portfolio/` – the workflow sets the right path by itself.

The site also still works on Vercel (`vercel.json` is included) if you ever want to switch.

## Project structure

```
src/
  data/profile.js        all text and links (including each project's page content)
  Portfolio.jsx          home page sections
  ProjectPage.jsx        separate page for each project (/projects/<name>)
  components/            navbar, icons, live project preview
  demos/                 clinic, inventory and business demos
public/                  resume PDF, favicon
vercel.json              makes page links work on Vercel
.github/workflows/       automatic GitHub Pages deployment
```

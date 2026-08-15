# Bibin Alias — Personal Resume Website

> Forked from [tbakerx/react-resume-template](https://github.com/tbakerx/react-resume-template).

Source code for my personal resume/portfolio website, live at **[bibinalias.github.io](https://bibinalias.github.io)**.

It showcases my background as an **Embedded Systems & Firmware Engineer** — experience, skills, projects, and contact details — as a fast, mobile-friendly single-page site.

## Tech Stack

- **[Next.js](https://nextjs.org/)** 12 (React 18) with **TypeScript**
- **[Tailwind CSS](https://tailwindcss.com/)** for styling
- **[FormSubmit](https://formsubmit.co/)** for the contact form (no backend required)
- Deployed as a static export to **GitHub Pages**

## Running Locally

You need a recent **[Node.js](https://nodejs.org/)** (18+). You can use either **npm** or **[Yarn](https://yarnpkg.com/)**.

```bash
# install dependencies
npm install        # or: yarn install

# start the dev server (http://localhost:3000)
npx next dev       # or: yarn dev
```

The site hot-reloads as you edit files.

## Editing Content

Almost all site content lives in a single file:

- **[`src/data/data.tsx`](src/data/data.tsx)** — hero, about, skills, portfolio, experience, education, testimonials, and contact data.
- **[`src/data/dataDef.ts`](src/data/dataDef.ts)** — the TypeScript types for that data.
- **[`src/images/`](src/images/)** — profile, testimonial, and portfolio images (imported into `data.tsx`).

Update the values in `data.tsx` and the changes appear on save.

## Contact Form

The contact form posts to **FormSubmit** and delivers messages by email — no server or API keys in the client. See [`src/components/Sections/Contact/ContactForm.tsx`](src/components/Sections/Contact/ContactForm.tsx). The first submission from a new address triggers a one-time activation email from FormSubmit.

## Deployment

Deployment is automated via GitHub Actions. On every push to the `main` branch, the workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and statically exports the site (`next build && next export`) and publishes the `out/` directory to **GitHub Pages**.

## Credits

Built on the excellent open-source **[react-resume-template](https://github.com/tbakerx/react-resume-template)** by **[Tim Baker](https://github.com/tbakerx)**. Please consider starring or [sponsoring](https://github.com/sponsors/tbakerx) the original project.

## License

Released under the [MIT License](LICENSE).

## Maintained By

**Bibin Alias**

- [LinkedIn](https://www.linkedin.com/in/bibinalias/)
- [Instagram](https://www.instagram.com/bibin__alias/)
- [Website](https://bibinalias.github.io)

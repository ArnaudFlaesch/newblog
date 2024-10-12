# arnaudflaesch.github.io

[![CI](https://github.com/ArnaudFlaesch/arnaudflaesch.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/ArnaudFlaesch/arnaudflaesch.github.io/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ArnaudFlaesch_arnaudflaesch.github.io&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ArnaudFlaesch_arnaudflaesch.github.io)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/2b43b4cf025046198a6d333eb2a4c346)](https://app.codacy.com/gh/ArnaudFlaesch/arnaudflaesch.github.io/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Known Vulnerabilities](https://snyk.io/test/github/ArnaudFlaesch/arnaudflaesch.github.io/badge.svg)](https://snyk.io/test/github/ArnaudFlaesch/arnaudflaesch.github.io)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

![preview](https://github.com/user-attachments/assets/44c47034-06e4-412a-b9dd-014593b32215)

## 📄 About

This project is refactored from the original [**dev-portfolio**](https://github.com/Smilesharks/dev-portfolio) project, thanks for his work.

I use iconify instead of SVG icons for better dev experience.

Thanks for antfu's cool animations.

## 🛠️ Stack

- [**Astro**](https://astro.build/) - The next-gen web framework.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript with type syntax.
- [**TailwindCSS**](https://tailwindcss.com/) - Utility-first CSS framework.
- [**Iconify**](https://iconify.design/) - Icon library.
- [**FancyBox**](https://fancyapps.com/fancybox/3/) - Image viewer.
- [**Ninja Keys**](https://github.com/ssleptsov/ninja-keys) - Dropdown menu with keyboard shortcuts made in pure JavaScript.

## 🚀 Getting Started

### 0. One-click to deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MiraHikari/portfolio&project-name=portfolio&repository-name=portfolio)

Modify the `cv.json` file to create your own printable Portfolio/CV.

### 1. Use this Repo as an Astro Project Template

- I use [pnpm](https://pnpm.io/installation) as my package manager.

# Initialize the project

```bash
pnpm create astro@latest --template MiraHikari/portfolio
```

### 1-1. Clone the repo

If you don't want to use the template command, you can clone this repo and install the dependencies.

```bash
git clone https://github.com/MiraHikari/portfolio.git
cd portfolio
pnpm install
```

### 2. Add Your Content:

Edit the `cv.json` file to create your own printable Portfolio/CV.

### 3. Launch the Development Server:

```bash
# Enjoy the results
pnpm dev
```

1. Open [**http://localhost:4321**](http://localhost:4321/) in your browser to view the result 🚀

### 4. Customisable colours:

Change the data-theme of `cv.json` and choose one of the colour themes defined in theme.css, red, blue, green, cyber, pink and default, with its variants in dark mode, or create your own.

## 🧞 Commands

|     | Command             | Action                                                         |
| :-- | :------------------ | :------------------------------------------------------------- | --- |
| ⚙️  | `dev` or `start`    | Launches a local development server at `localhost:4321`.       |
| ⚙️  | `build`             | Checks for errors and creates a production build in `./dist/`. |
| ⚙️  | `preview`           | Local preview at `localhost:4321`                              |
| 📦  | `deploy:vercel`     | Deploy on Vercel.                                              |
| 📦  | `deploy:cloudflare` | Deploy on Cloudflare, please run `wrangler login` first.       |     |

## 📝 License

This project is [MIT](./LICENSE) licensed.

CV JSON schema from [**jsonresume.org**](https://jsonresume.org/schema/)

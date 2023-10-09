# README

![scuff_logo](./public/logo.png)

Welcome to the repository containing the code of the frontend for [yt-react-db.com](https://yt-react-db.com), by [ComputerBread](https://twitter.com/ComputerBread).

React + TypeScript + Vite + Shadcn + pnpm

- Problems or feature requests: [issue tracker](https://github.com/yt-react-db/issue-tracker/issues)
- [Discussions](https://github.com/yt-react-db/issue-tracker/discussions)
- or use [twitter](https://twitter.com/ComputerBread)
to run: `pnpm run dev`

## Env specific variables

[vite's doc](https://vitejs.dev/guide/env-and-mode.html).
There are 2 .env files:

- .env.development
- .env.production

:warning: nothing secret

Start env variables with `VITE_<NAME>` then use `import.meta.env.VITE_<NAME>`.

By default, the dev server (`dev` command) runs in development mode and the
`build` command runs in production mode.
`vite build` will load `.env.production`, while `dev` will load `.env.development`.

## Google Tag Manager (GTM)

Uses GTM for Google Analytics 4 (maybe for AdSense later).
By default consent (ad_storage, analytics_storage) are "denied" (so no cookies).
First time: show CookieConsent banner, store info in local storage, and update
or not GTM consent.

GTM scripts are inside ./index.html, the default consent is also in it.
Consent banner is in src/components/CookieConsent.tsx
(I put the localstorage logic inside CookieConsent.tsx, I should also put it
inside index.html, to set up properly gtag right from the start, but I don't want
to split the logic, don't want to have to deal with this)

## useful

* <https://blog.logrocket.com/guide-adding-google-login-react-app/>
* <https://ui.shadcn.com/> UI
   * <https://ui.shadcn.com/docs/components/data-table>
* icons:
   * <https://lucide.dev/icons/>
   * <https://www.radix-ui.com/icons>
* <https://flowbite.com>
* <https://tailwindcss.com/docs/installation>
* <https://www.npmjs.com/package/react-ga4>

# README

TODO: write readme

![scuff_logo](./public/logo.png)

to run: `pnpm run dev`

pnpm i @react-oauth/google


check this: <https://ui.shadcn.com/docs/components/data-table>


## useful

* <https://blog.logrocket.com/guide-adding-google-login-react-app/>
* <https://ui.shadcn.com/> UI
* icons: <https://lucide.dev/icons/>
* <https://flowbite.com>
* <https://tailwindcss.com/docs/installation>
* <https://www.npmjs.com/package/react-ga4>


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

--------------------------------------------------------------------------------

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

---------------------------------------------------------------
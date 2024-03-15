This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

View the [Demo](https://boilerplate-nextjs-antd-tailwindcss.vercel.app/)

## Features
- [x] [React 18x](https://reactjs.org)
- [x] [Nextjs 14x](https://nextjs.org/)
- [x] [Antd 5x](https://ant.design/)
- [x] [Tailwind CSS 3x](https://tailwindcss.com/) - SCSS/CSS Module
- [x] [Eslint](https://eslint.org/)

## Getting Started

1. Check if your [Node.js](https://nodejs.org/) version is v18.17 or later..
2. Clone this repository.
3. Run `yarn` to install the dependencies.
4. Run `yarn dev` for development.
5. Run `yarn build` and `yarn start` for production.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

By default all environment variables loaded through `.env` are only available in the Node.js environment, meaning they won't be exposed to the browser.

In order to expose a variable to the browser you have to prefix the variable with `NEXT_PUBLIC_.` For example:

```js
PORT=3000

APP_ENV=development

NEXT_PUBLIC_API_URL=http://localhost:$PORT/api
NEXT_PUBLIC_WEB_URL=http://localhost:$PORT
```

This loads process.env.NEXT_PUBLIC_ANALYTICS_ID into the Node.js environment automatically, allowing you to use it anywhere in your code. The value will be inlined into JavaScript sent to the browser because of the NEXT_PUBLIC_ prefix. This inlining occurs at build time, so your various NEXT_PUBLIC_ envs need to be set when the project is built.

##### Default Environment Variables
In general only one `.env` file is needed. However, sometimes you might want to add some defaults for the development (next dev) or production (next start) environment.

Allows you to set defaults in `.env` (all environments), `.env.development` (development environment), `and .env.production` (production environment), `and .env.staging` (staging environment).

`.env` always overrides the defaults set.

Reference in the file `.env-example`.

[Learn more](https://nextjs.org/docs/basic-features/environment-variables)


```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

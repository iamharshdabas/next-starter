# Next starter

## What ?

A highly opinionated Next.js starter template on steroids.

## Why ?

Bored from setting up the same boilerplate for every project.

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)
- [Next Themes](https://github.com/pacocoursey/next-themes)
- [Drizzle](https://orm.drizzle.team)
- [Neon](https://neon.tech)
- [Auth.js](https://authjs.dev)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)
- [Next Safe Action](https://next-safe-action.dev)
- [Resend](https://resend.com)

### Icons

- [Solar](https://icones.js.org/collection/solar)
- [Logos](https://icones.js.org/collection/logos)

## How to Use

### Use Degit to clone the repo

Install [Degit](https://github.com/Rich-Harris/degit)

```bash
degit iamharshdabas/next-starter my-app
```

### Install dependencies

```bash
bun install
```

### Update environment variables

```bash
cp .env.example .env.local
bunx auth secret
```

### Get credentials

#### Github get credentials form [here](https://github.com/settings/developers)

```text
Callback URL
https://example.com/api/auth/callback/github
```

#### Google get credentials form [here](https://console.cloud.google.com/cloud-resource-manager)

```text
Callback URL
https://example.com/api/auth/callback/google
```

#### Resend get credentials form [here](https://resend.com)

## Run the development server

```bash
bun run dev
```

```bash
bun run db:dev
```

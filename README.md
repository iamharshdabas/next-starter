# Next starter

This is a template for creating applications using Next.js 14 (app directory) and NextUI (v2).

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Next Themes](https://github.com/pacocoursey/next-themes)
- [Drizzle](https://orm.drizzle.team/)
- [Neon](https://neon.tech/)
- [Auth.js](https://authjs.dev/)

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

#### Get credentials

##### Github

Callback URL

```text
https://example.com/api/auth/callback/github
```

Get credentials form [here](https://github.com/settings/developers)

##### Google

Callback URL

```text
https://example.com/api/auth/callback/google
```

Get credentials form [here](https://console.cloud.google.com/cloud-resource-manager)

### Run the development server

```bash
bun run dev
```

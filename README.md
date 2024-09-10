# Next.js on Steroids: A Highly-Opinionated Starter Template

## Integrated Technologies

This template is powered by a variety of modern technologies to provide a robust starting point for your projects:

- [Next.js 14](https://nextjs.org/docs/getting-started): A React framework for production-grade applications.
- [NextUI v2](https://nextui.org): A React UI library with a set of high-quality components.
- [Tailwind CSS](https://tailwindcss.com) & [Tailwind Variants](https://tailwind-variants.org): A utility-first CSS framework for rapid UI development.
- [TypeScript](https://www.typescriptlang.org): A typed superset of JavaScript that scales.
- [Framer Motion](https://www.framer.com/motion): A production-ready motion library for React.
- [Next Themes](https://github.com/pacocoursey/next-themes): Dark mode and theming solution for Next.js.
- [Drizzle](https://orm.drizzle.team) & [Neon](https://neon.tech): ORM and database solutions.
- [Auth.js](https://authjs.dev): A modern, feature-rich authentication library.
- [React Hook Form](https://react-hook-form.com): Performant, flexible and extensible forms with easy-to-use validation.
- [Zod](https://zod.dev): A TypeScript-first schema declaration and validation library.
- [Next Safe Action](https://next-safe-action.dev): A library for safe dispatching of Next.js actions.
- [Resend](https://resend.com): A service for handling email sending and receiving.

### Icon Sets

- [Solar](https://icones.js.org/collection/solar): A modern icon set as big as the Solar System!
- [Logos](https://icones.js.org/collection/logos): Logos from a variety of tech companies and projects.

## Quick Start Guide

### Clone the Repository

Use [Degit](https://github.com/Rich-Harris/degit) to clone the repository:

```bash
degit iamharshdabas/next-starter my-app
```

### Install Dependencies

Run the following command to install the necessary dependencies:

```bash
bun install
```

### Configure Environment Variables

Copy the example environment file and generate a new auth secret:

```bash
cp .env.example .env.local
bunx auth secret
```

### Obtain Service Credentials

You'll need to obtain credentials from the following services:

- [Github](https://github.com/settings/developers)
- [Google](https://console.cloud.google.com/cloud-resource-manager)
- [Resend](https://resend.com)

For each service, set the callback URL to `https://example.com/api/auth/callback/{service}`.

## Launch the Development Server

Start the development server with the following commands:

```bash
bun run dev
bun run db:dev
```

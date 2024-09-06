export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next Starter",
  description: "A starter template for Next.js",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Profile",
      href: "/profile",
    },
  ],
}

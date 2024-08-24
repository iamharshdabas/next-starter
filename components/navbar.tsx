import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar"
import NextLink from "next/link"

import { siteConfig } from "@/config/site"
import { ThemeSwitch } from "@/components/theme-switch"

function NavItems() {
  return (
    <>
      {siteConfig.navItems.map((item) => (
        <NavbarItem key={item.href}>
          <NextLink color="foreground" href={item.href}>
            {item.label}
          </NextLink>
        </NavbarItem>
      ))}
    </>
  )
}

export const Navbar = () => {
  return (
    <NextUINavbar shouldHideOnScroll maxWidth="full" position="sticky">
      <NavbarContent>
        <NavbarBrand as="li" className="max-w-fit">
          <NextLink className="flex items-center justify-start gap-2" href="/">
            <p className="font-bold">{siteConfig.name}</p>
          </NextLink>
        </NavbarBrand>
        <ul className="ml-4 hidden justify-start gap-4 sm:flex">
          <NavItems />
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavItems />
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}

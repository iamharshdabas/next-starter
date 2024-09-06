"use client"

import { Link } from "@nextui-org/link"
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar"
import { usePathname } from "next/navigation"

import { ThemeSwitch } from "@/components/theme-switch"
import { siteConfig } from "@/config/site"

function NavItems() {
  const pathName = usePathname()

  return (
    <>
      {siteConfig.navItems.map((item) => (
        <NavbarItem
          key={item.href}
          className="text-foreground data-[active=true]:text-primary"
          data-active={item.href === pathName}
        >
          <Link href={item.href}>{item.label}</Link>
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
          <Link className="flex items-center justify-start gap-2" href="/">
            <p className="font-bold text-foreground">{siteConfig.name}</p>
          </Link>
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

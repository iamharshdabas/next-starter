"use client"

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar"
import { Link } from "@nextui-org/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { ThemeSwitch } from "@/components/theme-switch"

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

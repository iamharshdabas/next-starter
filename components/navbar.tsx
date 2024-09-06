"use client"

import { Button } from "@nextui-org/button"
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar"
import { User } from "@nextui-org/user"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

import { ThemeSwitch } from "@/components/theme-switch"
import { siteConfig } from "@/config/site"

export const Navbar = () => {
  const router = useRouter()
  const pathName = usePathname()
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <NextUINavbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      maxWidth="full"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand as="li" className="max-w-fit">
          <Link className="flex items-center justify-start gap-2" href="/">
            <p className="font-bold text-foreground">{siteConfig.name}</p>
          </Link>
        </NavbarBrand>
        <ul className="ml-4 hidden justify-start gap-4 sm:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              className="text-foreground data-[active=true]:text-primary"
              hidden={item.label === "Profile"}
              isActive={item.href === pathName}
            >
              <Link href={item.href}>{item.label}</Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <ThemeSwitch />
        {session ? (
          <User
            avatarProps={{ src: session?.user?.image?.toString() }}
            className="cursor-pointer"
            description={session?.user?.email}
            name={session?.user?.name}
            onClick={() => router.push("/profile")}
          />
        ) : (
          <Button color="primary" variant="shadow" onPress={() => signIn()}>
            Login
          </Button>
        )}
      </NavbarContent>

      {/* MENU */}
      <NavbarContent className="sm:hidden" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              className="text-foreground data-[active=true]:text-primary"
              data-active={item.href === pathName}
            >
              <Link href={item.href} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}

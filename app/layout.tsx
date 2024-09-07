import "@/globals.css"
import clsx from "clsx"
import { Metadata, Viewport } from "next"
import { ReactNode } from "react"

import Providers from "./providers"

import { Navbar } from "@/components/navbar"
import { fontSans, siteConfig } from "@/config"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex h-screen flex-col">
            <div className="mx-auto w-full max-w-7xl grow">
              <Navbar />
              <main className="flex flex-col gap-4 p-6 lg:pt-24">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout

"use client"

import { NextUIProvider } from "@nextui-org/system"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import { useRouter } from "next/navigation"

interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

const Providers = ({ children, themeProps }: ProvidersProps) => {
  const router = useRouter()

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <SessionProvider>{children}</SessionProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default Providers

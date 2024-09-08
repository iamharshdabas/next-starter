"use client"

import { Button, ButtonProps } from "@nextui-org/button"
import { signIn } from "next-auth/react"

export const AuthSignIn = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      color="primary"
      variant="shadow"
      onPress={() => signIn()}
    >
      Sign in
    </Button>
  )
}

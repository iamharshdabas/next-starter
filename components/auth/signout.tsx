import { Button, ButtonProps } from "@nextui-org/button"
import { signOut } from "next-auth/react"

export const AuthSignOut = (props: ButtonProps) => {
  return (
    <Button
      variant="ghost"
      onPress={() => signOut({ redirect: true, callbackUrl: "/" })}
      {...props}
    >
      SignOut
    </Button>
  )
}

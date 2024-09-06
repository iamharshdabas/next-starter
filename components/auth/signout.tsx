import { Button, ButtonProps } from "@nextui-org/button"
import { signOut } from "next-auth/react"

export default function AuthSignOut(props: ButtonProps) {
  return (
    <Button
      {...props}
      variant="ghost"
      onPress={() => signOut({ redirect: true, callbackUrl: "/" })}
    >
      SignOut
    </Button>
  )
}

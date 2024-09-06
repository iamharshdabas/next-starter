import { Button, ButtonProps } from "@nextui-org/button"
import { signIn } from "next-auth/react"

export default function AuthSignIn(props: ButtonProps) {
  return (
    // TODO:
    <Button {...props} color="primary" onPress={() => signIn()}>
      Sign in
    </Button>
  )
}

import { Button, ButtonProps } from "@nextui-org/button"

export const AuthSignIn = (props: ButtonProps) => {
  return (
    <Button {...props} fullWidth color="primary" type="submit">
      Sign in
    </Button>
  )
}

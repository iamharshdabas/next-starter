import { Button, ButtonProps } from "@nextui-org/button"

export const AuthDelete = (props: ButtonProps) => {
  return (
    <Button color="danger" variant="light" {...props}>
      Delete account
    </Button>
  )
}

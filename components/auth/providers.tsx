import { Button } from "@nextui-org/button"
import { Spacer } from "@nextui-org/spacer"
import { signIn } from "next-auth/react"

import { LogosGithubIcon, LogosGoogleIcon } from "../icon"

export const AuthProviders = () => {
  return (
    <div>
      <Button
        fullWidth
        variant="bordered"
        onPress={() => signIn("google", { redirect: true, callbackUrl: "/" })}
      >
        <LogosGoogleIcon /> Connect with Google
      </Button>
      <Spacer y={4} />
      <Button
        fullWidth
        variant="bordered"
        onPress={() => signIn("github", { redirect: true, callbackUrl: "/" })}
      >
        <LogosGithubIcon /> Connect with Github
      </Button>
    </div>
  )
}

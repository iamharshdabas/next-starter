import { Button } from "@nextui-org/button"
import { Spacer } from "@nextui-org/spacer"
import { signIn } from "next-auth/react"

import LogosGithubIcon from "../icon/LogosGithubIcon"
import LogosGoogleIcon from "../icon/LogosGoogleIcon"

export default function AuthProviders() {
  return (
    <div>
      <Button
        fullWidth
        variant="bordered"
        onPress={() => signIn("google", { redirect: true, callbackUrl: "/" })}
      >
        <LogosGoogleIcon height="1.5em" width="1.5em" /> Connect with Google
      </Button>
      <Spacer y={4} />
      <Button
        fullWidth
        variant="bordered"
        onPress={() => signIn("github", { redirect: true, callbackUrl: "/" })}
      >
        <LogosGithubIcon height="1.5em" width="1.5em" /> Connect with Github
      </Button>
    </div>
  )
}

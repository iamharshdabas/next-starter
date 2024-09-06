import { Button } from "@nextui-org/button"
import { Image } from "@nextui-org/image"
import { Spacer } from "@nextui-org/spacer"

import { subtitle, title } from "@/config/primitives"
import { auth } from "@/server/auth"

export default async function Profile() {
  const session = await auth()

  return (
    <section>
      <div className="flex flex-col items-center sm:flex-row-reverse sm:justify-between">
        <Image
          isZoomed
          alt="User profile"
          src={session?.user?.image?.toString()}
          width={256}
        />
        <div className="mt-8 text-center sm:text-start">
          <span className={title({ size: "lg", color: "foreground" })}>
            {session?.user?.name}
          </span>
          <Spacer y={4} />
          <span className={subtitle({ class: "ml-1" })}>
            {session?.user?.email}
          </span>
          <div className="mt-16 space-x-4">
            <Button type="submit" variant="ghost">
              Signout
            </Button>
            <Button color="danger" variant="light">
              Delete account
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

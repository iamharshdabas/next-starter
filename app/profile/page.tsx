"use client"

import { Image } from "@nextui-org/image"
import { Spacer } from "@nextui-org/spacer"
import { useSession } from "next-auth/react"

import { AuthDelete, AuthSignOut } from "@/components/auth"
import { subtitle, title } from "@/config"

const Profile = () => {
  const { data: session } = useSession()

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
          <h1 className={title({ size: "lg", color: "foreground" })}>
            {session?.user?.name}
          </h1>
          <Spacer y={4} />
          <h2 className={subtitle({ className: "ml-1" })}>
            {session?.user?.email}
          </h2>
          <Spacer y={8} />
          <div className="space-x-4">
            <AuthSignOut />
            <AuthDelete />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile

"use client"

import { Spacer } from "@nextui-org/spacer"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import { subtitle, title, urlTokenSearchParam } from "@/config"
import { verifyToken } from "@/server/actions/utils"

// INFO: this will always show error state in the end due to re render in development
// TODO: check for the same in production

const Verification = () => {
  const token = useSearchParams().get(urlTokenSearchParam)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    const verify = async () => {
      if (token) {
        const response = await verifyToken(token)

        if (response?.error) {
          setError(response.error)
          setSuccess("")
        }
        if (response?.success) {
          setSuccess(response.success)
          setError("")
        }
      }
    }

    verify()
  }, [])

  return (
    <section>
      <div className="text-center">
        {!error && !success && (
          <h1 className={title({ size: "lg", color: "foreground" })}>
            Verifying...
          </h1>
        )}
        {error && (
          <h1 className={title({ size: "lg", color: "pink" })}>{error}</h1>
        )}
        {success && (
          <>
            <h1 className={title({ size: "lg", color: "green" })}>{success}</h1>
            <p className={subtitle()}>
              Email verified successfully! You can now Sign In to your account.
            </p>
            <Spacer y={4} />
          </>
        )}
      </div>
    </section>
  )
}

export default Verification

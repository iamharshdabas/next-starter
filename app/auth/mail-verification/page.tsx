"use client"

import { Spacer } from "@nextui-org/spacer"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import { authConfig, errorConfig, subtitle, title } from "@/config"
import { verifyMailVerificationToken } from "@/server/actions/token"
import { AuthSignIn } from "@/components/auth"

// INFO: this will always show error state in the end due to re render in development
// TODO: check for the same in production

const Verification = () => {
  const token = useSearchParams().get(authConfig.token.mailVerification.url)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    const verify = async () => {
      if (token) {
        const response = await verifyMailVerificationToken(token)

        if (response?.error) setError(response.error)
        if (response?.success) setSuccess(response.success)
      } else {
        setError(errorConfig.auth.token.notFoundUrl)
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
              {authConfig.token.mailVerification.success}
            </p>
            <Spacer y={4} />
            <AuthSignIn />
          </>
        )}
      </div>
    </section>
  )
}

export default Verification

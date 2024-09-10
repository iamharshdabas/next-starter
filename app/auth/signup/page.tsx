"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { Spacer } from "@nextui-org/spacer"
import { useAction } from "next-safe-action/hooks"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

import {
  AuthCard,
  AuthEmail,
  AuthError,
  AuthPassword,
  AuthProviders,
  AuthSuccess,
} from "@/components/auth"
import { AuthName } from "@/components/auth/name"
import { DoubleDivider } from "@/components/ui"
import { authConfig, siteConfig } from "@/config"
import { signUpSchema } from "@/schema"
import { signUpAction } from "@/server/actions"

type FormData = z.infer<typeof signUpSchema>

const SignUp = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  })

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const { execute, isPending } = useAction(signUpAction, {
    onSuccess: (data) => {
      setError("")
      setSuccess("")

      if (data.data?.error) setError(data.data.error)
      if (data.data?.success) setSuccess(data.data.success)
    },
  })

  const onSubmit = (data: FormData) => {
    execute(data)
  }

  return (
    <section>
      <AuthCard
        footer={
          <>
            <span>{authConfig.signIn.footer}</span>
            <Link href={siteConfig.auth.signIn}>SignIn</Link>
          </>
        }
        header={authConfig.signIn.header}
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <AuthName disabled={Boolean(success) || isPending} />
            <Spacer y={4} />
            <AuthEmail disabled={Boolean(success) || isPending} />
            <Spacer y={4} />
            <AuthPassword disabled={Boolean(success) || isPending} />
            {error && (
              <>
                <Spacer y={4} />
                <AuthError message={error} />
              </>
            )}
            {success && (
              <>
                <Spacer y={4} />
                <AuthSuccess message={success} />
              </>
            )}
            <Spacer y={4} />
            <Button
              fullWidth
              color="primary"
              isDisabled={isPending}
              isLoading={isPending}
              type="submit"
            >
              SignUp
            </Button>
          </form>
        </FormProvider>
        <DoubleDivider />
        <AuthProviders />
      </AuthCard>
    </section>
  )
}

export default SignUp

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
} from "@/components/auth"
import { DoubleDivider } from "@/components/ui"
import { authConfig, siteConfig } from "@/config"
import { signInSchema } from "@/schema"
import { signInAction } from "@/server/actions"

type FormData = z.infer<typeof signInSchema>

const SignIn = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(signInSchema),
  })

  const [error, setError] = useState("")

  const { execute, isPending } = useAction(signInAction, {
    onSuccess: (data) => {
      setError("")
      if (data.data?.error) setError(data.data.error)
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
            <span>{authConfig.signUp.footer}</span>
            <Link href={siteConfig.auth.signUp}>SignUp</Link>
          </>
        }
        header={authConfig.signUp.header}
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <AuthEmail disabled={isPending} />
            <Spacer y={4} />
            <AuthPassword disabled={isPending} />
            {error && (
              <>
                <Spacer y={4} />
                <AuthError message={error} />
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
              SignIn
            </Button>
          </form>
        </FormProvider>
        <DoubleDivider />
        <AuthProviders />
      </AuthCard>
    </section>
  )
}

export default SignIn

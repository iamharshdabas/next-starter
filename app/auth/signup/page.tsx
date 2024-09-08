"use client"

import { zodResolver } from "@hookform/resolvers/zod"
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
  AuthSignIn,
  AuthSuccess,
} from "@/components/auth"
import { DoubleDivider } from "@/components/ui"
import { signUpSchema } from "@/schema"
import { signUpAction } from "@/server/actions"
import { AuthName } from "@/components/auth/name"

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

      if (data.data?.error && data.data.message) {
        setError(data.data.message)
      }
      if (data.data?.success && data.data.message) {
        setSuccess(data.data.message)
      }
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
            <span>Already have an account?</span>
            <Link href="/auth/signin">SignIn</Link>
          </>
        }
        header="Create an Account"
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <AuthName />
            <Spacer y={4} />
            <AuthEmail />
            <Spacer y={4} />
            <AuthPassword />
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
            <AuthSignIn isDisabled={isPending} isLoading={isPending} />
          </form>
        </FormProvider>
        <DoubleDivider />
        <AuthProviders />
      </AuthCard>
    </section>
  )
}

export default SignUp

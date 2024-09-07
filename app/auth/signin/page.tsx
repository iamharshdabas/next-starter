"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "@nextui-org/link"
import { Spacer } from "@nextui-org/spacer"
import { useAction } from "next-safe-action/hooks"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

import {
  AuthCard,
  AuthEmail,
  AuthPassword,
  AuthProviders,
  AuthSignIn,
} from "@/components/auth"
import { DoubleDivider } from "@/components/ui"
import { signInSchema } from "@/schema"
import { signInAction } from "@/server/actions"

type FormData = z.infer<typeof signInSchema>

const SignIn = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(signInSchema),
  })

  const { execute, isPending } = useAction(signInAction)

  const onSubmit = async (data: FormData) => {
    execute(data)
  }

  return (
    <section>
      <AuthCard
        footer={
          <>
            <span>Don&apos;t have an account?</span>
            <Link>SignUp</Link>
          </>
        }
        header="Welcome Back"
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <AuthEmail />
            <Spacer y={4} />
            <AuthPassword />
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

export default SignIn

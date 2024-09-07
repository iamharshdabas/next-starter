"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "@nextui-org/link"
import { Spacer } from "@nextui-org/spacer"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

import { DoubleDivider } from "@/components/ui"
import {
  AuthCard,
  AuthEmail,
  AuthPassword,
  AuthProviders,
  AuthSignIn,
} from "@/components/auth"

const schema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 6 characters long" })
    .min(1, { message: "Password is required" }),
})

type FormData = z.infer<typeof schema>

const SignIn = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    console.log(data)
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
            <AuthSignIn />
          </form>
        </FormProvider>
        <DoubleDivider />
        <AuthProviders />
      </AuthCard>
    </section>
  )
}

export default SignIn

"use client"

import { Link } from "@nextui-org/link"

import AuthCard from "@/components/auth/card"
import AuthEmail from "@/components/auth/email"
import AuthPassword from "@/components/auth/password"
import AuthProviders from "@/components/auth/providers"
import AuthSignIn from "@/components/auth/signin"
import DoubleDivider from "@/components/ui/double-divider"

export default function SignIn() {
  return (
    <section>
      <AuthCard
        footer={
          <>
            <span>Don&apos;t have an account ?</span>
            <Link>SignUp</Link>
          </>
        }
        header="Welcome Back"
      >
        <AuthEmail />
        <AuthPassword />
        <AuthSignIn />
        <DoubleDivider />
        <AuthProviders />
      </AuthCard>
    </section>
  )
}

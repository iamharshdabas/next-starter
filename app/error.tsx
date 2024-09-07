"use client"

import { Button } from "@nextui-org/button"
import { useEffect } from "react"

import { title } from "@/config"

interface Args {
  error: Error
  reset: () => void
}

const Error = ({ error, reset }: Args) => {
  useEffect(() => {
    /* eslint-disable no-console */
    console.error(error)
  }, [error])

  return (
    <div>
      <h1 className={title({ size: "sm" })}>Something went wrong!</h1>
      <Button variant="flat" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  )
}

export default Error

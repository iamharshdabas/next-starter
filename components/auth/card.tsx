import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Spacer } from "@nextui-org/spacer"
import { ReactNode } from "react"

import { title } from "@/config"

interface Args {
  header: ReactNode
  footer: ReactNode
  children: ReactNode
}

export const AuthCard = ({ header, footer, children }: Args) => {
  return (
    <>
      <h1
        className={title({
          color: "foreground",
          className: "flex justify-center py-2",
        })}
      >
        {header}
      </h1>
      <Spacer y={4} />
      <Card className="mx-auto max-w-sm">
        <CardBody className="space-y-4">{children}</CardBody>
        <CardFooter className="justify-center gap-2">{footer}</CardFooter>
      </Card>
    </>
  )
}

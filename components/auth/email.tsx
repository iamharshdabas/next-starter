import { Input } from "@nextui-org/input"
import { useFormContext } from "react-hook-form"

import { SolarLetterBoldDuotone } from "../icon"

export const AuthEmail = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <Input
      {...register("email")}
      endContent={<SolarLetterBoldDuotone height="2em" width="2em" />}
      errorMessage={errors.email?.message?.toString() || ""}
      isInvalid={!!errors.email}
      label="Email"
      placeholder="Enter your email"
      variant="bordered"
    />
  )
}

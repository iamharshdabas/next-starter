import { Input, InputProps } from "@nextui-org/input"
import { useFormContext } from "react-hook-form"

import { SolarLetterBoldDuotone } from "../icon"

export const AuthEmail = (props: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <Input
      {...props}
      {...register("email")}
      endContent={<SolarLetterBoldDuotone />}
      errorMessage={errors.email?.message?.toString() || ""}
      isInvalid={!!errors.email}
      label="Email"
      placeholder="Enter your email"
      variant="bordered"
    />
  )
}

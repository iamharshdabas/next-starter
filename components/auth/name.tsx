import { Input, InputProps } from "@nextui-org/input"
import { useFormContext } from "react-hook-form"

import { SolarUserBoldDuotone } from "../icon"

export const AuthName = (props: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <Input
      {...props}
      {...register("name")}
      endContent={<SolarUserBoldDuotone />}
      errorMessage={errors.name?.message?.toString() || ""}
      isInvalid={!!errors.name}
      label="Name"
      placeholder="Enter your name"
      variant="bordered"
    />
  )
}

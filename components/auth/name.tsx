import { Input } from "@nextui-org/input"
import { useFormContext } from "react-hook-form"

import { SolarUserBoldDuotone } from "../icon"

export const AuthName = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <Input
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

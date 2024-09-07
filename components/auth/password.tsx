import { Input } from "@nextui-org/input"
import { useState } from "react"
import { useFormContext } from "react-hook-form"

import { SolarEyeBoldDuotone, SolarEyeClosedBoldDuotone } from "../icon"

export const AuthPassword = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Input
      {...register("password")}
      endContent={
        <button type="button" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? <SolarEyeBoldDuotone /> : <SolarEyeClosedBoldDuotone />}
        </button>
      }
      errorMessage={errors.email?.message?.toString() || ""}
      isInvalid={!!errors.password}
      label="Password"
      placeholder="Enter your password"
      type={isVisible ? "text" : "password"}
      variant="bordered"
    />
  )
}

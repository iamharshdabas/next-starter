import { Input } from "@nextui-org/input"
import { useState } from "react"

import SolarEyeBoldDuotone from "../icon/SolarEyeBoldDuotone"
import SolarEyeClosedBoldDuotone from "../icon/SolarEyeClosedBoldDuotone"

export default function AuthPassword() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Input
      endContent={
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? (
            <SolarEyeBoldDuotone height="2em" width="2em" />
          ) : (
            <SolarEyeClosedBoldDuotone height="2em" width="2em" />
          )}
        </button>
      }
      label="Password"
      placeholder="Enter your password"
      // TODO: hide content without using type="password"
      type="text"
      variant="bordered"
    />
  )
}

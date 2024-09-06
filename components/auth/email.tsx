import { Input } from "@nextui-org/input"

import SolarLetterBoldDuotone from "../icon/SolarLetterBoldDuotone"

export default function AuthEmail() {
  return (
    <Input
      endContent=<SolarLetterBoldDuotone height="2em" width="2em" />
      label="Email"
      placeholder="Enter your email"
      variant="bordered"
    />
  )
}

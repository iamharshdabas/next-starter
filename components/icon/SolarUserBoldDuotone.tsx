import { SVGProps } from "react"

export const SolarUserBoldDuotone = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="2em"
      viewBox="0 0 24 24"
      width="2em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="6" fill="#888888" r="4" />
      <path
        d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
        fill="#888888"
        opacity=".5"
      />
    </svg>
  )
}

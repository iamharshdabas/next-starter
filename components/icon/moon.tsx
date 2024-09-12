import { SVGProps } from "react"

export function CloudyMoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height="2em" viewBox="0 0 24 24" width="2em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"
        fill="#000000"
        opacity=".5"
      />
      <path
        d="M11.286 22C13.337 22 15 20.42 15 18.47c0-1.544-1.045-2.857-2.5-3.336C12.295 13.371 10.72 12 8.81 12c-2.052 0-3.715 1.58-3.715 3.53c0 .43.082.844.23 1.226a3 3 0 0 0-.54-.05C3.248 16.706 2 17.89 2 19.353S3.247 22 4.786 22z"
        fill="#000000"
      />
    </svg>
  )
}

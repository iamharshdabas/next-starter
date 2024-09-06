import { Code } from "@nextui-org/code"
import { Snippet } from "@nextui-org/snippet"

import { subtitle, title } from "@/config/primitives"

export default function Home() {
  return (
    <section>
      <div>
        <h1 className={title({ size: "lg" })}>Make&nbsp;</h1>
        <h1 className={title({ size: "lg", color: "violet" })}>beautiful</h1>
        <br />
        <h1 className={title({ size: "lg" })}>
          websites regardless of your design experience.
        </h1>
        <h2 className={subtitle({ className: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </h2>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  )
}

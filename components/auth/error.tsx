import { Snippet, SnippetProps } from "@nextui-org/snippet"

interface Args extends SnippetProps {
  error: string
}

export const AuthError = ({ error, ...props }: Args) => {
  return (
    <Snippet
      fullWidth
      hideSymbol
      size="lg"
      {...props}
      hideCopyButton
      color="danger"
      variant="flat"
    >
      {error}
    </Snippet>
  )
}

import { Snippet, SnippetProps } from "@nextui-org/snippet"

interface Args extends SnippetProps {
  message: string
}

export const AuthError = ({ message, ...props }: Args) => {
  return (
    <Snippet
      fullWidth
      hideCopyButton
      hideSymbol
      color="danger"
      size="lg"
      variant="flat"
      {...props}
    >
      {message}
    </Snippet>
  )
}

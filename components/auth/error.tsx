import { Snippet, SnippetProps } from "@nextui-org/snippet"

interface Args extends SnippetProps {
  message: string
}

export const AuthError = ({ message, ...props }: Args) => {
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
      {message}
    </Snippet>
  )
}

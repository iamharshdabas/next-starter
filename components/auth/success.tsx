import { Snippet, SnippetProps } from "@nextui-org/snippet"

interface Args extends SnippetProps {
  message: string
}

export const AuthSuccess = ({ message, ...props }: Args) => {
  return (
    <Snippet
      fullWidth
      hideSymbol
      size="lg"
      {...props}
      hideCopyButton
      color="success"
      variant="flat"
    >
      {message}
    </Snippet>
  )
}

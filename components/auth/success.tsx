import { Snippet, SnippetProps } from "@nextui-org/snippet"

interface Args extends SnippetProps {
  message: string
}

export const AuthSuccess = ({ message, ...props }: Args) => {
  return (
    <Snippet
      fullWidth
      hideCopyButton
      hideSymbol
      color="success"
      size="lg"
      variant="flat"
      {...props}
    >
      {message}
    </Snippet>
  )
}

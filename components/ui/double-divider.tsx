export const DoubleDivider = ({ label = "OR" }: { label?: string }) => {
  return (
    <div className="flex items-center gap-4 text-foreground/50">
      <div className="h-0 w-full border border-divider" />
      {label}
      <div className="h-0 w-full border border-divider" />
    </div>
  )
}

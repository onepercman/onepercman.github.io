import React from "react"
import { cn } from "react-tvcx"
import { Spinner } from "../spinner"

export const Loader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function ({ children, className, ...props }, ref) {
  return (
    <div ref={ref} className={cn("flex min-h-56", className)} {...props}>
      <div className="m-auto flex flex-col items-center gap-4 p-4">
        <Spinner />
      </div>
    </div>
  )
})

Loader.displayName = "Loader"

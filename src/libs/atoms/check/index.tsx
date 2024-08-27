import React from "react"

export const Check = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(function (props, ref) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 52 52"
      stroke="currentColor"
      {...props}
    >
      <path
        fill="none"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10 27l10 12 25-25"
        stroke-dasharray="50"
        stroke-dashoffset="50"
      >
        <animate attributeName="stroke-dashoffset" values="50;0" dur="0.1s" fill="freeze" />
      </path>
    </svg>
  )
})

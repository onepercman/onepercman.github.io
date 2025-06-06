import { tv } from "tailwind-variants"

export const collapsible = tv({
  base: "flex flex-col",
  slots: {
    trigger: "inline-flex w-full items-center justify-between gap-2 rounded",
    content: [
      "overflow-hidden !duration-150",
      "data-[state=open]:animate-collapsible",
      "data-[state=closed]:direction-reverse data-[state=closed]:animate-collapsible",
    ],
  },
})

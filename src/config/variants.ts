import {
  accordion,
  avatar,
  button,
  checkbox,
  combobox,
  container,
  datePicker,
  dialog,
  hoverCard,
  input,
  menu,
  popover,
  radio,
  radioGroup,
  segmentGroup,
  select,
  slider,
  switchVariants,
  table,
  tabs,
  textarea,
  toast,
  tooltip,
} from "@mojaui/react"

import { tv } from "tailwind-variants"

export const variants = {
  accordion: tv({ extend: accordion }),
  avatar: tv({ extend: avatar }),
  button: tv({ extend: button }),
  combobox: tv({ extend: combobox }),
  container: tv({ extend: container }),
  dialog: tv({ extend: dialog }),
  hoverCard: tv({ extend: hoverCard }),
  checkbox: tv({ extend: checkbox }),
  datePicker: tv({ extend: datePicker }),
  input: tv({ extend: input }),
  radio: tv({ extend: radio }),
  switchVariants: tv({ extend: switchVariants }),
  textarea: tv({ extend: textarea }),
  menu: tv({ extend: menu }),
  popover: tv({ extend: popover }),
  radioGroup: tv({ extend: radioGroup }),
  segmentGroup: tv({ extend: segmentGroup }),
  select: tv({ extend: select }),
  slider: tv({ extend: slider }),
  table: tv({ extend: table }),
  tabs: tv({ extend: tabs }),
  toast: tv({ extend: toast }),
  tooltip: tv({ extend: tooltip }),
}

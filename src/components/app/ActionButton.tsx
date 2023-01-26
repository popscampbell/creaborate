import Button from "@mui/material/Button"
import { ActionButtonProps } from "./types"

export default function ActionButton(props: ActionButtonProps) {
  const { text, onClick, title, icon } = props

  return (
    <Button
      variant="outlined"
      title={title ?? text}
      onClick={onClick}
      startIcon={icon}
    >
      {text}
    </Button>
  )
}

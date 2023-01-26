import { Box } from "@mui/material"
import { FieldValues } from "react-hook-form"
import { TextFieldElementProps, TextFieldElement } from "react-hook-form-mui"

export default function CreaborateTextField<
  T extends FieldValues = FieldValues
>(props: TextFieldElementProps<T>) {
  const { multiline, fullWidth, minRows, hidden, ...rest } = props

  return (
    <Box maxWidth={multiline ? undefined : 500}>
      <TextFieldElement
        multiline={multiline}
        fullWidth
        minRows={multiline ? 3 : undefined}
        sx={{ display: hidden ? "none" : "block" }}
        {...rest}
      />
    </Box>
  )
}

import { Typography } from "@mui/material"
import { FieldValues } from "react-hook-form"
import { RadioButtonGroup, RadioButtonGroupProps } from "react-hook-form-mui"

export default function CreaborateRadioField<
  T extends FieldValues = FieldValues
>(
  props: RadioButtonGroupProps<T> & {
    readonlyValue: string
    disabled?: boolean
    onChange?: (value: any) => void
  }
) {
  return props.disabled ? (
    <Typography color="GrayText">
      {props.label}: {props.readonlyValue}
    </Typography>
  ) : (
    <RadioButtonGroup row {...props} onChange={props.onChange} />
  )
}

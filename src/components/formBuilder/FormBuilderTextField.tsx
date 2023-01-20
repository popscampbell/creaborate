import TextField from "@mui/material/TextField"
import React from "react"
import { FormBuilderFieldProps } from "./types"

export default function FormBuilderTextField<T>(
  props: Omit<FormBuilderFieldProps, "type"> & {
    onChange: (name: string, newValue: string) => void
    item: T
    type: string
    multiline?: boolean
  }
) {
  const { item, label, name, required, onChange, type, multiline } = props

  const [value, setValue] = React.useState((item as any)[name])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value
    setValue(newValue)
    onChange(name, newValue)
  }

  const fieldProps = {
    label,
    name,
    required,
    type,
    value: value || "",
    onChange: handleChange
  }

  return (
    <TextField
      multiline={multiline}
      rows={3}
      {...fieldProps}
      sx={{
        maxWidth: multiline ? undefined : 500
      }}
    />
  )
}

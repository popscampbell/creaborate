import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField
} from "@mui/material"
import React from "react"
import FormBuilderSwitch from "./FormBuilderSwitch"
import { FormBuilderFieldProps, FormBuilderFieldType } from "./types"

export default function FormBuilderField<T>(
  props: FormBuilderFieldProps & {
    isEditing: boolean
    onChange: (name: string, newValue: string) => void
    item: T
  }
) {
  const {
    item,
    label,
    name,
    type,
    isEditing,
    required,
    options,
    toggleOnValue,
    toggleOffValue,
    onChange
  } = props

  const [value, setValue] = React.useState((item as any)[name])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value
    setValue(newValue)
    onChange(name, newValue)
  }

  const fieldProps = {
    disabled: !isEditing,
    label,
    name,
    required,
    value: value || "",
    onChange: handleChange
  }

  switch (type) {
    case FormBuilderFieldType.TEXT:
    case FormBuilderFieldType.LONGTEXT:
      return (
        <TextField
          multiline={type === FormBuilderFieldType.LONGTEXT}
          rows={3}
          {...fieldProps}
          sx={{
            maxWidth: type === FormBuilderFieldType.TEXT ? 500 : undefined
          }}
        />
      )

    case FormBuilderFieldType.CHOICE:
      return options ? (
        <>
          <FormLabel id={`${name}-label`}>{label}</FormLabel>
          <RadioGroup row aria-labelledby={`${name}-label`} {...fieldProps}>
            {options.map((option, key) => (
              <FormControlLabel
                key={key}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </>
      ) : (
        <></>
      )

    case FormBuilderFieldType.TOGGLE:
      return (
        <FormControlLabel
          label={label}
          control={
            <FormBuilderSwitch
              value={value}
              toggleOnValue={toggleOnValue}
              toggleOffValue={toggleOffValue}
              onChange={(newValue) => {
                setValue(newValue)
                onChange(name, newValue)
              }}
            />
          }
        />
      )

    default:
      return <></>
  }
}

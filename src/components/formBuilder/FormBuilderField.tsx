import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import _ from "lodash"
import React from "react"
import FormBuilderSwitch from "./FormBuilderSwitch"
import FormBuilderTextField from "./FormBuilderTextField"
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
        <FormBuilderTextField
          {..._.omit(fieldProps, "onChange")}
          item={item}
          type="text"
          onChange={onChange}
          multiline={type === FormBuilderFieldType.LONGTEXT}
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

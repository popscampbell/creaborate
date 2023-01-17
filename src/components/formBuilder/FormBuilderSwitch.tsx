import Switch from "@mui/material/Switch"
import React from "react"

export default function FormBuilderSwitch<T>(props: {
  value: T
  toggleOnValue: T
  toggleOffValue: T
  onChange: (newValue: T) => void
}) {
  const { value, toggleOnValue, toggleOffValue, onChange } = props

  const [switchValue, setSwitchValue] = React.useState(value === toggleOnValue)

  return (
    <Switch
      checked={switchValue}
      onChange={(e) => {
        setSwitchValue(e.target.checked)
        onChange(e.target.checked ? toggleOnValue : toggleOffValue)
      }}
    />
  )
}

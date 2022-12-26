import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from "@mui/material"
import { uniqueId } from "lodash"
import { ChangeEvent } from "react"

export default function EnumRadioGroup<T extends string>(props: {
  label: string
  name: string
  labels: Record<T, string>
  value: string
  onChange: (newValue: T) => void
  row?: boolean
}) {
  const { label, name, labels, value, onChange, row } = props

  const labelId = uniqueId()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value as T
    onChange(newValue)
  }

  return (
    <FormControl>
      <FormLabel id={labelId} children={label} />
      <RadioGroup
        row={row}
        aria-labelledby={labelId}
        value={value}
        onChange={handleChange}
        name={name}
      >
        {Object.keys(labels).map((key) => (
          <FormControlLabel
            key={key}
            value={key}
            control={<Radio />}
            label={labels[key as T]}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

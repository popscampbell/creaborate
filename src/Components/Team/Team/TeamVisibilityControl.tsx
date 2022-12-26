import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material"
import { TeamVisibility } from "models"
import { ChangeEvent, useState } from "react"
import { teamVisibilityLabels } from "Labels/enumLabels"

export default function TeamVisibilityControl(props: {
  visibility: TeamVisibility
  onChange: (visibility: TeamVisibility) => void
}) {
  const { visibility, onChange } = props

  const [value, setValue] = useState(visibility)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value as TeamVisibility
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <FormControl>
      <FormLabel id="team-visibility-label">Visibility</FormLabel>
      <RadioGroup
        row
        aria-labelledby="team-visibility-label"
        value={value}
        onChange={handleChange}
        name="team-visibility-group"
      >
        <FormControlLabel
          value={TeamVisibility.PRIVATE}
          control={<Radio />}
          label={teamVisibilityLabels[TeamVisibility.PRIVATE]}
        />
        <FormControlLabel
          value={TeamVisibility.PUBLIC}
          control={<Radio />}
          label={teamVisibilityLabels[TeamVisibility.PUBLIC]}
        />
      </RadioGroup>
    </FormControl>
  )
}

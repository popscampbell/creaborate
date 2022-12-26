import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material"
import { teamTypeLabels } from "Labels/enumLabels"
import { TeamType } from "models"
import { ChangeEvent, useState } from "react"

export default function TeamTypeControl(props: {
  teamType: TeamType
  onChange: (teamType: TeamType) => void
}) {
  const { teamType, onChange } = props

  const [value, setValue] = useState(teamType)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value as TeamType
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <FormControl>
      <FormLabel id="team-type-label">Team type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="team-type-label"
        value={value}
        onChange={handleChange}
        name="type-group"
      >
        <FormControlLabel
          value={TeamType.BAND}
          control={<Radio />}
          label={teamTypeLabels[TeamType.BAND]}
        />
        <FormControlLabel
          value={TeamType.TEAM}
          control={<Radio />}
          label={teamTypeLabels[TeamType.TEAM]}
        />
        <FormControlLabel
          value={TeamType.GROUP}
          control={<Radio />}
          label={teamTypeLabels[TeamType.GROUP]}
        />
      </RadioGroup>
    </FormControl>
  )
}

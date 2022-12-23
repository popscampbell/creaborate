import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material"
import { TeamType } from "models"
import { ChangeEvent, useState } from "react"
import { TeamUtilities } from "Utilities"

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
          label={TeamUtilities.TeamTypeLabel(TeamType.BAND)}
        />
        <FormControlLabel
          value={TeamType.TEAM}
          control={<Radio />}
          label={TeamUtilities.TeamTypeLabel(TeamType.TEAM)}
        />
        <FormControlLabel
          value={TeamType.GROUP}
          control={<Radio />}
          label={TeamUtilities.TeamTypeLabel(TeamType.GROUP)}
        />
      </RadioGroup>
    </FormControl>
  )
}

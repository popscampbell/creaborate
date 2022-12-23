import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel
} from "@mui/material"
import { TeamMemberRole } from "models"
import { ChangeEvent, useState } from "react"

export default function TeamMemberRoleControl(props: {
  role: TeamMemberRole
  onChange: (role: TeamMemberRole) => void
  label?: string
}) {
  const { role, onChange, label } = props

  const [value, setValue] = useState(role)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newRole = event.target.value as TeamMemberRole
    setValue(newRole)
    onChange(newRole)
  }

  return (
    <FormControl>
      <FormLabel id="team-member-role-label">{label || "Role"}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="team-member-role-label"
        value={value}
        onChange={handleChange}
        name="role-group"
      >
        <FormControlLabel
          value={TeamMemberRole.ADMINISTRATOR}
          control={<Radio />}
          label="Administrator"
        />
        <FormControlLabel
          value={TeamMemberRole.MEMBER}
          control={<Radio />}
          label="Contributor"
        />
      </RadioGroup>
    </FormControl>
  )
}

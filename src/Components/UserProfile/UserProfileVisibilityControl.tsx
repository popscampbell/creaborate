import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel
} from "@mui/material"
import { UserProfileVisibility } from "models"
import { ChangeEvent, useState } from "react"
import { UserProfileUtilities } from "Utilities"

export default function UserProfileVisibilityControl(props: {
  visibility: UserProfileVisibility
  onChange: (visibility: UserProfileVisibility) => void
}) {
  const { visibility, onChange } = props

  const [value, setValue] = useState(visibility)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value as UserProfileVisibility
    console.log("newValue:", newValue)
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
          value={UserProfileVisibility.PRIVATE}
          control={<Radio />}
          label={UserProfileUtilities.UserProfileVisibilityLabel(
            UserProfileVisibility.PRIVATE
          )}
        />
        <FormControlLabel
          value={UserProfileVisibility.PUBLIC}
          control={<Radio />}
          label={UserProfileUtilities.UserProfileVisibilityLabel(
            UserProfileVisibility.PUBLIC
          )}
        />
      </RadioGroup>
    </FormControl>
  )
}

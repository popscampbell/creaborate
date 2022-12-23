import { Button, TextField, Box, Container } from "@mui/material"
import { DeleteButton } from "Components/Controls"
import TeamDataStore from "DataStores/TeamDataStore/TeamDataStore"
import { Team, TeamType } from "models"
import { useState } from "react"
import TeamMembers from "../TeamMembers/TeamMembers"
import TeamTypeControl from "./TeamTypeControl"

export default function TeamSettings(props: {
  team: Team
  onSave: () => void
  onCancel: () => void
}) {
  const { team, onSave, onCancel } = props

  const [name, setName] = useState(team.Name)
  const [description, setDescription] = useState(team.Description || "")
  const [teamType, setTeamType] = useState(team.TeamType as TeamType)

  return (
    <Box>
      <Box marginBottom={2}>
        <TextField
          fullWidth
          label="Name"
          id="team-name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Box>
      <Box marginBottom={2}>
        <TextField
          label="Description"
          fullWidth
          multiline
          id="team-description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Box>
      <Box marginBottom={2}>
        <TeamTypeControl
          teamType={teamType}
          onChange={(newTeamType) => {
            setTeamType(newTeamType)
          }}
        />
      </Box>
      <Box marginBottom={2}>
        <TeamMembers team={team} />
      </Box>
      <Container sx={{ display: "flex", alignContent: "end" }}>
        <Button
          onClick={() => {
            TeamDataStore.updateTeam(team, name, description, teamType)
            onSave()
          }}
          children="Save"
          variant="outlined"
          sx={{ marginRight: 1 }}
        />
        <Button onClick={onCancel} variant="outlined" sx={{ marginRight: 1 }}>
          Cancel
        </Button>
        <DeleteButton item={team} itemType="team" />
      </Container>
    </Box>
  )
}

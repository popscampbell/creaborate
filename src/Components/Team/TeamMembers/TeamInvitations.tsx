import { Box, Paper, Typography } from "@mui/material"
import TeamDataStore from "DataStores/TeamDataStore/TeamDataStore"
import { Team, TeamMember } from "models"
import { TeamMemberChip } from "./TeamMemberChip"

export default function TeamInvitations(props: {
  team: Team
  editable?: boolean
}) {
  const { team, editable } = props

  const invitations = TeamDataStore.useTeamInvitations(team)

  function handleRemoveTeamMember(teamMember: TeamMember) {
    TeamDataStore.removeTeamMember(teamMember)
  }

  return (
    <Paper variant="outlined">
      <Box padding={2}>
        {invitations.length > 0 && (
          <Box>
            <Typography variant="h5" marginBottom={1}>
              Invitations
            </Typography>
            <Box>
              {invitations.map((invitation) => (
                <Box key={invitation.id} display="inline" marginRight={1}>
                  <TeamMemberChip
                    teamMember={invitation}
                    onDelete={editable ? handleRemoveTeamMember : undefined}
                    editable={editable}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Paper>
  )
}

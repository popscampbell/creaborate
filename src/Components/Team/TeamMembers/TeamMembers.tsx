import { Box, Paper, Typography } from "@mui/material"
import TeamDataStore from "DataStores/TeamDataStore/TeamDataStore"
import { Team, TeamMember } from "models"
import AddTeamMemberDialog from "./AddTeamMemberDialog"
import { TeamMemberChip } from "./TeamMemberChip"

export default function TeamMembers(props: { team: Team }) {
  const { team } = props

  const teamMembers = TeamDataStore.useTeamMembers(team)
  const invitations = TeamDataStore.useTeamInvitations(team)

  function handleRemoveTeamMember(teamMember: TeamMember) {
    TeamDataStore.removeTeamMember(teamMember)
  }

  return (
    <Paper variant="outlined">
      <Box padding={2}>
        <Box marginBottom={2}>
          <Typography variant="h5" marginBottom={1}>
            Members
          </Typography>
          {teamMembers.length > 0 && (
            <Box marginBottom={2}>
              {teamMembers.map((member) => (
                <Box key={member.id} display="inline" marginRight={1}>
                  <TeamMemberChip
                    teamMember={member}
                    onDelete={handleRemoveTeamMember}
                  />
                </Box>
              ))}
            </Box>
          )}
          {teamMembers.length === 0 && (
            <Typography>There are no team members yet.</Typography>
          )}
          <AddTeamMemberDialog team={team} />
        </Box>
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
                    onDelete={handleRemoveTeamMember}
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

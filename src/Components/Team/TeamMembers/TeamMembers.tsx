import { LocalPolice } from "@mui/icons-material"
import { Box, Chip, Paper, Typography } from "@mui/material"
import { DataStore } from "aws-amplify"
import ChipSet from "Components/Controls/ChipSet"
import TeamDataStore from "DataStores/TeamDataStore/TeamDataStore"
import { teamMemberRoleLabels } from "Labels/enumLabels"
import { Team, TeamMember, TeamMemberRole, UserProfile } from "models"
import React from "react"
import EditTeamMemberDialog from "./EditTeamMemberDialog"
import TeamMemberName from "./TeamMemberName"

export default function TeamMembers(props: { team: Team; editable?: boolean }) {
  const { team, editable } = props

  const teamMembers = TeamDataStore.useTeamMembers(team)

  const [isLastAdmin, setIsLastAdmin] = React.useState(false)
  const [selectedTeamMember, setSelectedTeamMember] =
    React.useState<TeamMember>()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    function getIsLastAdmin() {
      return (teamMembers &&
        teamMembers.length < 2 &&
        teamMembers.filter(
          (member) => member.Role === TeamMemberRole.ADMINISTRATOR
        ).length === 1) as boolean
    }
    setIsLastAdmin(getIsLastAdmin())
  }, [teamMembers])

  function handleClick(teamMember: TeamMember) {
    setSelectedTeamMember(teamMember)
    setOpen(true)
  }

  function handleDelete(teamMember: TeamMember) {
    TeamDataStore.removeTeamMember(teamMember)
  }

  function handleSave(changed: TeamMember) {
    selectedTeamMember &&
      TeamDataStore.setTeamMemberRole(
        selectedTeamMember,
        changed.Role as TeamMemberRole
      ).then(() => {
        setOpen(false)
      })
  }

  return (
    <Paper variant="outlined">
      <Box padding={2}>
        <ChipSet
          heading="Team members"
          items={teamMembers}
          chip={(teamMember) => (
            <Chip
              label={<TeamMemberName teamMemberId={teamMember.id} short />}
              onClick={
                editable && !isLastAdmin
                  ? () => handleClick(teamMember)
                  : undefined
              }
              onDelete={
                editable && !isLastAdmin
                  ? () => handleDelete(teamMember)
                  : undefined
              }
              color="primary"
              variant="outlined"
              icon={
                teamMember.Role === TeamMemberRole.ADMINISTRATOR ? (
                  <LocalPolice
                    titleAccess={teamMemberRoleLabels[teamMember.Role]}
                  />
                ) : undefined
              }
            />
          )}
        />
        {editable && isLastAdmin && (
          <Typography
            variant="caption"
            color="InfoText"
            children="There must be at least one administrator."
          />
        )}
        {selectedTeamMember && (
          <EditTeamMemberDialog
            teamMember={selectedTeamMember}
            open={open}
            onCancel={() => setOpen(false)}
            onSave={handleSave}
          />
        )}
      </Box>
    </Paper>
  )
}

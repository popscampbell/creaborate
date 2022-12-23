import { Chip } from "@mui/material"
import TeamDataStore from "DataStores/TeamDataStore/TeamDataStore"
import UserProfileDataStore from "DataStores/UserProfileDataStore"
import { TeamMember, TeamMemberRole } from "models"
import { useState } from "react"
import { TeamMemberUtilities, UserProfileUtilities } from "Utilities"
import EditTeamMemberDialog from "./EditTeamMemberDialog"

export function TeamMemberChip(props: {
  teamMember: TeamMember
  onDelete?: (teamMember: TeamMember) => void
  onChanged?: () => void
  short?: boolean
}) {
  const { teamMember, onChanged, onDelete, short } = props

  const userProfile = UserProfileDataStore.useUserProfileById(
    teamMember.UserProfile
  )
  const [open, setOpen] = useState(false)

  function handleSave(changed: TeamMember) {
    TeamDataStore.setTeamMemberRole(
      teamMember,
      changed.Role as TeamMemberRole
    ).then(() => {
      setOpen(false)
      onChanged && onChanged()
    })
  }

  const roleLabel = TeamMemberUtilities.TeamMemberRoleLabel(
    teamMember.Role,
    true
  )

  const shortName = userProfile
    ? UserProfileUtilities.getShortName(userProfile)
    : ""

  return (
    <>
      <Chip
        label={`${short ? shortName : userProfile?.Name} (${roleLabel})`}
        onClick={() => setOpen(true)}
        onDelete={() => onDelete && onDelete(teamMember)}
        color="primary"
        variant="outlined"
      />
      <EditTeamMemberDialog
        teamMember={teamMember}
        open={open}
        onCancel={() => setOpen(false)}
        onSave={handleSave}
      />
    </>
  )
}

import { LocalPolice } from "@mui/icons-material"
import { Chip } from "@mui/material"
import TeamDataStore from "DataStores/TeamDataStore/TeamDataStore"
import { teamMemberRoleLabels } from "Labels/enumLabels"
import { TeamMember, TeamMemberRole } from "models"
import { useState } from "react"
import EditTeamMemberDialog from "./EditTeamMemberDialog"

export function TeamMemberChip(props: {
  teamMember: TeamMember
  onDelete?: (teamMember: TeamMember) => void
  onChanged?: () => void
  editable?: boolean
  short?: boolean
}) {
  const { teamMember, onChanged, onDelete, editable, short } = props

  const userProfile = TeamDataStore.useUserProfileByTeamMember(teamMember)

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

  return (
    <>
      <Chip
        label={`${short ? userProfile?.Name.split(" ")[0] : userProfile?.Name}`}
        onClick={editable ? () => setOpen(true) : undefined}
        onDelete={editable && onDelete ? () => onDelete(teamMember) : undefined}
        color="primary"
        variant="outlined"
        icon={
          teamMember.Role === TeamMemberRole.ADMINISTRATOR ? (
            <LocalPolice titleAccess={teamMemberRoleLabels[teamMember.Role]} />
          ) : (
            <></>
          )
        }
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

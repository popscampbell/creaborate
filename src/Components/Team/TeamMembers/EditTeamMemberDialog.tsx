import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material"
import TeamDataStore from "DataStores/TeamDataStore/TeamDataStore"
import UserProfileDataStore from "DataStores/UserProfileDataStore"
import { TeamMember, TeamMemberRole } from "models"
import { useState } from "react"
import TeamMemberRoleControl from "./TeamMemberRoleControl"

export default function EditTeamMemberDialog(props: {
  teamMember: TeamMember
  open: boolean
  onSave: (changed: TeamMember) => void
  onCancel: () => void
}) {
  const { teamMember, open, onSave, onCancel } = props

  const userProfile = UserProfileDataStore.useUserProfileById(
    teamMember.UserProfile
  )
  const team = TeamDataStore.useTeam(teamMember.Team)

  const [role, setRole] = useState(teamMember.Role)

  return (
    <Dialog open={open}>
      <DialogTitle children={`${userProfile?.Name} - ${team?.Name}`} />
      <DialogContent>
        <TeamMemberRoleControl
          role={teamMember.Role as TeamMemberRole}
          onChange={(role) => setRole(role)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={() => onSave({ ...teamMember, ...{ role } })}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

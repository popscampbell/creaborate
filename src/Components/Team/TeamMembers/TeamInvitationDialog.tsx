import { ThumbDown, ThumbUp } from "@mui/icons-material"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material"
import TeamDataStore from "DataStores/TeamDataStore/TeamDataStore"
import UserProfileDataStore from "DataStores/UserProfileDataStore"
import { Team, TeamMember, TeamType } from "models"
import { useState } from "react"
import { TeamUtilities } from "Utilities"

export default function TeamInvitationDialog(props: {
  open: boolean
  invitation: TeamMember
  team: Team
  onAccept: () => void
  onDecline: () => void
}) {
  const { invitation, team, open, onAccept, onDecline } = props

  const invitedByUserProfile = UserProfileDataStore.useUserProfileById(
    invitation.InvitedByUserProfile
  )

  const typeLabel = TeamUtilities.TeamTypeLabel(team.TeamType as TeamType, true)

  const [message, setMessage] = useState(
    `Someone has invited you to join their ${typeLabel}, "${team.Name}".`
  )
  setMessage(
    `${invitedByUserProfile?.Name} has invited you to join their ${typeLabel}, "${team.Name}".`
  )

  function handleAccept() {
    TeamDataStore.acceptInvitation(invitation).then((teamMember) => onAccept())
  }

  function handleDecline() {
    TeamDataStore.declineInvitation(invitation).then((teamMember) =>
      onDecline()
    )
  }
  return (
    <Dialog open={open}>
      <DialogTitle>Invitation to join {team.Name}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleDecline} startIcon={<ThumbUp />}>
          Accept
        </Button>
        <Button onClick={handleAccept} startIcon={<ThumbDown />}>
          Decline
        </Button>
      </DialogActions>
    </Dialog>
  )
}

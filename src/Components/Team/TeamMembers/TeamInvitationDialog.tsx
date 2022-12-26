import { ThumbDown, ThumbUp } from "@mui/icons-material"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material"
import TeamDataStore from "DataStores/TeamDataStore/TeamDataStore"
import UserProfileDataStore from "DataStores/UserProfileDataStore"
import { teamTypeLabels } from "Labels/enumLabels"
import { Team, TeamMember } from "models"

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
        <DialogContentText>{`${
          invitedByUserProfile?.Name || "Someone"
        } has invited you to join their ${teamTypeLabels[
          team.TeamType
        ].toLowerCase()}, "${team.Name}".`}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleAccept} startIcon={<ThumbUp />}>
          Accept
        </Button>
        <Button onClick={handleDecline} startIcon={<ThumbDown />}>
          Decline
        </Button>
      </DialogActions>
    </Dialog>
  )
}

import { ListItemButton, ListItemText } from "@mui/material"
import { DataStore } from "aws-amplify"
import TeamInvitationDialog from "Components/Team/TeamMembers/TeamInvitationDialog"
import TeamDataStore from "DataStores/TeamDataStore/TeamDataStore"
import { teamMemberRoleLabels } from "Labels/enumLabels"
import { TeamMember, UserProfile } from "models"
import { useState } from "react"
import ListWidget from "./ListWidget"

export default function TeamInvitationsWidget(props: {
  userProfile: UserProfile
}) {
  const userInvitations = TeamDataStore.useUserInvitations(props.userProfile)

  const [open, setOpen] = useState(false)

  function handleClick(invitationId: string) {
    DataStore.query(TeamMember, invitationId).then((invitation) => {
      setOpen(true)
    })
  }

  function primary(invitation: TeamMember) {
    function Primary(props: { invitationId: string; teamId: string }) {
      const { invitationId, teamId } = props

      const team = TeamDataStore.useTeam(teamId)

      return team ? (
        <>
          <ListItemButton onClick={() => handleClick(invitationId)}>
            <ListItemText primary={team?.Name} />
          </ListItemButton>
          <TeamInvitationDialog
            open={open}
            invitation={invitation}
            team={team}
            onAccept={handleAccept}
            onDecline={handleDecline}
          />
        </>
      ) : (
        <></>
      )
    }

    return <Primary invitationId={invitation.id} teamId={invitation.Team} />
  }

  function secondary(invitation: TeamMember) {
    return (
      <ListItemText
        secondary={teamMemberRoleLabels[invitation.Role]}
        sx={{ textAlign: "end" }}
      />
    )
  }

  function handleAccept() {
    setOpen(false)
  }

  function handleDecline() {
    setOpen(false)
  }

  return userInvitations.length > 0 ? (
    <ListWidget
      title="Invitations"
      items={userInvitations}
      primary={primary}
      secondary={secondary}
    />
  ) : (
    <></>
  )
}

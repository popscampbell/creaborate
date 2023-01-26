import PageSection, { PageSectionVariant } from "@/components/app/PageSection"
import { InviteMemberDialog } from "@/components/team/InviteMemberDialog"
import TeamPage from "@/components/team/TeamPage"
import React from "react"
import { useAppSelector } from "state/hooks"

export default function TeamMembersPage() {
  const { members, invitations } = useAppSelector((state) => state.team)

  const [invitationDialogOpen, setInvitationDialogOpen] = React.useState(false)

  function handleInvite() {
    setInvitationDialogOpen(true)
  }

  function handleConfirmInvitation(value: { user: string }) {
    setInvitationDialogOpen(false)
    console.log("invitation:", value)
  }

  function handleCancelInvitation() {
    setInvitationDialogOpen(false)
  }

  return (
    <TeamPage title="Members">
      <PageSection
        variant={PageSectionVariant.AVATAR}
        items={members}
        renderLabel={(member) => member.name}
      />

      <PageSection
        title="Invitations"
        variant={PageSectionVariant.AVATAR}
        items={invitations}
        renderLabel={(invitation) =>
          invitation.username ?? invitation.externalEmail
        }
        noItemsText="There are no invitations."
        actions={[{ text: "Invite", onClick: handleInvite }]}
      />

      <InviteMemberDialog
        open={invitationDialogOpen}
        onCancel={handleCancelInvitation}
        onConfirm={handleConfirmInvitation}
      />
    </TeamPage>
  )
}

import Layout from "components/Layout"
import PageSection from "components/PageSection"
import UserPage from "components/UserPage"
import { useAppSelector } from "state/hooks"

export default function UserInvitationsPage() {
  const { invitations } = useAppSelector((state) => state.user)

  return (
    <Layout>
      <UserPage subtitle="Invitations">
        <PageSection
          items={invitations}
          renderLabel={(invitation) => invitation.id}
        />
      </UserPage>
    </Layout>
  )
}

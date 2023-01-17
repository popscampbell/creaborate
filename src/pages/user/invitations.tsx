import Layout from "src/components/Layout"
import PageSection from "src/components/PageSection"
import UserPage from "src/components/UserPage"
import { useAppSelector } from "src/state/hooks"

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

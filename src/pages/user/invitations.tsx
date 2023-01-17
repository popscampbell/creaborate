import Layout from "@/components/app/Layout"
import PageSection from "@/components/app/PageSection"
import UserPage from "@/components/user/UserPage"
import { useAppSelector } from "state/hooks"

export default function UserInvitationsPage() {
  const { invitations } = useAppSelector((state) => state.user)

  return (
    <Layout>
      <UserPage title="Invitations">
        <PageSection
          items={invitations}
          renderLabel={(invitation) => invitation.id}
        />
      </UserPage>
    </Layout>
  )
}

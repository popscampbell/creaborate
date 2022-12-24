import { useAuthenticator } from "@aws-amplify/ui-react"
import { Dashboard, Page, Section } from "Components"
import UserProfileDataStore from "DataStores/UserProfileDataStore"

export default function DashboardPage() {
  const { user } = useAuthenticator()
  const userProfile = UserProfileDataStore.useUserProfile(user?.username || "")

  return (
    <Page title="Dashboard">
      <Section background="main" fill>
        {userProfile && <Dashboard userProfile={userProfile} />}
      </Section>
    </Page>
  )
}

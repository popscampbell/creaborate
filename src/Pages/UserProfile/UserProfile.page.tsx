import { useAuthenticator } from "@aws-amplify/ui-react"
import { Typography } from "@mui/material"
import { Page, Section } from "Components"
import UserProfile from "Components/UserProfile/UserProfileEditor"
import UserProfileDataStore from "DataStores/UserProfileDataStore"

export default function UserProfilePage() {
  const { user } = useAuthenticator()
  const userProfile = UserProfileDataStore.useUserProfile(user?.username || "")

  return (
    <Page title="User profile">
      <Section>
        <Typography variant="h1">Public profile</Typography>
        {userProfile && <UserProfile userProfile={userProfile} />}
      </Section>
    </Page>
  )
}

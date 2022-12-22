import { Typography } from "@mui/material"
import { Page, Section } from "Components"
import UserProfile from "Components/UserProfile/UserProfile"

export default function UserProfilePage() {
  return (
    <Page title="User profile">
      <Section>
        <Typography variant="h1">Public profile</Typography>
        <UserProfile />
      </Section>
    </Page>
  )
}

import { Button, Typography } from "@mui/material"
import { Page, Section } from "Components"

export default function AdminPage() {
  function handleGenerateUserInfo() {}

  return (
    <Page title="Administration">
      <Section>
        <Typography variant="h1">Administration</Typography>
        <Button variant="outlined" onClick={handleGenerateUserInfo}>
          Generate user info
        </Button>
      </Section>
    </Page>
  )
}

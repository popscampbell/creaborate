import { Button, Typography } from "@mui/material"
import { Page, Section } from "Components"

export default function AdminPage() {
  function handleResetData() {}

  return (
    <Page title="Administration">
      <Section>
        <Typography variant="h1">Administration</Typography>
        <Button variant="outlined" onClick={handleResetData}>
          Reset data
        </Button>
      </Section>
    </Page>
  )
}

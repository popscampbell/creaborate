import { Authenticator } from "@aws-amplify/ui-react"
import { Typography } from "@mui/material"
import { Page, Section } from "Components"

export default function HomePage() {
  return (
    <Page title="Home" noPageNameInTitle>
      <Section background="main">
        <Typography variant="h1">Welcome</Typography>
      </Section>
      <Section background="light" fill>
        <Typography variant="body1">
          Creaborate will be a safe place for artists to collaborate on their
          work.
        </Typography>
      </Section>
      <Section fill>
        <Authenticator />
      </Section>
    </Page>
  )
}

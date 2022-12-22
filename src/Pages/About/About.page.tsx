import { Typography } from "@mui/material"
import { Page, Section } from "Components"

export default function AboutPage() {
  return (
    <Page title="About">
      <Section>
        <Typography variant="h1">About Creaborate</Typography>
        <Typography variant="body1">
          Creaborate was created by Michael Campbell to help organize project
          work for his band, The Cascadian Divide.
        </Typography>
      </Section>
    </Page>
  )
}

import { Title } from "@mui/icons-material"
import { Page, Section } from "Components"

export default function NotFoundPage() {
  return (
    <Page title="Page not found">
      <Section>
        <Title>Page not found</Title>
        <p>Did not find the page.</p>
      </Section>
    </Page>
  )
}

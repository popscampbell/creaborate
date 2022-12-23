import { Dashboard, Page, Section } from "Components"

export default function DashboardPage() {
  return (
    <Page title="Dashboard">
      <Section background="main" fill>
        <Dashboard />
      </Section>
    </Page>
  )
}

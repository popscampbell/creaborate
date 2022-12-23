import { Page, Section } from "Components"
import { TeamView } from "Components/Team"
import { useSearchParams } from "react-router-dom"

export default function TeamPage() {
  const [params] = useSearchParams()
  const teamId = params.get("id")

  return (
    <Page title={"New team"}>
      <Section background="dark" fill>
        {teamId && <TeamView teamId={teamId} />}
      </Section>
    </Page>
  )
}

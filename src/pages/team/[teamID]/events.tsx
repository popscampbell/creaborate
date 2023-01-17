import Layout from "src/components/Layout"
import PageSection from "src/components/PageSection"
import TeamPage from "src/components/TeamPage"
import { useAppSelector } from "src/state/hooks"

export default function TeamEventsPage() {
  const { events } = useAppSelector((state) => state.team)

  return (
    <Layout>
      <TeamPage subtitle="Events">
        <PageSection items={events} renderLabel={(event) => event.name} />
      </TeamPage>
    </Layout>
  )
}

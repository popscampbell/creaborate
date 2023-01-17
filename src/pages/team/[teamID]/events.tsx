import Layout from "@/components/Layout"
import PageSection from "@/components/PageSection"
import TeamPage from "@/components/TeamPage"
import { useAppSelector } from "@/state/hooks"

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

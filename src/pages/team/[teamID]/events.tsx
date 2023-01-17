import Layout from "@/components/app/Layout"
import PageSection from "@/components/app/PageSection"
import TeamPage from "@/components/team/TeamPage"
import { useAppSelector } from "state/hooks"

export default function TeamEventsPage() {
  const { events } = useAppSelector((state) => state.team)

  return (
    <Layout>
      <TeamPage title="Events">
        <PageSection items={events} renderLabel={(event) => event.name} />
      </TeamPage>
    </Layout>
  )
}

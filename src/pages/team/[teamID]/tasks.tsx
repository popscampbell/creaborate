import Layout from "src/components/Layout"
import PageSection from "src/components/PageSection"
import TeamPage from "src/components/TeamPage"
import { useAppSelector } from "src/state/hooks"

export default function TeamTasksPage() {
  const { tasks } = useAppSelector((state) => state.team)

  return (
    <Layout>
      <TeamPage subtitle="Tasks">
        <PageSection items={tasks} renderLabel={(task) => task.name} />
      </TeamPage>
    </Layout>
  )
}

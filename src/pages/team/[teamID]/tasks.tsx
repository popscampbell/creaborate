import Layout from "@/components/Layout"
import PageSection from "@/components/PageSection"
import TeamPage from "@/components/TeamPage"
import { useAppSelector } from "@/state/hooks"

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

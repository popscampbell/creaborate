import Layout from "src/components/Layout"
import PageSection from "src/components/PageSection"
import UserPage from "src/components/UserPage"
import { useAppSelector } from "src/state/hooks"

export default function UserTasksPage() {
  const { tasks } = useAppSelector((state) => state.user)

  return (
    <Layout>
      <UserPage subtitle="Tasks">
        <PageSection items={tasks} renderLabel={(task) => task.id} />
      </UserPage>
    </Layout>
  )
}

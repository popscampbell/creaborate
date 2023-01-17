import Layout from "@/components/Layout"
import PageSection from "@/components/PageSection"
import UserPage from "@/components/UserPage"
import { useAppSelector } from "@/state/hooks"

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

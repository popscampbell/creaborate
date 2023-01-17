import Layout from "@/components/app/Layout"
import PageSection from "@/components/app/PageSection"
import UserPage from "@/components/user/UserPage"
import { useAppSelector } from "state/hooks"

export default function UserTasksPage() {
  const { tasks } = useAppSelector((state) => state.user)

  return (
    <Layout>
      <UserPage title="Tasks">
        <PageSection items={tasks} renderLabel={(task) => task.id} />
      </UserPage>
    </Layout>
  )
}

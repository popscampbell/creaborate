import PageSection from "@/components/app/PageSection"
import TeamPage from "@/components/team/TeamPage"
import { useAppSelector } from "state/hooks"

export default function TeamTasksPage() {
  const { tasks } = useAppSelector((state) => state.team)

  return (
    <TeamPage title="Tasks">
      <PageSection items={tasks} renderLabel={(task) => task.name} />
    </TeamPage>
  )
}

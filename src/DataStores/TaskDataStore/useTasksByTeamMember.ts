import { DataStore } from "aws-amplify"
import { Task, TaskStatus, TeamMember } from "models"
import { useEffect, useState } from "react"

export default function useTasksByTeamMember(
  teamMember: TeamMember,
  status: TaskStatus
) {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const sub = DataStore.observeQuery(Task, (task) =>
      task.and((task) => [
        task.Owner.id.eq(teamMember.id),
        task.Status.eq(status),
      ])
    ).subscribe((snapshot) => setTasks(snapshot.items))

    return function cleanUp() {
      sub.unsubscribe()
    }
  }, [teamMember, status])

  return tasks
}

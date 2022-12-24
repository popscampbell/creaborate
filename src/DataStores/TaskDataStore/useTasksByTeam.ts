import { DataStore } from "aws-amplify"
import { Task, TaskStatus, Team } from "models"
import { useEffect, useState } from "react"

export default function useTasksByTeam(team: Team, status: TaskStatus) {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const sub = DataStore.observeQuery(Task, (task) =>
      task.and((task) => [task.Team.eq(team.id), task.Status.eq(status)])
    ).subscribe((snapshot) => setTasks(snapshot.items))

    return function cleanUp() {
      sub.unsubscribe()
    }
  }, [team, status])

  return tasks
}

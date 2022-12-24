import { DataStore } from "aws-amplify"
import { Task, TaskStatus, ProjectMilestone } from "models"
import { useEffect, useState } from "react"

export default function useTasksByProjectMilestone(
  project: ProjectMilestone,
  status: TaskStatus
) {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const sub = DataStore.observeQuery(Task, (task) =>
      task.and((task) => [
        task.ProjectMilestone?.id.eq(project.id),
        task.Status.eq(status),
      ])
    ).subscribe((snapshot) => setTasks(snapshot.items))

    return function cleanUp() {
      sub.unsubscribe()
    }
  }, [project, status])

  return tasks
}

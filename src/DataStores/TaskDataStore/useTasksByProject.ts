import { DataStore } from "aws-amplify"
import { Task, TaskStatus, Project } from "models"
import { useEffect, useState } from "react"

export default function useTasksByProject(
  project: Project,
  status: TaskStatus
) {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const sub = DataStore.observeQuery(Task, (task) =>
      task.and((task) => [
        task.Project?.id.eq(project.id),
        task.Status.eq(status),
      ])
    ).subscribe((snapshot) => setTasks(snapshot.items))

    return function cleanUp() {
      sub.unsubscribe()
    }
  }, [project, status])

  return tasks
}

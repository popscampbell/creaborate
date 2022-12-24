import { DataStore } from "aws-amplify"
import { Task, TaskStatus, UserProfile } from "models"
import { useEffect, useState } from "react"

export default function useTasksByUserProfile(
  userProfile: UserProfile,
  status: TaskStatus
) {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const sub = DataStore.observeQuery(Task, (task) =>
      task.and((task) => [
        task.Owner.UserProfile.id.eq(userProfile.id),
        task.Status.eq(status),
      ])
    ).subscribe((snapshot) => setTasks(snapshot.items))

    return function cleanUp() {
      sub.unsubscribe()
    }
  }, [userProfile, status])

  return tasks
}

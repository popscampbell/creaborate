import { DataStore } from "aws-amplify"
import { Task } from "models"
import { useEffect, useState } from "react"

export default function useTask(taskId: string) {
  const [task, setTask] = useState<Task>()

  useEffect(() => {
    const sub = DataStore.observe(Task, taskId).subscribe((message) =>
      setTask(message.element)
    )

    return function cleanUp() {
      sub.unsubscribe()
    }
  }, [taskId])

  return task
}

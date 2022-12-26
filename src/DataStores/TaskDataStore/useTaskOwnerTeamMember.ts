import { DataStore } from "aws-amplify"
import { Task, TeamMember } from "models"
import { useEffect, useState } from "react"

export default function useTaskOwnerTeamMember(task: Task) {
  const [teamMember, setTeamMember] = useState<TeamMember>()

  useEffect(() => {
    task.taskOwnerId &&
      DataStore.observe(TeamMember, task.taskOwnerId).subscribe((result) =>
        setTeamMember(result.element)
      )

    // const subscription = DataStore.observe(
    //   TeamMember,
    //   task.taskOwnerId || ""
    // ).subscribe((message) => {
    //   setTeamMember(message.element)
    // })

    // return function cleanup() {
    //   subscription && subscription.unsubscribe()
    // }
  }, [task])

  return teamMember
}

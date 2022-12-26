import { DataStore } from "aws-amplify"
import { Task, UserProfile } from "models"
import { useEffect, useState } from "react"
import TaskDataStore from "./TaskDataStore"

export default function useTaskOwnerUserProfile(task: Task) {
  const [userProfile, setUserProfile] = useState<UserProfile>()
  const [name, setName] = useState("")

  const teamMember = TaskDataStore.useTaskOwnerTeamMember(task)

  useEffect(() => {
    task && teamMember && setName(teamMember?.id)

    const sub =
      task &&
      teamMember?.teamMemberUserProfileId &&
      DataStore.observe(
        UserProfile,
        teamMember.teamMemberUserProfileId
      ).subscribe((result) => setUserProfile(result.element))

    return function cleanup() {
      sub && sub.unsubscribe()
    }
  }, [task, teamMember])

  return name
}

import { Task, UserProfile } from "models"
import { useEffect, useState } from "react"

export default function useTaskOwnerUserProfile(task?: Task) {
  const [userProfile, setUserProfile] = useState<UserProfile>()

  useEffect(() => {
    task?.Owner.then((owner) => {
      owner?.UserProfile.then((profile) => {
        setUserProfile(profile)
      })
    })

    if (!task) {
      setUserProfile(undefined)
    }
  }, [task])

  return userProfile
}

import { DataStore } from "aws-amplify"
import { UserProfile } from "models"
import { useEffect, useState } from "react"

export default function useUserProfileById(id: string) {
  const [userProfile, setUserProfile] = useState<UserProfile>()

  useEffect(() => {
    const subscription = DataStore.observe(UserProfile, id).subscribe(
      message => setUserProfile(message.element)
    )

    return function cleanup() {
      subscription.unsubscribe()
    }
  }, [id])

  return userProfile
}

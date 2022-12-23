import { DataStore, Predicates } from "aws-amplify"
import { UserProfile } from "models"
import { useEffect, useState } from "react"

export default function useUserProfiles() {
  const [userProfiles, setUserProfiles] = useState<UserProfile[]>()

  useEffect(() => {
    const subscription = DataStore.observeQuery(
      UserProfile,
      Predicates.ALL
    ).subscribe((snapshot) => {
      const { items } = snapshot
      setUserProfiles(items)
    })

    return function cleanup() {
      subscription && subscription.unsubscribe()
    }
  }, [])

  return userProfiles
}

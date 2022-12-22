import { DataStore } from "aws-amplify"
import { UserProfile } from "models"
import { useEffect, useState } from "react"

export default function useUserProfile(username: string) {
  const [userProfile, setUserProfile] = useState<UserProfile>()

  useEffect(() => {
    const subscription = DataStore.observeQuery(UserProfile, (profile) =>
      profile.Username.eq(username)
    ).subscribe(
      (snapshot) =>
        snapshot.items.length > 0 && setUserProfile(snapshot.items[0])
    )

    return function cleanup() {
      subscription.unsubscribe()
    }
  }, [username])

  return userProfile
}

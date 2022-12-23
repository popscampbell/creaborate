import { Auth, DataStore } from "aws-amplify"
import AsyncGuardStatus from "DataStores/AsyncGuardStatus"
import { UserProfile } from "models"
import { useEffect, useState } from "react"

export function useHasUserProfile(username: string) {
  const [hasProfile, setHasProfile] = useState<AsyncGuardStatus>("C")

  useEffect(() => {
    if (!username) {
      setHasProfile("Y")
    } else {
      let subscription: any

      subscription = DataStore.observeQuery(UserProfile, (userProfile) =>
        userProfile.Username.eq(username)
      ).subscribe((snapshot) =>
        setHasProfile(snapshot.items.length > 0 ? "Y" : "N")
      )

      return function cleanUp() {
        subscription.unsubscribe()
      }
    }
  }, [username])

  return hasProfile
}

import { DataStore } from "aws-amplify"
import { UserProfile, UserProfileVisibility } from "models"
import { useEffect, useState } from "react"

export default function useUserProfilesByNameSearch(query?: string) {
  const [userProfiles, setUserProfiles] = useState<UserProfile[]>([])

  useEffect(() => {
    const sub = DataStore.observeQuery(UserProfile, (profile) =>
      profile.and((profile) => [
        profile.Visibility.eq(UserProfileVisibility.PUBLIC),
        profile.Name.contains(query || ""),
      ])
    ).subscribe((snapshot) => setUserProfiles(snapshot.items))

    return function cleanUp() {
      sub.unsubscribe()
    }
  }, [query])

  return userProfiles
}

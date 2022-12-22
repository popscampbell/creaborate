import useUserProfile from "./Hooks/useUserProfile"
import { Auth, DataStore } from "aws-amplify"
import { UserProfile } from "models"

export default class UserProfileStore {
  useUserProfile = () => useUserProfile

  private static getUser() {
    return Auth.currentAuthenticatedUser()
      .then((user) => {
        this.getUserDisplayName(user)
          .then((name) => ({
            userId: user.username,
            email: user.attributes.email,
            email_verified: user.attributes.email_verified,
            name: user.attributes.name,
            shortName: name,
          }))
          .catch((error) => {
            return Promise.reject(error)
          })
      })
      .catch((error) => {
        if (error !== "The user is not authenticated") {
          console.error("Unable to get authenticated user:", error)
        }
        return null
      })
  }

  private static getUserDisplayName(user: any) {
    if (!user?.username) return Promise.resolve("")

    function getDisplayNameFromProfile(userProfile?: UserProfile) {
      return userProfile?.Name?.split(" ")[0]
    }

    function getDisplayNameFromEmail(email: string) {
      return email.split("@")[0]
    }

    return DataStore.query(UserProfile, (userProfile) =>
      userProfile.Username.eq(user.username)
    )
      .then((userProfiles) =>
        userProfiles.length > 0 ? userProfiles[0] : undefined
      )
      .then(
        (userProfile) =>
          getDisplayNameFromProfile(userProfile) ||
          getDisplayNameFromEmail(user.attributes.email)
      )
  }
}

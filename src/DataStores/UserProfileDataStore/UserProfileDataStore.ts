import useUserProfile from "./useUserProfile"
import useUserProfiles from "./useUserProfiles"
import { Auth, DataStore } from "aws-amplify"
import { UserProfile, UserProfileVisibility } from "models"
import useUserProfileById from "./useUserProfileById"
import { useHasUserProfile } from "./useHasUserProfile"

export default class UserProfileDataStore {
  static useHasUserProfile = useHasUserProfile
  static useUserProfile = useUserProfile
  static useUserProfileById = useUserProfileById
  static useUserProfiles = useUserProfiles

  static async getCurrentUserProfile() {
    const currentUserInfo = await Auth.currentUserInfo()

    return await DataStore.query(UserProfile, (userProfile) =>
      userProfile.Username.eq(currentUserInfo.username)
    ).then((userProfiles) => userProfiles[0])
  }

  static async createUserProfile(
    name: string,
    visibility: UserProfileVisibility,
    skills: string[] = [],
    interests: string[] = [],
    tagLine?: string | null,
    about?: string | null,
    location?: string | null
  ) {
    const currentUserInfo = await Auth.currentUserInfo()
    return await (currentUserInfo.username
      ? DataStore.save(
          new UserProfile({
            Username: currentUserInfo.username,
            Name: name,
            Visibility: visibility,
            Skills: skills,
            Interests: interests,
            Tagline: tagLine,
            About: about,
            Location: location,
          })
        )
      : Promise.reject("Invalid username"))
  }

  static updateUserProfile(
    userProfile: UserProfile,
    name?: string,
    visibility?: UserProfileVisibility,
    skills?: string[],
    interests?: string[],
    tagLine?: string | null,
    about?: string | null,
    location?: string | null
  ) {
    return DataStore.save(
      UserProfile.copyOf(userProfile, (updated) => {
        if (name) updated.Name = name
        if (visibility) updated.Visibility = visibility
        if (skills) updated.Skills = skills
        if (interests) updated.Interests = interests
        if (tagLine) updated.Tagline = tagLine
        if (about) updated.About = about
        if (location) updated.Location = location
      })
    )
  }

  static findUserProfiles(nameStart: string) {
    return DataStore.query(UserProfile, (userProfile) =>
      userProfile.and((userProfile) => [
        userProfile.Visibility.eq(UserProfileVisibility.PUBLIC),
        userProfile.Name.beginsWith(nameStart),
      ])
    )
  }

  static archiveUserProfile(userProfile: UserProfile) {
    return DataStore.save(
      UserProfile.copyOf(userProfile, (updated) => {
        updated.Visibility = UserProfileVisibility.ARCHIVED
      })
    )
  }

  static deleteUserProfile(userProfile: UserProfile) {
    return DataStore.delete(userProfile)
  }
}

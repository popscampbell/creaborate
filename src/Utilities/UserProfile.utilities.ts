import { UserProfile, UserProfileVisibility } from "models"

export default class UserProfileUtilities {
  static getShortName(userProfile: UserProfile) {
    return userProfile.Name.split(" ")[0]
  }

  static UserProfileVisibilityLabel(userProfileVisibility: UserProfileVisibility | string, lowercase?: boolean) {
    const userProfileVisibilityLabelMap = {
      [UserProfileVisibility.PRIVATE]: "Private",
      [UserProfileVisibility.PUBLIC]: "Public",
      [UserProfileVisibility.ARCHIVED]: "Archived",
    }

    const label = userProfileVisibilityLabelMap[userProfileVisibility as UserProfileVisibility]

    return lowercase ? label.toLowerCase() : label
  }
}
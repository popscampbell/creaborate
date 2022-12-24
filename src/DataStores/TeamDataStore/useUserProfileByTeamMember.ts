import { TeamMember, UserProfile } from "models"
import { useEffect, useState } from "react"

export default function useUserProfileByTeamMember(teamMember: TeamMember) {
  const [userProfile, setUserProfile] = useState<UserProfile>()

  useEffect(() => {
    teamMember.UserProfile.then((value) => setUserProfile(value))
  })

  return userProfile
}

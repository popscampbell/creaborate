import { DataStore } from "aws-amplify"
import { TeamMember, UserProfile } from "models"
import { useEffect, useState } from "react"

export default function useUserProfileByTeamMember(teamMember?: TeamMember) {
  const [userProfile, setUserProfile] = useState<UserProfile>()

  useEffect(() => {
    if (teamMember) {
      DataStore.observe(UserProfile, teamMember.teamMemberUserProfileId)
    } else {
      setUserProfile(undefined)
    }
  }, [teamMember])

  return userProfile
}

import { DataStore } from "aws-amplify"
import { TeamMemberStatus, TeamMember, UserProfile } from "models"
import { useEffect, useState } from "react"

export default function useUserInvitations(userProfile: UserProfile) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

  useEffect(() => {
    const subscription = DataStore.observeQuery(TeamMember, (teamMember) =>
      teamMember.and((teamMember) => [
        teamMember.UserProfile.id.eq(userProfile.id),
        teamMember.Status.eq(TeamMemberStatus.INVITED),
      ])
    ).subscribe((snapshot) => setTeamMembers(snapshot.items))

    return function cleanup() {
      subscription && subscription.unsubscribe()
    }
  }, [userProfile])

  return teamMembers
}

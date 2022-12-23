import { useAuthenticator } from "@aws-amplify/ui-react"
import { DataStore } from "aws-amplify"
import { TeamMemberStatus, TeamMember } from "models"
import { useEffect, useState } from "react"

export default function useTeamInvitations() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

  const authenticator = useAuthenticator()

  useEffect(() => {
    const userId = authenticator.user?.username

    if (userId) {
      const subscription = DataStore.observeQuery(TeamMember, (teamMember) =>
        teamMember.and((teamMember) => [
          teamMember.UserProfile.eq(userId),
          teamMember.Status.eq(TeamMemberStatus.INVITED),
        ])
      ).subscribe((snapshot) => {
        const { items } = snapshot
        setTeamMembers(items)
      })

      return function cleanup() {
        subscription && subscription.unsubscribe()
      }
    }
  }, [authenticator.user])

  return teamMembers
}

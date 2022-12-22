import { DataStore } from "aws-amplify"
import { Team, TeamMember, TeamMemberRole } from "models"
import { useState, useEffect } from "react"

export function useTeamMemberRole(team: Team, userId: string) {
  const [role, setRole] = useState<TeamMemberRole>()

  useEffect(() => {
    const subscription = DataStore.observeQuery(TeamMember, (teamMember) =>
      teamMember.and((teamMember) => [
        teamMember.Team.eq(team.id),
        teamMember.UserProfile.eq(userId),
      ])
    ).subscribe((snapshot) => {
      setRole(snapshot.items[0]?.Role as TeamMemberRole)
    })

    return function cleanup() {
      subscription && subscription.unsubscribe()
    }
  }, [team.id, userId])

  return role
}

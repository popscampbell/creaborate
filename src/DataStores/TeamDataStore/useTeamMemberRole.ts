import { DataStore } from "aws-amplify"
import { Team, TeamMember, TeamMemberRole, UserProfile } from "models"
import { useState, useEffect } from "react"

export default function useTeamMemberRole(
  team: Team,
  userProfile: UserProfile
) {
  const [role, setRole] = useState<TeamMemberRole>()

  useEffect(() => {
    const subscription = DataStore.observeQuery(TeamMember, (teamMember) =>
      teamMember.and((teamMember) => [
        teamMember.Team.eq(team.id),
        teamMember.UserProfile.id.eq(userProfile.id),
      ])
    ).subscribe((snapshot) => {
      setRole(snapshot.items[0]?.Role as TeamMemberRole)
    })

    return function cleanup() {
      subscription && subscription.unsubscribe()
    }
  }, [team, userProfile])

  return role
}
